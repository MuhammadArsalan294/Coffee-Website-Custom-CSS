import React from "react";
import Image from "next/image";
import Link from "next/link";
import "../styles/header.css"; // Import the custom CSS file

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo Section */}
        <div className="header-logo">
          <Image
            src="/images/logo.jpeg"
            alt="Logo"
            width={50}
            height={50}
          />
          <span>Coffee</span>
        </div>

        {/* Navigation Links */}
        <nav className="nav-links">
          <Link href="#">Home</Link>
          <Link href="#about">About</Link>
          <Link href="#menu">Menu</Link>
          <Link href="#contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
}

