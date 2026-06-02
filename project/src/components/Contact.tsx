import React, { useState } from "react";
import {
  Mail,
  Linkedin,
  Send,
  MapPin,
  CheckCircle,
  AlertCircle,
  Loader2,
  Facebook,
  Instagram,
  ExternalLink,
  Youtube,
  Github,
  Calendar,
  MessageCircle,
  User,
  Tag,
  Lock,
  Quote,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";
import { useGoogleAnalytics } from "../hooks/useGoogleAnalytics";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");
  const { trackEvent } = useGoogleAnalytics();

  const socialLinks = {
    facebook: "https://facebook.com/naamiahmed27",
    instagram: "https://instagram.com/naamiahmed27",
    youtube: "https://youtube.com/@NaamiAhmed-27",
    medium: "https://medium.com/@naamiahmed",
    devto: "https://dev.to/naamiahmed",
    github: "https://github.com/naamiahmed",
    calendly: "https://calendly.com/naamiahmed",
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setSubmitMessage("");

    trackEvent("form_submit", "contact", "contact_form");

    try {
      const response = await fetch("https://formspree.io/f/xzzgykpg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
        trackEvent("form_success", "contact", "contact_form");
      } else {
        throw new Error("Failed to send message");
      }
    } catch {
      setSubmitStatus("error");
      setSubmitMessage("Sorry, there was an error sending your message. Please try again.");
      trackEvent("form_error", "contact", "contact_form");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSocialLinkClick = (platform: string) => {
    trackEvent("social_link_click", "engagement", platform);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#06111f] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_15%_45%,rgba(14,165,233,0.10),transparent_35%)]" />

      {/* Dotted decorations */}
      <div className="pointer-events-none absolute left-0 top-20 h-56 w-40 opacity-30 [background-image:radial-gradient(#ff6b00_1.5px,transparent_1.5px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute right-0 top-28 h-56 w-40 opacity-20 [background-image:radial-gradient(#ff6b00_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Top Section */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
              <Mail className="h-4 w-4 text-orange-400" />
              Let’s Connect
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Let’s Build
            </h2>

            <h3
              className="mt-1 text-4xl text-orange-500 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Something Amazing
            </h3>

            <h2 className="text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Together!
            </h2>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Have a project idea, collaboration opportunity, mentorship request,
              or just want to say hello? I’d love to hear from you.
            </p>

            <div className="mt-8">
              <h3 className="mb-5 text-xl font-black">Get in Touch</h3>

              <div className="space-y-4">
                <ContactInfoCard
                  icon={<Mail />}
                  title="Email"
                  value={personalInfo.email}
                  href={`mailto:${personalInfo.email}`}
                  onClick={() => trackEvent("email_click", "contact", "email")}
                />

                <ContactInfoCard
                  icon={<MapPin />}
                  title="Location"
                  value="Colombo, Sri Lanka"
                />

                <ContactInfoCard
                  icon={<Linkedin />}
                  title="LinkedIn"
                  value="linkedin.com/in/naami-ahmed"
                  href={personalInfo.linkedin}
                  onClick={() => handleSocialLinkClick("linkedin")}
                />

                <ContactInfoCard
                  icon={<Github />}
                  title="GitHub"
                  value="github.com/naamiahmed"
                  href={socialLinks.github}
                  onClick={() => handleSocialLinkClick("github")}
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl sm:p-8">
            <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center">
              <div className="grid h-16 w-16 place-items-center rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400">
                <Send className="h-8 w-8" />
              </div>

              <div>
                <h3 className="text-2xl font-black sm:text-3xl">
                  Send Me a Message
                </h3>
                <p className="mt-2 text-slate-300">
                  Fill out the form and I’ll get back to you as soon as possible.
                </p>
              </div>
            </div>

            {submitStatus === "success" && (
              <StatusBox
                type="success"
                icon={<CheckCircle />}
                message={submitMessage}
              />
            )}

            {submitStatus === "error" && (
              <StatusBox
                type="error"
                icon={<AlertCircle />}
                message={submitMessage}
              />
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <InputField
                  icon={<User />}
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />

                <InputField
                  icon={<Mail />}
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  required
                />
              </div>

              <InputField
                icon={<Tag />}
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                disabled={isSubmitting}
                required
              />

              <label className="flex min-h-[160px] items-start gap-3 rounded-xl border border-white/10 bg-slate-950/30 px-4 py-4 transition focus-within:border-blue-500/50">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-slate-300" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  placeholder="Your Message"
                  rows={6}
                  className="w-full resize-none bg-transparent text-white outline-none placeholder:text-slate-400 disabled:opacity-50"
                />
              </label>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-700 px-6 py-4 font-black text-white shadow-lg shadow-blue-500/20 transition hover:-translate-y-1 hover:shadow-blue-500/40 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            <p className="mt-5 flex items-center justify-center gap-2 text-sm text-slate-300">
              <Lock className="h-4 w-4" />
              Your information is safe with me.
            </p>
          </div>
        </div>

        {/* Bottom Card */}
        <div className="mt-10 grid overflow-hidden rounded-3xl border border-white/10 bg-blue-500/10 backdrop-blur-xl lg:grid-cols-[1fr_1fr_0.9fr]">
          <div className="p-6 sm:p-8">
            <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-orange-500/10 text-orange-400">
              <Calendar className="h-10 w-10" />
            </div>

            <h3 className="text-2xl font-black">Let’s Connect!</h3>

            <p className="mt-3 leading-7 text-slate-300">
              I’m always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <a
              href={socialLinks.calendly}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleSocialLinkClick("calendly")}
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-orange-500/50 px-5 py-3 text-sm font-black text-orange-400 transition hover:bg-orange-500 hover:text-white"
            >
              Schedule a Call <ExternalLink className="h-4 w-4" />
            </a>
          </div>

          <div className="border-y border-white/10 p-6 sm:p-8 lg:border-x lg:border-y-0">
            <h3 className="mb-5 text-2xl font-black">Available For</h3>

            <ul className="space-y-4 text-slate-300">
              {[
                "Project Collaboration",
                "Speaking Engagements",
                "Mentorship & Guidance",
                "Open Source Contributions",
                "Tech Communities & Events",
              ].map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative flex min-h-[260px] justify-center overflow-hidden">
            <div className="absolute bottom-[-80px] h-80 w-80 rounded-full border border-blue-500/30 bg-blue-500/10" />
            <img
              src="/assets/naami-removebg01.png"
              alt="Naami Ahmed"
              className="relative z-10 h-72 self-end object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
            />
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-10">
          <h3 className="mb-5 text-center text-2xl font-black">Follow Me</h3>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <SocialCard
              icon={<Facebook />}
              title="Facebook"
              subtitle="Follow me"
              href={socialLinks.facebook}
              onClick={() => handleSocialLinkClick("facebook")}
              color="text-blue-400"
            />

            <SocialCard
              icon={<Instagram />}
              title="Instagram"
              subtitle="Follow my journey"
              href={socialLinks.instagram}
              onClick={() => handleSocialLinkClick("instagram")}
              color="text-pink-400"
            />

            <SocialCard
              icon={<Youtube />}
              title="YouTube"
              subtitle="Subscribe"
              href={socialLinks.youtube}
              onClick={() => handleSocialLinkClick("youtube")}
              color="text-red-400"
            />

            <SocialCard
              icon={<Linkedin />}
              title="LinkedIn"
              subtitle="Connect professionally"
              href={personalInfo.linkedin}
              onClick={() => handleSocialLinkClick("linkedin")}
              color="text-blue-400"
            />

            <SocialCard
              icon={<Github />}
              title="GitHub"
              subtitle="View my code"
              href={socialLinks.github}
              onClick={() => handleSocialLinkClick("github")}
              color="text-slate-200"
            />

            <SocialCard
              icon={<ExternalLink />}
              title="Medium / Dev.to"
              subtitle="Read my articles"
              href={socialLinks.medium}
              onClick={() => handleSocialLinkClick("medium")}
              color="text-green-400"
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl sm:flex-row sm:items-center sm:justify-center">
          <Quote className="mx-auto h-8 w-8 shrink-0 text-orange-400 sm:mx-0" />
          <p className="text-slate-200">
            Thanks for stopping by! Let’s create something impactful together.
          </p>
          <span
            className="text-xl text-orange-500"
            style={{ fontFamily: "'Permanent Marker', cursive" }}
          >
            Naami Ahmed
          </span>
        </div>
      </div>
    </section>
  );
};

const ContactInfoCard = ({
  icon,
  title,
  value,
  href,
  onClick,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  href?: string;
  onClick?: () => void;
}) => {
  const content = (
    <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-blue-500/40">
      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-blue-500/10 text-blue-400">
        {icon}
      </div>
      <div className="min-w-0">
        <p className="font-black text-white">{title}</p>
        <p className="truncate text-sm text-sky-400">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" onClick={onClick}>
      {content}
    </a>
  ) : (
    content
  );
};

const InputField = ({
  icon,
  type = "text",
  name,
  placeholder,
  value,
  onChange,
  disabled,
  required,
}: {
  icon: React.ReactNode;
  type?: string;
  name: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  required?: boolean;
}) => (
  <label className="flex h-14 items-center gap-3 rounded-xl border border-white/10 bg-slate-950/30 px-4 transition focus-within:border-blue-500/50">
    <span className="text-slate-300">{icon}</span>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      required={required}
      disabled={disabled}
      placeholder={placeholder}
      className="w-full bg-transparent text-white outline-none placeholder:text-slate-400 disabled:opacity-50"
    />
  </label>
);

const StatusBox = ({
  type,
  icon,
  message,
}: {
  type: "success" | "error";
  icon: React.ReactNode;
  message: string;
}) => (
  <div
    className={`mb-5 flex items-center gap-3 rounded-xl border p-4 ${
      type === "success"
        ? "border-green-500/30 bg-green-500/10 text-green-300"
        : "border-red-500/30 bg-red-500/10 text-red-300"
    }`}
  >
    {icon}
    <p>{message}</p>
  </div>
);

const SocialCard = ({
  icon,
  title,
  subtitle,
  href,
  onClick,
  color,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  href: string;
  onClick?: () => void;
  color: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={onClick}
    className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:-translate-y-1 hover:border-orange-500/40"
  >
    <div className={`grid h-12 w-12 place-items-center rounded-xl bg-white/5 ${color}`}>
      {icon}
    </div>

    <div className="flex-1">
      <p className="font-black text-white">{title}</p>
      <p className="text-sm text-slate-400">{subtitle}</p>
    </div>

    <ExternalLink className="h-4 w-4 text-slate-500" />
  </a>
);

export default Contact;