import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Sitebar from './home/navBar';
import Auth from './auth/Auth';
import WorkoutIndex from './workouts/WorkoutIndex';

function App() {

  const [sessionToken, setSessionToken] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')){
      setSessionToken(localStorage.getItem('token'))
    }
  }, [])

  const updateToken = (newToken) => {
    localStorage.setItem('token', newToken); 
    setSessionToken(newToken);
    // console.log(sessionToken);
  }

  const clearToken = () => {
    localStorage.clear();
    setSessionToken('');
}

  const protectedViews = () => {
    return (sessionToken === localStorage.getItem('token') ? <WorkoutIndex token={sessionToken} /> : <Auth updateToken={updateToken} />
    
    ) 
}


    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Sitebar clearToken={clearToken}/>
          {protectedViews()}
          <Auth updateToken={updateToken}/>
          <Sitebar clickLogout={clearToken} />
        </p>        
      </header>
    </div>
  );
};

export default App;
