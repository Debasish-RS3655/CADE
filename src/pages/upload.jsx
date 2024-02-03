import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        // we directly convert this to base64 here
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setSelectedImg(reader.result);
            }
            reader.readAsDataURL(file);
        }
    }

    // calculate the size of the uploaded base64 image
    const getImageSize = () => {
        if (selectedImg) {
            // remove the data:image/*;base64, prefix
            const withoutPrefix = selectedImg.split(',')[1];
            
            // !!-- underneath is the code for the react native 
            // const binaryImg = Buffer.from(withoutPrefix, 'base64');

            // browser based code
            const binaryImg = atob(withoutPrefix);
            const sizeKB = binaryImg.length / 1024;
            setImgSize(sizeKB);
            console.log('Img size:', sizeKB, ' KB')
        }
        else {
            console.error('No file selected to get size.');
        }
    }

    const handleUpload = () => {
        // perform the required logic here e.g. making and NFT etc
        if (selectedImg) {
            console.log('Selected file: ', selectedImg);
            getImageSize();
        }
        else {
            console.error('No file selected');
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
            <label htmlFor="fileInput" style={{ cursor: 'pointer', padding: '10px 15px', backgroundColor: '#007BFF', color: 'white', borderRadius: '5px' }}>
                Choose Image
            </label>
            <button onClick={handleUpload} style={{ marginLeft: '10px', padding: '10px 15px', backgroundColor: '#28A745', color: 'white', borderRadius: '5px', cursor: 'pointer' }}>
                Upload Image
            </button>
            <br/>
            {
                imgSize && 
                <div>
                    <h4>Image size: {imgSize.toFixed(2)} KB</h4>
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