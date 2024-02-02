// CADE 
// version alpha:0.0.1
// Debashish Buragohain

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Gun from 'gun';
import 'gun/sea';
import { lazy, useEffect, useState, Suspense } from 'react';
import './App.css';

// import Auth from './pages/auth';
// import Feed from './pages/feed';
// import Upload from './pages/upload';
// utilizing lazy imports for facilitating the sessionStorage module
const Auth = lazy(() => import('../src/pages/auth'));
const Feed = lazy(() => import('../src/pages/feed'));
const Upload = lazy(() => import('../src/pages/upload'));

function App() {

  const [sessionStorage, setSessionStorage] = useState(null);
  useEffect(() => {
    // use the browser's session storage if available
    if (window.sessionStorage) {
      setSessionStorage(window.sessionStorage);
    }
    else {
      // in case of react native code automatically
      // dynamically import the sessionStorage module
      import('../src/lib/sessionStorage').then(({ sessionStorage }) => {
        setSessionStorage(sessionStorage)
      })
    }
  }, []);

  const [gun] = useState(Gun({
    peers: ['http://localhost:1234/gun']
  }));

  // user instance from the gun
  const [user] = useState(gun.user());

  // event listeners only during the initial render
  useEffect(() => {
    gun.on('auth', (ack) => {
      if (ack.err) {
        // no use storing the errored information of the user
        sessionStorage.clear();
      }
      else console.log('Logged in: ', sessionStorage.getItem('user.login').username);
    })

    gun.on('secure', (at) => {
      // enfore some rules about shared level app data
      if (!at.put || !at.put.users) {
        return;
      }

      // save the data into the session storage during the form submission
      sessionStorage.setItem('user.keys', {
        pub: at.put.pub,
        epub: at.put.epub
      });

      let no;
      // check if the node exists and verify it
      Gun.node.is(at.put.users, function (val, key) {
        Gun.SEA.verify(val, false, function (val) {
          if ('~@' + key === Gun.val.link.is(val)) {
            return;
          }
          no = true;
        })
        if (no) return no;
      })
      if (no) return no;
      this.to.next('at');
    });

    gun.on('bye', () => {
      // reset the user and route back to the auth page
      sessionStorage.clear();
      // don't think it is necessary to reroute back to the auth page because this will happen automatically
      // navigate('/auth');
    })

    return () => {
      gun.off();
    }
  }, []);

  if (!sessionStorage) {
    return (<div>Loading...</div>)
  }

  console.log('session storage loaded');
  return (
    <>
      <Router>
        <Routes>
          <Suspense fallback={<div>Loading...</div>}>
            {/* we pass the gun and user instances directly as a parameter */}
            <Route path='/auth' element={<Auth gun={gun} user={user} sessionStorage={sessionStorage} />}></Route>
            <Route path='/feed' element={<Feed gun={gun} user={user} />}></Route>
            <Route path='/upload' element={<Upload gun={gun} user={user} />}></Route >
          </Suspense>
        </Routes>
        {/* redirect to the sign in page immediately if the user isn't signed in */}
        {!sessionStorage.getItem('user').username && <Navigate to="/auth" replace />}
      </Router>
    </>)
}

export default App;