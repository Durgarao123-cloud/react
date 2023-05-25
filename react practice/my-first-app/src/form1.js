import React, { useState } from "react";

export default function Form1() {
  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            name="firstname"
            id="firstName"
            placeholder="enter the name"
          />
          <div>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="enter the email"
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="enter the password"
          />
      </form>
    </div>
  );
}
