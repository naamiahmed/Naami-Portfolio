import React, { useState } from "react";
import {
  Award,
  CalendarDays,
  Clock3,
  Cloud,
  Code2,
  Database,
  ExternalLink,
  Infinity,
  Laptop,
  Quote,
  ShieldCheck,
  Star,
  Terminal,
  Trophy,
} from "lucide-react";

import {
  // SiAmazonaws,
  // SiMicrosoftazure,
  SiGooglecloud,
  SiDocker,
  SiKubernetes,
  SiTerraform,
  SiGithubactions,
  SiJenkins,
  SiGit,
  SiGithub,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiGnubash,
  SiPostgresql,
  SiHtml5,
  // SiCss3,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiLinux,
  SiNotion,
  SiFigma,
  SiPostman,
  SiSlack,
  SiDiscord,
  SiFirebase,
  SiVercel,
} from "react-icons/si";


const CertificationsSkills: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const certificates = [
    {
      title: "AWS Serverless Demonstrated",
      level: "",
      issuer: "Amazon Web Services",
      date: "Preparing",
      category: "cloud",
      icon: "assets/cert/aws-serverless.png",
      isImage: true,
      link: "https://www.credly.com/badges/6af8e92e-9064-408f-9099-1ab17fec50be/public_url",
    },
    {
      title: "Microsoft Student Ambassador",
      level: "",
      issuer: "Microsoft",
      date: "9/9/2025",
      category: "cloud",
      icon: "assets/cert/MLSA.png",
      isImage: true,
      link: "https://www.credly.com/badges/aa895460-4328-4a0f-bce9-4fc423687049/public_url",
    },
    {
      title: "Manage Kubernetes in Google Cloud Skill Badge",
      level: "",
      issuer: "Google Cloud",
      date: "8/15/2024",
      category: "cloud",
      icon: "☁️",
      link: "https://www.credly.com/badges/e86148c9-618e-4fd8-bdbe-ea1ee45e9b8b/public_url",
    },
    {
      title: "LFS101: Introduction to Linux",
      level: "Foundation",
      issuer: "Linux Foundation",
      date: "10/6/2025",
      category: "devops",
      icon: "assets/cert/LF-linux.png",
      isImage: true,
      link: "https://www.credly.com/badges/038ef089-b73e-46f1-ae9a-5ed3f51eed02/public_url",
    },
    {
      title: "LFS158: Introduction to Kubernetes",
      level: "",
      issuer: "The Linux Foundation",
      date: "4/15/2026",
      category: "other",
      icon: "assets/cert/LF-k8s.png",
      isImage: true,
      link: "https://www.credly.com/badges/eb702cf3-22ba-42e4-828f-6ce35158073e/public_url",
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

          <QuoteBox icon={<Trophy />} text="Investing in knowledge pays the best interest." />
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

          <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
            <SkillGroup
              icon={<Cloud />}
              title="Cloud"
              skills={[
                {
                name: "AWS",
                icon: (
                   <img
                       src="/assets/devops_icons/AWS.png"
                       alt="AWS"
                      className="h-6 w-6 object-contain"
                    />
                 )
                },
                {
  name: "Azure",
  icon: (
    <img
      src="/assets/devops_icons/Azure.png"
      alt="Azure"
      className="h-6 w-6 object-contain"
    />
  )
},
                { name: "Google Cloud", icon: <SiGooglecloud /> },
                // { name: "Cloud Architecture", icon: <Cloud className="h-5 w-5" /> },
              ]}
            />

            <SkillGroup
              icon={<Infinity />}
              title="DevOps & Tools"
              skills={[
                { name: "Docker", icon: <SiDocker /> },
                { name: "Kubernetes", icon: <SiKubernetes /> },
                { name: "Terraform", icon: <SiTerraform /> },
                { name: "GitHub Actions", icon: <SiGithubactions /> },
                { name: "Jenkins", icon: <SiJenkins /> },
                { name: "Git", icon: <SiGit /> },
                { name: "GitHub", icon: <SiGithub /> },
              ]}
            />

            <SkillGroup
              icon={<Terminal />}
              title="Languages"
              skills={[
                { name: "Python", icon: <SiPython /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "TypeScript", icon: <SiTypescript /> },
                { name: "Bash", icon: <SiGnubash /> },
                { name: "SQL", icon: <SiPostgresql /> },
              ]}
            />

            <SkillGroup
              icon={<Laptop />}
              title="Frontend"
              skills={[
                { name: "HTML", icon: <SiHtml5 /> },
                // { name: "CSS", icon: <SiCss3 /> },
                { name: "Tailwind CSS", icon: <SiTailwindcss /> },
                { name: "React.js", icon: <SiReact /> },
                { name: "Next.js", icon: <SiNextdotjs /> },
              ]}
            />

            <SkillGroup
              icon={<Database />}
              title="Backend"
              skills={[
                { name: "Node.js", icon: <SiNodedotjs /> },
                { name: "Express.js", icon: <SiExpress /> },
                { name: "REST APIs", icon: <Code2 className="h-5 w-5" /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
              ]}
            />

            <SkillGroup
              icon={<Star />}
              title="Other Skills"
              skills={[
                { name: "Linux", icon: <SiLinux /> },
                { name: "Networking", icon: <Cloud className="h-5 w-5" /> },
                { name: "Problem Solving", icon: <Star className="h-5 w-5" /> },
                { name: "Public Speaking", icon: <Terminal className="h-5 w-5" /> },
                { name: "Technical Writing", icon: <Code2 className="h-5 w-5" /> },
                { name: "Community Building", icon: <Infinity className="h-5 w-5" /> },
              ]}
            />
          </div>

          <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
            <h3 className="mb-5 text-lg font-black">Tools & Platforms I Work With</h3>

            <div className="grid grid-cols-3 gap-5 text-center sm:grid-cols-5 lg:grid-cols-9">
              {[
                // ["VS Code", "💙"],
                ["Postman", <SiPostman />],
                ["Figma", <SiFigma />],
                ["Notion", <SiNotion />],
                ["Slack", <SiSlack />],
                ["Discord", <SiDiscord />],
                ["MongoDB", <SiMongodb />],
                ["Firebase", <SiFirebase />],
                ["Vercel", <SiVercel />],
              ].map(([name, icon]) => (
                <div key={name as string}>
                  <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-xl text-orange-400">
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
    isImage?: boolean;
  };
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:-translate-y-1 hover:border-orange-500/40">
    <div className="mb-5 grid h-16 w-16 place-items-center rounded-xl bg-white/5">
      {cert.isImage ? (
        <img
          src={cert.icon}
          alt={cert.title}
          className="h-12 w-12 object-contain"
        />
      ) : (
        <span className="text-2xl font-black text-orange-400">{cert.icon}</span>
      )}
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
  skills: {
    name: string;
    icon: React.ReactNode;
  }[];
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
    <div className="mb-5 flex items-center gap-3">
      <span className="text-sky-400">{icon}</span>
      <h3 className="font-black">{title}</h3>
    </div>

    <div className="grid grid-cols-1 gap-3">
      {skills.map((skill) => (
        <div
          key={skill.name}
          className="flex items-center gap-3 rounded-xl border border-white/10 bg-slate-950/30 p-3 transition hover:border-orange-500/40 hover:bg-white/10"
        >
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-xl text-orange-400">
            {skill.icon}
          </div>

          <span className="text-sm font-semibold text-slate-200">
            {skill.name}
          </span>
        </div>
      ))}
    </div>
  </div>
);

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