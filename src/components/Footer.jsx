import "../App.css";

function Footer() {
  return (
    <div className="footerdiv">
      <footer className="site-footer">
        <h5>About</h5>

        <p className="aboutgraph">
          We are Aniebiet, Samuel, Eagle and teammates from TS Academy, passionate
          about building clean, consistent, and responsive web applications.
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