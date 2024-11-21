import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaInstagramSquare, FaLinkedin } from "react-icons/fa";
import "../styles/footer.css"; // Import the custom CSS file

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo and Copyright */}
        <div className="footer-logo">
          <Image
            src="/images/logo.jpeg"
            alt="Logo Image"
            width={50}
            height={50}
          />
          <span className="footer-title">© 2024 Coffee Shop</span>
        </div>

        {/* Social Media Links */}
        <div className="social-links">
          <Link
            href="https://www.facebook.com/profile.php?id=100077733514114"
            className="social-link facebook"
            target="_blank"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </Link>
          <Link
            href="https://www.instagram.com/muhammadarslan012/"
            className="social-link instagram"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagramSquare />
          </Link>
          <Link
            href="https://www.linkedin.com/in/muhammad-arsalan-623179243/"
            className="social-link linkedin"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </Link>
        </div>
      </div>
    </footer>
  );
}
