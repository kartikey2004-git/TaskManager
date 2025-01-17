/* eslint-disable react/prop-types */
import { useState } from "react";

// Two-way binding is a feature that allows data to be shared between components in an application, and for changes to be made simultaneously

const Login = ({ handleLogin }) => {
  // two way binding
  // console.log(handleLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    // prevent from default behaviour
    e.preventDefault();

    // console.log(`email is ${email} and password is ${password}`);
    handleLogin(email, password);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 rounded-xl p-20 border-customCyan-500">
        <form
          onSubmit={(e) => {
            // passing event object to submit handler function on submitting the form
            submitHandler(e);
          }}
          className="flex flex-col items-center justify-center"
        >
          <input
            value={email}
            onChange={(e) => {
              console.log(e.target.value);
              // setEmail mein value set hojayega email by targeting the value
              setEmail(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2 border-customCyan-500 rounded-full py-2 text-xl px-6 placeholder:text-gray-300"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => {
              console.log(e.target.value);
              // setPassword mein value set hojayega password by targeting the value
              setPassword(e.target.value);
            }}
            required
            className=" outline-none bg-transparent border-2  border-customCyan-500 rounded-full py-2 text-lg font-medium px-6 mt-3  placeholder:text-gray-300 "
            type="password"
            placeholder="Enter your password"
          />

          <button className=" mt-7 text-white outline-none  border-none border-2 font-semibold  bg-customCyan-500 rounded-full py-2 w-full text-lg px-8 ">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
