import { Link } from "react-router-dom";
import { CheckCircle, ArrowLeft } from "lucide-react";
import "./MessageSent.css";

function MessageSent() {
  return (
    <main className="message-sent-page">
      <div className="message-sent-card">
        <CheckCircle size={64} className="success-icon" />

        <h1>Message Sent!</h1>

        <p>
          Thanks for reaching out. I’ve received your message and
          I’ll get back to you as soon as possible.
        </p>

        <Link to="/" className="back-home-btn">
          <ArrowLeft size={18} />
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default MessageSent;