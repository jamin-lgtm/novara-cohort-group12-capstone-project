import "./Footer.css";

function Footer() {
  return (
    <div className="footerdiv">
      <footer className="site-footer">
        <h5>About</h5>

        <p className="aboutgraph">
          We are Novara Chohort Group 12 — a dynamic team of innovators from TS Academy made up of
          Aniebiet, Samuel, Samuel, Moses, Amaka, and Ifeoma. United by curiosity and a passion
          for technology, we combine creativity, problem-solving, and teamwork to build
          clean, responsive, and user-focused web applications that turn ideas into
          impactful digital experiences.
        </p>

        <div className="footer-links">
          <a
            href="https://tsacademyonline.com/"
            target="_blank"
            rel="noreferrer"
          >
            TS Academy
          </a>

          <br />

          <a
            href="https://github.com/jamin-lgtm/novara-cohort-group12-capstone-project"
            target="_blank"
            rel="noreferrer"
          >
            Group Project Repo
          </a>
        </div>

        <hr className="hrbreak" />

        <div className="footer-bottom">
          <span>&copy; 2025 Amaka &amp; Ifeoma A. All rights reserved</span>

          <div className="footer-links">
            <span>Terms & Conditions</span>
            <span>Privacy Policy</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
