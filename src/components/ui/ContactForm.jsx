import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formStatus, setFormStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateEmail = (email) => {
    // Simple email regex validation
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    if (!validateEmail(formData.email)) {
      setFormStatus({ type: "error", message: "Please enter a valid email address." });
      return;
    }

    // Simulate form submission
    setFormStatus({ type: "success", message: "Thank you for your message!" });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="max-w-3xl mx-auto py-12 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center text-gray-900 dark:text-white">Contact Me</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 font-semibold text-gray-700 dark:text-gray-300">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>
        {formStatus && (
          <p className={`text-center ${formStatus.type === "error" ? "text-red-600" : "text-green-600"}`}>
            {formStatus.message}
          </p>
        )}
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white font-semibold py-3 px-6 rounded hover:bg-blue-500 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
