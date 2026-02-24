import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === "testuser" && password === "Test123") {
      navigate("/list");
    } else {
      alert("Invalid Credentials");
    }
  };

 return (
  <div className="container">
    <h2>Login</h2>

    <input
      type="text"
      placeholder="Username"
      onChange={(e) => setUsername(e.target.value)}
    />

    <input
      type="password"
      placeholder="Password"
      onChange={(e) => setPassword(e.target.value)}
    />

    <button onClick={handleLogin}>Login</button>
  </div>
);
}

export default Login;