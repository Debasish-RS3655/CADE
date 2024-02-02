import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Auth from './pages/auth';
import Feed from './pages/feed';
import Upload from './pages/upload';
import Gun from 'gun';
import './App.css';
import { useState } from 'react';

function App() {
  // the gun instance won't change anytime afterwards
  const [gun] = useState(Gun({
    peers: ['http://localhost:1234/gun']
  }));

  const [user, setUser] = useState(false);

  return (
    <>
      <Router>
        <Routes>
          {/* we pass the gun instance directly as a parameter */}
          <Route path='/auth' element={<Auth gun={gun} setUser={setUser} />}></Route>
          <Route path='/feed' element={<Feed gun={gun} />}></Route>
          <Route path='/upload' element={<Upload gun={gun} />}></Route >
        </Routes>
        {/* redirect to the sign in page if the user isn't signed in */}
        {!user && <Navigate to="/auth" replace />}
      </Router>
    </>)
}

export default App;