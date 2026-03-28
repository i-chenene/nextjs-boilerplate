"use client";

import Navbar from "@/components/Navbar";

const experience = [
  {
    role: "incoming AI Research Intern",
    company: "Morphism.co",
    companyHref: "https://morphism.co",
    period: "summer 2026",
    stack: "graph neural networks, PyTorch",
  },
];

const projects = [
  {
    title: "FiLM: Visual Question Answering",
    stack: "pytorch, CNN, streamlit, python",
    links: [{ label: "github", href: "https://github.com/i-chenene/FiLMProjet" }],
  },
  {
    title: "Facial Emotion Recognition",
    stack: "pytorch, CNN, OpenCV, python",
    links: [{ label: "github", href: "https://github.com/i-chenene/emotion-recognition" }],
  },
  {
    title: "Diabetes Prediction",
    stack: "scikit-learn, python, jupyter",
    links: [{ label: "github", href: "https://github.com/i-chenene/diabetes-prediction" }],
  },
];

const skills = [
  { label: "languages", value: "python, sql, R, LaTeX, java" },
  { label: "tools", value: "pytorch, scikit-learn, opencv, streamlit, pytorch geometric" },
];

export default function Portfolio() {
  return (
    <div
      className="min-h-screen max-w-4xl w-full px-8 py-8"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      {/* Nav */}
      <div className="flex flex-row justify-between mb-2">
        <span className="text-sm text-[#222]">iliès chenene</span>
        <Navbar />
      </div>

      {/* Education */}
      <section className="mb-14 text-sm leading-7">
        <p className="mb-5 font-bold" style={{ color: "#5b8dd9" }}>EDUCATION</p>
        <div className="space-y-5">
          <div>
            <p className="text-[#222]">MS Mathematics and Artificial Intelligence</p>
            <p className="text-[#bbb]">Université Paris-Saclay — Sept 2025 — Present</p>
          </div>
          <div>
            <p className="text-[#222]">BS Advanced Mathematics</p>
            <p className="text-[#bbb]">Aix-Marseille Université — Sept 2022 — May 2025</p>
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="experience" className="mb-14 text-sm leading-7">
        <p className="mb-5 font-bold" style={{ color: "#5b8dd9" }}>WORK</p>
        <div className="space-y-5">
          {experience.map((item) => (
            <div key={item.company}>
              <p className="text-[#222]">
                {item.role} at{" "}
                <a href={item.companyHref} target="_blank" rel="noreferrer"
                  className="underline underline-offset-4 decoration-[#ccc] hover:decoration-[#999] transition-all">
                  {item.company}
                </a>
              </p>
              <p className="text-[#bbb]">{item.period} — {item.stack}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mb-14 text-sm leading-7">
        <p className="mb-5 font-bold" style={{ color: "#5b8dd9" }}>PROJECTS</p>
        <div className="space-y-5">
          {projects.map((project) => (
            <div key={project.title} className="flex items-baseline justify-between">
              <div>
                <p className="text-[#222]">{project.title}</p>
                <p className="text-[#bbb]">{project.stack}</p>
              </div>
              <div className="flex gap-4 ml-8">
                {project.links.map((link) => (
                  <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                    className="text-[#bbb] underline underline-offset-4 hover:text-[#222] transition-colors">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="mb-14 text-sm leading-7">
        <p className="mb-5 font-bold" style={{ color: "#5b8dd9" }}>SKILLS</p>
        <div className="space-y-3">
          {skills.map((item) => (
            <div key={item.label} className="flex gap-6">
              <span className="text-[#bbb] w-24 shrink-0">{item.label}</span>
              <span className="text-[#444]">{item.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <div className="flex gap-5 pb-10">
        <a href="https://github.com/i-chenene" target="_blank" rel="noreferrer"
          className="hover:opacity-60 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/ilieschenene/" target="_blank" rel="noreferrer"
          className="hover:opacity-60 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
