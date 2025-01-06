import React from 'react'
import { Link } from 'react-router-dom'

function ChatList() {
  return (
    <div className='ChatList_container'>
        <div className="title">Dashboard</div>
        <Link to=''>Create a new chat</Link>
        <Link to=''>Explore MB AI</Link>
        <Link to=''>Contact</Link>
        <hr />
        <div className='list'>
        <Link to=''>Chat</Link>
        <Link to=''>Chat</Link>
        <Link to=''>Chat</Link>
        </div>
        <hr />
        <hr />
        <hr />
    </div>
  )
}

export default ChatList