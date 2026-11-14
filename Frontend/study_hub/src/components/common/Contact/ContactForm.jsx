
import { useState } from "react";
import { IoMdSend } from "react-icons/io";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const collegeEmail = "yourcollege@example.com";

    const mailtoLink = `mailto:${collegeEmail}?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

        <div data-aos="fade-right">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
            Send Us a Message
          </h2>

          <p className="text-gray-600 leading-7 mb-6">
            Have a question about courses, learning materials, academic
            activities, or your LMS account? Fill out the form and
            contact our support team.
          </p>

          <div className="bg-blue-50 p-6 rounded-2xl">
            <h3 className="font-bold text-blue-800 mb-2">
              We are happy to help!
            </h3>
            <p className="text-gray-600 text-sm leading-6">
              Our team is available to assist students with their
              questions and concerns.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          data-aos="fade-left"
          className="bg-gray-50 p-7 md:p-9 rounded-2xl shadow-sm space-y-5"
        >
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message..."
              rows="5"
              required
              className="w-full px-4 py-3 rounded-xl border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
          >
            Send Message
            <IoMdSend size={18} />
          </button>
        </form>

      </div>
    </section>
  );
};

export default ContactForm;
