import React, { useState } from "react";
import {
  Award,
  CalendarDays,
  // CheckCircle,
  Clock3,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  // Github,
  Infinity,
  Laptop,
  Quote,
  ShieldCheck,
  Star,
  Terminal,
  Trophy,
} from "lucide-react";

const CertificationsSkills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const certificates = [
    {
      title: "AWS Certified Solutions Architect",
      level: "Associate",
      issuer: "Amazon Web Services",
      date: "Preparing",
      category: "cloud",
      icon: "aws",
      link: "#",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      level: "",
      issuer: "Amazon Web Services",
      date: "Preparing",
      category: "cloud",
      icon: "aws",
      link: "#",
    },
    {
      title: "Microsoft Certified Azure Fundamentals",
      level: "",
      issuer: "Microsoft",
      date: "Learning",
      category: "cloud",
      icon: "▦",
      link: "#",
    },
    {
      title: "Google Cloud Digital Leader",
      level: "",
      issuer: "Google Cloud",
      date: "Learning",
      category: "cloud",
      icon: "☁️",
      link: "#",
    },
    {
      title: "HashiCorp Certified Terraform Associate",
      level: "",
      issuer: "HashiCorp",
      date: "Learning",
      category: "devops",
      icon: "⬡",
      link: "#",
    },
    {
      title: "GitHub Foundations",
      level: "",
      issuer: "GitHub",
      date: "Learning",
      category: "developer",
      icon: "GH",
      link: "#",
    },
    {
      title: "Linux Foundation Introduction to Linux",
      level: "",
      issuer: "The Linux Foundation",
      date: "Learning",
      category: "other",
      icon: "LF",
      link: "#",
    },
    {
      title: "AWS Certified Developer",
      level: "Associate",
      issuer: "Amazon Web Services",
      date: "Future Target",
      category: "developer",
      icon: "aws",
      link: "#",
    },
  ];

  const filteredCertificates =
    activeFilter === "all"
      ? certificates
      : certificates.filter((cert) => cert.category === activeFilter);

  return (
    <section className="relative overflow-hidden bg-[#06111f] px-4 py-16 text-white sm:px-6 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.2),transparent_30%),radial-gradient(circle_at_15%_45%,rgba(14,165,233,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 xl:grid-cols-2">
        {/* Certifications */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/30 p-5 backdrop-blur-xl sm:p-8">
          <PageHeader
            icon={<Award className="h-4 w-4" />}
            badge="Certifications"
            title="Continuous Learning."
            marker="Continuous Growth."
            desc="Here are some of the certifications and learning milestones that help me deepen my knowledge and stay up to date."
          />

          {/* <ImageHero color="orange" /> */}

          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <TopStat icon={<Trophy />} value="8+" label="Certifications Targeted" color="orange" />
            <TopStat icon={<CalendarDays />} value="5+" label="Cloud Certifications" color="blue" />
            <TopStat icon={<ShieldCheck />} value="3" label="Professional Levels" color="green" />
            <TopStat icon={<Clock3 />} value="100+" label="Hours of Learning" color="purple" />
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            {[
              ["all", "All Certifications"],
              ["cloud", "Cloud"],
              ["devops", "DevOps"],
              ["developer", "Developer"],
              ["security", "Security"],
              ["other", "Other"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
                  activeFilter === key
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white"
                    : "border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {filteredCertificates.map((cert) => (
              <CertificateCard key={cert.title} cert={cert} />
            ))}
          </div>

          <QuoteBox
            icon={<Trophy />}
            text="Investing in knowledge pays the best interest."
          />
        </div>

        {/* Skills */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/30 p-5 backdrop-blur-xl sm:p-8">
          <PageHeader
            icon={<Code2 className="h-4 w-4" />}
            badge="Skills"
            title="Tools I Use."
            marker="Skills I Trust."
            desc="A diverse set of skills and technologies that I use to build, learn and share."
          />

          {/* <ImageHero color="orange" /> */}

          <div className="mt-6 flex flex-wrap justify-center gap-5 text-sm">
            <Legend color="orange" label="Expert" />
            <Legend color="blue" label="Advanced" />
            <Legend color="green" label="Intermediate" />
            <Legend color="gray" label="Beginner" />
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <SkillGroup
              icon={<Cloud />}
              title="Cloud"
              skills={[
                ["AWS", 6],
                ["Microsoft Azure", 5],
                ["Google Cloud", 3],
                ["Cloud Architecture", 5],
              ]}
            />

            <SkillGroup
              icon={<Infinity />}
              title="DevOps & Tools"
              skills={[
                ["Docker", 5],
                ["Kubernetes", 4],
                ["Terraform", 4],
                ["CI/CD GitHub Actions", 5],
                ["Jenkins", 3],
                ["Git & GitHub", 6],
              ]}
            />

            <SkillGroup
              icon={<Terminal />}
              title="Languages"
              skills={[
                ["Python", 5],
                ["JavaScript", 5],
                ["TypeScript", 4],
                ["Bash", 3],
                ["SQL", 4],
              ]}
            />

            <SkillGroup
              icon={<Laptop />}
              title="Frontend"
              skills={[
                ["HTML", 6],
                ["CSS", 6],
                ["Tailwind CSS", 4],
                ["React.js", 4],
                ["Next.js", 3],
              ]}
            />

            <SkillGroup
              icon={<Database />}
              title="Backend"
              skills={[
                ["Node.js", 5],
                ["Express.js", 5],
                ["REST APIs", 5],
                ["MongoDB", 3],
                ["PostgreSQL", 3],
              ]}
            />

            <SkillGroup
              icon={<Star />}
              title="Other Skills"
              skills={[
                ["Linux", 5],
                ["Networking", 4],
                ["Problem Solving", 5],
                ["Public Speaking", 6],
                ["Technical Writing", 4],
                ["Community Building", 5],
              ]}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-5 text-lg font-black">Tools & Platforms I Work With</h3>

            <div className="grid grid-cols-3 gap-5 text-center sm:grid-cols-5 lg:grid-cols-9">
              {[
                ["VS Code", "💙"],
                ["Postman", "🚀"],
                ["Figma", "🎨"],
                ["Notion", "N"],
                ["Slack", "💬"],
                ["Discord", "🎧"],
                ["MongoDB", "🍃"],
                ["Firebase", "🔥"],
                ["Vercel", "▲"],
              ].map(([name, icon]) => (
                <div key={name}>
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-xl">
                    {icon}
                  </div>
                  <p className="text-xs text-slate-300">{name}</p>
                </div>
              ))}
            </div>
          </div>

          <QuoteBox
            icon={<Quote />}
            text="The more you practice, the better you get. The more you share, the more you grow."
          />
        </div>
      </div>
    </section>
  );
};

const PageHeader = ({
  icon,
  badge,
  title,
  marker,
  desc,
}: {
  icon: React.ReactNode;
  badge: string;
  title: string;
  marker: string;
  desc: string;
}) => (
  <div>
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
      <span className="text-orange-400">{icon}</span>
      {badge}
    </div>

    <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl">
      {title}
    </h2>

    <h3
      className="mt-1 text-4xl text-orange-500 sm:text-5xl"
      style={{ fontFamily: "'Permanent Marker', cursive" }}
    >
      {marker}
    </h3>

    <p className="mt-5 max-w-xl leading-7 text-slate-300">{desc}</p>
  </div>
);

// const ImageHero = ({ color }: { color: "orange" | "blue" }) => (
//   <div className="relative mt-4 flex h-60 justify-center overflow-hidden sm:h-72">
//     <div
//       className={`absolute top-6 h-56 w-56 rounded-full border ${
//         color === "orange"
//           ? "border-orange-500/30 bg-orange-500/10"
//           : "border-blue-500/30 bg-blue-500/10"
//       }`}
//     />
//     <img
//       src="/assets/naami-removebg01.png"
//       alt="Naami Ahmed"
//       className="relative z-10 h-full object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
//     />
//   </div>
// );

const TopStat = ({
  icon,
  value,
  label,
  color,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: "orange" | "blue" | "green" | "purple";
}) => {
  const colors = {
    orange: "text-orange-400",
    blue: "text-blue-400",
    green: "text-green-400",
    purple: "text-purple-400",
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center">
      <div className={`mx-auto mb-2 flex justify-center ${colors[color]}`}>
        {icon}
      </div>
      <h3 className="text-3xl font-black">{value}</h3>
      <p className="text-xs text-slate-300">{label}</p>
    </div>
  );
};

const CertificateCard = ({
  cert,
}: {
  cert: {
    title: string;
    level: string;
    issuer: string;
    date: string;
    icon: string;
    link: string;
  };
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-orange-500/40">
    <div className="mb-5 grid h-16 w-16 place-items-center rounded-xl bg-white/5 text-2xl font-black text-orange-400">
      {cert.icon}
    </div>

    <h3 className="font-black leading-6">
      {cert.title}
      {cert.level && <span className="block text-orange-400">{cert.level}</span>}
    </h3>

    <p className="mt-4 text-sm text-slate-300">{cert.issuer}</p>

    <p className="mt-3 flex items-center gap-2 text-sm text-slate-400">
      <CalendarDays className="h-4 w-4" />
      {cert.date}
    </p>

    <a
      href={cert.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-sky-400"
    >
      View Credential <ExternalLink className="h-4 w-4" />
    </a>
  </div>
);

const SkillGroup = ({
  icon,
  title,
  skills,
}: {
  icon: React.ReactNode;
  title: string;
  skills: [string, number][];
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <div className="mb-5 flex items-center gap-3">
      <span className="text-sky-400">{icon}</span>
      <h3 className="font-black">{title}</h3>
    </div>

    <div className="space-y-4">
      {skills.map(([skill, level]) => (
        <div key={skill} className="flex items-center justify-between gap-4">
          <span className="text-sm text-slate-200">{skill}</span>
          <Dots level={level} />
        </div>
      ))}
    </div>
  </div>
);

const Dots = ({ level }: { level: number }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5, 6].map((dot) => (
      <span
        key={dot}
        className={`h-2 w-2 rounded-full ${
          dot <= level
            ? level >= 5
              ? "bg-orange-400"
              : level >= 4
              ? "bg-blue-400"
              : "bg-green-400"
            : "bg-slate-600"
        }`}
      />
    ))}
  </div>
);

const Legend = ({
  color,
  label,
}: {
  color: "orange" | "blue" | "green" | "gray";
  label: string;
}) => {
  const colors = {
    orange: "bg-orange-400",
    blue: "bg-blue-400",
    green: "bg-green-400",
    gray: "bg-slate-400",
  };

  return (
    <div className="flex items-center gap-2">
      <span className={`h-3 w-3 rounded-full ${colors[color]}`} />
      <span>{label}</span>
    </div>
  );
};

const QuoteBox = ({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) => (
  <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
    <div className="text-orange-400">{icon}</div>
    <p className="flex-1 leading-7 text-slate-200">{text}</p>
    <span
      className="text-xl text-orange-500"
      style={{ fontFamily: "'Permanent Marker', cursive" }}
    >
      Naami Ahmed
    </span>
  </div>
);

export default CertificationsSkills;