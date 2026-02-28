"use client";

import { social } from "@/data/social";
import SectionHeading from "@/components/ui/SectionHeading";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { motion } from "framer-motion";
import GlassPanel from "@/components/ui/GlassPanel";
import { useState } from "react";
const getIcon = (name) => {
  switch (name) {
    case "Github":
      return <Github className="w-6 h-6" />;
    case "Twitter":
      return <Twitter className="w-6 h-6" />;
    case "Linkedin":
      return <Linkedin className="w-6 h-6" />;
    case "Mail":
      return <Mail className="w-6 h-6" />;
    default:
      return null;
  }
};
export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (data.success) {
      alert("Message sent successfully ✅");
      setForm({ name: "", email: "", message: "" });
    } else {
      alert("Something went wrong ❌");
    }

    setLoading(false);
  };
  return (
    <section
      id="contact"
      className="relative py-32 px-6 md:px-12 max-w-7xl mx-auto z-10 mb-20 overflow-hidden"
    >
      <SectionHeading subtitle="05. Get In Touch">Contact Me</SectionHeading>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
        <GlassPanel className="p-8 md:p-12 order-2 lg:order-1">
          <form
            className="flex flex-col gap-6"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex flex-col gap-3">
              <label
                htmlFor="name"
                className="text-sm text-[var(--text-muted)] uppercase tracking-widest font-bold ml-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all font-medium"
                placeholder="Enter your name..."
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="email"
                className="text-sm text-[var(--text-muted)] uppercase tracking-widest font-bold ml-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all font-medium"
                placeholder="Enter your email..."
              />
            </div>
            <div className="flex flex-col gap-3">
              <label
                htmlFor="message"
                className="text-sm text-[var(--text-muted)] uppercase tracking-widest font-bold ml-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-5 text-lg text-white placeholder-white/20 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)] transition-all resize-none font-medium"
                placeholder="Tell me about your project..."
              />
            </div>

            <div className="mt-4 flex justify-end">
              <MagneticButton
                onClick={handleSubmit}
                className="w-full md:w-auto px-12 py-5 text-lg justify-center bg-white text-black hover:bg-[var(--accent)] hover:text-white hover:border-[var(--accent)] border-transparent transition-colors"
              >
                {loading ? "Sending..." : "Send Message"}
              </MagneticButton>
            </div>
          </form>
        </GlassPanel>

        <div className="flex flex-col justify-center order-1 lg:order-2">
          <motion.h3
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tight tracking-tighter"
          >
            Let's create <br /> something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent)] to-[#a78bfa]">
              extraordinary
            </span>
            .
          </motion.h3>

          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.2,
              duration: 0.8,
            }}
            className="text-xl md:text-2xl text-[var(--text-muted)] mb-12 max-w-lg leading-relaxed"
          >
            I'm currently available for freelance work and open to new
            opportunities. Let's start a conversation.
          </motion.p>

          <div className="flex gap-4 md:gap-6 flex-wrap">
            {social.map((s, i) => (
              <motion.a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.4 + i * 0.1,
                  duration: 0.5,
                  ease: "backOut",
                }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-white/60 hover:text-white hover:border-[var(--accent)] hover:bg-[var(--accent)]/20 transition-all duration-300 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] hover:-translate-y-2"
              >
                {getIcon(s.icon)}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
