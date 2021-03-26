import React, {useState, useEffect} from 'react'
import socketIOClient, { io } from 'socket.io-client'
import DisplayChat from './DisplayChat'

const ENDPOINT = process.env.REACT_APP_ENDPOINT;

function Chat() {
  const [response, setResponse] = useState('')
  const [messages, setMessages] = useState([])
  
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

    useEffect(() => {
      const socket = socketIOClient(ENDPOINT)
      socket.on('chat-message', msg => {
        setMessages([...messages, msg])
        console.log(messages)
        //messages.push(message)
      })
    }, [])

    //console.log('messages ', messages)

    return (
        <div>
            <DisplayChat message={messages} />

            <div className='textBox'>
                <form onSubmit={SendMessage}>
                <input type='text' name='message' onChange={handleChange}/>
                <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}
export default Chat