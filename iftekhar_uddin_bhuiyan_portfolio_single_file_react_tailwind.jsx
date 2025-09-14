import React from "react";
import { motion } from "framer-motion";
// shadcn/ui components (assumes you have shadcn set up in your project)
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// Using lucide-react icons
import { Mail, Linkedin, Github, Menu, X } from "lucide-react";

// Single-file React component for a modern dark-gradient portfolio
// - Uses Tailwind CSS utility classes
// - Uses Framer Motion for subtle animations
// - Assumes Tailwind, framer-motion, lucide-react, and shadcn (optional) are installed
// - Exported default component: Portfolio()

export default function Portfolio() {
  // Smooth scroll behavior for in-page links (works in modern browsers)
  React.useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = null;
    };
  }, []);

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const projects = [
    {
      id: 1,
      title: "Smart Note — AI Study Companion",
      desc: "A notes app with summarization, search, and flashcard generation using transformer models.",
      img: "https://source.unsplash.com/collection/190727/800x600",
      tags: ["React", "Node", "AI"],
    },
    {
      id: 2,
      title: "Portfolio v1",
      desc: "Personal portfolio with interactive UI and animations.",
      img: "https://source.unsplash.com/collection/190728/800x600",
      tags: ["React", "Tailwind", "Design"],
    },
    {
      id: 3,
      title: "Mini ML Toolkit",
      desc: "Toy models and training visualizations for learning ML concepts.",
      img: "https://source.unsplash.com/collection/190729/800x600",
      tags: ["Python", "ML", "Visualization"],
    },
  ];

  const skills = [
    { name: "CSE Fundamentals", level: 90 },
    { name: "Web Development", level: 85 },
    { name: "AI / ML", level: 75 },
    { name: "Data Structures", level: 88 },
    { name: "UI/UX Design", level: 70 },
  ];

  function handleContactSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const message = form.message.value;
    // Simple mailto fallback for instant demo. For production, replace with API call.
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:iftekhar@example.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#0b1222] to-[#0b0736] text-slate-100">
      {/* Decorative background glow */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute -right-48 -top-48 w-[600px] h-[600px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-purple-600 to-pink-500 mix-blend-screen" />
        <div className="absolute -left-48 -bottom-48 w-[500px] h-[500px] rounded-full blur-2xl opacity-20 bg-gradient-to-br from-blue-500 to-purple-700 mix-blend-multiply" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 backdrop-blur-md bg-black/20 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-3 font-semibold text-lg">
            <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-purple-400 to-pink-400 flex items-center justify-center text-black font-bold">I</div>
            <span>Iftekhar U. Bhuiyan</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-pink-300 transition">Home</a>
            <a href="#about" className="hover:text-pink-300 transition">About</a>
            <a href="#skills" className="hover:text-pink-300 transition">Skills</a>
            <a href="#projects" className="hover:text-pink-300 transition">Projects</a>
            <a href="#blog" className="hover:text-pink-300 transition">Blog</a>
            <a href="#contact" className="hover:text-pink-300 transition">Contact</a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="mailto:iftekhar@example.com" className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-white/5 border border-white/5 hover:bg-white/6 transition">
              <Mail size={16} /> <span className="text-sm">Email</span>
            </a>
          </div>

          <button className="md:hidden p-2 rounded-md bg-white/5" onClick={() => setMobileOpen((s) => !s)} aria-label="menu">
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div className="md:hidden bg-black/30 border-t border-white/5">
            <div className="px-6 py-4 flex flex-col gap-3">
              <a href="#hero" onClick={() => setMobileOpen(false)} className="py-2">Home</a>
              <a href="#about" onClick={() => setMobileOpen(false)} className="py-2">About</a>
              <a href="#skills" onClick={() => setMobileOpen(false)} className="py-2">Skills</a>
              <a href="#projects" onClick={() => setMobileOpen(false)} className="py-2">Projects</a>
              <a href="#blog" onClick={() => setMobileOpen(false)} className="py-2">Blog</a>
              <a href="#contact" onClick={() => setMobileOpen(false)} className="py-2">Contact</a>
            </div>
          </div>
        )}
      </header>

      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero */}
        <section id="hero" className="min-h-[72vh] flex items-center">
          <div className="w-full grid md:grid-cols-2 gap-8 items-center">
            <div>
              <motion.h1 initial={{ y: -20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }} className="text-4xl md:text-6xl font-extrabold leading-tight">
                Hi, I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-blue-300">Iftekhar Uddin Bhuiyan</span>
              </motion.h1>

              <motion.p initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.15 }} className="mt-4 text-lg md:text-xl text-slate-300 max-w-xl">
                Aspiring CSE Student & Future Innovator — building intuitive web experiences, exploring AI/ML, and crafting elegant code.
              </motion.p>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="mt-6 flex gap-4">
                <a href="#projects" className="inline-flex items-center rounded-full px-5 py-3 bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg hover:scale-105 transform transition">
                  View My Work
n                </a>
                <a href="#contact" className="inline-flex items-center rounded-full px-5 py-3 border border-white/10 hover:bg-white/5 transition">
                  Let's Talk
n                </a>
              </motion.div>

              <div className="mt-8 flex items-center gap-4 text-sm text-slate-400">
                <span>Connect:</span>
                <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-pink-300">LinkedIn</a>
                <span className="opacity-50">•</span>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-pink-300">GitHub</a>
              </div>
            </div>

            <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 0.2 }} className="mx-auto">
              {/* Profile card */}
              <div className="w-full max-w-sm bg-gradient-to-br from-white/3 to-white/2 border border-white/5 rounded-2xl p-6 backdrop-blur-md">
                <div className="flex items-center gap-4">
                  <img src="https://source.unsplash.com/collection/895539/200x200" alt="profile" className="w-20 h-20 rounded-full object-cover border-2 border-white/10" />
                  <div>
                    <div className="font-semibold">Iftekhar Uddin Bhuiyan</div>
                    <div className="text-sm text-slate-300">Aspiring CSE Student • Web & AI Enthusiast</div>
                  </div>
                </div>

                <p className="mt-4 text-sm text-slate-300">I'm a Computer Science student passionate about building web applications, exploring machine learning, and learning new technologies. I love turning ideas into polished, usable products.</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border">React</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border">Tailwind</span>
                  <span className="text-xs px-3 py-1 rounded-full bg-white/5 border">Python</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="mt-20">
          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-bold">About Me</motion.h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-black/30 border border-white/5 rounded-xl p-6">
              <p className="text-slate-300">Hello — I'm Iftekhar, a Computer Science student focused on web development and machine learning. I enjoy problem-solving, optimizing systems, and designing responsive user interfaces. I believe in continuous learning and enjoy collaborating on open-source projects.</p>

              <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-sm text-slate-300">
                <li>• Currently learning transformer models and deployment</li>
                <li>• Interested in full-stack development and scalable systems</li>
                <li>• Keen on UI/UX and design systems</li>
                <li>• Goal: build impactful products that help people</li>
              </ul>
            </div>

            <div className="bg-gradient-to-tr from-purple-700/30 to-pink-600/20 rounded-xl p-6 border border-white/5">
              <h3 className="font-semibold">Quick highlights</h3>
              <div className="mt-4 space-y-3 text-slate-200 text-sm">
                <div>
                  <div className="text-xs text-slate-400">Education</div>
                  <div>B.Sc. in Computer Science (in progress)</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Interests</div>
                  <div>AI/ML, Web Apps, Open Source, Design</div>
                </div>
                <div>
                  <div className="text-xs text-slate-400">Availability</div>
                  <div>Freelance & Collaboration</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-20">
          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-bold">Skills</motion.h2>
          <p className="text-slate-400 mt-2">Technical skills & proficiency</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              {skills.map((s) => (
                <div key={s.name}>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>{s.name}</span>
                    <span className="text-xs text-slate-400">{s.level}%</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-white/5 overflow-hidden">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${s.level}%` }} transition={{ duration: 0.8 }} className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-sm" />
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-black/30 border border-white/5 rounded-xl p-6">
              <h4 className="font-semibold">Tools & Tech</h4>
              <div className="mt-3 flex flex-wrap gap-2 text-sm text-slate-200">
                <span className="px-3 py-1 rounded-full bg-white/5 border">React</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border">Tailwind CSS</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border">Node.js</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border">Python</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border">Pandas</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border">Git</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border">Docker</span>
              </div>

              <p className="mt-4 text-sm text-slate-400">I enjoy learning new frameworks and improving both front-end and back-end skills. My focus is on building clean, maintainable codebases and elegant user experiences.</p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-20">
          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-bold">Projects</motion.h2>
          <p className="text-slate-400 mt-2">Selected projects with hover interactions</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <motion.article whileHover={{ y: -6 }} key={p.id} className="rounded-xl overflow-hidden border border-white/5 bg-black/25">
                <div className="relative">
                  <img src={p.img} alt={p.title} className="w-full h-44 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-80" />
                  <div className="absolute bottom-3 left-3 text-white">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="text-xs text-white/90 max-w-xs">{p.desc}</p>
                  </div>
                </div>
                <div className="p-4 flex items-center justify-between">
                  <div className="flex gap-2 text-xs text-slate-300">
                    {p.tags.map((t) => (
                      <span key={t} className="px-2 py-1 rounded-md bg-white/3">{t}</span>
                    ))}
                  </div>
                  <a href="#" className="text-sm text-pink-300 hover:underline">Details →</a>
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Blog (Optional) */}
        <section id="blog" className="mt-20">
          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-bold">Blog (Optional)</motion.h2>
          <p className="text-slate-400 mt-2">Short posts, thoughts, and tutorials — coming soon.</p>

          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {/* Placeholder cards */}
            <div className="rounded-xl border border-white/5 bg-black/25 p-6">
              <h4 className="font-semibold">Building a Small ML Project</h4>
              <p className="mt-2 text-sm text-slate-300">Walkthrough of dataset prep, model training, and deployment.</p>
              <div className="mt-4 text-xs text-slate-400">2 min read • Aug 2025</div>
            </div>

            <div className="rounded-xl border border-white/5 bg-black/25 p-6">
              <h4 className="font-semibold">Designing Responsive Layouts</h4>
              <p className="mt-2 text-sm text-slate-300">Tips on layout, accessibility, and performance for modern web apps.</p>
              <div className="mt-4 text-xs text-slate-400">3 min read • Jul 2025</div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-20 pb-16">
          <motion.h2 initial={{ x: -20, opacity: 0 }} animate={{ x: 0, opacity: 1 }} className="text-2xl font-bold">Contact</motion.h2>
          <p className="text-slate-400 mt-2">Need a collaborator or want to say hi? Send me a message.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <form onSubmit={handleContactSubmit} className="bg-black/30 border border-white/5 rounded-xl p-6">
              <div className="grid gap-3">
                <label className="text-sm text-slate-300">Your name</label>
                <input name="name" required className="rounded-md px-3 py-2 bg-transparent border border-white/6 placeholder:text-slate-500" placeholder="Your full name" />

                <label className="text-sm text-slate-300">Email</label>
                <input name="email" type="email" required className="rounded-md px-3 py-2 bg-transparent border border-white/6 placeholder:text-slate-500" placeholder="you@example.com" />

                <label className="text-sm text-slate-300">Message</label>
                <textarea name="message" required rows={5} className="rounded-md px-3 py-2 bg-transparent border border-white/6 placeholder:text-slate-500" placeholder="Tell me about your project or question" />

                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-3">
                    <a href="mailto:iftekhar@example.com" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border"> <Mail size={16} /> Email</a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border"> <Linkedin size={16} /> LinkedIn</a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border"> <Github size={16} /> GitHub</a>
                  </div>

                  <button type="submit" className="rounded-full px-5 py-2 bg-gradient-to-r from-purple-500 to-pink-500 shadow hover:scale-105 transition">Send</button>
                </div>
              </div>
            </form>

            <div className="flex flex-col justify-between bg-gradient-to-tr from-purple-700/20 to-pink-600/10 border border-white/5 rounded-xl p-6">
              <div>
                <h4 className="font-semibold">Get in touch</h4>
                <p className="mt-2 text-slate-300">Prefer a direct email? Use <span className="font-medium">iftekhar@example.com</span> or find me on LinkedIn and GitHub.</p>

                <div className="mt-4 flex gap-3 items-center">
                  <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border"> <Linkedin size={16} /> LinkedIn</a>
                  <a href="https://github.com/" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-md bg-white/5 border"> <Github size={16} /> GitHub</a>
                </div>
              </div>

              <div className="mt-6 text-sm text-slate-400">
                <div>Open to freelance, internships, and collaboration.</div>
                <div className="mt-3">© {new Date().getFullYear()} Iftekhar U. Bhuiyan</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 py-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between text-sm text-slate-400">
          <div>Made with ❤️ • Iftekhar Uddin Bhuiyan</div>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="hover:text-pink-300"><Linkedin size={16} /></a>
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="hover:text-pink-300"><Github size={16} /></a>
            <a href="mailto:iftekhar@example.com" className="hover:text-pink-300"><Mail size={16} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
