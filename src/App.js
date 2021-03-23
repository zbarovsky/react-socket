import React, {useState, useEffect} from 'react'
import socketIOClient, { io } from 'socket.io-client'
import './App.css';
const ENDPOINT = "http://127.0.0.1:4001";

// TODO: BREAK INTO COMPONENTS FOR BETTER OPTIMIZATION

function App() {
  const [response, setResponse] = useState('')
  const [time, setTime] = useState('')
  const [messages, setMessages] = useState([])

  // useEffect(() => {
  //   const socket = socketIOClient(ENDPOINT)
  //   socket.on("FromAPI", data => {
  //     setTime(data)
  //     console.log('time ', time)
  //   })
  // }, [])

  useEffect(() => {
    const socket = socketIOClient(ENDPOINT)
    socket.on('chat-message', message => {
      console.log(message)
      //setMessages([message, ...messages])
      messages.push(message)
    })
  }, [])



  function handleChange(e) {
    setResponse({value: e.target.value})
  }

  function SendMessage(e) {
    e.preventDefault()
    const socket = socketIOClient(ENDPOINT)
    if(response.value) {
      socket.emit('chat-message', response.value)
      console.log('response ', response.value)
      setResponse('')
    }
  }
  
  return (
    <div>
      <p>
        {/* {time} */}
      </p>
      <ul>
        {messages.map((message) => (
          <li>{message}</li>
        ))}
      </ul>

      <div className='textBox'>
        <form onSubmit={SendMessage}>
          <input type='text' name='message' onChange={handleChange}/>
          <button type='submit'>Send</button>
        </form>
      </div>
    </div>
  )
}

export default App;
