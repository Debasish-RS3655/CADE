import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Upload({ gun, user, sessionStorage }) {
    const navigate = useNavigate();
    useEffect(() => {
        if (!user.is) {
            navigate('/auth');
        }
    })
    return (
        <>
            <Navbar />
            {sessionStorage.getItem('user.alias') && <h1>Welcome {sessionStorage.getItem('user.alias')} you have reached the upload page</h1>}
        </>
    )
}