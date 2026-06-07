import "../styles/Signup.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: "Yes",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone Number is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company Name is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = () => {
  if (validateForm()) {

    localStorage.setItem(
      "userData",
      JSON.stringify(formData)
    );

    navigate("/account", {
      state: formData
    });
  }
};

  return (
    <div className="mobile-container">
      <div className="signup-content">

        <h1>
          Create your <br />
          PopX account
        </h1>

        <div className="input-group">
          <label className="floating-label">
            Full Name<span className="required">*</span>
          </label>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? "error-input" : ""}
          />

          {errors.name && (
            <span className="error-text">{errors.name}</span>
          )}
        </div>

        <div className="input-group">
          <label className="floating-label">
            Phone Number<span className="required">*</span>
          </label>

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? "error-input" : ""}
          />

          {errors.phone && (
            <span className="error-text">{errors.phone}</span>
          )}
        </div>

        <div className="input-group">
          <label className="floating-label">
            Email Address<span className="required">*</span>
          </label>

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "error-input" : ""}
          />

          {errors.email && (
            <span className="error-text">{errors.email}</span>
          )}
        </div>

        <div className="input-group">
          <label className="floating-label">
            Password<span className="required">*</span>
          </label>

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "error-input" : ""}
          />

          {errors.password && (
            <span className="error-text">{errors.password}</span>
          )}
        </div>

        <div className="input-group">
          <label className="floating-label">
            Company Name<span className="required">*</span>
          </label>

          <input
            type="text"
            name="company"
            placeholder="Company Name"
            value={formData.company}
            onChange={handleChange}
            className={errors.company ? "error-input" : ""}
          />

          {errors.company && (
            <span className="error-text">{errors.company}</span>
          )}
        </div>

        <div className="radio-title">
          Are you an Agency?
          <span className="required">*</span>
        </div>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              name="agency"
              value="Yes"
              checked={formData.agency === "Yes"}
              onChange={handleChange}
            />
            Yes
          </label>

          <label>
            <input
              type="radio"
              name="agency"
              value="No"
              checked={formData.agency === "No"}
              onChange={handleChange}
            />
            No
          </label>
        </div>

        <button
          className="create-account-btn"
          onClick={handleSubmit}
        >
          Create Account
        </button>

      </div>
    </div>
  );
}

export default Signup;