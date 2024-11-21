import React from "react";
import "../styles/contact.css"; // Import the custom CSS file

export default function Contact() {
  return (
    <div id="contact">
      <section className="contact-section">
        <div className="contact-container">
          {/* Title */}
          <div>
            <h1 className="contact-title">Contact Us</h1>
          </div>

          {/* Form */}
          <form>
            <div className="contact-form">
              {/* Name Field */}
              <div className="contact-input-container contact-input-container-half">
                <label htmlFor="name" className="contact-label">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="contact-input"
                  placeholder="Enter your name"
                />
              </div>
              {/* Email Field */}
              <div className="contact-input-container contact-input-container-half">
                <label htmlFor="email" className="contact-label">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="contact-input"
                  placeholder="Enter your email"
                />
              </div>
              {/* Message Field */}
              <div className="contact-input-container">
                <label htmlFor="message" className="contact-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="contact-textarea"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              {/* Submit Button */}
              <div className="contact-input-container">
                <button type="submit" className="contact-submit">
                  Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
