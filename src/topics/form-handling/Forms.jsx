import React, { useState } from "react";

function Forms() {

  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    emailOrMobile: "",
    password: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    gender: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted! Check console for data.");
  };

  // Inline CSS styles
  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f0f2f5",
    padding: "20px",
  };

  const logoStyle = {
    width: "140px",
    marginBottom: "20px",
  };

  const formContainerStyle = {
    backgroundColor: "#fff",
    padding: "25px",
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    width: "350px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "5px",
  };

  const subHeadingStyle = {
    fontSize: "14px",
    color: "#606770",
    marginBottom: "20px",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    margin: "5px 0",
    borderRadius: "6px",
    border: "1px solid #ccd0d5",
    fontSize: "14px",
  };

  const selectStyle = {
    width: "30%",
    padding: "8px",
    marginRight: "5px",
    borderRadius: "6px",
    border: "1px solid #ccd0d5",
    fontSize: "14px",
  };

  const genderContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "10px",
  };

  const genderLabelStyle = {
    fontSize: "14px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    backgroundColor: "#42b72a",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    marginTop: "10px",
  };

  const smallTextStyle = {
    fontSize: "11px",
    color: "#606770",
    marginTop: "10px",
    lineHeight: "1.4",
  };

  const anchorStyle = {
    color: "#1877f2",
    textDecoration: "none",
    marginLeft: "5px",
    cursor: "pointer",
  };

  const footerAnchorStyle = {
    marginTop: "15px",
    color: "#1877f2",
    textDecoration: "none",
    fontSize: "14px",
  };

  return (
    <div style={containerStyle}>
      {/* Logo */}
      <img src="/Facebook-Logo-2019.png" alt="Facebook Logo" style={logoStyle} />

      {/* Form */}
      <div style={formContainerStyle}>
        <div style={headingStyle}>Create New Account</div>
        <div style={subHeadingStyle}>It's quick and easy.</div>

        <form onSubmit={handleSubmit}>
          {/* First Name & Surname */}
          <input
            type="text"
            name="firstName"
            placeholder="First name"
            value={formData.firstName}
            onChange={handleChange}
            style={inputStyle}
            required
          />
          <input
            type="text"
            name="surname"
            placeholder="Surname"
            value={formData.surname}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          {/* Mobile number or email */}
          <input
            type="text"
            name="emailOrMobile"
            placeholder="Mobile number or email"
            value={formData.emailOrMobile}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          {/* New password */}
          <input
            type="password"
            name="password"
            placeholder="New password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            required
          />

          {/* Birthday */}
          <div style={{ marginTop: "10px", marginBottom: "10px" }}>
            <label style={{ fontSize: "14px" }}>Birthday:</label>
            <div style={{ display: "flex", marginTop: "5px" }}>
              <select
                name="birthDay"
                value={formData.birthDay}
                onChange={handleChange}
                style={selectStyle}
                required
              >
                <option value="">Day</option>
                {Array.from({ length: 31 }, (_, i) => (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                ))}
              </select>

              <select
                name="birthMonth"
                value={formData.birthMonth}
                onChange={handleChange}
                style={selectStyle}
                required
              >
                <option value="">Month</option>
                {[
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug",
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                ].map((month, idx) => (
                  <option key={idx} value={month}>
                    {month}
                  </option>
                ))}
              </select>

              <select
                name="birthYear"
                value={formData.birthYear}
                onChange={handleChange}
                style={selectStyle}
                required
              >
                <option value="">Year</option>
                {Array.from({ length: 100 }, (_, i) => (
                  <option key={i} value={2025 - i}>
                    {2025 - i}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Gender */}
          <div style={{ marginTop: "10px" }}>
            <label style={{ fontSize: "14px" }}>Gender:</label>
            <div style={genderContainerStyle}>
              <label style={genderLabelStyle}>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={formData.gender === "Female"}
                  onChange={handleChange}
                  required
                />{" "}
                Female
              </label>
              <label style={genderLabelStyle}>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={formData.gender === "Male"}
                  onChange={handleChange}
                  required
                />{" "}
                Male
              </label>
              <label style={genderLabelStyle}>
                <input
                  type="radio"
                  name="gender"
                  value="Custom"
                  checked={formData.gender === "Custom"}
                  onChange={handleChange}
                  required
                />{" "}
                Custom
              </label>
            </div>
          </div>

          {/* Disclaimer */}
          <div style={smallTextStyle}>
            People who use our service may have uploaded your contact information to Facebook.{" "}
            <a href="#" style={anchorStyle}>
              Learn More
            </a>
          </div>

          {/* Sign Up Button */}
          <button type="submit" style={buttonStyle}>
            Sign Up
          </button>
        </form>
      </div>

      {/* Footer link */}
      <a href="#" style={footerAnchorStyle}>
        Already have an account?
      </a>
</div>
);
}



export default Forms;