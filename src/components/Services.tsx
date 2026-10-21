import { motion } from "framer-motion";
import {
  Send,
  PiggyBank,
  HardHat,
  HeartPulse,
  FileText,
  Scale,
  Check,
} from "lucide-react";

const services = [
  {
    icon: Send,
    title: "RTI & Online Filing",
    description: "Real Time Information submissions filed with HMRC every pay period, on time and accurately.",
  },
  {
    icon: PiggyBank,
    title: "Pensions Auto Enrolment",
    description: "Workplace pension assessment, enrolment and contributions managed alongside your payroll.",
  },
  {
    icon: HardHat,
    title: "Monthly CIS Returns",
    description: "Construction Industry Scheme returns and subcontractor deductions handled every month.",
  },
  {
    icon: HeartPulse,
    title: "Statutory Payments",
    description: "Statutory sick, maternity and paternity pay, plus holiday pay, calculated correctly.",
  },
  {
    icon: FileText,
    title: "Payslips & Reports",
    description: "Secure payslips, costing reports and tax & NI reports, ready when you need them.",
  },
  {
    icon: Scale,
    title: "Compliance",
    description: "National Minimum Wage checks, court orders and Employment Allowance claims taken care of.",
  },
];

const extras = [
  "P11D Expenses",
  "Employment Allowance",
  "Court Orders",
  "Holiday Pay",
  "National Minimum Wage",
  "Costing Reports",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};

function Services() {
  return (
    <section id="services" className="py-24 px-6 bg-mist">
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
            What We Offer
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold text-brand-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Payroll &amp; Construction Services
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
            Everything your payroll needs, from first payslip to year end, handled by one team.
          </p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group bg-white rounded-2xl p-8 border border-mist-dark hover:border-brand/20 shadow-sm hover:shadow-xl hover:shadow-brand/10 transition-shadow duration-300 cursor-default"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand/10 group-hover:bg-brand group-hover:text-white text-brand transition-all duration-300 mb-5">
                  <Icon size={22} />
                </div>
                <h3
                  className="text-xl font-semibold text-brand-dark mb-3"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Extras */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 text-center"
        >
          <ul className="flex flex-wrap justify-center gap-3">
            {extras.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-mist-dark text-brand-dark text-sm font-medium"
              >
                <Check size={14} className="text-brand" />
                {item}
              </li>
            ))}
          </ul>
          <p className="text-gray-500 text-sm mt-6">
            + many more payroll and construction industry services.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
