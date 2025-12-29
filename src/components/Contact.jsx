import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const inputVariants = {
  focus: { scale: 1.02 },
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in all the fields.");
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
      .then(
        () => {
          setLoading(false);
          toast.success(
            "Thank you. I will get back to you as soon as possible."
          );

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong.");
        }
      );
  };
  return (
    <div
      className={`xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
         <h2 className={styles.sectionHeadText}>
          <span className="text-white">Contact</span>
        </h2>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
         <motion.div whileFocus="focus" variants={inputVariants}>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none border border-transparent focus:border-cyan-400 transition"
            />
          </motion.div>

           <motion.div whileFocus="focus" variants={inputVariants}>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none border border-transparent focus:border-cyan-400 transition"
            />
          </motion.div>
          <motion.div whileFocus="focus" variants={inputVariants}>
            <textarea
              rows={6}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full bg-tertiary py-4 px-6 rounded-lg text-white placeholder:text-secondary outline-none border border-transparent focus:border-cyan-400 transition resize-none"
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className={`w-fit px-8 py-3 rounded-xl font-bold text-black bg-cyan-400 hover:bg-cyan-300 transition ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
