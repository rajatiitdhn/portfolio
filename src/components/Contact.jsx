import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { Mail, Code2, Cloud } from "lucide-react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const FloatingIcon = ({ Icon, delay }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [0, -12, 0] }}
    transition={{ duration: 3, repeat: Infinity, delay }}
    className="w-14 h-14 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-lg"
  >
    <Icon className="text-cyan-400" size={26} />
  </motion.div>
);

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all fields");
      return;
    }

    setLoading(true);
    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          reply_to: form.email,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully 🚀");
        setForm({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setLoading(false);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 grid grid-cols-1 xl:grid-cols-2 gap-12 items-center"
      >
        {/* Contact Form */}
        <motion.div
          variants={item}
          className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl"
        >
          <p className={styles.sectionSubText}>Let’s connect</p>
          <h2 className={styles.sectionHeadText}>
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-10 flex flex-col gap-6"
          >
            {["name", "email"].map((field) => (
              <motion.input
                key={field}
                variants={item}
                type={field === "email" ? "email" : "text"}
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={`Your ${field}`}
                className="w-full rounded-xl bg-black/40 px-6 py-4 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition"
              />
            ))}

            <motion.textarea
              variants={item}
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your message"
              className="w-full rounded-xl bg-black/40 px-6 py-4 text-white placeholder:text-gray-400 outline-none border border-transparent focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition resize-none"
            />

            <motion.button
              variants={item}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={loading}
              className="mt-2 w-fit px-10 py-4 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 text-black font-bold shadow-lg hover:shadow-cyan-400/30 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        </motion.div>

        {/* Visual Panel (Desktop Only) */}
        <motion.div
          variants={item}
          className="hidden xl:flex flex-col items-center justify-center gap-8 relative"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400/20 to-purple-500/20 blur-3xl" />

          <FloatingIcon Icon={Mail} delay={0} />
          <FloatingIcon Icon={Code2} delay={0.5} />
          <FloatingIcon Icon={Cloud} delay={1} />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
