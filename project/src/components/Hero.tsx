import React, { useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
} from "lucide-react";
import { personalInfo } from "../data/portfolio";

/**
 * CurvedArrow
 *
 * Renders a smooth quarter-circle arc with an arrowhead at the inner tip,
 * always pointing toward the photo.
 *
 * Base (variant "tl"): arc top-left → bottom-right, tip at bottom-right.
 * Mirrors:
 *   "tr" → scaleX(-1)    tip points bottom-left
 *   "bl" → scaleY(-1)    tip points top-right
 *   "br" → scale(-1,-1)  tip points top-left
 *
 * The SVG uses width/height="100%" so the parent div controls the size.
 * This lets us drive the size purely with CSS (clamp, vw, etc.).
 */
const CurvedArrow: React.FC<{ variant: "tl" | "tr" | "bl" | "br" }> = ({
  variant,
}) => {
  const sx = variant === "tr" || variant === "br" ? -1 : 1;
  const sy = variant === "bl" || variant === "br" ? -1 : 1;

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 130 110"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      style={{
        transform: `scale(${sx}, ${sy})`,
        transformOrigin: "center center",
        display: "block",
        overflow: "visible",
      }}
    >
      {/* Quarter-circle arc: top-left (15,12) → bottom-right (118,98) */}
      <path
        d="M 15 12 C 15 75, 65 98, 118 98"
        stroke="#f97316"
        strokeWidth="4.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Arrowhead at (118,98) pointing right along the curve tangent */}
      <polygon points="118,98 100,86 106,98 100,110" fill="#f97316" />
    </svg>
  );
};

/* ── Staggered fade-in-up entrance ── */
const FadeIn: React.FC<{
  delay?: number;
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}> = ({ delay = 0, children, className = "", style }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (!el) return;
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      })
    );
    return () => cancelAnimationFrame(id);
  }, [delay]);

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
};

const Hero: React.FC = () => {
  const scrollToAbout = () =>
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  // const scrollToServices = () =>
  //   document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-2 pt-20"
      style={{
        background:
          "radial-gradient(ellipse at 50% 40%, #2c2c2c 0%, #181818 45%, #080808 100%)",
      }}
    >
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)",
        }}
      />

      {/* Orange glow behind photo */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          width: "380px",
          height: "380px",
          background:
            "radial-gradient(circle, rgba(249,115,22,0.09) 0%, transparent 70%)",
          borderRadius: "50%",
        }}
      />

      {/* Floating particles */}
      {[
        { left: "8%",  top: "18%", dur: "9s",  del: "0s"   },
        { left: "22%", top: "65%", dur: "12s", del: "2.1s" },
        { left: "72%", top: "25%", dur: "10s", del: "0.8s" },
        { left: "88%", top: "72%", dur: "14s", del: "3.2s" },
        { left: "48%", top: "82%", dur: "11s", del: "1.4s" },
        { left: "38%", top: "12%", dur: "13s", del: "0.3s" },
      ].map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: p.left,
            top: p.top,
            width: 4,
            height: 4,
            background: "rgba(249,115,22,0.4)",
            animation: `particle-float-${(i % 5) + 1} ${p.dur} ease-in infinite`,
            animationDelay: p.del,
          }}
        />
      ))}

      {/* ════════════════════════════════════════════════════
          SINGLE UNIFIED LAYOUT — scales across all screens.

          Sizing strategy (all via clamp):
            mobile  ~360px  →  min values
            tablet  ~768px  →  mid values
            desktop ~1280px →  max values

          Column widths  : clamp(80px,  22vw, 280px)
          Column heights : clamp(180px, 42vw, 460px)
          Image height   : clamp(190px, 48vw, 500px)
          Label font     : clamp(0.58rem, 1.5vw, 1.15rem)
          Arrow box      : clamp(55px,  12vw, 110px) wide, 85% tall
          Arrow margin   : clamp(-6px,  -1.2vw, -28px)
          Name font      : clamp(1.5rem, 5.5vw, 5.5rem)
      ════════════════════════════════════════════════════ */}
      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-center min-h-[85vh]">

        {/* ── Three-column row ── */}
        <div className="flex items-center justify-center w-full">

          {/* ══ LEFT COLUMN ══ */}
          <div
            className="flex flex-col justify-between flex-shrink-0"
            style={{
              width:  "clamp(80px, 22vw, 280px)",
              height: "clamp(180px, 42vw, 460px)",
            }}
          >
            {/* TOP-LEFT: label → arrow (tip points toward photo) */}
            <FadeIn delay={400} className="flex flex-col items-end">
              <span
                className="text-white font-bold leading-snug text-right"
                style={{ fontSize: "clamp(0.58rem, 2.5vw, 1.15rem)" }}
              >
                AWS Community Member
              </span>
              {/* Arrow wrapper — CSS controls the rendered size */}
              <div
                style={{
                  width:        "clamp(55px, 12vw, 110px)",
                  height:       "clamp(47px, 10.2vw, 94px)",
                  marginRight:  "clamp(-6px, -1.2vw, -28px)",
                  marginTop:    "2px",
                  flexShrink:   0,
                }}
              >
                <CurvedArrow variant="tl" />
              </div>
            </FadeIn>

            {/* BOTTOM-LEFT: arrow → label */}
            <FadeIn delay={800} className="flex flex-col items-end">
              <div
                style={{
                  width:        "clamp(55px, 12vw, 110px)",
                  height:       "clamp(47px, 10.2vw, 94px)",
                  marginRight:  "clamp(-6px, -1.2vw, -28px)",
                  marginBottom: "2px",
                  flexShrink:   0,
                }}
              >
                <CurvedArrow variant="bl" />
              </div>
              <span
                className="text-white font-bold leading-snug text-right"
                style={{ fontSize: "clamp(0.58rem, 2.5vw, 1.15rem)" }}
              >
                Community Speaker
              </span>
            </FadeIn>
          </div>

          {/* ══ CENTER IMAGE ══ */}
          <FadeIn
            delay={100}
            className="relative flex-shrink-0 flex items-center justify-center"
            style={{ width: "clamp(150px, 34vw, 420px)" }}
          >
            <img
              src="/assets/naami-removebg01.png"
              alt="Naami Ahmed"
              className="object-contain drop-shadow-2xl"
              style={{
                height:   "clamp(190px, 48vw, 500px)",
                width:    "auto",
                maxWidth: "100%",
              }}
            />
          </FadeIn>

          {/* ══ RIGHT COLUMN ══ */}
          <div
            className="flex flex-col justify-between flex-shrink-0"
            style={{
              width:  "clamp(80px, 22vw, 280px)",
              height: "clamp(180px, 42vw, 460px)",
            }}
          >
            {/* TOP-RIGHT: label → arrow */}
            <FadeIn delay={600} className="flex flex-col items-start">
              <span
                className="text-white font-bold leading-snug text-left"
                style={{ fontSize: "clamp(0.58rem, 2.5vw, 1.15rem)" }}
              >
                DevOps & Cloud
                <br />
                Engineer
              </span>
              <div
                style={{
                  width:       "clamp(55px, 12vw, 110px)",
                  height:      "clamp(47px, 10.2vw, 94px)",
                  marginLeft:  "clamp(-6px, -1.2vw, -28px)",
                  marginTop:   "2px",
                  flexShrink:  0,
                }}
              >
                <CurvedArrow variant="tr" />
              </div>
            </FadeIn>

            {/* BOTTOM-RIGHT: arrow → label */}
            <FadeIn delay={1000} className="flex flex-col items-start">
              <div
                style={{
                  width:        "clamp(55px, 12vw, 110px)",
                  height:       "clamp(47px, 10.2vw, 94px)",
                  marginLeft:   "clamp(-6px, -1.2vw, -28px)",
                  marginBottom: "2px",
                  flexShrink:   0,
                }}
              >
                <CurvedArrow variant="br" />
              </div>
              <span
                className="text-white font-bold leading-snug text-left"
                style={{ fontSize: "clamp(0.58rem, 2.5vw, 1.15rem)" }}
              >
                Software Engineer
              </span>
            </FadeIn>
          </div>
        </div>

        {/* ── NAME ── */}
        <FadeIn delay={1200}>
          <h1
            className="text-center text-orange-500 drop-shadow-lg"
            style={{
              fontFamily:   "'Permanent Marker', cursive",
              fontSize:     "clamp(1.5rem, 5.5vw, 5.5rem)",
              letterSpacing: "0.04em",
              lineHeight:   1.1,
              marginTop:    "-4px",
            }}
          >
            NAAMI AHMED
          </h1>
        </FadeIn>

        {/* ── SOCIAL + CTA ── */}
        <FadeIn delay={1450} className="flex flex-col items-center gap-4 mt-5">
          {/* Social icons */}
          <div className="flex gap-3">
            {(
              [
                {
                  href:  `mailto:${personalInfo.email}`,
                  icon:  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />,
                  label: "Email",
                },
                {
                  href:     personalInfo.linkedin,
                  icon:     <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />,
                  label:    "LinkedIn",
                  external: true,
                },
                {
                  href:     personalInfo.github,
                  icon:     <Github className="w-4 h-4 sm:w-5 sm:h-5" />,
                  label:    "GitHub",
                  external: true,
                },
              ] as const
            ).map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...("external" in link && link.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="p-2.5 sm:p-3 bg-white/10 backdrop-blur-md rounded-full border border-white/10 hover:bg-orange-500 transition-all duration-300 hover:-translate-y-1 text-white"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          {/* <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1sptf09a95miNCJ0zwkCg9pRuKiq26xDb/view?usp=sharing",
                  "_blank"
                )
              }
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
              View Resume
            </button>
            <button
              onClick={scrollToServices}
              className="bg-white/10 border border-white/15 backdrop-blur-md hover:bg-white/20 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 text-sm sm:text-base"
            >
              <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />
              My Services
            </button>
          </div> */}
        </FadeIn>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <button
          onClick={scrollToAbout}
          className="text-orange-500 hover:text-orange-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="w-7 h-7" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
