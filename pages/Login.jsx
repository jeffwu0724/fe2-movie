import React, { useState } from "react";

import Idm from "../services/Idm";

import "../css/form.css";
//import {localStorage} from '../services.local //'

/*
  Using localStorage is similar to how we use
  dictionary.
  
  To set a variable call `localStorage.set("key", value)`
  To get a variable call `localStorage.get("key")`

  Local Storage persists through website refreshes so
  it is perfect for storing things we dont want to lose
  like a users session

  You must call `const localStorage = require("local-storage");`
  in any class that you want to use this in, it is the same
  local storage in the entire website regardless of where you call
  it as each website gets the same instance of the storage.

  So think of it as a global dictionary.
*/
const localStorage = require("local-storage");


const Login = ({ history, location, match }) => {
   // console.log(history)
    // The Top ({ history, location, match }) is a short hand for the following code:
    //     const Login = (props) => {
    //         const { history, location, match } = props;
    // If you want to accept more props just place it there like this:
    //     const Login = ({ history, location, match, yourVar }) => {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    /**
     * Buttons have default behavior which will cause
     * the entire page to refresh, this isn't what
     * we want in React as everything updates according
     * to the state. So we prevent that action by
     * using "e.preventDefault();"
     *
     * @param e Event
     */


    const handleSubmit = (e) => {
        e.preventDefault();

        Idm.login(email, password)
            .then(response => {
                alert(JSON.stringify(response.data, null, 4))
                if (response.data?.resultCode === 120){
                    console.log("get the good resultcode")
                    console.log(response.data?.session_id)
                    history.push("search")
                    //history.push("/search", {session_id: response.data?.session_id})
                    //history.push("/search",{email: email})
                    localStorage.set("session", response.data?.session_id)
                    localStorage.set("email", email)
                }
            })
            .catch(error => alert(error));
    };

    
    return (
        <div className="form-box">
            <h1>Login </h1>
            <form onSubmit={handleSubmit}  >
                <label className="form-label">Email</label>
                <input
                    className="form-input"
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className="form-label">Password</label>
                <input
                    className="form-input"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="form-button">Login</button>
            </form>
        </div>
    );
}

export default Login;
