import React from "react";
import { User, Quote } from "lucide-react";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#06111f] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.2),transparent_30%),radial-gradient(circle_at_15%_45%,rgba(14,165,233,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto max-w-5xl text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
          <User className="h-4 w-4 text-orange-400" />
          About Me
        </div>

        <h2 className="mt-6 text-4xl font-black sm:text-5xl">
          Building Solutions,
        </h2>

        <h3
          className="mt-2 text-4xl text-orange-500 sm:text-5xl"
          style={{ fontFamily: "'Permanent Marker', cursive" }}
        >
          Growing Communities.
        </h3>

        <div className="mx-auto mt-10 max-w-4xl rounded-3xl border border-white/10 bg-white/5 p-6 text-left backdrop-blur-xl sm:p-10">
          <p className="text-base leading-8 text-slate-300 sm:text-lg">
            I’m Naami Ahmed, a passionate technology enthusiast from Sri Lanka
            with a strong interest in cloud computing, DevOps, full-stack
            development, and community building.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            I enjoy building practical solutions, learning modern technologies,
            and turning ideas into useful digital experiences. My journey is
            focused on improving my technical skills, exploring real-world
            engineering practices, and continuously growing as a professional in
            the tech industry.
          </p>

          <p className="mt-5 text-base leading-8 text-slate-300 sm:text-lg">
            Beyond development, I actively engage with tech communities, share
            knowledge, participate in events, and support others who are starting
            their journey in software, cloud, and DevOps. I believe that learning
            becomes more powerful when it is shared with others.
          </p>

          <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-slate-950/30 p-5 sm:flex-row sm:items-center">
            <Quote className="h-8 w-8 shrink-0 text-orange-400" />
            <p className="text-slate-200">
              My goal is to keep learning, keep building, and create meaningful
              impact through technology and community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;