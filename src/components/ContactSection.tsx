"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactSection.module.css";

const SERVICE_ID = "service_pf0wokp";
const TEMPLATE_ID = "template_kvjo4kc";
const PUBLIC_KEY = "3Gsdv9gIxDk1knztL";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-alt">
      <div className="container">
        <div className="section-header">
          <span className="section-badge">Get In Touch</span>
          <h2>Contact Us</h2>
          <p>
            Have questions about our research, datasets, or interested in collaboration? We&apos;d love to hear from you.
          </p>
        </div>

        <div className={styles.grid}>
          {/* ── Contact Info ── */}
          <div className={styles.infoPanel}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Email</h4>
                <p className={styles.infoText}>deranindu@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Location</h4>
                <p className={styles.infoText}>Sri Lanka Institute of Information Technology, Malabe, Sri Lanka</p>
              </div>
            </div>

            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4 className={styles.infoTitle}>Department</h4>
                <p className={styles.infoText}>Faculty of Computing</p>
              </div>
            </div>
          </div>

          {/* ── Contact Form ── */}
          <form ref={formRef} className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.formGroup}>
                <label htmlFor="contact-name">Name</label>
                <input
                  type="text"
                  id="contact-name"
                  name="from_name"
                  required
                  placeholder="Your name"
                  disabled={status === "sending"}
                />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="contact-email">Email</label>
                <input
                  type="email"
                  id="contact-email"
                  name="from_email"
                  required
                  placeholder="you@email.com"
                  disabled={status === "sending"}
                />
              </div>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-subject">Subject</label>
              <input
                type="text"
                id="contact-subject"
                name="subject"
                placeholder="Research collaboration"
                disabled={status === "sending"}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                required
                placeholder="Tell us about your inquiry..."
                disabled={status === "sending"}
              />
            </div>

            {/* Feedback banners */}
            {status === "success" && (
              <div className={styles.alertSuccess}>
                ✅ Message sent! We&apos;ll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className={styles.alertError}>
                ❌ Something went wrong. Please try again or email us directly.
              </div>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={status === "sending"}
            >
              {status === "sending" ? (
                <>
                  <span className={styles.spinner} />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
