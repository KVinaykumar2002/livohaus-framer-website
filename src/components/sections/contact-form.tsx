"use client";

import Image from "next/image";
import { ArrowRight, Mail, Phone, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const ContactFormSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="contact" className="bg-background py-20 lg:py-24 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex flex-col"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isVisible ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2.5 self-start rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-primary"
            >
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <FileText className="h-4 w-4" />
              </motion.div>
              <h6 className="text-sm font-semibold uppercase tracking-widest">
                Request a Quote
              </h6>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-5 text-4xl lg:text-5xl font-bold text-text-dark !leading-tight"
            >
              Let's Talk <span className="text-primary">Renovation</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isVisible ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 text-body-large text-text-body"
            >
              Have a renovation in mind? Fill out the form and we'll get in touch
              within 24 hours to discuss your project.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 w-full overflow-hidden rounded-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="relative aspect-[4/3] w-full"
              >
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/zbRZCLiDosOEmYhWeaXyWUFjq4-15.jpg"
                  alt="Modern office interior with orange sofas and a vertical garden"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 flex flex-col sm:flex-row gap-x-12 gap-y-8"
            >
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5"
                >
                  <Phone className="h-5 w-5 text-primary" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-text-dark">
                    Call Us Now
                  </h4>
                  <a
                    href="tel:+19512390523"
                    className="text-text-body hover:text-primary transition-colors"
                  >
                    +1 (951) 239-0523
                  </a>
                </div>
              </motion.div>
              <motion.div
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="flex items-start gap-4"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-primary/20 bg-primary/5"
                >
                  <Mail className="h-5 w-5 text-primary" />
                </motion.div>
                <div>
                  <h4 className="text-xl font-semibold text-text-dark">
                    Email Us
                  </h4>
                  <a
                    href="mailto:hello@livohaus.com"
                    className="text-text-body hover:text-primary transition-colors"
                  >
                    hello@livohaus.com
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column (Form) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-secondary p-8 lg:p-12 rounded-2xl shadow-xl"
          >
            <form className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5 }}
              >
                <Label htmlFor="fullName" className="font-medium text-text-dark">
                  Full Name <span className="text-primary">*</span>
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  type="text"
                  required
                  className="mt-2 bg-background transition-all focus:scale-[1.01]"
                />
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.6 }}
                >
                  <Label htmlFor="email" className="font-medium text-text-dark">
                    Email Address <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-2 bg-background transition-all focus:scale-[1.01]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 }}
                >
                  <Label htmlFor="phone" className="font-medium text-text-dark">
                    Phone Number (optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    className="mt-2 bg-background transition-all focus:scale-[1.01]"
                  />
                </motion.div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <Label htmlFor="location" className="font-medium text-text-dark">
                    Project Location <span className="text-primary">*</span>
                  </Label>
                  <Input
                    id="location"
                    name="location"
                    type="text"
                    required
                    className="mt-2 bg-background transition-all focus:scale-[1.01]"
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.9 }}
                >
                  <Label htmlFor="renovationType" className="font-medium text-text-dark">
                    Type of Renovation <span className="text-primary">*</span>
                  </Label>
                  <Select name="renovationType" required>
                    <SelectTrigger className="mt-2 w-full bg-background text-text-body">
                      <SelectValue placeholder="Select..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="full-home">
                        Full-Home Renovation
                      </SelectItem>
                      <SelectItem value="kitchen">Kitchen Remodeling</SelectItem>
                      <SelectItem value="bathroom">
                        Bathroom Renovation
                      </SelectItem>
                      <SelectItem value="outdoor">
                        Outdoor Living Spaces
                      </SelectItem>
                      <SelectItem value="finishing">Custom Finishing</SelectItem>
                    </SelectContent>
                  </Select>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.0 }}
              >
                <Label htmlFor="message" className="font-medium text-text-dark">
                  Message / Project Brief
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  className="mt-2 bg-background transition-all focus:scale-[1.01]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 1.1 }}
              >
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full rounded-full group py-3 px-6 text-base font-semibold mt-2"
                  >
                    <span className="flex items-center justify-center gap-2">
                      Request Free Quote
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </Button>
                </motion.div>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;