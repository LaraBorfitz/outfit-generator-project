import BtnGnrc from "../components/BtnGnrc";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAppContext } from "../contexts/FunctionContext";

const Login = () => {
  const { login } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin() {
    const data = await login(username, password);
    if (!data) {
      alert("Failed to login");
    } else {
      navigate("/");
    }
  }

  return (
    <div className="divLoginContainer">
      <div>
        <div className="divWelcome">Welcome back!</div>
      </div>

      <div className="divLogin">
        <input
          className="inputEmail"
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="inputPassword"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div className="divBtns">
          <BtnGnrc onClick={handleLogin} txt="Log In" />
        </div>
        <div>
          <span style={{ marginRight: 15 }}>Don't have an account?</span>
          <BtnGnrc onClick={() => navigate("/register")} txt="Register" />
        </div>
      </div>
    </div>
  );
};

export default Login;
