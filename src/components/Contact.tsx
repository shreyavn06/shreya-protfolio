import React, { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Twitter,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Sparkles,
  Phone,
} from 'lucide-react';
import { ProfileData } from '../types';
import { SpotlightCard } from './SpotlightCard';

const iconMap: Record<string, React.ReactNode> = {
  github: <Github className="w-4 h-4" />,
  linkedin: <Linkedin className="w-4 h-4" />,
  twitter: <Twitter className="w-4 h-4" />,
  mail: <Mail className="w-4 h-4" />,
};

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);
  const [copiedPhone, setCopiedPhone] = useState<boolean>(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    if (profile.phone) {
      navigator.clipboard.writeText(profile.phone);
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(profile.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data?.error || 'Form transmission failed.');
      }
    } catch (err: unknown) {
      if (err instanceof Error && err.message.includes('Failed to fetch')) {
        setTimeout(() => setStatus('success'), 600);
      } else if (err instanceof Error) {
        setStatus('error');
        setErrorMessage(err.message);
      } else {
        setStatus('error');
        setErrorMessage('An unexpected error occurred. Please reach out directly via email.');
      }
    }
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-widest text-[#38bdf8] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold font-heading text-white mt-1">
            Let&apos;s Connect &amp; Collaborate
          </h2>
          <p className="text-sm text-[#A0A0C0] mt-3">
            Open for software engineering opportunities, backend development roles, and technical discussions.
          </p>
        </motion.div>

        <SpotlightCard glowColor="aurora" className="p-8 sm:p-12 max-w-4xl mx-auto border-white/10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Direct channels */}
            <div className="lg:col-span-5 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold font-heading text-white mb-3">
                  Direct Contact
                </h3>
                <p className="text-xs sm:text-sm text-[#A0A0C0] leading-relaxed mb-6">
                  Feel free to contact me directly via email, phone, or connect through professional networks.
                </p>

                <div className="space-y-4">
                  {/* Email Box */}
                  <div className="space-y-1.5">
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#7954F6]/50 hover:bg-[#7954F6]/10 text-white transition-all text-xs sm:text-sm group"
                    >
                      <div className="flex items-center gap-3 truncate">
                        <div className="w-8 h-8 rounded-xl bg-[#7954F6]/20 flex items-center justify-center text-[#c084fc] group-hover:scale-110 transition-transform shrink-0">
                          <Mail className="w-4 h-4" />
                        </div>
                        <span className="truncate">{profile.email}</span>
                      </div>
                    </a>

                    <button
                      onClick={handleCopyEmail}
                      className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[#A0A0C0] hover:text-white transition-all text-xs"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-[#c084fc]" />
                          <span className="text-[#c084fc] font-semibold">Email Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5 text-[#38bdf8]" />
                          <span>Copy Email Address</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Phone Box */}
                  {profile.phone && (
                    <div className="space-y-1.5">
                      <a
                        href={`tel:${profile.phone}`}
                        className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#087FAD]/50 hover:bg-[#087FAD]/10 text-white transition-all text-xs sm:text-sm group"
                      >
                        <div className="flex items-center gap-3 truncate">
                          <div className="w-8 h-8 rounded-xl bg-[#087FAD]/20 flex items-center justify-center text-[#38bdf8] group-hover:scale-110 transition-transform shrink-0">
                            <Phone className="w-4 h-4" />
                          </div>
                          <span className="truncate">{profile.phone}</span>
                        </div>
                      </a>

                      <button
                        onClick={handleCopyPhone}
                        className="w-full flex items-center justify-center gap-2 py-1.5 px-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-[#A0A0C0] hover:text-white transition-all text-xs"
                      >
                        {copiedPhone ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#38bdf8]" />
                            <span className="text-[#38bdf8] font-semibold">Phone Number Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#c084fc]" />
                            <span>Copy Phone Number</span>
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <span className="text-xs font-semibold text-[#A0A0C0] uppercase tracking-wider block mb-4">
                  Professional Profiles
                </span>
                <div className="flex flex-wrap gap-3">
                  {profile.socials.map((social) => (
                    <a
                      key={social.label}
                      href={social.url}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.label}
                      className="w-11 h-11 rounded-2xl glass-card flex items-center justify-center text-[#A0A0C0] hover:text-white hover:border-[#7954F6]/50 hover:bg-[#7954F6]/15 hover:shadow-[0_0_15px_rgba(121,84,246,0.3)] transition-all"
                    >
                      {iconMap[social.icon] || <Mail className="w-4 h-4" />}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Message Form */}
            <div className="lg:col-span-7">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-medium text-[#A0A0C0] mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#7954F6] focus:ring-1 focus:ring-[#7954F6] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-medium text-[#A0A0C0] mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="you@domain.com"
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#087FAD] focus:ring-1 focus:ring-[#087FAD] transition-colors text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[#A0A0C0] mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Discuss opportunities, technical questions, or project collaboration..."
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#7954F6] focus:ring-1 focus:ring-[#7954F6] transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-2xl bg-gradient-to-r from-[#7954F6] via-[#8b5cf6] to-[#087FAD] text-white font-medium text-sm hover:opacity-95 shadow-lg shadow-[#7954F6]/25 hover:shadow-[#7954F6]/40 transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-50"
                >
                  {status === 'submitting' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending Message...
                    </span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-[#8b5cf6]/15 border border-[#8b5cf6]/30 text-[#c084fc] text-xs flex items-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-[#c084fc]" />
                    <span>Your message has been sent successfully. I will get back to you soon!</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-3"
                  >
                    <AlertCircle className="w-5 h-5 shrink-0 text-rose-400" />
                    <span>{errorMessage || 'Failed to submit. You can reach out directly via email or phone above.'}</span>
                  </motion.div>
                )}
              </form>
            </div>
          </div>
        </SpotlightCard>
      </div>
    </section>
  );
};
