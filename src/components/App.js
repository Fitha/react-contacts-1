import React, { useState, useEffect, useContext, createContext } from "react";
import LoginPage from "./login";
import RegisterPage from "./register";
import ContactsPage from "./contacts";
import ContactDetailsPage from "./contact-details";
import ContactCreatePage from "./contact-create";

import ContactsProvider from "../Context/ContactsContext";

const UserContext = createContext(/* some initial value */);

function Cakes() {
  return <div>🎂 :D</div>;
}

function Burger() {
  return <div>🍔</div>;
}

function SideBar({ food, snack: Snack }) {
  return (
    <div>
      {food}
      <Snack />
      Side Bar <Box />
    </div>
  );
}

function Box() {
  return (
    <div>
      Message <Message />
    </div>
  );
}

function Message() {
  const user = useContext(UserContext);

  return (
    <div>
      Hi {user.name}, you like {user.favoriteAnimal}
    </div>
  );
}

function Button({ label }) {
  return (
    <button style={{ background: "red", padding: "10px", fontSize: "23px" }}>
      {label}
    </button>
  );
}

function Button2({ children }) {
  return (
    <button style={{ background: "blue", padding: "10px", fontSize: "23px" }}>
      {children}
    </button>
  );
}

function App() {
  const [user, setUser] = useState({ name: "Erik", favoriteAnimal: "Rhinos" });

  return (
    <div>
      <Button label="Click Me" />
      <Button label="Don't Click Me" />

      <Button2>Press Me!</Button2>
      <Button2>Another one!</Button2>
      <Button2>
        <strong>Hello</strong> <em>there</em>
      </Button2>

      <UserContext.Provider value={user}>
        <SideBar food={<Burger />} snack={Cakes} />
      </UserContext.Provider>

      <LoginPage />
      <RegisterPage />

      <ContactsProvider>
        <ContactsPage />

        {/* <ContactDetailsPage contact={contacts[0]} /> */}
      </ContactsProvider>

      <ContactCreatePage />
    </div>
  );
}

export default App;

// 1 creating the context using createContext
// 2 setting up the Provider
// 3
