import "./ContactForm.css";

function ContactForm() {
  return (
    <section className="contact-section" id="contact-form">
      <h2 className="contact-title">
        Have Questions About Planetary Science?
      </h2>

      <p className="contact-description">
        Interested in learning more about space, astronomy, or how planetary
        data is collected and analyzed? Reach out and we'll get back to you.
      </p>

      <div className="contact-container">
        <form className="contact-form" action="#" method="post">
          {/* Full Name and Email */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullname">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullname"
                name="fullname"
                placeholder="Full name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                required
              />
            </div>
          </div>

          {/* City and Phone Number */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">
                City <span className="required">*</span>
              </label>
              <select id="city" name="city" required>
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
            </div>

            <div className="form-group">
              <label htmlFor="phone">
                Phone Number <span className="required">*</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                placeholder="Please enter a valid phone number"
                required
              />
            </div>
          </div>

          {/* Message and Preferences */}
          <div className="content-row">
            {/* Message Section */}
            <div className="message-section">
              <label htmlFor="message">
                Message <span className="required">*</span>
              </label>

              <textarea
                id="message"
                name="message"
                rows="10"
                placeholder="Enter your message"
                maxLength="100"
                required
              ></textarea>

              <p className="character-count">100 characters</p>

              <button className="submit-button" type="submit">
                Submit &gt;
              </button>
            </div>

            {/* Contact Preferences */}
            <div className="preferences-section">
              <div className="option-group">
                <h4>How should we contact you?</h4>

                <label>
                  <input
                    type="radio"
                    name="contact-method"
                    value="phone"
                    required
                  />
                  Phone
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact-method"
                    value="email"
                  />
                  Email
                </label>

                <label>
                  <input
                    type="radio"
                    name="contact-method"
                    value="both"
                  />
                  Both
                </label>
              </div>

              <div className="option-group">
                <h4>How did you hear about us?</h4>

                <label>
                  <input
                    type="checkbox"
                    name="source"
                    value="friend"
                    defaultChecked
                  />
                  Friend
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="source"
                    value="ts-academy"
                  />
                  TS Academy
                </label>

                <label>
                  <input
                    type="checkbox"
                    name="source"
                    value="others"
                  />
                  Others
                </label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;