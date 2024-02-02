// CADE 
// version alpha:0.0.1
// Debashish Buragohain

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Gun from 'gun';
import 'gun/sea';
import { useEffect, useState } from 'react';
import './App.css';
import Auth from './pages/auth';
import Feed from './pages/feed';
import Upload from './pages/upload';
import Home from './pages/home';
import Logout from './components/logout';
import Header from './components/Header';

function App() {
  const [gun] = useState(Gun({
    peers: ['http://localhost:1234/gun']
  }));

  // user instance from the gun
  const [user] = useState(gun.user());

  // event listeners only during the initial render
  useEffect(() => {
    gun.on('auth', () => {
      console.log('authentication was successful');
      console.log('Logged in:', sessionStorage.getItem('user.alias'));
    })

    gun.on('secure', (at) => {
      // enfore some rules about shared level app data
      if (!at.put || !at.put.users) {
        return;
      }
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
      console.log('user logged out');
    })

    return () => {
      gun.off();
    }
  }, []);

  return (
    <>
      <Header></Header>
      <Router>
        <Logout user={user} sessionStorage={sessionStorage} />
        <Routes>
          {/* we pass the gun and user instances directly as a parameter */}
          <Route path='/' element={<Home user={user} />}></Route>
          <Route path='/auth' element={<Auth gun={gun} user={user} sessionStorage={sessionStorage} />}></Route>
          <Route path='/feed' element={<Feed gun={gun} user={user} sessionStorage={sessionStorage} />}></Route>
          <Route path='/upload' element={<Upload gun={gun} user={user} sessionStorage={sessionStorage} />}></Route >
        </Routes>
        {location.hash && <Navigate to="/auth" replace />}
      </Router>
    </>)
}

export default App;