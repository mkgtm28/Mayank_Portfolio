import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <main className="contact-page">

      {/* Header */}
      <section className="contact-header">
        <p className="contact-label">GET IN TOUCH</p>

        <h1>
          Let's <span>Connect.</span>
        </h1>

        <p>
          Have a project idea, a question, or just want to talk
          about development? Feel free to reach out.
        </p>
      </section>

      {/* Contact Content */}
      <section className="contact-container">

        {/* Left Side */}
        <div className="contact-info">

          <h2>Let's work together.</h2>

          <p>
            I'm always interested in learning, building new projects,
            and connecting with people who enjoy technology and
            problem-solving.
          </p>

          <div className="contact-details">

            <a
              href="mailto:mkgtm28@gmail.com"
              className="contact-detail"
            >
              <div className="contact-icon">
                <Mail size={21} />
              </div>

              <div>
                <span>Email</span>
                <strong>mkgtm28@gmail.com</strong>
              </div>

              <ArrowUpRight size={18} />
            </a>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={21} />
              </div>

              <div>
                <span>Location</span>
                <strong>India</strong>
              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="contact-form-wrapper">

          <h2>Send a message</h2>

          <form
  className="contact-form"
  action="https://formsubmit.co/mkgtm28@gmail.com"
  method="POST"
>
  <input
    type="hidden"
    name="_subject"
    value="New message from Mayank Gautam Portfolio"
  />

  <input
    type="hidden"
    name="_captcha"
    value="false"
  />

  <input
    type="hidden"
    name="_template"
    value="table"
  />

  <div className="form-group">
    <label htmlFor="name">Name</label>

    <input
      type="text"
      id="name"
      name="name"
      placeholder="Your name"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="email">Email</label>

    <input
      type="email"
      id="email"
      name="email"
      placeholder="your@email.com"
      required
    />
  </div>

  <div className="form-group">
    <label htmlFor="message">Message</label>

    <textarea
      id="message"
      name="message"
      rows="6"
      placeholder="Tell me about your project..."
      required
    ></textarea>
  </div>

  <button type="submit" className="send-button">
    Send Message
    <Send size={18} />
  </button>
</form>

        </div>

      </section>

      {/* Bottom */}
      <section className="contact-bottom">

        <p>
          Currently building, learning, and improving every day.
        </p>

        <h2>
          <span>Code.</span> Learn. Build. Repeat.
        </h2>

      </section>

    </main>
  );
}

export default Contact;