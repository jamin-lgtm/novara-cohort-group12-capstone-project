import React, { useState } from "react"; // React import with useState hook for local component state
import "./Contact_Form.css"; // Import contact form styles
import SpaceBackground from "./SpaceBackground"; // Background canvas component behind the form

function ContactForm() {
  const [charCount, setCharCount] = useState(100); // remaining characters for the message textarea
  const [status, setStatus] = useState({ type: '', message: '' }); // submission status message
  const [submitting, setSubmitting] = useState(false); // controls submit button state

  const handleMessageChange = (e) => {
    setCharCount(100 - e.target.value.length); // update remaining character count on message input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      form.reportValidity(); // show HTML validation bubbles
      return;
    }

    setSubmitting(true);
    setStatus({ type: '', message: '' });

    const formData = new FormData(form);

    try {
      const response = await fetch('https://whitebricks.com/tsacademy.php', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Form submission failed');
      }

      setStatus({ type: 'success', message: 'Thanks! Your message has been sent successfully.' });
      form.reset();
      setCharCount(100);
    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus({ type: 'error', message: 'There was a problem submitting your form. Please try again.' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="contact-section">
      <SpaceBackground /> {/* Canvas background layer behind the white form card */}

      <div className="contact-card">
        <p className="contact__eyebrow">Contact Us</p>

        <h2 className="contact__title">
          Have Questions About Planetary Science?
        </h2>

        <p className="contact__subtitle">
          Interested in learning more about space, astronomy, or how planetary
          data is collected and analyzed? Reach out and we'll get back to you.
        </p>

        <form className="contact__form" action="https://whitebricks.com/tsacademy.php" method="post" onSubmit={handleSubmit}>

          {/* Row 1: Full Name + Email */}
          <div className="cf-row">
            <FieldGroup label="Full Name" required>
              <input
                type="text"
                name="fullname"
                placeholder="Full name"
                className="cf-input"
                required
              />
            </FieldGroup>
            <FieldGroup label="Email" required>
              <input
                type="email"
                name="email"
                placeholder="example@example.com"
                className="cf-input"
                required
              />
            </FieldGroup>
          </div>

          {/* Row 2: City + Phone */}
          <div className="cf-row">
            <FieldGroup label="City" required>
              <select name="city" className="cf-input cf-select" required>
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
              <input
                type="tel"
                name="phone"
                placeholder="Please enter a valid phone number"
                className="cf-input"
                required
                inputMode="tel"
                pattern="\+?[0-9\s\-]{7,20}"
              />
            </FieldGroup>
          </div>

          {/* Row 3: Message + Preferences */}
          <div className="cf-row cf-row--bottom">
            <div className="cf-message-col">
              <label className="cf-label">
                Message <span className="cf-required">*</span>
              </label>
              <textarea
                name="message"
                className="cf-input cf-textarea"
                rows={10}
                placeholder="Enter your message"
                maxLength={100}
                required
                onChange={handleMessageChange}
              />
              <p className="cf-charcount">{charCount} characters</p>
              {status.message && (
                <p className={`cf-status-message cf-status-message--${status.type}`} aria-live="polite">
                  {status.message}
                </p>
              )}
              <button className="cf-btn" type="submit" disabled={submitting}>
                {submitting ? 'Sending...' : 'Submit ›'}
              </button>
            </div>

            {/* Preferences panel — hidden on mobile via CSS */}
            <div className="cf-preferences">
              <div className="cf-option-group">
                <p className="cf-group-label">How should we contact you?</p>
                <div className="cf-options">
                  {["Phone", "Email", "Both"].map((opt) => (
                    <label key={opt} className="cf-option"> {/* radio labels share the same name to group them */}
                      <input type="radio" name="contact-method" value={opt.toLowerCase()} required />
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
                        <input type="checkbox" name="source[]" value={val} defaultChecked={checked} />
                        {label}
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

        </form>
      </div>
    </section>
  );
}

// Reusable field wrapper that renders a label and its input child together
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