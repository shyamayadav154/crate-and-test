import React from 'react'

export default function AccountForm({}) {
  return (
    <div className='grid-cols-2'>
        <label htmlFor="">Account Name</label>
        <input type="text" />
        <label htmlFor="">Account No.</label>
        <input type="text" />
        <label htmlFor="">Routing No.</label>
        <input type="text" />
        <label htmlFor="">Account Type</label>
        <input type="text" />
        
    </div>
  )
}
