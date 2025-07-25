import React from 'react'

const TabButton = ({ children, onSelect, isSelected }) => {
  return (
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{ children }</button>
    </li>
  )
}

export default TabButton
