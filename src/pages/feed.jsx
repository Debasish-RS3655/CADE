import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import "../styles/feed.css";
import { onceHandler } from '../utility/gunHandlers';

export default function Feed({ gun, user }) {
    const navigate = useNavigate();
    const [posts, setPosts] = useState([]);

    // this needs to run as soon as the user is logged in
    useEffect(() => {
        if (!user.is) {
            navigate('/auth');
        }

        // !-- totally experimental 
        // !-- using the RAW image without chunking and any security operations            
        // get the uploaded images in the first render itself
        // gun.get('raw').map().once((post) => {
        //     setPosts((prevPosts) => [... new Set([...prevPosts, post])]);
        // });

        (async () => {
            const searchHash = '677d6287e1647d0b28a76b9b3b983600597505e85b3295e2799e8655686b176f';
            const postNode = gun.get('#' + searchHash);
            const lengthNode = postNode.get({ '.': { '*': 'length' } }).map();
            const creatorNode = postNode.get({ '.': { '*': 'creator' } }).map();
            const chunkLength = parseInt(await onceHandler(lengthNode));
            const creator = await onceHandler(creatorNode);
            console.log("retrieved chunk length:", chunkLength);
            console.log("retrieved creator: ", creator);
            let mergedImage = [];
            for (let i = 0; i < chunkLength; i++) {
                let chunkNode = postNode.get({ '.': { '*': `c${i}` } }).map();
                let chunkData = await onceHandler(chunkNode);
                mergedImage[i] = chunkData;
            }
            mergedImage = mergedImage.join('');
            const mergedImageHash = await SEA.work(mergedImage, null, null, { name: "SHA-256" });
            console.log("merged image hash: ", mergedImageHash);
            console.log("merged image array: ", mergedImage);
            // console.log("search image hash: ", searchHash);
            // console.log("image verified: ", mergedImageHash == searchHash);
        })();

    }, [user.is]);

    return (
        <>
            <Navbar />
            {user.is.alias && <h1>Feed of {user.is.alias}</h1>}
            <div className='feed-gallery'>
                <div className='images'>
                    {posts.map((post, index) => (
                        <div key={index} className='image-box'>
                            <img src={post.img} alt={`Image ${index}`}></img>
                            <p>{post.creator}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}