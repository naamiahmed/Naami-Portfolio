import React from "react";
import {
  GraduationCap,
  Briefcase,
  MapPin,
  // Code2,
  // Cloud,
  // Users,
  // Mic,
  // Rocket,
  Quote,
  // Award,
  // CheckCircle,
} from "lucide-react";

const EducationExperience: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#06111f] px-4 py-16 text-white sm:px-6 lg:px-8">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.22),transparent_28%),radial-gradient(circle_at_15%_45%,rgba(14,165,233,0.10),transparent_35%)]" />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 xl:grid-cols-2">
        {/* Education Page */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/30 p-5 backdrop-blur-xl sm:p-8">
          <HeroTitle
            badgeIcon={<GraduationCap className="h-4 w-4" />}
            badge="Education"
            title="Always Learning."
            marker="Always Growing."
            desc="My learning journey has been powered by curiosity, consistency, and a passion for technology."
          />

          {/* <ImageBox glowColor="blue" /> */}

          <SectionTitle icon={<GraduationCap />} title="Education Timeline" />

          <div className="relative mt-8 space-y-5 border-l border-blue-500/30 pl-6">
            <TimelineItem
              year="2025 - 2026"
              logo={
  <img
    src="/assets/other/wrexham.jpg"
    alt="Wrexham University"
    className="h-12 w-12 object-contain"
  />
}
              title="Bsc (Hons) Computing - Information Technology"
              institute="whrexham University - UK"
              meta="Information Technology • Sri Lanka"
              status="Completed"
            />          
            <TimelineItem
              year="2022 - 2025"
              logo={
  <img
    src="/assets/other/uom-logo.png"
    alt="ITUM"
    className="h-15 w-12 object-contain"
  />
}
              title="National Diploma in Technology - IT"
              institute="Institute of Technology, University of Moratuwa"
              meta="Information Technology • Sri Lanka"
              status="Completed"
            />

            <TimelineItem
              year="2022 - 2023"
              logo={
  <img
    src="/assets/other/nensala.png"
    alt="Nenasala"
    className="h-12 w-12 object-contain"
  />
}
              title="Diploma in Computer Science"
              institute="KDMC Nenasala"
              meta="Computer Science Fundamentals"
              status="Completed"
            />

            <TimelineItem
              year="2018 - 2020"
              logo="🏫"
              title="G.C.E Advanced Level"
              institute="MO/Bakinigahawela Muslim Central College"
              meta="Physical Science Stream"
              status="Completed"
            />
          </div>

          {/* <SectionTitle icon={<Award />} title="Continuous Learning" className="mt-10" /> */}

          {/* <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {[
              ["aws", "AWS Cloud Practitioner", "AWS", "Preparing"],
              ["☁️", "AWS Solutions Architect", "AWS", "Preparing"],
              ["🐧", "Linux Fundamentals", "Linux", "Learning"],
              ["⚙️", "DevOps Tools", "CI/CD", "Learning"],
              ["☸️", "Kubernetes", "Cloud Native", "Learning"],
            ].map(([logo, title, org, year]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-xl font-bold text-orange-400">
                  {logo}
                </div>
                <h4 className="text-sm font-bold">{title}</h4>
                <p className="mt-2 text-xs text-slate-400">{org}</p>
                <p className="mt-2 text-xs text-slate-300">{year}</p>
              </div>
            ))}
          </div> */}

          <QuoteBox text="I believe learning never stops. Every day is an opportunity to grow, unlearn, and relearn." />
        </div>

        {/* Experience Page */}
        <div className="rounded-3xl border border-white/10 bg-slate-900/30 p-5 backdrop-blur-xl sm:p-8">
          <HeroTitle
            badgeIcon={<Briefcase className="h-4 w-4" />}
            badge="Experience"
            title="Building Solutions."
            marker="Creating Impact."
            desc="From building scalable cloud solutions to leading communities, every experience has shaped who I am today."
          />

          {/* <ImageBox glowColor="orange" /> */}

          <SectionTitle icon={<Briefcase />} title="Experience Timeline" />

          <div className="relative mt-8 space-y-5 border-l border-blue-500/30 pl-6">

            <ExperienceItem
              year="Present"
              duration="2025 - Present"
                icon={
    <img
      src="/assets/other/evx-logo-.png"
      alt="EverestX Technology"
      className="h-14 w-14 object-contain"
    />
  }
              title="Associate Software Engineer"
              company="EverestX Technology"
              desc="Working on real-world software features using React, Angular, Spring Boot, AWS, Docker, Nginx and deployment workflows."
              status="Ongoing"
              location="Remote"
            />          
            <ExperienceItem
              year="Present"
              duration="2025 - 2026"
                icon={
    <img
      src="/assets/other/evx-logo-.png"
      alt="EverestX Technology"
      className="h-14 w-14 object-contain"
    />
  }
              title="Intern Software Engineer"
              company="EverestX Technology"
              desc="Working on real-world software features using React, Angular, Spring Boot, AWS, Docker, Nginx and deployment workflows."
              status="Complated"
              location="Remote"
            />

            <ExperienceItem
              year="2025"
              duration="May 2025 - Present"
                icon={
    <img
      src="/assets/devops_icons/AWS.png"
      alt="EverestX Technology"
      className="h-10 w-10 object-contain"
    />
  }
              title="AWS Cloud Club Captain"
              company="AWS"
              desc="Organizing cloud learning sessions, building community, and helping students learn AWS and cloud fundamentals."
              status="Active"
              location="Sri Lanka"
            />

            <ExperienceItem
              year="2024 - 2025"
              duration="Community Journey"
              icon={
    <img
      src="/assets/other/ms_logo.jpg"
      alt="EverestX Technology"
      className="h-14 w-14 object-contain"
    />
  }
              title="Microsoft Student Ambassador"
              company="Tech Communities"
              desc="Speaking at meetups, sessions, and community events about cloud, DevOps, software engineering and career growth."
              status="Active"
              location="Sri Lanka"
            />

            {/* <ExperienceItem
              year="2024"
              duration="Project Based"
              icon={<Rocket />}
              title="Full Stack Developer"
              company="Academic & Personal Projects"
              desc="Built web and mobile apps using React, Flutter, Node.js, Express, MongoDB, SQL and cloud deployment practices."
              status="Completed"
              location="Sri Lanka"
            /> */}
          </div>
{/* 
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-5 text-xl font-black">What I Bring to the Table</h3>

            <div className="grid grid-cols-2 gap-5 text-center sm:grid-cols-5">
              <Stat icon={<Rocket />} value="1+" label="Years Experience" />
              <Stat icon={<Code2 />} value="10+" label="Projects Delivered" />
              <Stat icon={<Cloud />} value="20+" label="Technologies Used" />
              <Stat icon={<Users />} value="1K+" label="People Impacted" />
              <Stat icon={<Mic />} value="10+" label="Community Sessions" />
            </div>
          </div> */}

          <QuoteBox text="Experience is not just about the time you put in, but the impact you create along the way." />
        </div>
      </div>
    </section>
  );
};

const HeroTitle = ({
  badgeIcon,
  badge,
  title,
  marker,
  desc,
}: {
  badgeIcon: React.ReactNode;
  badge: string;
  title: string;
  marker: string;
  desc: string;
}) => (
  <div>
    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
      <span className="text-orange-400">{badgeIcon}</span>
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

// const ImageBox = ({ glowColor }: { glowColor: "blue" | "orange" }) => (
//   <div className="relative mt-6 flex h-72 justify-center overflow-hidden sm:h-80">
//     <div
//       className={`absolute top-8 h-64 w-64 rounded-full border ${
//         glowColor === "blue"
//           ? "border-blue-500/30 bg-blue-500/10"
//           : "border-orange-500/30 bg-orange-500/10"
//       } blur-sm`}
//     />
//     <img
//       src="/assets/naami-removebg01.png"
//       alt="Naami Ahmed"
//       className="relative z-10 h-full object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
//     />
//   </div>
// );

const SectionTitle = ({
  icon,
  title,
  className = "",
}: {
  icon: React.ReactNode;
  title: string;
  className?: string;
}) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <div className="grid h-9 w-9 place-items-center rounded-full bg-blue-500/10 text-blue-400">
      {icon}
    </div>
    <h3 className="text-xl font-black">{title}</h3>
  </div>
);

const TimelineItem = ({
  year,
  logo,
  title,
  institute,
  meta,
  status,
}: {
  year: string;
  logo: React.ReactNode;
  title: string;
  institute: string;
  meta: string;
  status: string;
}) => (
  <div className="relative">
    <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full bg-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.8)]" />

    <div className="mb-2 text-sm font-bold text-blue-400">{year}</div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-white/5">
          {logo}
        </div>

        <div className="flex-1">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div>
              <h4 className="font-black">{title}</h4>
              <p className="mt-1 text-sm font-semibold text-blue-400">{institute}</p>
            </div>

            <span className="h-fit rounded-md border border-green-500/30 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-400">
              {status}
            </span>
          </div>

          <p className="mt-3 text-sm text-slate-300">{meta}</p>
        </div>
      </div>
    </div>
  </div>
);

const ExperienceItem = ({
  year,
  duration,
  icon,
  title,
  company,
  desc,
  status,
  location,
}: {
  year: string;
  duration: string;
  icon: React.ReactNode;
  title: string;
  company: string;
  desc: string;
  status: string;
  location: string;
}) => (
  <div className="relative">
    <span className="absolute -left-[31px] top-8 h-3 w-3 rounded-full bg-orange-500 shadow-[0_0_20px_rgba(249,115,22,0.8)]" />

    <div className="mb-2">
      <p className="text-sm font-black text-orange-400">{year}</p>
      <p className="text-xs text-slate-400">{duration}</p>
    </div>

    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
      <div className="flex gap-4">
        <div className="grid h-16 w-16 shrink-0 place-items-center rounded-xl bg-white/5 text-blue-400">
          {icon}
        </div>

        <div className="flex-1">
          <div className="flex flex-col justify-between gap-2 sm:flex-row">
            <div>
              <h4 className="font-black">{title}</h4>
              <p className="mt-1 text-sm font-semibold text-blue-400">{company}</p>
            </div>

            <span className="h-fit rounded-md border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-bold text-orange-400">
              {status}
            </span>
          </div>

          <p className="mt-3 text-sm leading-6 text-slate-300">{desc}</p>

          <div className="mt-3 flex items-center gap-2 text-sm text-slate-400">
            <MapPin className="h-4 w-4" />
            {location}
          </div>
        </div>
      </div>
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
  <div>
    <div className="mx-auto mb-2 text-blue-400">{icon}</div>
    <h4 className="text-2xl font-black">{value}</h4>
    <p className="text-xs text-slate-400">{label}</p>
  </div>
);

const QuoteBox = ({ text }: { text: string }) => (
  <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 sm:flex-row sm:items-center sm:justify-between">
    <Quote className="h-9 w-9 shrink-0 text-blue-500" />
    <p className="flex-1 leading-7 text-slate-200">{text}</p>
    <span
      className="text-xl text-orange-500"
      style={{ fontFamily: "'Permanent Marker', cursive" }}
    >
      Naami Ahmed
    </span>
  </div>
);

export default EducationExperience;