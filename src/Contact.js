import logo from './logo.svg';
import './App.css';

function Contact() {
  return (
    <div id="contact" className="contact">
      <h1>Contact Me</h1>
      <p>
        I'm always excited to collaborate on new projects! Feel free to reach out via the form below or connect with me on social media.
      </p>
      
      <div className="contact-container">

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input type="text" id="message" rows="4" placeholder="Your message here..." required />
          </div>
          <button type="submit" className="submit-button">Send Message</button>
        </form>

        <div className="contact-info">
          <h3>Connect with me:</h3>
          <ul>
            <li>
              <a href="">prastu5@gmail.com</a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">LinkedIn</a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">GitHub</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;
