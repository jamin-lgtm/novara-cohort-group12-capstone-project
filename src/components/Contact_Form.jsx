import React, { useState } from "react";
import "./Contact_Form.css";
import SpaceBackground from "./SpaceBackground";

function ContactForm() {
  const [charCount, setCharCount] = useState(100);

  const handleMessageChange = (e) => {
    setCharCount(100 - e.target.value.length);
  };

  return (
    <section id="contact-form" className="contact-section">
      <SpaceBackground />

      <div className="contact-card">
        <p className="contact__eyebrow">Contact Us</p>

        <h2 className="contact__title">
          Have Questions About Planetary Science?
        </h2>

        <p className="contact__subtitle">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we'll get back to you.
        </p>

        <div className="contact__form">

          {/* Row 1: Full Name + Email */}
          <div className="cf-row">
            <FieldGroup label="Full Name" required>
              <input type="text" placeholder="Full name" className="cf-input" />
            </FieldGroup>
            <FieldGroup label="Email" required>
              <input type="email" placeholder="example@example.com" className="cf-input" />
            </FieldGroup>
          </div>

          {/* Row 2: City + Phone */}
          <div className="cf-row">
            <FieldGroup label="City" required>
              <select className="cf-input cf-select">
                <option value="">Choose city</option>
                <option>Victoria Island</option>
                <option>Lekki</option>
                <option>Victoria Garden City</option>
                <option>Ikoyi</option>
                <option>Banana Island</option>
                <option>Eko Atlantic</option>
                <option>Ikeja</option>
                <option>Yaba</option>
                <option>Epe</option>
                <option>Gbagada</option>
              </select>
            </FieldGroup>
            <FieldGroup label="Phone Number" required>
              <input type="tel" placeholder="Please enter a valid phone number" className="cf-input" />
            </FieldGroup>
          </div>

          {/* Row 3: Message + Preferences */}
          <div className="cf-row cf-row--bottom">
            <div className="cf-message-col">
              <label className="cf-label">
                Message <span className="cf-required">*</span>
              </label>
              <textarea
                className="cf-input cf-textarea"
                rows={10}
                placeholder="Enter your message"
                maxLength={100}
                onChange={handleMessageChange}
              />
              <p className="cf-charcount">{charCount} characters</p>
              <button className="cf-btn" type="button">
                Submit &rsaquo;
              </button>
            </div>

            {/* Preferences panel — hidden on mobile via CSS */}
            <div className="cf-preferences">
              <div className="cf-option-group">
                <p className="cf-group-label">How should we contact you?</p>
                <div className="cf-options">
                  {["Phone", "Email", "Both"].map((opt) => (
                    <label key={opt} className="cf-option">
                      <input type="radio" name="contact-method" value={opt.toLowerCase()} />
                      {opt}
                    </label>
                  ))}
                </div>
              </div>

              <div className="cf-divider" />

              <div className="cf-option-group">
                <p className="cf-group-label">How did you hear about us?</p>
                <div className="cf-options">
                  {[["friend", "Friend", true], ["ts-academy", "TS Academy", false], ["others", "Others", false]].map(
                    ([val, label, checked]) => (
                      <label key={val} className="cf-option">
                        <input type="checkbox" name="source" value={val} defaultChecked={checked} />
                        {label}
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function FieldGroup({ label, required, children }) {
  return (
    <div className="cf-field">
      <label className="cf-label">
        {label} {required && <span className="cf-required">*</span>}
      </label>
      {children}
    </div>
  );
}

export default ContactForm;