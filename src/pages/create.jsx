import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import cWorker from '../workers/chunk.worker';
import hWorker from '../workers/hash.worker';
import WebWorker from '../workers/WebWorker';

// for the react native app we use the createHash function of the crypto module
// for the frontend we use the web crypto api
// import { createHash } from 'crypto';
export default function Create({ gun, user, sessionStorage, SEA }) {
    // return back to the home page if not signed in
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.is) {
            console.log('user not logged in.. redirected back to authentication page.');
            navigate('/auth');
        }
    });
    // initialize and store the chunk worker inside a state hook
    const [chunkWorker, setChunkWorker] = useState(null);
    const [hashWorker, setHashWorker] = useState(null);
    const [imgChunks, setChunks] = useState([]);
    const [chunkKeys, setChunkKeys] = useState([]);

    // initialize the web worker at the initial rendering of the page
    useEffect(() => {
        const cw = new WebWorker(cWorker);
        const hw = new WebWorker(hWorker);
        // event listener for receiving messages from the worker
        cw.addEventListener('message', chunkWorkerHandler);
        hw.addEventListener('message', hashWorkerHandler);
        // save the worker instance to a state
        setChunkWorker(cw);
        setHashWorker(hw);
        return () => {
            // terminate the worker as a clean up function
            setChunkWorker(null);
            setHashWorker(null);
            cw.terminate();
            hw.terminate();
        }
    }, []);

    // selectedImg is stored in base64 encoded form
    const [selectedImg, setSelectedImg] = useState('');
    const [imgSize, setImgSize] = useState(null);
    // we create the hash of the image now
    const [imgHash, setImgHash] = useState(null);

    // we hash the image as soon as it is uploaded
    // and do not wait for the submit button to be pressed
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {

            // !!-- underneath is the code for the react native
            // to create a hash of the uploaded image
            // first convert the binary image into an array buffer
            // const imgUint8Array = new Uint8Array(binaryImg.length);
            // for (let i = 0; i < binaryImg.length; i++)
            //     imgUint8Array[i] = binaryImg.charCodeAt(i) & 0xff;
            // const imgBuffer = imgUint8Array.buffer;
            // const hashSum = crypto.createHash('sha256');
            // hashSum.update(imgBuffer);            
            // // update the image hash state
            // setImgHash(hashSum.digest('hex'));

            const base64Reader = new FileReader();
            // first read as data URL for the base64 encoding
            base64Reader.onload = () => {
                // we set the base64 encoded image as the URL for displaying in the UI
                setSelectedImg(base64Reader.result);
                // remove the data:image/*;base64, prefix
                const withoutPrefix = base64Reader.result.split(',')[1];
                // !!-- react native code for the image size calculation
                // const binaryImg = Buffer.from(withoutPrefix, 'base64');
                // !!-- client side code for image size calculation
                const binaryImg = atob(withoutPrefix);
                const sizeBytes = binaryImg.length;
                // save to state for displaying the image size into the UI                
                setImgSize(sizeBytes);
            }
            base64Reader.readAsDataURL(file);
            const arrayBufferReader = new FileReader();
            // read again as an array buffer for the hashing
            // !!-- hasing is done here itself
            arrayBufferReader.onloadend = async () => {
                // we then hash this array buffer now    
                // Use the Web Crypto API to hash the images here      
                // for hashing we need the array buffer of the data to be hashed
                const imgArrayBuffer = arrayBufferReader.result;
                const hashBuffer = await crypto.subtle.digest('SHA-256', imgArrayBuffer);
                const hashArray = Array.from(new Uint8Array(hashBuffer));
                const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
                // update the hash in the state
                setImgHash(hashHex);
            }
            arrayBufferReader.readAsArrayBuffer(file);
        }
    }

    // once we click upload it sends the image to the worker to divide it into chunks
    const handleUpload = () => {
        if (selectedImg) {
            // send the image and the number of divisions to the worker
            chunkWorker.postMessage({
                image: selectedImg,                                     // the base64 encoded image
                noNodes: Math.ceil(imgSize / config.nodeByteSize)       // the number of divisions for that image
            });
        }
        else {
            console.error('No image selected for uploading.');
        }
    }

    // event handler for the chunk worker brought down here to make the code cleaner
    async function chunkWorkerHandler(e) {
        // here we receive the chunks of the image 
        // and then here itself we upload each one of them to the gun js database
        // !!-- we'll be removing this after we are completed with the upload

        // in the actual program, the image will not immediately be stored onto the frozen chain
        // we first store it in our centralized server first... and after observing for the quality of the content from the community
        // we decide whether or not to convert it into an actual NFT

        // !!-- thus the head of the node will have the hash as its name

        // !!-- initially this is how we planned to host to the frozen space
        // const lengthHash = await SEA.work(String(event.data.length), null, null, { name: "SHA-256" });
        // the first property is the length hash            
        // gut.get('posts').get(imgHash).get('length').get('#').put(lengthHash);
        // for (i = 0; i < event.data.length; i++) {
        //     // need to store it as an array otherwise it wont work
        //     // finally upload the chunken image data to the gun js database
        //     gun.get('posts').get(imgHash).get('data').set()                    
        //     .get('d' + i).get('#').get(event.data[i].hash).put(event.data[i].data, function (ack) {
        //         if (ack.err) console.error('Error uploading chunk ' + i + ' to frozen gun space: ' + ack.err);
        //     });
        // }
        setChunks(e.data);

        // !!-- after the chunk handler receives all the substrings in an array it sends to the worker for hashing the keys

        // first we set the length property to the database
        user.get('posts').get(imgHash).get('length').set(String(e.data.length)).on(async (data, key) => {
            const lenHash = await SEA.work(key, null, null, { name: "SHA-256" });
            gun.get('#posts').get(imgHash).get(user.is.pub + '#' + lenHash).put(key, function (ack) {
                if (ack.err) {
                    console.error('Error uploading chunks length:', ack.err);
                }
                else console.log('Uploaded length of chunks to frozen space.');
            })
        });

        // we create the post and keep sending the key of the new posts to the workers
        for (let i = 0; i < e.data.length; i++) {
            user.get('messages').get(imgHash).get('data').set(e.data[i]).on(async (data, key) => {
                // send the key here along with the index
                hashWorker.postMessage({
                    key: key,
                    index: i
                });
                // push the key the state
                setChunkKeys([...chunkKeys, key]);
            });
        }
        // inform the worker that we have sent all the data and time to send it back
        hashWorker.postMessage({
            end: true
        })
    }

    function hashWorkerHandler(e) {
        // the storing and sorting will happen in the worker itself                
        const hashArray = e.data;
        hashArray.forEach(hash, index => {
            gun.get('#posts').get(imgHash).get('data').get('d' + index)
                .get(user.is.pub + '#' + hash).put(chunkKeys[index], function(ack) {
                    if (ack.err) {
                        console.error(`Error uploading chunk ${index} to frozen space: ${ack.err}`);
                    }
                })
        });
        // after we are done uploading we do not need the node key anymore
        setChunkKeys([]);
    }

    return (
        <>
            <Navbar />
            {sessionStorage.getItem('user.alias') && <h1>Welcome {sessionStorage.getItem('user.alias')} </h1>}
            <h2>Choose your NFTs to mint</h2>
            <br />
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: 'none' }}
                id="fileInput"
            />
            <label htmlFor="fileInput" style={{ cursor: 'pointer', padding: '10px 15px', backgroundColor: '#5b60c1aa', color: 'white', borderRadius: '5px' }}>
                Choose Image
            </label>
            <button onClick={handleUpload} style={{ marginLeft: '10px', padding: '10px 15px', borderRadius: '5px', cursor: 'pointer' }}>
                Upload Image
            </button>
            <br />
            {
                imgSize &&
                <div>
                    <h4>Image size: {(imgSize / 1024).toFixed(2)} KB</h4>
                </div>
            }
            {
                imgHash &&
                <div>
                    <h4>Image hash: {imgHash}</h4>
                </div>
            }
            {selectedImg &&
                <div>
                    <h2>Preview</h2>
                    <img src={selectedImg}
                        alt='selected'
                        style={{ maxWidth: '100%', maxHeight: '500px' }}
                    ></img>
                </div>
            }
            {
                imgChunks &&
                <div>Divided image into {imgChunks.length} chunks</div>
            }
        </>
    )
}