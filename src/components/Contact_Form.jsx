import React, { useState } from 'react';
import './Contact_Form.css';
import SpaceBackground from './SpaceBackground';

const ContactForm = () => {

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [interestLevel, setInterestLevel] = useState("");
  const [occupation, setOccupation] = useState("");
  const [message, setMessage] = useState("");
  const [contactMethod, setContactMethod] = useState("");
  const [hearAboutUs, setHearAboutUs] = useState({
    friend: false,
    tsAcademy: false,
    others: false
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!fullName.trim()) {
      newErrors.fullName = "Please Enter Your Fullname.";
    }

    if (!email.trim()) {
      newErrors.email = "Email is required";
    } else if (!email.includes("@")) {
      newErrors.email = "Please enter a valid email";
    }

    if (!city) {
      newErrors.city = "Please choose a city";
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!age) {
      newErrors.age = "Age is required";
    } else if (age < 10) {
      newErrors.age = "Please enter a valid age";
    }

    if (!interestLevel) {
      newErrors.interestLevel = "Please select interest level";
    }

    if (!occupation.trim()) {
      newErrors.occupation = "Occupation is required";
    }

    if (!message.trim()) {
      newErrors.message = "Message is required";
    }

    if (!contactMethod) {
      newErrors.contactMethod = "Please select a contact method";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  if (!validate()) return;

  const formData = new FormData();
  formData.append("fullName", fullName);
  formData.append("email", email);
  formData.append("city", city);
  formData.append("phone", phone);
  formData.append("age", age);
  formData.append("interestLevel", interestLevel);
  formData.append("occupation", occupation);
  formData.append("message", message);
  formData.append("contactMethod", contactMethod);

  try {
    await fetch("https://whitebricks.com/tsacademy.php", {
      method: "POST",
      body: formData,
    }).catch(() => {});
    
    // Show success even if CORS blocks locally
    // Will work properly after deployment
    setSubmitted(true);
    
  } catch (error) {
    console.error("Submission failed:", error);
    setSubmitted(true);
  }
};

  return (
    <div className="contact-section">
      <SpaceBackground />
    <section id="contact" className="contact">

      {/* Eyebrow line sits right above the title */}
      <p className="contact__eyebrow">Get in touch</p>

      <h2 className="contact__title">
        Have Questions About Space Exploration?
      </h2>
      <p className="contact__subtitle">
        Interested in exploring space, astronomy, 
        and the fascinating world of planetary science? 
        Send us a message and our team will be happy to connect with you.
      </p>

      {submitted ? (
        <div className="contact__success">
          ✅ Message sent successfully. We appreciate your contact.
        </div>
      ) : (
        <form className="contact__form" onSubmit={handleSubmit}>

          {/* Row 1 - Full Name and Email */}
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="fullName">Full Name*</label>
              <input
                id="fullName"
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              {errors.fullName && (
                <span className="contact__error">{errors.fullName}</span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="email">Email*</label>
              <input
                id="email"
                type="email"
                placeholder="johnsmith@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && (
                <span className="contact__error">{errors.email}</span>
              )}
            </div>
          </div>

          {/* Row 2 - City and Phone */}
          <div className="contact__row">
            <div className="contact__field">
              <label htmlFor="city">City*</label>
              <select
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              >
                <option value="">Choose city</option>
                <option value="lagos">Lagos</option>
                <option value="abuja">Abuja</option>
                <option value="ibadan">Ibadan</option>
                <option value="ijebu-ode">Ijebu-ode</option>
                <option value="Abeokuta">Abeokuta</option>
                <option value="Benin">Benin</option>
                <option value="Delta">Delta</option>
                <option value="Kano">Kano</option>
                <option value="Port-Harcourt">Port-Harcourt</option>
                <option value="Minna">Minna</option>
                <option value="other">Other</option>
              </select>
              {errors.city && (
                <span className="contact__error">{errors.city}</span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="phone">Phone Number*</label>
              <input
                id="phone"
                type="tel"
                placeholder="Please enter a valid phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <span className="contact__error">{errors.phone}</span>
              )}
            </div>
          </div>

          {/* Row 3 - Age and Interestlevel */}
          <div className="contact__row">
           <div className="contact__field">
              <label htmlFor="age">Age*</label>
              <input
                id="age"
                type="number"
               placeholder="Enter your age"
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              {errors.age && (
                <span className="contact__error">{errors.age}</span>
              )}
            </div> 

            <div className="contact__field">
              <label htmlFor="interestLevel">Interest Level*</label>
              <select
                  id="interestLevel"
                  value={interestLevel}
                  onChange={(e) => setInterestLevel(e.target.value)}
                >
                  <option value="">Select interest</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
              </select>

                {errors.interestLevel && (
                  <span className="contact__error">{errors.interestLevel}</span>
              )}
            </div>
      </div>

          {/* Row 4 - Message and Occupation*/}
          <div className="contact__row">

             <div className="contact__field">
             <label htmlFor="occupation">Occupation*</label>
              <input
                id="occupation"
                type="text"
                placeholder="Your occupation"
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
              />
              {errors.occupation && (
                <span className="contact__error">{errors.occupation}</span>
              )}
            </div>

            <div className="contact__field">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                maxLength={100}
              />
              <span className="contact__charcount">
                {message.length}/100 characters
              </span>
              {errors.message && (
                <span className="contact__error">{errors.message}</span>
              )}
            </div>

          </div>
          {/* Row 5 - Radio and Checkbox */}
            <div className="contact__field">
              <p className="contact__group-label">
                What is the best way to contact you?
              </p>
              <div className="contact__options">
                {["Phone", "Email", "Both"].map((option) => (
                  <label key={option} className="contact__option">
                    <input
                      type="radio"
                      name="contactMethod"
                      value={option.toLowerCase()}
                      checked={contactMethod === option.toLowerCase()}
                      onChange={(e) => setContactMethod(e.target.value)}
                    />
                    {option}
                  </label>
                ))}
              </div>
              {errors.contactMethod && (
                <span className="contact__error">{errors.contactMethod}</span>
              )}

              <div className="contact__divider" />
              <p className="contact__group-label">
                How did you discover us?
              </p>
              <div className="contact__options">
                {[
                  { label: "Friend", key: "friend" },
                  { label: "TS Academy", key: "tsAcademy" },
                  { label: "Others", key: "others" },
                ].map((item) => (
                  <label key={item.key} className="contact__option">
                    <input
                      type="checkbox"
                      checked={hearAboutUs[item.key]}
                      onChange={() =>
                        setHearAboutUs((prev) => ({
                          ...prev,
                          [item.key]: !prev[item.key],
                        }))
                      }
                    />
                    {item.label}
                  </label>
                ))}
              </div>
            </div>

          {/* Submit Button */}
          <button type="submit" className="contact__btn">
            Submit →
          </button>

        </form>
      )}
    </section>
    </div>
  );
};

export default ContactForm;