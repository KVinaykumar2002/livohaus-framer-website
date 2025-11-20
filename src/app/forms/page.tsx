"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

type FormLink = {
  title: string;
  description: string;
  href: string;
  accent: string;
  image?: string;
  imagePosition?: "left" | "right";
};

const FORM_LINKS: FormLink[] = [
  {
    title: "ASL REALTORS – LANDLORD / PROPERTY LISTING FORM",
    description:
      "Share your property details with us to reach verified tenants faster with ASL Realtors.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSeIOZMU_hjEoYJQH1NRsZVb2MSaybf_qL2TStKhBr9Fb0_rUQ/viewform?usp=header",
    accent: "from-[#FF6B2C] to-[#FF4800]",
    image: "https://koala.sh/api/image/v2-adhvr-y2f4f.jpg?width=1216&height=832&dream",
    imagePosition: "left" as const,
  },
  {
    title: "ASL REALTORS – Client Requirement Form",
    description:
      "Tell us about your space requirements, budget, and timelines so we can curate the best options.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSd6pjNd60fA8emoiNDTvmq8gx1XUoKbGGIZtYi6z1eC3EK-ZA/viewform?usp=header",
    accent: "from-[#FF914D] to-[#FF6B2C]",
    image: "https://exp-us.content.zoocasa.com/wp-content/uploads/sites/5/2023/03/7-Tips-To-Find-a-Real-Estate-Agent-Near-You.jpg",
    imagePosition: "right" as const,
  },
];

const heroVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

export default function FormsPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EE] text-[#2E2E2E] dark:bg-[#0B0B0B] dark:text-neutral-100 transition-colors duration-300">
      <Navigation />
      <main className="pt-[108px] pb-24">
        <motion.section
          className="relative mx-auto max-w-5xl px-6 text-center sm:px-10 lg:px-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          variants={heroVariants}
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-8 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FF6B2C]/16 blur-[180px]" />
            <div className="absolute -right-12 bottom-0 h-56 w-56 rounded-full bg-[#4B3A2B]/12 blur-[160px]" />
          </div>

          <motion.div
            className="relative z-[1] flex flex-col items-center gap-6"
            variants={heroVariants}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            <span className="inline-flex items-center gap-3 rounded-full bg-white/80 dark:bg-neutral-900/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4B3A2B] dark:text-neutral-100 shadow-[0_12px_30px_rgba(255,107,44,0.18)] dark:shadow-[0_12px_30px_rgba(255,100,47,0.12)]">
              Access Our Forms
            </span>
            <h1 className="text-4xl font-semibold leading-tight text-[#2E2E2E] dark:text-white sm:text-5xl">
              Submit your requirements or list your property with ease.
            </h1>
            <p className="max-w-3xl text-base leading-relaxed text-[#5A5046] dark:text-neutral-300 sm:text-lg">
              These quick forms help our team respond faster with tailored recommendations—whether you’re a landlord ready to list or a business scouting space.
            </p>
          </motion.div>
        </motion.section>

        <section className="mx-auto mt-16 flex max-w-6xl flex-col gap-8 px-6 sm:px-10 lg:px-16">
          {FORM_LINKS.map((form, index) => (
            <motion.article
              key={form.title}
              className="relative overflow-hidden rounded-[32px] border border-white/40 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 p-10 shadow-[0_30px_80px_rgba(75,58,43,0.18)] dark:shadow-[0_24px_72px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-300"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              variants={cardVariants}
              transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.15 }}
            >
              <div className="pointer-events-none absolute inset-0">
                <div className={`absolute -right-12 top-0 h-56 w-56 rounded-full bg-gradient-to-br ${form.accent} opacity-30 blur-[160px]`} />
                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-[#FFF0E5]/80 dark:bg-primary/10 blur-[120px]" />
              </div>

              <div
                className={`relative z-[1] flex h-full flex-col gap-6 text-left md:flex-row md:items-center ${
                  form.imagePosition === "right" ? "md:flex-row-reverse" : ""
                }`}
              >
                {form.image && (
                  <div className="md:w-2/5">
                    <img
                      src={form.image}
                      alt="ASL Realtors property showcase"
                      className="h-full w-full rounded-3xl object-cover shadow-[0_14px_40px_rgba(75,58,43,0.18)] dark:shadow-[0_18px_48px_rgba(0,0,0,0.55)]"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex h-full flex-1 flex-col gap-6">
                  <h2 className="text-2xl font-semibold text-[#2E2E2E] dark:text-white sm:text-3xl">{form.title}</h2>
                  <p className="text-base leading-relaxed text-[#5A5046] dark:text-neutral-300">{form.description}</p>
                  <div className="mt-auto">
                    <a
                      href={form.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#FF642F] to-[#FF4800] px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 hover:translate-x-1 hover:shadow-[0_16px_40px_rgba(255,100,47,0.35)]"
                    >
                      Fill Form
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
