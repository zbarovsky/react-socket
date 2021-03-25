import React, {useState, useEffect} from 'react'
import socketIOClient, { io } from 'socket.io-client'
const ENDPOINT = process.env.REACT_APP_ENDPOINT;

function DisplayChat(props) {

    return (
        <div>
            <ul>
                {props.message.map((msg, i) => <li key={i}>{msg}</li>)}
            </ul>
        </div>
    )
}
export default DisplayChat