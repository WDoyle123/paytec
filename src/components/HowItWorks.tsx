import { motion } from "framer-motion";
import { Mail, Cog, FileCheck2 } from "lucide-react";
import serviceImage from "../assets/service.svg";

const steps = [
  {
    icon: Mail,
    title: "Send us your figures",
    description: "Email or telephone your hours, payments and any changes for the period.",
  },
  {
    icon: Cog,
    title: "We run your payroll",
    description: "We process pay, deductions, pensions and statutory payments, and file with HMRC.",
  },
  {
    icon: FileCheck2,
    title: "Get it all back",
    description: "We send you the processed payroll information, payslips and reports.",
  },
];

const stepVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-6 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
        >
          <p className="text-brand-light text-xs tracking-[0.25em] uppercase font-medium mb-3">
            How It Works
          </p>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            It's Simple, Really
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-10">
            No software to learn and no forms to fill in. Tell us what your staff
            have worked and we'll take care of the rest — accurately and on time,
            every pay period.
          </p>

          {/* Steps */}
          <motion.ol
            variants={stepVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {steps.map(({ icon: Icon, title, description }, i) => (
              <motion.li
                key={title}
                variants={itemVariants}
                className="flex items-start gap-4 p-5 rounded-2xl bg-brand-muted/60 border border-white/10"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                  <Icon size={18} className="text-brand-light" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm mb-0.5">
                    <span className="text-brand-light mr-2">0{i + 1}</span>
                    {title}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed">{description}</p>
                </div>
              </motion.li>
            ))}
          </motion.ol>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number], delay: 0.15 }}
          className="rounded-2xl overflow-hidden shadow-xl border border-white/20 bg-mist p-10 md:p-16 flex items-center justify-center"
        >
          <img
            src={serviceImage}
            alt="Illustration of payroll being processed"
            loading="lazy"
            decoding="async"
            className="w-full max-w-md h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HowItWorks;
