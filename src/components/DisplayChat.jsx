import React, {useState, useEffect} from 'react'

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