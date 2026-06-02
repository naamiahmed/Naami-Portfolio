import React from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Globe2,
  HeartHandshake,
  MapPin,
  Quote,
  Rocket,
  Sparkles,
  Users,
} from "lucide-react";
import { volunteering } from "../data/portfolio";
import PhotoGallery from "./PhotoGallery";

const Volunteering: React.FC = () => {
  return (
    <section
      id="volunteering"
      className="relative overflow-hidden bg-[#06111f] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_15%_45%,rgba(14,165,233,0.10),transparent_35%)]" />

      {/* Dotted decorations */}
      <div className="pointer-events-none absolute left-0 top-20 h-56 w-40 opacity-30 [background-image:radial-gradient(#ff6b00_1.5px,transparent_1.5px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute right-0 top-40 h-56 w-40 opacity-20 [background-image:radial-gradient(#ff6b00_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
              <span className="text-orange-400">
                <HeartHandshake className="h-4 w-4" />
              </span>
              Volunteering
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Community Work.
            </h2>

            <h3
              className="mt-1 text-4xl text-orange-500 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Real Impact.
            </h3>

            <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
              Contributing to the tech community through mentorship, open
              source, cloud events, student communities, and social impact
              initiatives.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <MiniImpact
                icon={<Users />}
                title="Community First"
                desc="Supporting learners and builders"
              />
              <MiniImpact
                icon={<Rocket />}
                title="Real Action"
                desc="Organizing and contributing"
              />
              <MiniImpact
                icon={<Sparkles />}
                title="Shared Growth"
                desc="Learning and growing together"
              />
            </div>
          </div>

          <div className="relative flex h-80 justify-center overflow-hidden sm:h-96">
            <div className="absolute top-10 h-72 w-72 rounded-full border border-orange-500/30 bg-orange-500/10 sm:h-80 sm:w-80" />
            <div className="absolute top-6 h-80 w-80 rounded-full border border-blue-500/20 sm:h-96 sm:w-96" />

            <img
              src="/assets/naami-removebg01.png"
              alt="Naami Ahmed"
              className="relative z-10 h-full object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <ImpactStat icon={<Users />} value="1K+" label="People Reached" />
          <ImpactStat icon={<Calendar />} value="10+" label="Events Supported" />
          <ImpactStat icon={<Globe2 />} value="5+" label="Communities" />
          <ImpactStat icon={<HeartHandshake />} value="50+" label="Learners Helped" />
        </div>

        {/* Volunteering Cards */}
        <div className="mt-10 space-y-6">
          {volunteering.map((volunteer, index) => (
            <article
              key={volunteer.id}
              className="group rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-orange-500/40 sm:p-7"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-start">
                    <div>
                      <div className="mb-4 inline-flex rounded-lg border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-400">
                        Community Impact
                      </div>

                      <h3 className="text-2xl font-black text-white">
                        {volunteer.role}
                      </h3>

                      <p className="mt-2 text-lg font-bold text-blue-400">
                        {volunteer.organization}
                      </p>

                      <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-400">
                        <span className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {volunteer.duration}
                        </span>

                        <span className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          Sri Lanka / Remote
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 sm:justify-end">
                      {volunteer.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-bold text-slate-200"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl text-base leading-7 text-slate-300">
                    {volunteer.description}
                  </p>

                  <div className="mt-6">
                    <h4 className="mb-3 text-lg font-black text-white">
                      Key Impact
                    </h4>

                    <ul className="grid gap-3">
                      {volunteer.impact.map((impact, impactIndex) => (
                        <li
                          key={impactIndex}
                          className="flex items-start gap-3 text-slate-300"
                        >
                          <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-orange-400" />
                          <span>{impact}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href="/contact.html"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-orange-500/50 px-5 py-3 text-sm font-black text-orange-400 transition hover:bg-orange-500 hover:text-white"
                  >
                    Collaborate With Me <ArrowRight className="h-4 w-4" />
                  </a>
                </div>

                <div className="rounded-2xl border border-white/10 bg-slate-950/30 p-4">
                  {volunteer.photos && volunteer.photos.length > 0 ? (
                    <PhotoGallery photos={volunteer.photos} isDark={true} />
                  ) : (
                    <div className="grid min-h-[220px] place-items-center rounded-xl border border-dashed border-white/10 bg-white/5 text-center">
                      <div>
                        <div className="mx-auto mb-3 grid h-14 w-14 place-items-center rounded-full bg-orange-500/10 text-orange-400">
                          <Calendar className="h-7 w-7" />
                        </div>
                        <p className="font-bold text-slate-200">
                          Event photos coming soon
                        </p>
                        <p className="mt-1 text-sm text-slate-400">
                          Gallery will be updated after the event.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Quote */}
        <div className="mt-10 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
          <Quote className="h-10 w-10 shrink-0 text-orange-400" />

          <p className="flex-1 text-lg leading-8 text-slate-200">
            Volunteering is not only about giving time. It is about creating
            opportunities, sharing knowledge, and helping others grow.
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

const MiniImpact = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-400">
      {icon}
    </div>

    <div>
      <h3 className="font-black text-white">{title}</h3>
      <p className="mt-1 text-sm leading-5 text-slate-400">{desc}</p>
    </div>
  </div>
);

const ImpactStat = ({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-xl">
    <div className="mx-auto mb-3 flex justify-center text-orange-400">
      {icon}
    </div>
    <h3 className="text-3xl font-black text-orange-400">{value}</h3>
    <p className="mt-1 text-sm text-slate-300">{label}</p>
  </div>
);

export default Volunteering;