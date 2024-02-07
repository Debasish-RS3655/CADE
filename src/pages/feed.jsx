import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import "../styles/feed.css";

export default function Feed({ gun, user, sessionStorage }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.is) {
            navigate('/auth');
            // get the uploaded images in the first render itself
            gun.get('posts').map().once(postHandler);
        }
    });
    const [posts, setPosts] = useState([]);

    // argument will be given as value, key
    function postHandler(node, hash) {
        node.get('length').once(val => {
            const length = val;            
            // need to send this to the merger now
            for (let i = 0; i < length; i++) {            
                node.get('data').get('d' + i)
            }
        });
    }

    return (
        <>
            <Navbar />
            {sessionStorage.getItem('user.alias') && <h1>Feed of {sessionStorage.getItem('user.alias')}</h1>}
            <div className='feed-gallery'>
                <div className='images'>
                    {posts.map((image, index) => (
                        <div key={index} className='image-box'>
                            <img src={image.url} alt={`Image ${index}`}></img>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}