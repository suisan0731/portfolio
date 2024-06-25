import Header from './Header';
import AppLinkItems from './AppLinkItems';
import Profile from './Profile';
import '../css/App.css';
import React from 'react';
//import ReactDOM from 'react-dom';


function App() {

  /* 仮データ */
  const props = {
    "apps": [
      {
          "name": "sample1",
          "description": "sample1 description",
          "url": "",
      },
      {
          "name": "sample2",
          "description": "sample2 description",
          "url": "",
      },
      {
          "name": "sample3",
          "description": "sample3 description",
          "url": "",
      }
    ],
    "profile": {
      "texts": [
        "aaaaaa",
        "bbbbbbbb",
        "cccccccc",
      ],
    }
  };

  return (
      <div className="bg-white m-4 p-4 rounded app">
          <Header />
          <AppLinkItems props={props} />
          <Profile props={props}/>
      </div>
  );
}

export default App;
