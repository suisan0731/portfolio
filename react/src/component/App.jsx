import Header from './Header';
import AppLinkItems from './AppLinkItems';
import Profile from './Profile';
import '../css/App.css';
import React from 'react';
//import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react';


function App() {

  const [apps, setApps] = useState(0);
  const [profileTexts, setProfileTexts] = useState(0);

  useEffect(() => {
    fetch("/api/apps/")
    .then(res => res.json())
    .then(json => setApps(json))
    .catch(err => console.log(err))

    fetch("/api/profileTexts/")
    .then(res => res.json())
    .then(json => setProfileTexts(json))
    .catch(err => console.log(err))
  }, []);


  return (
      <div className="bg-white m-4 p-4 rounded app">
          <Header />
          <AppLinkItems apps={apps} />
          <Profile profileTexts={profileTexts}/>
      </div>
  );
}

export default App;
