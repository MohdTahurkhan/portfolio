
import React, { useState } from "react";
import { motion } from "framer-motion";

const PROJECTS = [
  {
    id: "ims",
    title: "Incident Management System (IMS)",
    tech: ["Django", "DRF", "Postgres", "JWT"],
    desc:
      "Secure incident reporting & tracking system with role-based workflows and analytics.",
    long: `
A production-grade, role-based incident reporting and tracking system designed for engineering,
operations, and support teams. It includes multi-level ticket workflows (Open → Assigned → In-Progress 
→ Resolved → Closed), SLA timers, escalation policies, audit logs, and activity timelines.

Supports file attachments, comments, priority-based routing, engineer assignment,
reopen requests, and weekly/monthly analytics dashboards. A lightweight triage view lets admins
filter incidents by severity, tags, affected service, and engineer load.

Built using Django REST Framework with modular micro-API architecture, JWT authentication,
rate-limiting, pagination, and SQL-optimized queries for large datasets.`,
  },
  {
    id: "sms",
    title: "School Management System",
    tech: ["Django", "DRF", "MySQL", "Razorpay"],
    desc:
      "Complete ERP for schools with fee payments, dashboards & automated receipts.",
    long: `
A full-scale School ERP engineered to handle complex academic and administrative workflows such as:
student onboarding, attendance, class scheduling, exam management, staff roles, and analytics.

Integrated Razorpay for online fee payments with webhook verification, auto-receipt generation,
payment ledger updates, and reconciliation system. Teachers can upload marks, track attendance,
and share resources. Parents have a dedicated dashboard to track fees, attendance, and performance.

Admins get full control: user role assignment, academic year configuration, reporting,
Excel/PDF exports, and financial summaries. Built on DRF + MySQL for scalability.`,
  },
  {
    id: "technohub",
    title: "Techno Hub — Event Platform",
    tech: ["Django", "DRF", "Postgres", "Razorpay"],
    desc:
      "Event registration & sponsorship system with QR entry and payment flows.",
    long: `
A modern event registration and sponsorship management platform for tech fests, seminars, 
and large workshops. Includes participant registration, QR-coded entry, sponsorship tiers,
event scheduling, coordinator tools, and automated email confirmations.

Payment flows are integrated using Razorpay with webhook-based verification, idempotent handling,
and real-time reconciliation dashboard.

The insights module provides analytics for registrations, attendee engagement, revenue trends,
and event popularity. Built using DRF + Postgres for high throughput and reliability.`,
  },
  {
    id: "social-clones",
    title: "Pinterest & Instagram Clones",
    tech: ["HTML", "CSS", "JavaScript", "Node", "Express"],
    desc:
      "Social media apps with uploads, feeds, likes, comments & search.",
    long: `
Two visually rich and feature-complete social media clones demonstrating frontend architecture,
feed systems, and full-stack workflow.

Features:
- Authentication & session management  
- Image upload with preview  
- User profiles & follow system  
- Infinite scrolling feed  
- Likes, comments, and hashtag search  
- Responsive UI & mobile-first layouts  

Backend (Node + Express) handles upload storage, rate-limiting, and clean API structure.
Excellent portfolio projects showcasing full-stack abilities.`,
  },
  {
    id: "observability",
    title: "Observability Toolkit",
    tech: ["Python", "Prometheus", "Grafana", "Celery"],
    desc:
      "Monitoring toolkit for queues, workers & latency dashboards.",
    long: `
A complete observability suite built for monitoring background workers and distributed task systems. 
Includes Prometheus exporters for metrics like queue length, retries, task failures, execution times,
worker concurrency, and job throughput.

Grafana dashboards visualize system health, latency percentiles, SLA violations, and trends.

Provides a small Django-based UI for real-time worker state, historical analysis,
and debugging slow or failed jobs. Supports Celery, RQ, and custom adapters.`,
  },
  {
    id: "payment-gateway",
    title: "Smart Payment Flow System",
    tech: ["DRF", "Razorpay", "Webhooks"],
    desc:
      "Reusable payment integration system with safe webhook handling.",
    long: `
A production-ready payment engine with idempotent webhook processing, transaction safety,
signature verification, and settlement reconciliation.

Features include:
- Subscription support  
- One-time payments  
- Partial refunds  
- Retry-safe webhook handling  
- Fraud prevention filters  

Designed as a plug-and-play module for e-commerce, event platforms, and SaaS subscriptions.
Built using DRF with clean service-layer architecture.`,
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const cardVariant = {
  hidden: { opacity: 0, y: 12, scale: 0.98 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55 } },
};

export default function Projects() {
  const [open, setOpen] = useState(null);

  return (
    <section className="max-w-6xl mx-auto py-14 px-4">
      <motion.h1
        className="text-3xl md:text-4xl font-bold mb-6 text-slate-100"
        initial={{ opacity: 0, y: -12 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        viewport={{ once: true }}
      >
        Selected Projects
      </motion.h1>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        initial="hidden"
        whileInView="show"
        variants={container}
        viewport={{ once: true }}
      >
        {PROJECTS.map((p, i) => (
          <motion.article
            key={p.id}
            className="relative group rounded-2xl bg-slate-900/40 p-6 shadow-lg transform-gpu"
            variants={cardVariant}
            whileHover={{ y: -8, scale: 1.02 }}
            style={{ perspective: 1000 }}
          >
            <motion.div
              initial={{ rotateX: 0, rotateY: 0 }}
              whileHover={{ rotateX: 6, rotateY: -6 }}
              transition={{ duration: 0.25 }}
            >
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <p className="text-sm text-slate-400 mt-1">{p.desc}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="inline-block text-xs px-2 py-1 rounded-md bg-slate-800/60 text-slate-200 border border-slate-700"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6">
                <button
                  onClick={() => setOpen(p.id)}
                  className="px-4 py-2 rounded-md bg-sky-500 text-white text-sm hover:brightness-110 transition"
                >
                  View Project
                </button>
              </div>

              <motion.div
                className="absolute -top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-sky-500 to-indigo-500 text-white shadow"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
              >
                {p.title[0]}
              </motion.div>
            </motion.div>
          </motion.article>
        ))}
      </motion.div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(null)} />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.28 }}
            className="relative w-full max-w-3xl bg-slate-900 rounded-2xl p-6 shadow-xl border border-slate-700"
          >
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            {(() => {
              const proj = PROJECTS.find((x) => x.id === open);
              if (!proj) return null;
              return (
                <>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {proj.title}
                  </h3>
                  <p className="text-slate-300 whitespace-pre-line mb-4">{proj.long}</p>

                  <div className="flex flex-wrap gap-2 mt-3">
                    {proj.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 rounded-md bg-slate-800/60 text-slate-200 border border-slate-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </>
              );
            })()}
          </motion.div>
        </div>
      )}
    </section>
  );
}
