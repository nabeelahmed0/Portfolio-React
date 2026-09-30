import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Send Successfully.");
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="section-heading">
          <span>Contact</span>
          <h2>Let's build something great together</h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <p>
              I am available for freelance projects, full-time roles and
              collaborations related to mobile application development.
            </p>

            <a href="mailto:nabeelahmed3d@gmail.com">
              nabeelahmed3d@gmail.com
            </a>

            <a href="tel:+03240675505">+92 324 0675505</a>

            <span>Karachi, Sindh, Pakistan</span>
          </div>

          <form onSubmit={handleSubmit}>
            <input
              name="name"
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your message"
              rows="6"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="primary-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
