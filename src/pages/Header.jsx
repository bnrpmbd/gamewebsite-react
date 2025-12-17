import React from 'react'
import './header.css'
import userImg from '../images/user.jpg'

function Header({ toggleActive }) {
  return (
    <header>
        <button type="button" className="menu" onClick={toggleActive}>
            <i className="bi bi-sliders"></i>
        </button>
        <div className="userItems">
            <button type="button" className="icon">
                <i className="bi bi-heart-fill"></i>
                <span className="like">0</span>
            </button>
            <button type="button" className="icon">
                <i className="bi bi-bag-fill"></i>
                <span className="bag">0</span>
            </button>
            <div className="avatar">
                <button type="button"><img src={userImg} alt="User avatar" /></button>
                <div className="user">
                    <span>User Name</span>
                    <button type="button">View Profile</button>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header