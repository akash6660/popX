import "../styles/Login.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const savedUser = JSON.parse(
      localStorage.getItem("userData")
    );

    if (!savedUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    if (
      savedUser.email === email &&
      savedUser.password === password
    ) {
      navigate("/account", {
        state: savedUser,
      });
    } else {
      setError("Invalid Email or Password");
    }
  };

  return (
    <div className="mobile-container">
      <div className="login-content">

        <h1>
          Signin to your <br />
          PopX account
        </h1>

        <p>
          Lorem ipsum dolor sit amet, <br />
          consectetur adipiscing elit.
        </p>

        <div className="input-group">
          <label className="floating-label">
            Email Address
          </label>

          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
          />
        </div>

        <div className="input-group">
          <label className="floating-label">
            Password
          </label>

          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
          />
        </div>

        {error && (
          <p
            style={{
              color: "red",
              fontSize: "14px",
              marginBottom: "10px",
            }}
          >
            {error}
          </p>
        )}

        <button
          className="login-button"
          onClick={handleLogin}
        >
          Login
        </button>

      </div>
    </div>
  );
}

export default Login;