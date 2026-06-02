import React from "react";
import {
  ArrowRight,
  Code2,
  ExternalLink,
  Github,
  Layers,
  Rocket,
  Server,
  Sparkles,
  Star,
} from "lucide-react";
import { ToggleState } from "../types";
import { projects } from "../data/portfolio";
import ToggleButton from "./ToggleButton";

interface ProjectsProps {
  activeToggle: ToggleState;
  onToggle: (state: ToggleState) => void;
}

const Projects: React.FC<ProjectsProps> = ({ activeToggle, onToggle }) => {
  const filteredProjects = projects.filter(
    (project) => project.category === activeToggle
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#06111f] px-4 py-16 text-white sm:px-6 lg:px-8"
    >
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(37,99,235,0.22),transparent_30%),radial-gradient(circle_at_15%_45%,rgba(14,165,233,0.10),transparent_35%)]" />

      {/* Dotted decorations */}
      <div className="pointer-events-none absolute left-0 top-24 h-56 w-40 opacity-30 [background-image:radial-gradient(#ff6b00_1.5px,transparent_1.5px)] [background-size:22px_22px]" />
      <div className="pointer-events-none absolute right-0 top-48 h-56 w-40 opacity-20 [background-image:radial-gradient(#ff6b00_1.5px,transparent_1.5px)] [background-size:22px_22px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_0.85fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold">
              <Code2 className="h-4 w-4 text-orange-400" />
              Projects
            </div>

            <h2 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Building Ideas.
            </h2>

            <h3
              className="mt-1 text-4xl text-orange-500 sm:text-5xl lg:text-6xl"
              style={{ fontFamily: "'Permanent Marker', cursive" }}
            >
              Creating Solutions.
            </h3>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              A collection of real-world projects, experiments, and learning
              builds across full-stack development, cloud, DevOps, and community
              impact.
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
              <MiniCard
                icon={<Layers />}
                title="Full Stack"
                desc="Frontend, backend and database"
              />
              <MiniCard
                icon={<Server />}
                title="Cloud & DevOps"
                desc="Deployments, CI/CD and automation"
              />
              <MiniCard
                icon={<Rocket />}
                title="Real Impact"
                desc="Projects solving real problems"
              />
            </div>
          </div>
{/* 
          <div className="relative flex h-72 justify-center overflow-hidden sm:h-80 lg:h-96">
            <div className="absolute top-8 h-72 w-72 rounded-full border border-orange-500/30 bg-orange-500/10 sm:h-80 sm:w-80" />
            <div className="absolute top-3 h-80 w-80 rounded-full border border-blue-500/20 sm:h-96 sm:w-96" />

            <img
              src="/assets/naami-removebg01.png"
              alt="Naami Ahmed"
              className="relative z-10 h-full object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.35)]"
            />
          </div> */}
        </div>

        {/* Stats */}
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          <ProjectStat icon={<Code2 />} value="10+" label="Projects Built" />
          <ProjectStat icon={<Server />} value="5+" label="Deployments" />
          <ProjectStat icon={<Sparkles />} value="20+" label="Technologies" />
          <ProjectStat icon={<Star />} value="3+" label="Featured Projects" />
        </div>

        {/* Toggle */}
        <div className="mt-10">
          <ToggleButton activeState={activeToggle} onToggle={onToggle} />
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition hover:-translate-y-2 hover:border-orange-500/40 hover:shadow-2xl hover:shadow-orange-500/10 sm:p-6"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Image / placeholder */}
              <div className="relative mb-5 grid h-44 place-items-center overflow-hidden rounded-2xl border border-white/10 bg-slate-950/40">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.25),transparent_55%)]" />
                <Code2 className="relative z-10 h-14 w-14 text-orange-400" />
                <div className="absolute bottom-3 left-3 rounded-full border border-orange-500/30 bg-orange-500/10 px-3 py-1 text-xs font-black text-orange-400">
                  {project.category}
                </div>
              </div>

              <h3 className="text-xl font-black text-white transition group-hover:text-orange-400">
                {project.title}
              </h3>

              <p className="mt-3 min-h-[84px] text-sm leading-6 text-slate-300">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full border border-white/10 bg-slate-950/40 px-3 py-1 text-xs font-bold text-slate-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="mt-6 flex flex-wrap gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-black text-slate-200 transition hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-400"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-orange-500/50 px-4 py-2 text-sm font-black text-orange-400 transition hover:bg-orange-500 hover:text-white"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Demo
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <p className="text-lg text-slate-300">
              No projects found for the selected category.
            </p>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-white/10 bg-blue-500/10 p-6 backdrop-blur-xl sm:flex-row">
          <div>
            <h3 className="text-2xl font-black">Have a project idea?</h3>
            <p className="mt-2 text-slate-300">
              Let’s collaborate and turn it into a real-world solution.
            </p>
          </div>

          <a
            href="/contact.html"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 px-6 py-3 text-sm font-black text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-1 hover:shadow-orange-500/40"
          >
            Start a Project <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

const MiniCard = ({
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

const ProjectStat = ({
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

export default Projects;