import BtnGnrc from "../components/BtnGnrc";
import "./Login.css";
import { useState } from "react";
import { useAppContext } from "../contexts/FunctionContext";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../redux/slices/apiSlice";
import { setCredentials } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
//  const { login } = useAppContext();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [login, { isLoading: loadingLogin }] = useLoginMutation();
  const navigate = useNavigate();

  async function handleLogin() {
    const data = await login({username, password}).unwrap();
    console.log("data en login es: ", data);
    
    dispatch(setCredentials(data));
    navigate("/");

    
   
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
