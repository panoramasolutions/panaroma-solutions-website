import { useState } from "react";
import Footer from "./Footer";
import contactBG from '../assets/contactBG.webp';

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

const GOOGLE_FORM_URL = 'https://script.google.com/macros/s/AKfycbyulBcWFMpTlCusLu0aZd2VFDD-_u3pRR-rI21NMlim4hQfOIlw3pcaLcnSY3K_rD_w8Q/exec';

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"" | "success" | "error">("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    // Let the browser submit to the iframe; just track state for UI feedback.
    setIsSubmitting(true);
    setStatus("");
    setFormSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const keyMap: Record<string, keyof ContactFormData> = {
      fullName: 'fullName',
      email: 'email',
      phone: 'phone',
      subject: 'subject',
      message: 'message'
    };

    const mappedKey = keyMap[e.target.name];
    if (!mappedKey) return;

    setFormData({
      ...formData,
      [mappedKey]: e.target.value,
    });
  };

  return (
    <section id="contact" className="min-h-dvh bg-background text-foreground flex flex-col relative overflow-hidden">
      {/* Main content */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Background image right side, strictly contained */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <img
            src={contactBG}
            alt=""
            className="md:block absolute top-0 right-0 h-full w-auto max-w-[60vw] object-cover"
          />
        </div>
        <div className="w-full max-w-4xl z-10">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-4xl md:text-section-heading font-medium bg-gradient-to-t from-[#A8A8A8] to-white bg-clip-text text-transparent">
              Send Us Message
            </h2>
            <p className="text-[18px] mt-5 font-medium text-secondary-gray-color mb-4 tracking-wide">We'd love to hear from you! Please fill out the form or reach us via the details below.</p>
          </div>

          {/* Form */}
          <form
            action={GOOGLE_FORM_URL}
            method="POST"
            target="hidden_iframe"
            onSubmit={handleSubmit}
            className="space-y-4 sm:space-y-5 mb-8"
          >
            {/* Full Name */}
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name"
              className="w-full px-5 py-3 bg-input-color border border-input-border rounded-sm text-sm text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-brand-blue transition-colors"
            />

            {/* Email Address */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full px-5 py-3 bg-input-color border border-input-border rounded-sm text-sm text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-brand-blue transition-colors"
            />

            {/* Phone Number */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className="w-full px-5 py-3 bg-input-color border border-input-border rounded-sm text-sm text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-brand-blue transition-colors"
            />

            {/* Subject */}
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full px-5 py-3 bg-input-color border border-input-border rounded-sm text-sm text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-brand-blue transition-colors"
            />

            {/* Your Message */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full px-5 py-3 bg-input-color border border-input-border rounded-sm text-sm text-text-secondary placeholder:text-text-secondary focus:outline-none focus:border-brand-blue transition-colors resize-none"
            />

            {/* Submit button */}
            <div className="flex justify-center pt-4">
              <style>{`
                @keyframes spin {
                  0% {
                    transform: translate(-50%, -50%) rotate(0deg);
                  }
                  100% {
                    transform: translate(-50%, -50%) rotate(180deg);
                  }
                }
                
                .group:hover {
                  border-color: transparent;
                }
                .animated-border-box {
                  position: absolute;
                  inset: 0;
                  border-radius: 32px;
                  padding: 2px;
                  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
                  -webkit-mask-composite: xor;
                  mask-composite: exclude;
                  pointer-events: none;
                  opacity: 0;
                  transition: opacity 0.3s ease-in-out;
                }
                .group:hover .animated-border-box {
                  opacity: 1;
                }
                .animated-border-box::before {
                  content: '';
                  position: absolute;
                  top: 50%;
                  left: 50%;
                  width: 150%;
                  height: 500%;
                  background: conic-gradient(from 0deg, #00EEFF 10%, white 50%, black 80%, #00EEFF 100%);
                  animation: spin 0.5s ease-in-out infinite alternate;
                }
              `}</style>
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-32 h-11 rounded-32 bg-gradient-to-b from-white/24 via-black/49 to-white/49 shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)] text-white font-bold text-[15px] hover:bg-[#06303E] cursor-pointer overflow-hidden disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Submit'}</span>
                <div className="animated-border-box"></div>
              </button>
            </div>
            {status === 'success' && (
              <p className="text-center text-sm text-green-400">Message sent successfully!</p>
            )}
            {status === 'error' && (
              <p className="text-center text-sm text-red-400">Failed to send. Please try again.</p>
            )}
          </form>
          <iframe
            name="hidden_iframe"
            id="hidden_iframe"
            style={{ display: 'none' }}
            onLoad={() => {
              if (formSubmitted) {
                setStatus('success');
                setFormData({
                  fullName: "",
                  email: "",
                  phone: "",
                  subject: "",
                  message: "",
                });
                setIsSubmitting(false);
                setFormSubmitted(false);
              }
            }}
          />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </section>
  );
}
