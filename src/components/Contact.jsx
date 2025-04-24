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
    <section className="contact py-16 px-6 bg-gray-100" id="contact">
      <h2 className="text-3xl font-bold text-center mb-4">Contact Me</h2>
      <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8 text-center">
        Please reach out if you have any questions! I'm happy to jump on a video call to brainstorm projects and ideas. 
        Send me an email at <a href="mailto:mdrajinmashrursiam@gmail.com" className="text-blue-600">mdrajinmashrursiam@gmail.com</a> or 
        call me directly at <a href="tel:+8801811474623" className="text-blue-600">+880 181 147 4623</a>.
      </p>

      <div className="contact-icons flex justify-center gap-6 mb-8">
        <a href="mailto:mdrajinmashrursiam@gmail.com" target="_blank" rel="noopener noreferrer">
          <FaEnvelope className="text-3xl text-gray-800 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://linkedin.com/in/md-rajin-mashrur-siam" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-3xl text-gray-800 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://github.com/rajin-siam" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-3xl text-gray-800 hover:text-blue-600 transition-colors" />
        </a>
        <a href="https://www.facebook.com/rajinmashrur.siam/" target="_blank" rel="noopener noreferrer">
          <FaFacebook className="text-3xl text-gray-800 hover:text-blue-600 transition-colors" />
        </a>
      </div>

      <form className="contact-form flex flex-col items-center gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="Your email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        <textarea
          name="message"
          placeholder="Your message"
          required
          rows="5"
          value={formData.message}
          onChange={handleChange}
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold transition-colors hover:bg-blue-700"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
