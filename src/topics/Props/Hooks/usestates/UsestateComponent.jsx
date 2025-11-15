import React,{useState} from 'react'
import "./Usestate.css";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";


const UsestateComponent = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
    console.log("Password visibility changed:", !showPassword);
  };



// state for showing modal
const [showModal, setShowModal] = useState(false);

// show modal when Send Message is clicked (form submission)
const handleSubmit = (e) => {
  e.preventDefault();
  setShowModal(true);
};

// close the modal
const closeModal = () => {
  setShowModal(false);
};




  return (
  

      
<section className="contact-section">
  <h2 className="contact-heading">Contact Us</h2>

  <div className="contact-form-container">
    <h3 className="form-heading">Contact Form</h3>

    <form className="contact-form"
onSubmit= {handleSubmit}> 
      {/* First Name */}
      <div className="form-group">
        <label htmlFor="firstName" className="form-label">First Name</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="form-input"
          placeholder="Enter your first name"
        />
      </div>

      {/* Last Name */}
      <div className="form-group">
        <label htmlFor="lastName" className="form-label">Last Name</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          placeholder="Enter your last name"
        />
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          placeholder="Enter your email"
       />
</div>
          {/* Password Field */}
          <div className="form-group password-group">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"} 
                id="password"
                name="password"
                className="form-input"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="toggle-btn"
                onClick={togglePassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />} 
              </button>
            </div>
     
     
          </div>
     {/* Message */}
      <div className="form-group">
        <label htmlFor="message" className="form-label">Message</label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Write your message here..."
          rows="5"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button type="submit" className="submit-btn">  
        Send Message
      </button>
    </form>
   



{/* 🔹 Modal Section */}
{showModal && (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-box" onClick={(e) => e.stopPropagation()}>
      <h3>Your message has been submitted!</h3>
      <button className="modal-btn" onClick={closeModal}>
        OK
      </button>
    </div>
</div>
)}






</div>
  
</section>
      
  );
};

export default UsestateComponent;