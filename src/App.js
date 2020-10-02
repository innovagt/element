import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './Auth';
import {useUser} from 'reactfire';
import{
  useFirebaseApp
}from 'reactfire';
function App() {
  const firebase = useFirebaseApp();
  const use = useUser();
  console.log(firebase);
  return (
    <div className="App">
        <p>Usuario: </p>
         <Auth />
    </div>
  );
}

export default App;
