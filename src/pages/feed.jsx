import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';
import "../styles/feed.css";

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
        gun.get('raw').map().once((post) => {
            setPosts((prevPosts) => [... new Set([...prevPosts, post])]);
        });
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