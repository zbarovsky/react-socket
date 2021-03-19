import React, {useState, useEffect} from 'react'
import socketIOClient, { io } from 'socket.io-client'
import './App.css';
const ENDPOINT = "http://127.0.0.1:4001";


function App() {
  const [response, setResponse] = useState('')

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on("FromAPI", data => {
      setResponse(data)
      console.log('response ', response)
    })
  }, [])

  // function sendMessage(e) {
  //   e.preventDefault()

  // }

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT)
  //   socket.on("chat message", message => {
  //     setResponse(message)
  //     io.emit(response)
  //     console.log(response)
  //   })
  // }, [])

  return (
    <div>
      <p>
        {response}
      </p>

      {/* <div className='textBox'>
        <form>
          <input type='text' name='message'/>
          <button type='submit'>Send</button>
        </form>
      </div> */}
    </div>
  )
}

export default App;
