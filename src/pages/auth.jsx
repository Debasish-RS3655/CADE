import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Auth = ({ gun, user, sessionStorage }) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isSignUp, setIsSignUp] = useState(false);
    const [notification, setNotfication] = useState({ message: '', type: '' });

    // defining the signin function here itself
    const signin = () => {
        // either take the provided login details or directly use the credentials saved in the sessionStorage
        const alias = username || sessionStorage.getItem('user.alias');
        const pass = password || sessionStorage.getItem('user.tmp');
        user.auth(alias, pass, function (at) {
            if (at.err) {
                setNotfication({
                    message: `Error logging in: ${at.err}`,
                    type: 'Error'
                });
                // if authentication fails we wont even be storing the user in the session
                // does not make any sense to clear it
                return;
            }
            console.log('Logged in', at);

            if (at.put) {
                // store in the session storage now                
                sessionStorage.setItem('user.alias', at.put.alias);
                sessionStorage.setItem('user.tmp', pass);
                sessionStorage.setItem('user.pub', at.put.pub);
                console.log(sessionStorage.getItem('user.alias'));
                setNotfication({
                    message: `User logged in : ${at.put.alias}`,
                    type: 'Notice'
                });
                // navigate to the home page now
                navigate('/feed');
            }
        });
    }

    // auto sign in feature
    useEffect(() => {
        if (!user.is && sessionStorage.getItem('user.tmp')) {
            signin();
        }
    }, []);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleToggleMode = () => {
        setIsSignUp(!isSignUp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // if already displayed, React would not display the message itself
        setNotfication({
            message: 'Authenticating...',
            type: 'Notice'
        });
        // the sign up function
        if (isSignUp) {
            console.log('Creating user with Username:', username);
            user.create(username, password, function (ack) {
                if (ack.err) {
                    setNotfication({
                        message: `Error creating user: ${ack.err}`,
                        type: 'Error'
                    })
                }
                console.log('User created: ', ack.pub);
                if (ack.pub) {
                    // maintain the username and the public key in the gun js database
                    gun.get('users').get(username).put(gun.get('~@' + username));
                    // clear the error message now
                    console.log('Created new user:', ack.pub);
                    setNotfication({ message: '', type: '' });
                    // saved the session details of the newly created user here
                    sessionStorage.setItem('user.alias', username);
                    sessionStorage.setItem('user.tmp', password);
                    sessionStorage.setItem('user.pub', ack.pub);
                    console.log('User created and logged in:', user.is);
                    navigate('/feed');
                }
            })
        } else {
            console.log('Signing in with Username:', username);
            signin();
        }
    };

    return (
        <div>
            {notification.message && <div style={{ color: notification.type == 'Error' ? 'red' : 'whitesmoke' }}>{notification.message}</div>}
            <br />
            <form onSubmit={handleSubmit}>
                <label style={{ fontSize: '24px', color: 'white', marginBottom: '8px', display: 'block' }}>
                    Username:
                    <br />
                    <input
                        type="text"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid white',
                            backgroundColor: 'transparent',
                            color: 'white',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    />
                </label>
                <br /><br />
                <label style={{ fontSize: '24px', color: 'white', marginBottom: '8px', display: 'block' }}>
                    Password:
                    <br />
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                        style={{
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid white',
                            backgroundColor: 'transparent',
                            color: 'white',
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    />
                </label>
                <br /><br />
                <button type="submit">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
            </form>
            <br /><br />
            <p>
                {isSignUp ? 'Already have an account?' : 'Don\'t have an account?'}
                <button type="button" onClick={handleToggleMode}>
                    {isSignUp ? 'Go to sign in' : 'Go to sign up'}
                </button>
            </p>
        </div>
    );
};

export default Auth;
