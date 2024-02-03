import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <>
            <Link to="/feed" style={{ marginRight: '40px' }}>Feed</Link>
            <Link to="/upload" style={{ marginRight: '40px' }}>Upload</Link>
            <Link to="/profile">Profile</Link>
        </>)
}