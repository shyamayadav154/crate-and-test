import React from "react";

export default function UserForm({firstName,lastName,email,phone,updateFields}) {
  return (
    <>
      <label htmlFor="">First Name</label>
      <input value={firstName} type="text" onChange={e=>updateFields({firstName:e.target.value})} />
      <label htmlFor="">Last Name</label>
      <input value={lastName} type="text" onChange={e=>updateFields({lastName:e.target.value})} />
      <label htmlFor="">Email</label>
      <input value={email} type="text" onChange={e=>updateFields({email:e.target.value})} />
      <label htmlFor="">Phone No.</label>
      <input value={phone} type="text" onChange={e=>updateFields({phone:e.target.value})} />
    </>
  );
}
