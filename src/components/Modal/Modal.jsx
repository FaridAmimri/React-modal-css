import React from 'react'
import './styles.css'

export const Modal = ({ title, content, closeIcon = "X", onClick, openModal=true, setOpenModal }) => {
  if (openModal)
  return (
    <div className='background'>
      <div className='container'>
        <div className='header'>
          <button className='closeButton' onClick={onClick}>
            {closeIcon}
          </button>
        </div>
        <div className='title'>{title}</div>
        <div className='body'>{content}</div>
      </div>
    </div>
  )
}

