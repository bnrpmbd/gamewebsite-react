import React from 'react'

function NavListItem({ item }) {
  return (
    <li>
        <button type="button" className="navBtn">
            <i className={`bi ${item.icon}`}></i>
            <span className='navName'>{item.name}</span>
        </button>
    </li>
  );
}

export default NavListItem;