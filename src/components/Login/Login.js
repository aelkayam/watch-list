import "./Login.css";
import React, { useState } from "react";

export default function Login() {
  return (
    <div className="login-container">
      <div className="login">
        <h4>Login</h4>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              className="text_input"
              placeholder="Username"
            />
          </div>
          <div className="text_area">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className="text_input"
            />
          </div>
          <input type="submit" value="LOGIN" className="button" />
        </form>
        <a className="link" href="/signup">
          Sign Up
        </a>
      </div>
    </div>
  );
}
