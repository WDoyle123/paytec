import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, X, MessageSquare } from "lucide-react";
import SocialLinks from "./SocialLinks";

const contactDetails = [
  { icon: Phone, label: "Phone", value: "0845 052 9456", href: "tel:08450529456" },
  { icon: Mail, label: "Email", value: "info@paytec-online.com", href: "mailto:info@paytec-online.com" },
];

function FormSkeleton() {
  return (
    <div className="p-6 space-y-4 animate-pulse">
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
      <div className="h-38 w-full bg-white/15 rounded-xl" />
    </div>
  );
}

function Contact() {
  const [modalOpen, setModalOpen] = useState(false);
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const scrollPos = useRef(0);

  useEffect(() => {
    if (modalOpen) {
      scrollPos.current = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollPos.current}px`;
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo({ top: scrollPos.current, behavior: "instant" });
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [modalOpen]);

  function openModal() {
    setModalOpen(true);
    setIframeLoaded(false);
  }

  function closeModal() {
    setModalOpen(false);
  }

  return (
    <section id="contact" className="py-24 px-6 bg-mist">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-brand text-xs tracking-[0.25em] uppercase font-medium mb-3">
            Get In Touch
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-brand-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Ready to hand over your payroll? Reach out and we'll get back
            to you promptly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
          {/* Left — contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 bg-brand-dark rounded-2xl p-10 text-white"
          >
            <h3
              className="text-2xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Paytec Online
            </h3>
            <p className="text-white/60 text-sm mb-8">
              We're here to help. Drop us a message or reach us directly.
            </p>

            <ul className="space-y-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <li key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-brand-light" />
                  </div>
                  <div>
                    <p className="text-white/50 text-xs uppercase tracking-wider mb-0.5">
                      {label}
                    </p>
                    <a
                      href={href}
                      className="text-white text-sm hover:text-brand-light transition-colors duration-200"
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-white/10 mt-8 pt-6">
              <p className="text-white/50 text-xs uppercase tracking-wider mb-3">
                Follow Us
              </p>
              <SocialLinks linkClassName="w-10 h-10 rounded-xl bg-white/10 text-brand-light hover:bg-brand-light hover:text-white flex items-center justify-center transition-colors duration-200" />
            </div>
          </motion.div>

          {/* Right — open form button */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-3 bg-white rounded-2xl border border-mist-dark shadow-sm p-10 flex flex-col items-center justify-center text-center gap-6 min-h-64"
          >
            <div className="w-16 h-16 rounded-full bg-brand/10 flex items-center justify-center">
              <MessageSquare size={28} className="text-brand" />
            </div>
            <div>
              <h4
                className="text-xl font-bold text-brand-dark mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send Us a Message
              </h4>
              <p className="text-gray-500 text-sm max-w-xs mx-auto">
                Fill in our quick contact form and we'll get back to you as soon
                as possible.
              </p>
            </div>
            <motion.button
              onClick={() => openModal()}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 rounded-xl bg-brand text-white font-semibold text-sm hover:bg-brand-dark transition-colors duration-200"
            >
              Open Contact Form
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {modalOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              onClick={() => closeModal()}
            />

            {/* Centring wrapper */}
            <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 pointer-events-none">
              <motion.div
                key="modal"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="relative w-full max-w-xl bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/20 pointer-events-auto"
                style={{
                  height: "min(95dvh, 95vh)",
                  maxHeight: "min(95dvh, 95vh)",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal header */}
                <div className="flex items-center justify-between px-6 py-4 border-b border-white/20 shrink-0">
                  <h3
                    className="text-lg font-bold text-white"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    Contact Paytec Online
                  </h3>
                  <button
                    onClick={() => closeModal()}
                    className="w-9 h-9 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-colors duration-200"
                    aria-label="Close form"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Scrollable iframe */}
                <div className="flex-1 overflow-y-auto relative">
                  {!iframeLoaded && <FormSkeleton />}
                  <motion.iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSfKxX7L6WXehD5AH99JcayycsVUGItaLCIuzWHXh9hIDpWJXA/viewform?embedded=true"
                    width="100%"
                    height="1950"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight={0}
                    marginWidth={0}
                    title="Contact Form"
                    onLoad={() => setIframeLoaded(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: iframeLoaded ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                    style={{ display: "block" }}
                  >
                    Loading…
                  </motion.iframe>
                </div>
              </motion.div>
            </div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Contact;
