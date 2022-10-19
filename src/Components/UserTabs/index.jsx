import React, { useState } from "react";
import Button from "../Button.jsx";
import FormInput from "../FormInput.jsx";
import SelectMenu from "../SelectMenu/index.jsx";
import "./userTabs.styles.scss";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

const topButton = [
  { id: 1, name: "Add User", icon: "user" },
  { id: 2, name: "All Users & Permission", icon: "All User" },
];

const createUser = () => {
  return {
    id: uuid(),
    name: faker.name.firstName(),
    email: faker.internet.email(),
    phone: faker.phone.number(),
    role: faker.random.alpha(8),
    status: faker.random.alpha(10),
  };
};

const tableData = Array.from({ length: 20 }, createUser);

export default function UserTabs() {
  const [headButton, setHeadButton] = useState(topButton[0]);
  const isHeadButtonSelected = (name) => headButton.name === name;

  return (
    <main className="user-tabs">
      <div className="user-tabs__head-btns">
        {topButton.map(({ id, name, icon }, i) => (
          <Button
            key={id}
            onClick={() => setHeadButton(topButton[i])}
            backgroundColor={
              isHeadButtonSelected(name) ? "var(--secondary-color)" : "inherit"
            }
            borderColor="var(--text-gray)"
            padding="15px 50px"
            width="80%"
            rounded="var(--rounded-md)"
            color="white"
          >
            {name}
          </Button>
        ))}
      </div>

      {headButton.name === "Add User" && (
        <section className="user-tabs__form">
          <div className="user-tabs__grid-3">
            <FormInput label="Name" placeholder="name" />
            <FormInput label="Email" placeholder="Email" />
            <FormInput label="Email" placeholder="Email" />
          </div>
          <div className="user-tabs__grid-3">
            <SelectMenu label="My Account" />
            <SelectMenu label="Wallets" />
            <SelectMenu label="My Inventory" />
          </div>
          <div className="user-tabs__grid-3">
            <SelectMenu label="My Account" />
            <SelectMenu label="Wallets" />
            <SelectMenu label="My Inventory" />
          </div>
        </section>
      )}

      {headButton.name === "All Users & Permission" && (
        <section className="table-container">
          <table>
            <thead>
              <tr style={{ backgroundColor: "#727376" }}>
                <th>S.No</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Role</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((data, index) => {
                return (
                  <tr key={data.id}>
                    <td>{index + 1}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>{data.role}</td>
                    <td>{data.status}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </main>
  );
}
