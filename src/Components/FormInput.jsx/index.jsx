import React from 'react'
import './formInput.style.scss'

export default function FormInput(props) {
  return (
    <div className='form-input'>
        <label htmlFor={props.id}>
            {props.label}
        </label>
        <input {...props} type="text" />
    </div>
  )
}
