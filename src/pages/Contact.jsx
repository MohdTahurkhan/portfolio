

// src/pages/Contact.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";

/**
 * Contact + Professional footer
 * - Polished contact form (honeypot, validation, retry)
 * - Responsive footer with links & social icons
 * - Back-to-top button (smooth scroll)
 */

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });
  const [attempts, setAttempts] = useState(0);
  const ACCESS_KEY = "325f8083-e5cc-489c-bfbc-7ac2e17fa806";
  const formRef = useRef(null);

  const resetStatus = (afterMs = 3000) => {
    setTimeout(() => setStatus({ loading: false, ok: null, msg: "" }), afterMs);
  };

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    const formEl = formRef.current;
    const formData = new FormData(formEl);

    // honeypot anti-spam
    if (formData.get("hp") && formData.get("hp").trim().length > 0) {
      setStatus({ loading: false, ok: true, msg: "Message sent successfully!" });
      formEl.reset();
      resetStatus(2000);
      return;
    }

    const name = (formData.get("name") || "").toString().trim();
    const email = (formData.get("email") || "").toString().trim();
    const message = (formData.get("message") || "").toString().trim();

    if (!name || !email || !message) {
      setStatus({ loading: false, ok: false, msg: "Please fill in all required fields." });
      resetStatus(4000);
      return;
    }
    if (!validateEmail(email)) {
      setStatus({ loading: false, ok: false, msg: "Please enter a valid email address." });
      resetStatus(4000);
      return;
    }

    formData.set("access_key", ACCESS_KEY);
    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (json.success) {
        setStatus({ loading: false, ok: true, msg: "Message sent successfully — I will reply soon!" });
        formEl.reset();
        setAttempts(0);
        resetStatus(6000);
      } else {
        const serverMsg = json.message || "Failed to send. Please try again.";
        setStatus({ loading: false, ok: false, msg: serverMsg });
        setAttempts((a) => a + 1);
        resetStatus(6000);
      }
    } catch (err) {
      console.error("Contact submit error:", err);
      setStatus({ loading: false, ok: false, msg: "Network error — please try again." });
      setAttempts((a) => a + 1);
      resetStatus(6000);
    }
  };

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const currentYear = new Date().getFullYear();

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.05 }}
          className="text-2xl font-bold text-white mb-2"
        >
          Contact
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="text-slate-300 mb-4"
        >
          Interested in collaborating or hiring? Send a short message — I usually respond within a day.
        </motion.p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="grid gap-3"
          aria-live="polite"
          aria-busy={status.loading}
        >
          <input type="text" name="hp" autoComplete="off" tabIndex="-1" style={{ display: "none" }} />

          <label className="sr-only" htmlFor="contact-name">Your name</label>
          <motion.input
            id="contact-name"
            name="name"
            placeholder="Your name"
            required
            className="p-3 rounded-md bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.12 }}
          />

          <label className="sr-only" htmlFor="contact-email">Email</label>
          <motion.input
            id="contact-email"
            name="email"
            type="email"
            placeholder="Email"
            required
            className="p-3 rounded-md bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.16 }}
          />

          <label className="sr-only" htmlFor="contact-message">Message</label>
          <motion.textarea
            id="contact-message"
            name="message"
            placeholder="Message"
            required
            rows="5"
            className="p-3 rounded-md bg-slate-900 text-white border border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.20 }}
          />

          <div className="flex items-center gap-3">
            <motion.button
              type="submit"
              disabled={status.loading}
              whileHover={status.loading ? {} : { y: -3 }}
              whileTap={{ scale: 0.98 }}
              className="px-4 py-2 bg-sky-500 text-white rounded-md disabled:opacity-60 shadow"
              transition={{ type: "spring", stiffness: 300 }}
              aria-disabled={status.loading}
            >
              {status.loading ? (
                <span className="inline-flex items-center gap-2">
                  <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.15" strokeWidth="4" />
                    <path d="M22 12a10 10 0 00-10-10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                  Sending…
                </span>
              ) : (
                "Send Message"
              )}
            </motion.button>

            <button
              type="button"
              onClick={() => {
                formRef.current?.reset();
                setStatus({ loading: false, ok: null, msg: "" });
              }}
              className="px-3 py-2 rounded-md border border-slate-700 text-slate-200 hover:bg-slate-800 transition"
            >
              Reset
            </button>
          </div>

          <div className="min-h-[2rem] mt-1">
            {status.ok === true && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-md p-3 bg-emerald-900/20 border border-emerald-600 text-emerald-300"
                role="status"
              >
                <div className="font-medium">Sent — thank you!</div>
                <div className="text-sm">{status.msg}</div>
              </motion.div>
            )}

            {status.ok === false && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-md p-3 bg-rose-900/10 border border-rose-600 text-rose-300"
                role="alert"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="font-medium">Could not send</div>
                    <div className="text-sm mt-1">{status.msg}</div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <button
                      onClick={() => {
                        setStatus({ loading: false, ok: null, msg: "" });
                        setTimeout(() => {
                          formRef.current?.dispatchEvent(new Event("submit", { bubbles: true, cancelable: true }));
                        }, 100);
                      }}
                      className="px-2 py-1 rounded bg-sky-500 text-white text-xs hover:brightness-110"
                    >
                      Retry
                    </button>

                    <button
                      onClick={() => {
                        formRef.current?.reset();
                        setStatus({ loading: false, ok: null, msg: "" });
                      }}
                      className="px-2 py-1 rounded border border-slate-700 text-xs hover:bg-slate-800"
                    >
                      Clear
                    </button>
                  </div>
                </div>

                {attempts > 0 && <div className="text-xs text-slate-400 mt-2">Attempts: {attempts}</div>}
              </motion.div>
            )}
          </div>
        </form>
      </motion.div>

      {/* FOOTER (professional website footer) */}
      <footer className="mt-12 bg-slate-900/60 border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-4 py-10">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            {/* left: brand */}
            <div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow">
                  MT
                </div>
                <div>
                  <div className="text-lg font-semibold text-slate-100">Mohd. Tahur Khan</div>
                  <div className="text-sm text-slate-400">Backend-first Full-Stack Engineer</div>
                </div>
              </div>

              <p className="mt-4 text-sm text-slate-400 max-w-sm">
                Building reliable APIs, scalable databases, and payment flows. Available for freelance and full-time roles.
              </p>

              <div className="mt-4 flex gap-3">
                {/* LinkedIn */}
                <a aria-label="LinkedIn" href="https://www.linkedin.com/in/mohd-tahur-khan-b02248239" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-800 transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-200">
                    <path d="M4.98 3.5a2.3 2.3 0 11.001 0zM3 8.9h4v12H3zM9 8.9h3.8v1.6h.1c.5-.9 1.8-1.8 3.7-1.8 4 0 4.7 2.6 4.7 6v7.2h-4v-6.4c0-1.5 0-3.5-2.1-3.5-2.1 0-2.4 1.6-2.4 3.4v6.5H9z" fill="currentColor"/>
                  </svg>
                </a>

                {/* GitHub */}
                <a aria-label="GitHub" href="https://github.com/MohdTahurkhan" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-slate-800 transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-200">
                    <path d="M12 .5C5.7.5.9 5.3.9 11.6c0 4.7 3 8.7 7.1 10.1.5.1.7-.2.7-.5v-1.8c-2.9.6-3.6-1.4-3.6-1.4-.5-1.2-1.3-1.6-1.3-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 .1 1.6.7 2 .9.1-.7.4-1.3.8-1.6-2.3-.3-4.8-1.2-4.8-5.2 0-1.2.4-2.2 1.1-3-.1-.3-.5-1.4.1-2.8 0 0 .9-.3 3 .1.9-.2 1.8-.3 2.7-.3s1.8.1 2.7.3c2.1-.4 3-.1 3-.1.6 1.4.2 2.5.1 2.8.7.8 1.1 1.8 1.1 3 0 4-2.5 5-4.9 5.2.4.3.7.9.7 1.8v2.7c0 .3.2.6.7.5 4.1-1.4 7.1-5.4 7.1-10.1C23.1 5.3 18.3.5 12 .5z" fill="currentColor"/>
                  </svg>
                </a>

                {/* Email */}
                <a aria-label="Email" href="mailto:khantahoor568@gmail.com" className="p-2 rounded-md hover:bg-slate-800 transition">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-slate-200">
                    <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" fill="currentColor"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* middle: quick links */}
            <div className="flex flex-col">
              <div className="text-sm font-semibold text-slate-200 mb-3">Quick links</div>
              <nav className="flex flex-col gap-2 text-sm">
                <a href="#home" className="text-slate-400 hover:text-sky-300 transition">Home</a>
                <a href="#about" className="text-slate-400 hover:text-sky-300 transition">About</a>
                <a href="#projects" className="text-slate-400 hover:text-sky-300 transition">Projects</a>
                <a href="#resume" className="text-slate-400 hover:text-sky-300 transition">Resume</a>
                <a href="#contact" className="text-slate-400 hover:text-sky-300 transition">Contact</a>
              </nav>
            </div>

            {/* right: small contact card */}
            <div>
              <div className="text-sm font-semibold text-slate-200 mb-3">Contact</div>
              <div className="text-sm text-slate-400">
                <div>✉ <a href="mailto:khantahoor568@gmail.com" className="text-sky-400">khantahoor568@gmail.com</a></div>
                <div className="mt-2">📞 +91 8319171205</div>
                <div className="mt-2">📍 Bhopal, Madhya Pradesh</div>
              </div>

              <div className="mt-4 text-xs text-slate-500">
                <a href="/privacy" className="hover:text-slate-300 transition mr-3">Privacy</a>
                <a href="/terms" className="hover:text-slate-300 transition">Terms</a>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-slate-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-500">&copy; {currentYear} Mohd. Tahur Khan. All rights reserved.</div>
            <div className="text-xs text-slate-400">Built with ❤️ • Backend-first • APIs & Payments</div>
          </div>
        </div>
      </footer>

      {/* Back to top floating button */}
      <button
        onClick={scrollToTop}
        title="Back to top"
        className="fixed right-6 bottom-6 z-50 w-12 h-12 rounded-full bg-sky-500 shadow-lg flex items-center justify-center text-white hover:scale-105 transition"
        aria-label="Back to top"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 5l-7 7h4v7h6v-7h4z" fill="currentColor" />
        </svg>
      </button>
    </div>
  );
}
