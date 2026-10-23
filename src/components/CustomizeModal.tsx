import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, Copy, RotateCcw } from 'lucide-react';
import { ProfileData } from '../types';

interface CustomizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  onSave: (updated: ProfileData) => void;
  onReset: () => void;
}

export const CustomizeModal: React.FC<CustomizeModalProps> = ({
  isOpen,
  onClose,
  profile,
  onSave,
  onReset,
}) => {
  const [name, setName] = useState(profile.name);
  const [headline, setHeadline] = useState(profile.headline);
  const [rolesText, setRolesText] = useState(profile.roles.join('\n'));
  const [email, setEmail] = useState(profile.email);
  const [location, setLocation] = useState(profile.location);
  const [availability, setAvailability] = useState(profile.availability);
  const [copiedCode, setCopiedCode] = useState(false);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedRoles = rolesText
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean);

    onSave({
      ...profile,
      name,
      headline,
      roles: updatedRoles.length > 0 ? updatedRoles : profile.roles,
      email,
      location,
      availability,
    });
    onClose();
  };

  const handleCopyConstants = () => {
    const updatedRoles = rolesText
      .split('\n')
      .map((r) => r.trim())
      .filter(Boolean);

    const generatedCode = `export const PROFILE: ProfileData = {
  name: ${JSON.stringify(name)},
  roles: ${JSON.stringify(updatedRoles, null, 2)},
  headline: ${JSON.stringify(headline)},
  bioParagraphs: ${JSON.stringify(profile.bioParagraphs, null, 2)},
  email: ${JSON.stringify(email)},
  location: ${JSON.stringify(location)},
  availability: ${JSON.stringify(availability)},
  socials: ${JSON.stringify(profile.socials, null, 2)},
  formspreeEndpoint: ${JSON.stringify(profile.formspreeEndpoint)}
};`;

    navigator.clipboard.writeText(generatedCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto glass-card border border-white/15 bg-[#080817]/95 p-6 sm:p-8 rounded-3xl shadow-2xl z-10"
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-2.5">
                <span className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7954F6] to-[#087FAD] flex items-center justify-center text-white">
                  <Sparkles className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">
                    Customize Portfolio Details
                  </h3>
                  <p className="text-xs text-[#A0A0C0]">
                    Personalize your name, roles, and contacts in real time.
                  </p>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-xl text-[#A0A0C0] hover:text-white hover:bg-white/5 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#A0A0C0] uppercase tracking-wider mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#7954F6] text-sm"
                  placeholder="e.g. Alex Vance or your name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A0A0C0] uppercase tracking-wider mb-1.5">
                  Rotating Roles (One per line)
                </label>
                <textarea
                  rows={3}
                  value={rolesText}
                  onChange={(e) => setRolesText(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#087FAD] text-sm resize-none"
                  placeholder="Senior Full-Stack Engineer&#10;Distributed Systems Architect&#10;TypeScript Specialist"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A0A0C0] uppercase tracking-wider mb-1.5">
                  Headline / One-Liner
                </label>
                <input
                  type="text"
                  value={headline}
                  onChange={(e) => setHeadline(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#7954F6] text-sm"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#A0A0C0] uppercase tracking-wider mb-1.5">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#087FAD] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#A0A0C0] uppercase tracking-wider mb-1.5">
                    Location
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#087FAD] text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#A0A0C0] uppercase tracking-wider mb-1.5">
                  Availability Badge Text
                </label>
                <input
                  type="text"
                  value={availability}
                  onChange={(e) => setAvailability(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-2xl bg-white/[0.04] border border-white/10 text-white focus:outline-none focus:border-[#7954F6] text-sm"
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onReset();
                      onClose();
                    }}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-[#A0A0C0] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Reset
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyConstants}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs bg-white/5 hover:bg-white/10 border border-white/10 text-[#A0A0C0] hover:text-white transition-colors"
                  >
                    {copiedCode ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#c084fc]" />
                        <span className="text-[#c084fc]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Code</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 rounded-xl text-xs text-[#A0A0C0] hover:text-white hover:bg-white/5 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#7954F6] to-[#087FAD] text-white text-xs font-semibold hover:opacity-95 shadow-md shadow-[#7954F6]/25 transition-all hover:scale-105 active:scale-95"
                  >
                    Apply Live Changes
                  </button>
                </div>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
