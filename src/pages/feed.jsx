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
            // krisha image: SQMGguJa3eE/36g+KBLDniqhdy1vsSL7FhedIAc16jI=
            // screenshot image: q/fqai8SUprB3Ds+2F8zTNYEgTMHyxhy0uCEZlv3lJ8= 
            const searchHash = 'SQMGguJa3eE/36g+KBLDniqhdy1vsSL7FhedIAc16jI=';
            const postNode = gun.get('#' + searchHash);
            const lengthNode = postNode.get({ '.': { '*': 'length' } }).map();
            const creatorNode = postNode.get({ '.': { '*': 'creator' } }).map();
            const chunkLength = parseInt(await onceHandler(lengthNode));
            const creator = await onceHandler(creatorNode);
            console.log("retrieved chunk length:", chunkLength);
            console.log("retrieved creator: ", creator);
            let mergedImageArray = [];
            for (let i = 0; i < chunkLength; i++) {
                let chunkNode = postNode.get({ '.': { '*': `c${i}` } }).map();
                let chunkData = await onceHandler(chunkNode);
                mergedImageArray[i] = chunkData;
            }
            const mergedb64Img = mergedImageArray.join('');
            console.log("base64 encoded image: ", mergedb64Img);
            const mergedImageHash = await SEA.work(mergedb64Img, null, null, { name: "SHA-256" });            
            console.log("merged image hash: ", mergedImageHash);
            console.log("merged image array: ", mergedb64Img);
            console.log("search image hash: ", searchHash);
            if (mergedImageHash == searchHash) {
                console.log("Image hash verified.");
                // set the post to be displayed to the feed page now
                setPosts([{
                    img: mergedb64Img,
                    creator: creator
                }])                
            }
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