import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

// for the react native app we use the createHash function of the crypto module
// for the frontend we use the web crypto api
// import { createHash } from 'crypto';
export default function Upload({ gun, user, sessionStorage }) {
    // return back to the home page if not signed in
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.is) {
            navigate('/auth');
        }
    });

    // selectedImg is stored in base64 encoded form
    const [selectedImg, setSelectedImg] = useState('');
    const [imgSize, setImgSize] = useState(null);
    // we create the hash of the image now
    const [imgHash, setImgHash] = useState(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const base64Reader = new FileReader();
            // first read as data URL for the base64 encoding
            base64Reader.onload = () => {
                setSelectedImg(base64Reader.result);
            }
            base64Reader.readAsDataURL(file);

            const arrayBufferReader = new FileReader();
            // read again as an array buffer for the hashing
            // !!-- hasing is done here itself
            arrayBufferReader.onloadend = async () => {
                // we then hash this array buffer now                
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

    // calculate the size of the uploaded base64 image
    const handleUpload = async () => {
        if (selectedImg) {
            // remove the data:image/*;base64, prefix
            const withoutPrefix = selectedImg.split(',')[1];

            // !!-- underneath is the code for the react native 
            // const binaryImg = Buffer.from(withoutPrefix, 'base64');

            // !!-- client side code
            const binaryImg = atob(withoutPrefix);
            const sizeKB = binaryImg.length / 1024;
            setImgSize(sizeKB);

            // !!-- underneath is the code for the react native

            // time to create a hash of the uploaded image
            // first convert the binary image into an array buffer
            // const imgUint8Array = new Uint8Array(binaryImg.length);
            // for (let i = 0; i < binaryImg.length; i++)
            //     imgUint8Array[i] = binaryImg.charCodeAt(i) & 0xff;
            // const imgBuffer = imgUint8Array.buffer;
            // const hashSum = crypto.createHash('sha256');
            // hashSum.update(imgBuffer);            
            // // update the image hash state
            // setImgHash(hashSum.digest('hex'));

            // !!-- client side code for the hashing

        }
        else {
            console.error('No image selected for uploading.');
        }
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
                    <h4>Image size: {imgSize.toFixed(2)} KB</h4>
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
        </>
    )
}