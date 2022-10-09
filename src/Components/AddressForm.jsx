import React from 'react'

export default function AddressForm() {
  return (
    <div className='grid-cols-2'>
        <label htmlFor="">Address</label>
        <input type="text" />
        <label htmlFor="">City</label>
        <input type="text" />
        <label htmlFor="">State</label>
        <input type="text" />
        <label htmlFor="">Zip Code</label>
        <input type="text" />
        
    </div>
  )
}
