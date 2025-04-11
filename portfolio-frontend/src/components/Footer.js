import React from 'react';
import './Footer.css';
import { FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const accessKey = "693b08ec-bd80-4bbc-bd55-2dd924ecb571";

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", accessKey);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      toast.success(res.message);
      event.target.reset();
    } else {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <div id="contact" className="contact">
      <ToastContainer position="top-right" autoClose={3000} />

      <div className="contact-title">
        <h1>Get In Touch</h1>
      </div>

      <div className="contact-section">
        {/* Left Column: Contact Info & Social Links */}
        <div className="contact-left">
          <footer id="footer" className="footer">
            <h2>Contact Me</h2>
            <div className="footer-row">
              <a
                href="https://github.com/Varma0214"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-box"
              >
                <FaGithub className="icon" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/ravivarmagollapalli/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-box"
              >
                <FaLinkedin className="icon" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:varmagollapalli@gmail.com" className="footer-box">
                <MdEmail className="icon" />
                <span>Email</span>
              </a>
              <div className="footer-box">
                <FaPhoneAlt className="icon" />
                <span>+919014287159</span>
              </div>
            </div>
          </footer>
        </div>

        {/* Right Column: Contact Form */}
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your Name"
              required
            />

            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your Email"
              required
            />

            <label htmlFor="message">Write Your Message Here</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              required
            ></textarea>

            <button type="submit" className="contact-submit">
              Submit Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
