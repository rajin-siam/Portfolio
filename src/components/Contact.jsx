import React, { useState } from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you! Message from ${formData.email} received.`);
    // You can later connect this to an email API like EmailJS or Formspree
    setFormData({ email: '', message: '' });
  };

  return (
    <section className="contact" id="contact">
      <h2>Contact Me</h2>
      <p className="contact-message">
        Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. 
        Send me an email at <a href="mailto:mdrajinmashrursiam@gmail.com">mdrajinmashrursiam@gmail.com</a> or 
        call me directly at <a href="tel:+8801811474623">+880 181 147 4623</a>.
      </p>

      <div className="contact-icons">
        <a href="mailto:mdrajinmashrursiam@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="icon" />
        </a>
        <a href="https://linkedin.com/in/md-rajin-mashrur-siam" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/rajin-siam" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.facebook.com/rajinmashrur.siam/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="icon" />
        </a>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
