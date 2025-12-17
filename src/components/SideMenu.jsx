import React from 'react'
import './sideMenu.css'
import navListData from '../data/navListData'
import NavListItem from './NavListItem'

function SideMenu({ active }) {
    const navData = navListData;
  return (
    // Side Menu
    <div className={`sideMenu ${active ? 'active' : undefined}`}>
        <div className="logo">
            <i className="bi bi-controller"></i>
            <span className="brand">Play</span>
        </div>

        {/* Navigation */}
        <ul className="nav">
            {navData.map(item=>(
                <NavListItem key={item._id} item={item} />
            ))}
        </ul>
        
        {/* Social Media */}
        <ul className="social">
            <li>
                <button type="button">
                    <i className="bi bi-meta"></i>
                </button>
            </li>
            <li>
                <button type="button">
                    <i className="bi bi-twitter-x"></i>
                </button>
            </li>
            <li>
                <button type="button">
                    <i className="bi bi-youtube"></i>
                </button>
            </li>
            <li>
                <button type="button" className="share">
                    <i className="bi bi-share"></i>
                </button>
            </li>
        </ul>
    </div>
  );
}

export default SideMenu;