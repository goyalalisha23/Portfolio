import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  // Store form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Store success message
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // Hide success message when user starts typing again
    setSubmitted(false);
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(false);

    // Get all form data
    const formDataToSend = new FormData(e.target);

    // Web3Forms Access Key
    formDataToSend.append(
      "access_key",
      import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const data = await response.json();

      if (data.success) {
        // Show success message
        setSubmitted(true);

        // Clear form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        console.log("Web3Forms Error:", data);
        alert("Message could not be sent. Please try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 md:py-24 px-5 sm:px-6 bg-slate-900/50"
    >
      <div className="max-w-6xl mx-auto">

        {/* ================= TITLE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-purple-400 mb-2">
            04. Contact
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Let's build something
            <span className="text-purple-400">
              {" "}amazing.
            </span>
          </h2>

          <p className="text-gray-500 mt-5 max-w-2xl text-sm sm:text-base leading-7">
            Have a project idea, collaboration opportunity,
            or simply want to say hello? Send me a message.
          </p>
        </motion.div>

        {/* ================= CONTENT ================= */}

        <div className="grid lg:grid-cols-2 gap-10 mt-12 md:mt-14">

          {/* ================= LEFT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            {/* STATUS */}

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20">
              <span className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse">
              </span>

              <span className="text-green-400 text-xs sm:text-sm">
                Available for opportunities
              </span>
            </div>

            {/* HEADING */}

            <h3 className="text-2xl sm:text-3xl font-bold mt-8">
              Have an idea?
            </h3>

            {/* DESCRIPTION */}

            <p className="text-gray-400 leading-7 mt-4 max-w-lg text-sm sm:text-base">
              Whether you're looking for a developer, have a
              project idea, or simply want to connect, feel free
              to reach out.
            </p>

            {/* ================= CONTACT DETAILS ================= */}

            <div className="space-y-5 mt-8">

              <ContactInfo
                icon={<FaEnvelope />}
                title="Email"
                value="goyalalisha001@gmail.com"
              />

              <ContactInfo
                icon={<FaMapMarkerAlt />}
                title="Location"
                value="Punjab,India"
              />

            </div>

            {/* ================= SOCIAL LINKS ================= */}

            <div className="mt-10">

              <p className="text-gray-500 text-sm mb-4">
                FIND ME ONLINE
              </p>

              <div className="flex flex-wrap gap-3">

                {/* GITHUB */}

                <a
                  href="https://github.com/goyalalisha23"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:text-purple-400 transition"
                >
                  <FaGithub />
                  GitHub
                </a>

                {/* LINKEDIN */}

                <a
                  href="https://www.linkedin.com/in/alisha-goyal-1105053a9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 sm:px-5 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/40 hover:text-purple-400 transition"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

              </div>

            </div>

          </motion.div>

          {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >

            <div className="relative">

              {/* PURPLE GLOW */}

              <div className="absolute -inset-2 bg-purple-600/20 blur-3xl rounded-3xl">
              </div>

              {/* ================= FORM CARD ================= */}

              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-5 sm:p-7 md:p-9">

                <h3 className="text-xl sm:text-2xl font-bold">
                  Send me a message
                </h3>

                <p className="text-gray-500 text-sm mt-2">
                  Fill in the details and I'll get back to you.
                </p>

                {/* ================= SUCCESS MESSAGE ================= */}

                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-5 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm"
                  >
                    ✓ Message sent successfully!
                  </motion.div>
                )}

                {/* ================= FORM ================= */}

                <form
                  onSubmit={handleSubmit}
                  className="mt-7 md:mt-8 space-y-5"
                >

                  {/* NAME */}

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-4 py-3 outline-none text-white text-sm sm:text-base placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition"
                    />
                  </div>

                  {/* EMAIL */}

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-4 py-3 outline-none text-white text-sm sm:text-base placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition"
                    />
                  </div>

                  {/* SUBJECT */}

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      required
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-4 py-3 outline-none text-white text-sm sm:text-base placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition"
                    />
                  </div>

                  {/* MESSAGE */}

                  <div>
                    <label className="block text-sm text-gray-400 mb-2">
                      Message
                    </label>

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell me about your project..."
                      required
                      className="w-full bg-slate-950/70 border border-white/10 rounded-xl px-4 py-3 outline-none text-white text-sm sm:text-base placeholder-gray-600 focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition resize-none"
                    ></textarea>
                  </div>

                  {/* ================= SEND BUTTON ================= */}

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 bg-purple-600 hover:bg-purple-700 active:scale-[0.98] py-3.5 rounded-xl font-semibold transition duration-300"
                  >
                    Send Message
                    <FaPaperPlane />
                  </button>

                </form>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

/* ================= CONTACT INFO ================= */

function ContactInfo({
  icon,
  title,
  value,
}) {
  return (
    <div className="flex items-center gap-4">

      {/* ICON */}

      <div className="w-11 h-11 sm:w-12 sm:h-12 shrink-0 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
        {icon}
      </div>

      {/* TEXT */}

      <div className="min-w-0">

        <p className="text-gray-500 text-sm">
          {title}
        </p>

        <p className="text-gray-300 text-sm sm:text-base break-all">
          {value}
        </p>

      </div>

    </div>
  );
}

export default Contact;