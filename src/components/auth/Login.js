import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { movieDB, apiKey } from "../../api/movieDB";

import {
  getToken,
  getUser,
  getSessionId,
  getSession,
} from "../../store/actions/authActions";

import "./Login.css";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.token.user);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = await movieDB.get(
        `authentication/token/new?api_key=${apiKey} `
      );
      console.log(token);
      const request_token = token?.data.request_token;

      const validate = await movieDB.post(
        `/authentication/token/validate_with_login?api_key=${apiKey}`,
        {
          username,
          password,
          request_token,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const session = await movieDB.post(
        `authentication/session/new?api_key=${apiKey}`,
        {
          request_token,
        }
      );
      console.log(session);
      const id = await session?.data.session_id;
      localStorage.setItem("token", id);
      dispatch(getUser(id));

      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleInput = (e) => {
    const name = e.currentTarget.name;
    const value = e.currentTarget.value;

    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  return (
    <div className='login'>
      <h1 className='login-header'>Please Log In</h1>
      <form onSubmit={handleSubmit} className='login-form'>
        <label>
          <p>Username</p>
          <input
            type='name'
            name='username'
            value={username}
            onChange={handleInput}
            className='login-input'
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type='password'
            name='password'
            value={password}
            onChange={handleInput}
            className='login-input'
          />
        </label>
        <div>
          <button type='submit' className='login-submit'>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
