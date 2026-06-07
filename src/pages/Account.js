import "../styles/Account.css";
import { useLocation } from "react-router-dom";

function Account() {
  const location = useLocation();

  const userData = location.state || {
    name: "Marry Doe",
    email: "Marry@example.com",
    company: "PopX",
    agency: "Yes"
  };

  return (
    <div className="mobile-container">

      <div className="header">
        Account Settings
      </div>

      <div className="profile-section">

        <img
          src="https://i.pravatar.cc/100"
          alt="profile"
        />

        <div className="user-info">

          <h4>{userData.name}</h4>

          <p>{userData.email}</p>

        </div>

      </div>

      <p className="description">
  Company Name: {userData.company}
</p>

      <p className="description">
        Lorem Ipsum Dolor Sit Amet,
        Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor.
      </p>
<div className="dotted-line"></div>

    </div>
  );
}

export default Account;