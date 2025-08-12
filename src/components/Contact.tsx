'use client';

import { useMemo, useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi';

const ACCENT = '#0066A1';

type Form = { name: string; email: string; subject: string; message: string; company?: string };

export default function Contact() {
  const [formData, setFormData] = useState<Form>({
    name: '', email: '', subject: '', message: '', company: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [showErrors, setShowErrors] = useState(false);

  // refs
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const subjectRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const errors = useMemo(() => {
    const e: Partial<Record<keyof Form, string>> = {};
    if (!formData.name.trim()) e.name = 'Your name is required.';
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email)) e.email = 'Enter a valid email.';
    if (formData.subject.trim().length < 3) e.subject = 'Subject is too short.';
    if (formData.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    if (formData.company && formData.company.trim().length > 0) e.company = 'Spam detected.';
    return e;
  }, [formData]);

  useEffect(() => {
    if (!showErrors) return;
    if (errors.name && nameRef.current) nameRef.current.focus();
    else if (errors.email && emailRef.current) emailRef.current.focus();
    else if (errors.subject && subjectRef.current) subjectRef.current.focus();
    else if (errors.message && messageRef.current) messageRef.current.focus();
  }, [showErrors, errors]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError('');
    setShowErrors(true);
    if (Object.keys(errors).length) return;

    try {
      setIsSubmitting(true);
      await new Promise(r => setTimeout(r, 1200)); // TODO: replace with fetch('/api/contact', ...)
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
      setShowErrors(false);
      setTimeout(() => setSubmitSuccess(false), 4500);
    } catch {
      setSubmitError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="relative py-24 bg-transparent overflow-hidden border-slate-300/40 dark:border-white/15"
    >
      {/* minimalist divider + soft glow */}

      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-14">
          <h2 id="contact-title" className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Get In <span style={{ color: ACCENT }}>Touch</span>
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Have a project in mind or want to discuss opportunities? I’d love to hear from you!
          </p>
          <div className="mt-6 flex justify-center">
            <span className="h-1 w-28 rounded-full" style={{ background: `linear-gradient(90deg, ${ACCENT}, transparent)` }} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              Feel free to reach out through any of these channels. I’m open to new projects, creative ideas, and collaborations.
            </p>

            <div className="space-y-6 mb-8">
              <InfoRow icon={<FiMail className="h-5 w-5" />} label="Email" value="rajat.09x@gmail.com" href="mailto:rajat.09x@gmail.com" />
              <InfoRow icon={<FiPhone className="h-5 w-5" />} label="Phone" value="+91 9278664101" href="tel:+918278664101" />
              <InfoRow icon={<FiMapPin className="h-5 w-5" />} label="Location" value="Hyd India" />
            </div>

            {/* <div className="rounded-2xl p-6 bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-sm backdrop-blur">
              <h4 className="text-lg font-semibold mb-2 text-slate-900 dark:text-white">Availability</h4>
              <p className="text-slate-600 dark:text-slate-300">
                Currently available for freelance or full-time roles. Typical response time: within 24 hours.
              </p>
            </div> */}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative rounded-2xl p-8 bg-white/70 dark:bg-white/5 border border-slate-200/60 dark:border-white/10 shadow-sm backdrop-blur">
              <div aria-hidden className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: `inset 0 0 0 1px ${ACCENT}22` }} />
              <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-white">Send Me a Message</h3>

              {submitSuccess && (
                <div role="alert" className="mb-6 p-4 rounded-lg border border-emerald-300/60 bg-emerald-50 text-emerald-800 dark:bg-emerald-400/10 dark:text-emerald-200 dark:border-emerald-400/30">
                  Thanks! I’ll get back to you as soon as possible.
                </div>
              )}
              {submitError && (
                <div role="alert" className="mb-6 p-4 rounded-lg border border-red-300/60 bg-red-50 text-red-800 dark:bg-red-400/10 dark:text-red-200 dark:border-red-400/30">
                  {submitError}
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate>
                {/* Honeypot */}
                <input type="text" name="company" value={formData.company} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                <Field id="name" inputRef={nameRef} label="Your Name" value={formData.name} onChange={handleChange} error={errors.name} showErrors={showErrors} placeholder="John Doe" />
                <Field id="email" inputRef={emailRef} type="email" label="Your Email" value={formData.email} onChange={handleChange} error={errors.email} showErrors={showErrors} placeholder="john@example.com" autoComplete="email" />
                <Field id="subject" inputRef={subjectRef} label="Subject" value={formData.subject} onChange={handleChange} error={errors.subject} showErrors={showErrors} placeholder="Project inquiry" />
                <FieldTextArea id="message" textareaRef={messageRef} label="Your Message" value={formData.message} onChange={handleChange} error={errors.message} showErrors={showErrors} placeholder="Hello, I’d like to talk about…" />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-white shadow transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ background: `linear-gradient(90deg, ${ACCENT}, ${ACCENT}CC)` }}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.37 0 0 5.37 0 12h4z" />
                      </svg>
                      Sending…
                    </>
                  ) : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- tiny presentational bits ---------- */

function InfoRow({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label?: string;          // ← made optional
  value?: string;          // ← made optional
  href?: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <div
        className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 border
                   bg-white/70 dark:bg-white/5 border-slate-200/60 dark:border-white/10
                   shadow-sm backdrop-blur"
        style={{ boxShadow: `0 8px 24px ${ACCENT}22, inset 0 0 0 1px ${ACCENT}22` }}
      >
        <span className="text-slate-900 dark:text-white">{icon}</span>
      </div>
      <div>
        {label && <h4 className="text-lg font-semibold text-slate-900 dark:text-white mb-1">{label}</h4>}
        {href && value ? (
          <a href={href} className="font-medium" style={{ color: ACCENT }}>
            {value}
          </a>
        ) : value ? (
          <p className="text-slate-600 dark:text-slate-300">{value}</p>
        ) : null}
      </div>
    </div>
  );
}

function Field({
  id,
  inputRef,
  label,
  value,
  onChange,
  error,
  showErrors,
  type = 'text',
  placeholder,
  autoComplete,
}: {
  id: string;
  inputRef?: React.RefObject<HTMLInputElement | null>;  // ← accept null
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  showErrors?: boolean;
  type?: string;
  placeholder?: string;
  autoComplete?: string;
}) {
  const hasError = !!error && !!showErrors;
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-slate-700 dark:text-slate-200 font-medium mb-2">
        {label}
      </label>
      <input
        ref={inputRef}
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete={autoComplete}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 rounded-lg border bg-white/90 dark:bg-slate-900/40
                    border-slate-200/70 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-offset-0 ${hasError ? 'ring-2 ring-red-500/70 border-red-500/60' : ''}`}
        style={{ ['--tw-ring-color' as any]: hasError ? '#ef4444' : ACCENT }}
        required
      />
      {hasError && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}

function FieldTextArea({
  id,
  textareaRef,
  label,
  value,
  onChange,
  error,
  showErrors,
  placeholder,
}: {
  id: string;
  textareaRef?: React.RefObject<HTMLTextAreaElement | null>; // ← accept null
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  error?: string;
  showErrors?: boolean;
  placeholder?: string;
}) {
  const hasError = !!error && !!showErrors;
  return (
    <div className="mb-6">
      <label htmlFor={id} className="block text-slate-700 dark:text-slate-200 font-medium mb-2">
        {label}
      </label>
      <textarea
        ref={textareaRef}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        rows={5}
        placeholder={placeholder}
        aria-invalid={hasError}
        aria-describedby={hasError ? `${id}-error` : undefined}
        className={`w-full px-4 py-3 rounded-lg border bg-white/90 dark:bg-slate-900/40
                    border-slate-200/70 dark:border-white/10 text-slate-900 dark:text-white placeholder-slate-400
                    focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none ${hasError ? 'ring-2 ring-red-500/70 border-red-500/60' : ''}`}
        style={{ ['--tw-ring-color' as any]: hasError ? '#ef4444' : ACCENT }}
        required
      />
      {hasError && (
        <p id={`${id}-error`} className="mt-1 text-sm text-red-600 dark:text-red-400" aria-live="polite">
          {error}
        </p>
      )}
    </div>
  );
}
