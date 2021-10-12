import React, { useState, useRef } from "react";

import styles from "./LoginForm.module.css";

function LoginForm(props) {
  //   const [credentials, setCredentials] = useState({
  //     username: "",
  //     password: "",
  //   });

  // const [username, setUsername] = useState("");
  // const [password, setPassword] = useState("");

  const username = useRef("");
  const password = useRef("");

  //   const handleInputChange = (e) => {
  //     setCredentials({
  //       [e.target.name]: e.target.value,
  //     });
  //   };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    console.log("form submitted");

    console.log(username.current.value, password.current.value);

    // login logic goes here
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <div className={styles.formRow}>
        {/* <label htmlFor="username">Username</label> */}
        <input
          className={styles.inputField}
          aria-label="Username"
          id="username"
          name="username"
          type="text"
          placeholder="Username"
          ref={username}
          // value={username}
          // onChange={(e) => {
          //   setUsername(e.target.value);
          // }}
        />
      </div>
      <div className={styles.formRow}>
        {/* <label htmlFor="password">Password</label> */}
        <input
          className={styles.inputField}
          aria-label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          ref={password}
          // value={password}
          // onChange={(e) => {
          //   setPassword(e.target.value);
          // }}
        />
      </div>
      <div>
        <button className={styles.button} type="submit">
          Login
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
