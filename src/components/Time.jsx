import React, {useState, useEffect} from 'react'
import socketIOClient, { io } from 'socket.io-client'
const ENDPOINT = process.env.REACT_APP_ENDPOINT;

function Time() {

    const [time, setTime] = useState('')

    useEffect(() => {
        const socket = socketIOClient(ENDPOINT)
        socket.on("FromAPI", data => {
        setTime(data)
        console.log('time ', time)
        })
    }, [])

  return (
      <div>
          {time}
      </div>
  )
}
export default Time;