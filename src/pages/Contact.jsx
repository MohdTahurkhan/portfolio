// import React from 'react'
// import { motion } from 'framer-motion'

// export default function Contact() {
//   return (
//     <motion.div initial={{opacity:0, y:8}} animate={{opacity:1, y:0}} transition={{duration:0.6}}>
//       <h2 className="text-2xl font-bold text-white">Contact</h2>
//       <p className="text-slate-200 mt-2">Interested in working together? Drop a message.</p>
//       <form className="mt-4 grid gap-3 max-w-md">
//         <input className="p-3 rounded-md bg-slate-900 text-slate-200 border border-slate-700" placeholder="Your name" />
//         <input className="p-3 rounded-md bg-slate-900 text-slate-200 border border-slate-700" placeholder="Email" />
//         <textarea className="p-3 rounded-md bg-slate-900 text-slate-200 border border-slate-700" rows="4" placeholder="Message"></textarea>
//         <button type="button" className="px-4 py-2 bg-sky-500 text-white rounded-md">Send Message</button>
//       </form>
//     </motion.div>
//   )
// }


// Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, ok: null, msg: "" });

  const ACCESS_KEY = "325f8083-e5cc-489c-bfbc-7ac2e17fa806";

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;

    const formEl = e.target;
    const formData = new FormData(formEl);
    formData.set("access_key", ACCESS_KEY);

    setStatus({ loading: true, ok: null, msg: "" });

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const json = await res.json();

      if (json.success) {
        setStatus({ loading: false, ok: true, msg: "Message sent successfully!" });
        formEl.reset();
      } else {
        setStatus({ loading: false, ok: false, msg: json.message || "Failed to send." });
      }
    } catch (err) {
      console.error(err);
      setStatus({ loading: false, ok: false, msg: "Network error — please try again." });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-md mx-auto"
    >
      <motion.h2
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.05 }}
        className="text-2xl font-bold text-white"
      >
        Contact
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
        className="text-slate-200 mt-2"
      >
        Interested in working together? Drop a message.
      </motion.p>

      <motion.form
        onSubmit={handleSubmit}
        className="mt-4 grid gap-3"
        initial="idle"
        whileTap={{ scale: 0.995 }}
        aria-live="polite"
      >
        {/* hidden access_key will be set programmatically before send */}
        <input type="hidden" name="access_key" value={ACCESS_KEY} />

        <motion.input
          name="name"
          placeholder="Your name"
          required
          className="p-3 rounded-md bg-slate-900 text-white border border-slate-700"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.12 }}
        />

        <motion.input
          name="email"
          type="email"
          placeholder="Email"
          required
          className="p-3 rounded-md bg-slate-900 text-white border border-slate-700"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.16 }}
        />

        <motion.textarea
          name="message"
          placeholder="Message"
          required
          rows="4"
          className="p-3 rounded-md bg-slate-900 text-white border border-slate-700"
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.20 }}
        />

        <motion.button
          type="submit"
          disabled={status.loading}
          whileHover={status.loading ? {} : { y: -3 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 bg-sky-500 text-white rounded-md disabled:opacity-60"
          transition={{ type: "spring", stiffness: 300 }}
        >
          {status.loading ? "Sending..." : "Send Message"}
        </motion.button>

        <div className="min-h-[1.5rem]">
          {status.ok === true && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-green-400 mt-2"
            >
              {status.msg}
            </motion.p>
          )}
          {status.ok === false && (
            <motion.p
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-rose-400 mt-2"
            >
              {status.msg}
            </motion.p>
          )}
        </div>
      </motion.form>
    </motion.div>
  );
}