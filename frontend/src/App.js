import React, { useState } from "react";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import Message from "./components/Message/Message";
import Card from "./components/Card/Card";
import { FaEnvelope, FaLock } from "react-icons/fa"; // optional icons
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [type, setType] = useState("error"); // success or error

  const register = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      setMessage(data.message || data.error);
      setType(data.message ? "success" : "error");
    } catch (err) {
      setMessage("Backend not running or network error");
      setType("error");
    }
  };

  const login = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setMessage("Login successful!");
        setType("success");
      } else {
        setMessage(data.error);
        setType("error");
      }
    } catch (err) {
      setMessage("Backend not running or network error");
      setType("error");
    }
  };

  return (
    <div className="app-container">
      <Card>
        <h2>Login | Register</h2>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<FaEnvelope />}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<FaLock />}
        />
        <Button text="Register" onClick={register} />
        <Button text="Login" onClick={login} />
        {message && <Message text={message} type={type} />}
      </Card>
    </div>
  );
}

export default App;
