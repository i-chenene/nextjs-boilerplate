import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight, FileText, MapPin, GraduationCap, Briefcase } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "FiLM: Visual Reasoning with Feature-wise Linear Modulation",
    period: "Jan 2026 — Mar 2026",
    type: "School Project",
    description:
      "Implemented the FiLM architecture in PyTorch for visual question answering on CLEVR and Sort-of-CLEVR datasets, with an interactive demo and feature-map visualizations.",
    bullets: [
      "Reimplemented FiLM (Perez et al., 2017) in PyTorch for visual reasoning tasks.",
      "Built a Streamlit app to inspect predictions, ablations, and feature-map behavior.",
      "Extended the project with conditional style transfer using Conditional Instance Normalization.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/i-chenene" },
    ],
  },
  {
    title: "Facial Emotion Recognition",
    period: "Sept 2025 — Oct 2025",
    type: "Personal Project",
    description:
      "Built a CNN in PyTorch for facial expression recognition and connected it to a real-time inference pipeline.",
    bullets: [
      "Trained a PyTorch CNN reaching 73% accuracy.",
      "Integrated a real-time webcam pipeline with OpenCV.",
      "Focused on practical computer vision workflows from training to deployment.",
    ],
    links: [
      { label: "GitHub", href: "https://github.com/i-chenene" },
    ],
  },
];

const experience = [
  {
    company: "Morphism.co",
    role: "AI Research Intern",
    period: "Apr 2026 — Aug 2026",
    location: "Gif-sur-Yvette, France",
    bullets: [
      "Develop graph-based machine learning pipelines for social network data collected from public APIs and multi-source platforms.",
      "Study interaction dynamics and information diffusion using graph representation learning and Graph Neural Networks.",
      "Explore deep learning methods for social network modeling, including graph learning, optimization, and regularization techniques.",
    ],
  },
];

const education = [
  {
    school: "Université Paris-Saclay",
    degree: "MS Mathematics and Artificial Intelligence",
    period: "Sept 2025 — Present",
    location: "Orsay, France",
    details:
      "Deep Learning, Machine Learning, Optimization, Statistical Modeling, Supervised and Unsupervised Statistical Learning, Probability, Databases.",
  },
  {
    school: "Aix-Marseille Université",
    degree: "BS Advanced Mathematics",
    period: "Sept 2022 — May 2025",
    location: "Marseille, France",
    details:
      "Linear Algebra, Inferential Statistics, Probability Theory, Measure Theory, Analysis, Differential Calculus, Programming (Python, R, Java).",
  },
];

const skills = {
  languages: ["Python", "SQL", "R", "LaTeX", "Java"],
  tools: ["PyTorch", "PyTorch Geometric", "Scikit-learn", "OpenCV", "MySQL", "MongoDB", "Streamlit"],
  focus: ["Machine Learning", "Deep Learning", "Computer Vision", "Graph Learning", "Optimization"],
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function SectionTitle({ eyebrow, title, subtitle }) {
  return (
    <div className="mb-8">
      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">{eyebrow}</p>
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-100 md:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">{subtitle}</p> : null}
    </div>
  );
}

function Pill({ children }) {
  return (
    <span className="rounded-full border border-zinc-800 bg-zinc-900/80 px-3 py-1 text-xs text-zinc-300">
      {children}
    </span>
  );
}

export default function IliesChenenePortfolio() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(120,119,198,0.16),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(99,102,241,0.14),transparent_18%),linear-gradient(to_bottom,rgba(255,255,255,0.02),transparent_20%)]" />

      <header className="sticky top-0 z-30 border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#top" className="text-sm font-semibold tracking-[0.22em] text-zinc-100 uppercase">
            ilieschenene
          </a>
          <nav className="hidden gap-6 text-sm text-zinc-400 md:flex">
            <a href="#about" className="transition hover:text-zinc-100">about</a>
            <a href="#experience" className="transition hover:text-zinc-100">experience</a>
            <a href="#projects" className="transition hover:text-zinc-100">projects</a>
            <a href="#skills" className="transition hover:text-zinc-100">skills</a>
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-6xl px-6 pb-24 pt-12 lg:px-8 lg:pt-20">
        <section className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55 }}>
            <p className="mb-4 text-sm uppercase tracking-[0.32em] text-zinc-500">Machine Learning · AI · Research</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-white md:text-6xl md:leading-[1.02]">
              I build clean, research-driven AI projects with a focus on deep learning, graph learning, and computer vision.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
              M1 Mathematics and Artificial Intelligence student at Paris-Saclay. Interested in applied machine learning,
              visual reasoning, graph representation learning, and building systems that actually work.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild className="rounded-2xl bg-white px-5 text-black hover:bg-zinc-200">
                <a href="#projects">View projects</a>
              </Button>
              <Button asChild variant="outline" className="rounded-2xl border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900">
                <a href="/resume.pdf" target="_blank" rel="noreferrer">
                  <FileText className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUp} transition={{ duration: 0.55, delay: 0.08 }}>
            <Card className="rounded-[28px] border border-white/10 bg-white/[0.03] shadow-2xl shadow-black/30">
              <CardContent className="p-7">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.25em] text-zinc-500">Profile</p>
                    <h2 className="mt-3 text-2xl font-semibold text-white">Iliès Chenene</h2>
                  </div>
                  <div className="h-14 w-14 rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-800 to-zinc-950" />
                </div>

                <div className="mt-8 space-y-4 text-sm text-zinc-400">
                  <div className="flex items-center gap-3"><MapPin className="h-4 w-4" /> France</div>
                  <div className="flex items-center gap-3"><GraduationCap className="h-4 w-4" /> Paris-Saclay · Mathematics & AI</div>
                  <div className="flex items-center gap-3"><Briefcase className="h-4 w-4" /> AI / ML / Research internships</div>
                </div>

                <div className="mt-8 flex gap-3">
                  <a
                    href="https://github.com/i-chenene"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl border border-white/10 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                  <a
                    href="#"
                    className="rounded-2xl border border-white/10 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href="mailto:yourname@email.com"
                    className="rounded-2xl border border-white/10 p-3 text-zinc-300 transition hover:border-white/20 hover:bg-white/5 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>

        <section id="about" className="mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle
              eyebrow="About"
              title="Minimal, technical, and straight to the point."
              subtitle="The goal is simple: show strong projects, clear experience, and an actual technical identity without making the site look overloaded."
            />
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  title: "Research-minded",
                  text: "I like projects with a real methodological side: experiments, ablations, architecture choices, and understanding why something works.",
                },
                {
                  title: "Builder",
                  text: "I enjoy turning ideas into working prototypes with PyTorch, Streamlit, OpenCV, and data pipelines that are usable in practice.",
                },
                {
                  title: "Current focus",
                  text: "Deep learning, graph learning, social network modeling, computer vision, and mathematically grounded machine learning.",
                },
              ].map((item) => (
                <Card key={item.title} className="rounded-[24px] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-zinc-400">{item.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="experience" className="mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle eyebrow="Experience" title="What I’m working on." />
            <div className="space-y-6">
              {experience.map((item) => (
                <Card key={item.company} className="rounded-[28px] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-7">
                    <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.role}</h3>
                        <p className="mt-1 text-base text-zinc-300">{item.company}</p>
                      </div>
                      <div className="text-sm text-zinc-400 md:text-right">
                        <p>{item.period}</p>
                        <p>{item.location}</p>
                      </div>
                    </div>
                    <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-400">
                      {item.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="projects" className="mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle
              eyebrow="Projects"
              title="Selected work"
              subtitle="A small set of projects that reflect how I think: solid technical foundations, clean implementation, and useful experimentation."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {projects.map((project) => (
                <Card key={project.title} className="group rounded-[28px] border border-white/10 bg-white/[0.03] transition hover:border-white/20 hover:bg-white/[0.045]">
                  <CardContent className="p-7">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <h3 className="max-w-xl text-xl font-semibold text-white">{project.title}</h3>
                        <p className="mt-2 text-sm text-zinc-400">{project.type}</p>
                      </div>
                      <div className="text-sm text-zinc-500">{project.period}</div>
                    </div>

                    <p className="mt-5 text-sm leading-7 text-zinc-400">{project.description}</p>

                    <ul className="mt-5 space-y-3 text-sm leading-7 text-zinc-400">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-zinc-500" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {project.links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-zinc-800 px-4 py-2 text-sm text-zinc-300 transition hover:border-zinc-700 hover:text-white"
                        >
                          {link.label}
                          <ArrowUpRight className="h-4 w-4" />
                        </a>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section className="mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle eyebrow="Education" title="Academic background" />
            <div className="grid gap-6 md:grid-cols-2">
              {education.map((item) => (
                <Card key={item.school} className="rounded-[24px] border border-white/10 bg-white/[0.03]">
                  <CardContent className="p-6">
                    <div className="flex flex-col justify-between gap-4 md:min-h-[180px]">
                      <div>
                        <h3 className="text-lg font-semibold text-white">{item.school}</h3>
                        <p className="mt-1 text-zinc-300">{item.degree}</p>
                      </div>
                      <div className="text-sm leading-7 text-zinc-400">
                        <p>{item.period}</p>
                        <p>{item.location}</p>
                        <p className="mt-3">{item.details}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="skills" className="mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <SectionTitle eyebrow="Skills" title="Stack" />
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="rounded-[24px] border border-white/10 bg-white/[0.03]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white">Languages</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.languages.map((skill) => <Pill key={skill}>{skill}</Pill>)}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[24px] border border-white/10 bg-white/[0.03]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white">Tools</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.tools.map((skill) => <Pill key={skill}>{skill}</Pill>)}
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-[24px] border border-white/10 bg-white/[0.03]">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-white">Focus</h3>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {skills.focus.map((skill) => <Pill key={skill}>{skill}</Pill>)}
                  </div>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </section>

        <section className="mt-24">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.5 }}>
            <Card className="rounded-[32px] border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02]">
              <CardContent className="flex flex-col gap-6 p-8 md:flex-row md:items-center md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">Contact</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">Looking for an internship or a strong ML profile?</h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-400">
                    I’m interested in AI, machine learning, and research-oriented roles where I can build, experiment, and contribute seriously.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button asChild className="rounded-2xl bg-white px-5 text-black hover:bg-zinc-200">
                    <a href="mailto:yourname@email.com">Send email</a>
                  </Button>
                  <Button asChild variant="outline" className="rounded-2xl border-zinc-700 bg-transparent text-zinc-100 hover:bg-zinc-900">
                    <a href="https://github.com/i-chenene" target="_blank" rel="noreferrer">GitHub</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
