import React, {useState, useEffect} from 'react'
import socketIOClient, { io } from 'socket.io-client'
import './App.css';
import Time from './components/Time'
import Chat from './components/Chat'
const ENDPOINT = process.env.REACT_APP_ENDPOINT;

// TODO: BREAK INTO COMPONENTS FOR BETTER OPTIMIZATION

function App() {


  return (
    <div>
        <Time />
        <Chat />
    </div>
  )
}

export default App;
