import React from 'react'
import { Link } from 'react-router-dom'

function SideMenu() {
  return (
    <div className='ChatList_container'>
        <div className="ChatList_container-title">Dashboard</div>
        <div className='ChatList_container-titleList'>
        <Link to='/'>Create a new chat</Link>
        <Link to='/'>Explore MB AI</Link>
        <Link to='/'>Contact</Link>
        </div>
        <hr />
        <div className='ChatList_container-title'>Recent Chat</div>
        <div className='ChatList_container-chatList'>
        <Link to='/'>Chat</Link>
        <Link to='/'>Chat</Link>
        <Link to='/'>Chat</Link>
        <Link to='/'>Chat</Link>
        <Link to='/'>Chat</Link>
        <Link to='/'>Chat</Link>
        <Link to='/'>Chat</Link>
        <Link to='/'>Chat</Link>
        </div>
        <hr />  
    </div>
  )
}

export default SideMenu