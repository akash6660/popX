import "../styles/Welcome.css";
import { useNavigate } from "react-router-dom";

function Welcome() {

  const navigate = useNavigate();

  return (
    <div className="mobile-container">

      <div className="welcome-content">

        <h1>Welcome to PopX</h1>

        <p>
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
        </p>

        <button
          className="create-btn"
          onClick={() => navigate("/signup")}
        >
          Create Account
        </button>

        <button
          className="login-btn"
          onClick={() => navigate("/login")}
        >
          Already Registered? Login
        </button>

      </div>

    </div>
  );
}

export default Welcome;