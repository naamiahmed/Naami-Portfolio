import React, { useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Twitter,
  Rocket,
  Cloud,
  Users,
  Volume2,
  Infinity as InfinityIcon,
  Code2,
  ChevronDown,
  Sun,
  Moon,
  Menu,
  X,
  MessageCircle,
  Mic
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { personalInfo } from "../data/portfolio";
import { useTheme } from "../contexts/ThemeContext";

const Hero: React.FC = () => {
  const { isDark, toggleTheme } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
    setIsDropdownOpen(false);
  };

  const dropdownItems = [
    { label: "Education", href: "#education" },
    { label: "Experience", href: "#experience" },
    { label: "Certification", href: "#certificates" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
    { label: "Volunteering", href: "#volunteering" },
  ];

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#07111f] text-white">
      {/* Header */}
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#0b1424]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-5 lg:px-8">
          <h2 className="text-lg font-black tracking-tight">Naami Ahmed</h2>

          <nav className="hidden items-center gap-9 text-sm font-semibold text-slate-300 md:flex">
            <button
              onClick={() => window.open("/gallery.html", "_blank")}
              className="transition hover:text-orange-400"
            >
              Gallery
            </button>
            <button
              onClick={() => window.open("/buy-me-a-coffee.html", "_blank")}
              className="transition hover:text-orange-400"
            >
              Buy me a Coffee
            </button>
            <button
              onClick={() => window.open("/collaboration.html", "_blank")}
              className="transition hover:text-orange-400"
            >
              Collaboration
            </button>
            <button
              onClick={() => window.open("/contact.html", "_blank")}
              className="transition hover:text-orange-400"
            >
              Contact
            </button>
            
            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 transition hover:text-orange-400"
              >
                More
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 rounded-lg border border-white/10 bg-slate-900/95 backdrop-blur-md py-2 shadow-lg">
                  {dropdownItems.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => scrollTo(item.href)}
                      className="block w-full px-4 py-2 text-left text-sm text-slate-300 transition hover:bg-white/10 hover:text-orange-400"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* Close dropdown when clicking outside */}
          {isDropdownOpen && (
            <div
              className="fixed inset-0 z-40"
              onClick={() => setIsDropdownOpen(false)}
            />
          )}

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-orange-400"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl border border-white/10 bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 md:hidden"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,rgba(37,99,235,0.28),transparent_34%),radial-gradient(circle_at_20%_55%,rgba(14,165,233,0.12),transparent_36%),linear-gradient(180deg,#07111f_0%,#06111d_100%)]" />

      {/* Grid floor */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-[42vh] opacity-30"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(59,130,246,0.28) 1px, transparent 1px), linear-gradient(to bottom, rgba(59,130,246,0.28) 1px, transparent 1px)",
          backgroundSize: "58px 58px",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
          transform: "perspective(600px) rotateX(60deg)",
          transformOrigin: "bottom",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-24 sm:pt-28 lg:px-8 lg:pt-32">
        <div className="grid min-h-[calc(100vh-7rem)] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Content */}
          <div className="order-2 text-center lg:order-1 lg:col-span-4 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/40 bg-white/5 px-5 py-2 text-base backdrop-blur-md">
              <span>👋</span>
              <span>Hello, I'm</span>
            </div>

            <h1 className="mt-7 text-6xl font-black leading-[0.9] tracking-wider sm:text-7xl md:text-8xl lg:text-8xl">
              NAAMI
            </h1>

            <h1
              className="mt-2 text-6xl leading-[0.9] text-orange-500 sm:text-7xl md:text-8xl lg:text-8xl"
              style={{
                fontFamily: "'Permanent Marker', cursive",
                transform: "rotate(-2deg)",
              }}
            >
              AHMED
            </h1>

            <p className="mt-7 bg-gradient-to-r from-sky-400 to-purple-400 bg-clip-text text-xl font-bold text-transparent">
              DevOps & Cloud Engineer
            </p>

            <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-slate-300 lg:mx-0">
              I build scalable cloud solutions, automate infrastructure, and
              turn ideas into real-world impact.
            </p>

            {/* <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
              <button
                onClick={() => scrollTo("#projects")}
                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-7 py-4 font-bold shadow-lg shadow-blue-500/30 transition hover:scale-105"
              >
                View My Work <ArrowRight className="h-5 w-5" />
              </button>

              <button
                onClick={() => scrollTo("#contact")}
                className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-7 py-4 font-bold backdrop-blur-md transition hover:bg-white/10"
              >
                Get In Touch <MessageCircle className="h-5 w-5" />
              </button>
            </div> */}

            <div className="mt-9">
              <p className="mb-4 font-bold">Connect with me</p>

              <div className="flex justify-center gap-4 lg:justify-start">
                {[
                  { href: personalInfo.github, Icon: Github, label: "GitHub" },
                  {
                    href: personalInfo.linkedin,
                    Icon: Linkedin,
                    label: "LinkedIn",
                  },
                  { href: "https://wa.me/94702652676", Icon: FaWhatsapp , label: "Whatsapp" },
                  {
                    href: `mailto:${personalInfo.email}`,
                    Icon: Mail,
                    label: "Email",
                  },
                ].map(({ href, Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    target={label !== "Email" ? "_blank" : undefined}
                    rel={label !== "Email" ? "noopener noreferrer" : undefined}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative order-1 flex h-[500px] w-full items-end justify-center overflow-visible sm:h-[600px] lg:order-2 lg:col-span-5 lg:h-[680px]">
            {/* Blue glow */}
            <div className="absolute left-1/2 top-16 h-[330px] w-[330px] -translate-x-1/2 rounded-full bg-blue-500/20 blur-2xl sm:top-20 sm:h-[430px] sm:w-[430px] lg:top-24 lg:h-[560px] lg:w-[560px]" />

            {/* Orbit circle */}
            <div className="absolute left-1/2 top-20 h-[300px] w-[300px] -translate-x-1/2 rounded-full border border-blue-500/20 sm:top-24 sm:h-[420px] sm:w-[420px] lg:top-28 lg:h-[540px] lg:w-[540px]" />

            {/* Dotted lines
            <svg className="absolute inset-0 z-10 h-full w-full">
              <path
                d="M80 160 C180 150, 250 185, 330 215"
                stroke="#f97316"
                strokeDasharray="8 8"
                fill="none"
              />
              <path
                d="M360 220 C450 200, 500 160, 610 150"
                stroke="#f97316"
                strokeDasharray="8 8"
                fill="none"
              />
              <path
                d="M90 380 C190 350, 250 400, 340 390"
                stroke="#f97316"
                strokeDasharray="8 8"
                fill="none"
              />
              <path
                d="M370 390 C460 360, 520 410, 620 380"
                stroke="#f97316"
                strokeDasharray="8 8"
                fill="none"
              />
            </svg> */}

            <img
              src="/assets/naami-removebg01.png"
              alt="Naami Ahmed"
              className="relative z-20 h-[410px] w-auto object-contain drop-shadow-[0_25px_70px_rgba(59,130,246,0.45)] sm:h-[520px] lg:h-[660px]"
            />

            {/* Floor glow */}
            <div className="absolute bottom-3 left-1/2 z-10 h-8 w-56 -translate-x-1/2 rounded-full bg-sky-400/40 blur-2xl sm:w-72 lg:w-96" />

<FloatingBadge
  className="left-[2%] top-[18%] sm:left-[5%] lg:left-[-4%]"
  icon={
    <div className="flex h-8 w-8 items-center justify-center">
      <img
        src="/assets/devops_icons/AWS.png"
        alt="AWS"
        className="h-7 w-7 object-contain"
      />
    </div>
  }
  title="AWS"
  subtitle="Community Member"
/>

            <FloatingBadge
              className="right-[2%] top-[24%] sm:right-[5%] lg:right-[-6%]"
              icon={<InfinityIcon className="h-5 w-5 text-sky-400" />}
              title="DevOps & Cloud"
              subtitle="Engineer"
            />

            <FloatingBadge
              className="bottom-[26%] left-[2%] sm:left-[5%] lg:left-[-5%]"
              icon={<Mic className="h-5 w-5 text-orange-400" />}
              title="Community"
              subtitle="Speaker"
            />

            <FloatingBadge
              className="bottom-[26%] right-[2%] sm:right-[5%] lg:right-[-6%]"
              icon={<Code2 className="h-5 w-5 text-white" />}
              title="Software"
              subtitle="Engineer"
            />
          </div>

          {/* Right Stats */}
          <div className="order-3 flex justify-center lg:col-span-3 lg:justify-end">
            <div className="w-full max-w-xs rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <Stat
                icon={<Rocket />}
                value="10+"
                label="Projects Completed"
              />
              <Divider />
              <Stat icon={<Cloud />} value="2+" label="Years Experience" />
              <Divider />
              <Stat icon={<Users />} value="1K+" label="Community Impact" />
            </div>
          </div>
        </div>

        {/* Scroll Down */}
        <div className="mt-8 flex flex-col items-center gap-2 text-sm text-slate-400">
          <span>Scroll Down</span>
          <button onClick={() => scrollTo("#about")} aria-label="Scroll down">
            <ChevronDown className="h-6 w-6 animate-bounce text-orange-400" />
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="fixed left-0 right-0 top-16 z-40 border-b border-white/10 bg-slate-900/95 backdrop-blur-md md:hidden">
            <div className="mx-auto max-w-7xl px-5 py-4 space-y-3">
              <button
                onClick={() => {
                  window.open("/gallery.html", "_blank");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 transition hover:text-orange-400"
              >
                Gallery
              </button>
              <button
                onClick={() => {
                  window.open("/buy-me-a-coffee.html", "_blank");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 transition hover:text-orange-400"
              >
                Buy me a Coffee
              </button>
              <button
                onClick={() => {
                  window.open("/collaboration.html", "_blank");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 transition hover:text-orange-400"
              >
                Collaboration
              </button>
              <button
                onClick={() => {
                  window.open("/contact.html", "_blank");
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-4 py-2 text-slate-300 transition hover:text-orange-400"
              >
                Contact
              </button>
              
              <div className="border-t border-white/10 pt-3 mt-3">
                <div className="px-4 py-2 text-sm font-semibold text-slate-400">More</div>
                {dropdownItems.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => {
                      scrollTo(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-slate-300 transition hover:text-orange-400 ml-2"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

const FloatingBadge = ({
  icon,
  title,
  subtitle,
  className,
}: {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  className: string;
}) => (
  <div
    className={`absolute z-30 flex items-center gap-2 rounded-xl border border-white/10 bg-slate-900/80 px-3 py-2 shadow-2xl backdrop-blur-xl sm:gap-3 sm:rounded-2xl sm:px-4 sm:py-3 ${className}`}
  >
    <div className="shrink-0">{icon}</div>
    <div>
      <p className="text-[11px] font-bold leading-tight text-white sm:text-sm">
        {title}
      </p>
      <p className="text-[9px] leading-tight text-slate-300 sm:text-xs">
        {subtitle}
      </p>
    </div>
  </div>
);

const Stat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-5">
    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200">
      {React.cloneElement(icon as React.ReactElement, {
        className: "h-7 w-7",
      })}
    </div>

    <div>
      <h3 className="text-3xl font-black text-orange-400">{value}</h3>
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  </div>
);

const Divider = () => <div className="my-5 h-px bg-white/10" />;

export default Hero;