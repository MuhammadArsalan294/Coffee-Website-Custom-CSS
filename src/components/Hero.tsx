import React from "react";
import Image from "next/image";
import "../styles/hero.css"; // Import the custom CSS file

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        {/* Text Content */}
        <div className="hero-content">
          <h1 className="hero-title">Best Coffee</h1>
          <h2 className="hero-subtitle">
            Making your day great with our special coffee
          </h2>
          <p className="hero-description">
            Welcome to our coffee paradise, where every bean tells a story and
            every cup sparks joy.
          </p>
          <div className="hero-buttons">
            <button className="hero-button primary">Order Now</button>
            <button className="hero-button secondary">Contact Us</button>
          </div>
        </div>

        {/* Image Section */}
        <div className="hero-image">
          <Image
            src="/images/coffee.jpeg"
            alt="Hero Coffee"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </section>
  );
}
