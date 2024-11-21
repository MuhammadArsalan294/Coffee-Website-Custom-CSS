import React from "react";
import Image from "next/image";
import "../styles/about.css"; // Import the custom CSS file

export default function About() {
  return (
    <div id="about">
      <section className="about-section">
        <div className="about-container">
          {/* Text Content */}
          <div className="about-content">
            <h1 className="about-title">About Us</h1>
            <p className="about-description">
              At Coffee House in Berndorf, Germany, we pride ourselves on being
              a go-to destination for coffee lovers and conversation seekers
              alike. We are dedicated to providing an exceptional coffee
              experience in a cozy and inviting atmosphere, where guests can
              relax, unwind, and enjoy their time in comfort.
            </p>
          </div>
          {/* Image */}
          <div className="about-image-container">
            <Image
              className="about-image"
              alt="Coffee Experience"
              src="/images/coffee1.jpeg"
              width={500}
              height={500}
              priority={true}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
