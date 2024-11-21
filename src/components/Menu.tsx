import React from "react";
import Image from "next/image";
import "../styles/menu.css"; // Import the custom CSS file

export default function Menu() {
  return (
    <div id="menu">
      <section className="menu-section">
        <div className="menu-container">
          {/* Title Section */}
          <div className="menu-title">Menu</div>

          {/* Responsive Grid */}
          <div className="menu-grid">
            {/* Item 1 */}
            <div className="menu-card">
              <Image
                className="menu-image"
                src="/images/hot-coffee.jpg"
                alt="Hot Coffee"
                width={500}
                height={500}
              />
              <h2 className="menu-item-title">Hot Coffee</h2>
              <p className="menu-description">
                Wide range of streaming hot coffee to make you fresh.
              </p>
              <p className="menu-price">$5</p>
            </div>

            {/* Item 2 */}
            <div className="menu-card">
              <Image
                className="menu-image"
                src="/images/black-coffee.jpeg"
                alt="Black Coffee"
                width={500}
                height={500}
              />
              <h2 className="menu-item-title">Black Coffee</h2>
              <p className="menu-description">
                Wide range of streaming black coffee to make you fresh.
              </p>
              <p className="menu-price">$10</p>
            </div>

            {/* Item 3 */}
            <div className="menu-card">
              <Image
                className="menu-image"
                src="/images/cold-coffee.jpeg"
                alt="Cold Coffee"
                width={500}
                height={500}
              />
              <h2 className="menu-item-title">Cold Coffee</h2>
              <p className="menu-description">
                Creamy and frothy cold coffee to make you cool.
              </p>
              <p className="menu-price">$15</p>
            </div>

            {/* Item 4 */}
            <div className="menu-card">
              <Image
                className="menu-image"
                src="/images/ice-cup.jpg"
                alt="Ice Cup"
                width={500}
                height={500}
              />
              <h2 className="menu-item-title">Ice Cup</h2>
              <p className="menu-description">
                Creamy ice cup to make you cool and fresh.
              </p>
              <p className="menu-price">$20</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
