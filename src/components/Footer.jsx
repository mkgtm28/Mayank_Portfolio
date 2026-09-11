import { Mail, ArrowUp } from "lucide-react";
import "./Footer.css";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <div className="footer-logo">
  <img src="/mg-favicon.png" alt="MG" />
</div>

          <div>
            <h3>Mayank Gautam</h3>
            <p>Full Stack & Backend Developer</p>
          </div>
        </div>

        <div className="footer-links">
          <a
  href="https://github.com/mkgtm28"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="GitHub"
>
  <svg
    className="footer-github-svg"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.04c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.23 1.83 1.23 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.6-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.82.57A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z"
    />
  </svg>
  GitHub
</a>
          <a
            href="mailto:mkgtm28@gmail.com"
            aria-label="Email"
          >
            <Mail size={19} />
            Email
          </a>
        </div>

        <button
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to top"
        >
          <ArrowUp size={19} />
        </button>

      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Mayank Gautam. All rights reserved.
        </p>

        <p>
          Built with React & Vite
        </p>
      </div>
    </footer>
  );
}

export default Footer;