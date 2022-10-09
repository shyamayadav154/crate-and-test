import React from "react";

export default function UserForm({
  firstName,
  lastName,
  email,
  phone,
  updateFields,
}) {
  function onChangeHandler(e) {
    const { name, value } = e.target;
    updateFields({ [name]: value });
  }
  return (
    <div className="grid-cols-2">
      <div className="flex-col">
        <label htmlFor="">First Name</label>
        <input
          name="firstName"
          value={firstName}
          type="text"
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex-col">
        <label htmlFor="">Last Name</label>
        <input
          name="lastName"
          value={lastName}
          type="text"
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex-col">
        <label htmlFor="">Email</label>
        <input
          name="email"
          value={email}
          type="text"
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex-col">
        <label htmlFor="">Phone No.</label>
        <input
          name="phone"
          value={phone}
          type="text"
          onChange={onChangeHandler}
        />
      </div>
    </div>
  );
}
