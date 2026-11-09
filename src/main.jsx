import React from "react";
import ReactDOM from "react-dom/client";
import {
  ArrowDownToLine,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  ChevronUp,
  Code2,
  Database,
  ExternalLink,
  GraduationCap,
  CheckCircle2,
  Cpu,
  Layers3,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Rocket,
  Search,
  Server,
  Share2,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  TestTube2,
  Trophy,
  X
} from "lucide-react";
import "./style.css";

const profile = {
  name: "Avery Foote",
  initials: "AF",
  role: "Senior Software Engineer",
  email: "averylfoote@gmail.com",
  phone: "(520) 302-5030",
  location: "Newark, New Jersey",
  linkedin: "https://www.linkedin.com/in/averyfoote",
  resume: "/assets/Avery-Foote-Resume.pdf",
  avatar: "/assets/avatar-beach-v2.jpg"
};

const navLinks = ["About", "Skills", "Experience", "Projects", "Education", "Contact"];
const marqueeSkills = ["React", "Next.js", "Node.js", "TypeScript", "Python", "C# / .NET", "AI Agents", "RAG", "OpenAI API", "Flutter", "React Native", "Azure", "AWS", "Docker", "Kubernetes"];

const commandLinks = [
  { label: "Explore live projects", href: "#projects" },
  { label: "View experience", href: "#experience" },
  { label: "Download resume", href: profile.resume, download: true },
  { label: "Send email", href: `mailto:${profile.email}` },
  { label: "Open LinkedIn", href: profile.linkedin, external: true }
];

const snapshot = [
  { value: "2013", label: "Engineering career began" },
  { value: "4", label: "Live products featured" },
  { value: "AI", label: "Agents, LLMs and RAG" },
  { value: "Cloud", label: "Azure and AWS" }
];

const skillGroups = [
  {
    title: "Frontend & Web",
    icon: Code2,
    skills: ["React", "Next.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3", "Responsive Design"]
  },
  {
    title: "Backend & APIs",
    icon: Server,
    skills: ["Node.js", "Python", "C#", ".NET", "ASP.NET Core", "Laravel", "REST APIs", "Microservices", "Application Security"]
  },
  {
    title: "AI & Intelligent Systems",
    icon: Cpu,
    skills: ["OpenAI API", "AI Agents", "LLMs", "RAG", "LangChain", "Generative AI", "Machine Learning", "AI Chatbots", "NLP", "Workflow Automation"]
  },
  {
    title: "Mobile Development",
    icon: Layers3,
    skills: ["Flutter", "React Native", "Dart", "Cross-Platform Apps", "iOS Concepts", "Android Concepts", "Mobile Architecture"]
  },
  {
    title: "Cloud & DevOps",
    icon: ShieldCheck,
    skills: ["Microsoft Azure", "AWS", "Docker", "Kubernetes", "CI/CD", "Git", "GitHub", "Cloud Architecture", "Application Deployment"]
  },
  {
    title: "Data & Architecture",
    icon: Database,
    skills: ["SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Database Design", "Data Modeling", "Query Optimization", "Data Pipelines", "Software Architecture", "Agile / SDLC"]
  }
];

const experiences = [
  {
    role: "Director of Software Engineering | AI, Cloud & Digital Product Architecture",
    company: "PCS",
    location: "Moorestown, NJ",
    period: "Jun 2023 – 2026",
    bullets: [
      "Led engineering strategy and architecture for enterprise applications, SaaS ecosystems, AI-powered platforms, and mobile apps.",
      "Worked across React, Next.js, Node.js, Python, C#, .NET, Flutter, React Native, and cloud infrastructure.",
      "Guided architecture decisions, engineering standards, mentoring, and delivery of critical technical initiatives.",
      "Drove integration of generative AI, LLMs, RAG pipelines, AI agents, and intelligent automation into business applications."
    ]
  },
  {
    role: "Principal Software Architect & Engineering Manager",
    company: "eMazzanti Technologies",
    location: "Hoboken, NJ",
    period: "Nov 2018 – May 2023",
    bullets: [
      "Led system architecture, technical planning, and team coordination for reliable enterprise applications.",
      "Designed scalable systems using C#, .NET Core, ASP.NET Core, React, Node.js, Python, and PostgreSQL.",
      "Contributed to mobile architecture and cross-platform development with Flutter and React Native.",
      "Improved development standards, code quality, system performance, and the maintainability of long-term products."
    ]
  },
  {
    role: "Senior Full-Stack & Mobile Application Engineer",
    company: "KRS IT Consulting",
    location: "Parsippany, NJ",
    period: "Jan 2015 – Oct 2018",
    bullets: [
      "Built web applications, business platforms, backend services, and mobile apps as connected end-to-end systems.",
      "Developed with React, JavaScript, TypeScript, Node.js, C#, .NET, Python, SQL, and REST API integrations.",
      "Expanded mobile engineering with Flutter, React Native, and native iOS and Android development concepts.",
      "Took on technical decisions, database architecture, performance improvements, and developer mentoring."
    ]
  },
  {
    role: "Software Engineer | Enterprise Application Development",
    company: "NJ Technology",
    location: "Marlton, NJ",
    period: "Jul 2013 – Dec 2014",
    bullets: [
      "Developed business applications and web solutions using C#, .NET Framework, ASP.NET, SQL Server, JavaScript, HTML, and CSS.",
      "Worked on object-oriented programming, database design, backend functionality, and API integrations.",
      "Built experience in debugging, testing, code quality, collaboration, and structured development practices."
    ]
  }
];

// Live products supplied by Avery. Product descriptions reflect the public websites;
// specific engineering responsibilities and project tech stacks are not assumed.
const projects = [
  {
    id: "caredevi",
    thumbnail: "/assets/projects/caredevi-preview-v2.jpg",
    title: "CareDevi",
    category: "Health & Wellness",
    domain: "caredevi.com",
    link: "https://www.caredevi.com/",
    description: "A connected wellness platform that brings wearable data, personal health scores, fitness challenges, and community motivation together.",
    features: ["Integrates data from wearables and health platforms", "Tracks sleep, recovery, activity, and readiness", "Supports group challenges and adaptive training"],
    detail: "CareDevi combines daily wellness insights with social motivation. Its public product experience features connected wearables, score dashboards, fitness challenges, and training plans."
  },
  {
    id: "empass",
    thumbnail: "/assets/projects/empass-preview-v2.jpg",
    title: "Empass Healthcare",
    category: "Healthcare",
    domain: "empass.com",
    link: "https://www.empass.com/",
    description: "A global healthcare ecosystem focused on connecting patients, providers, and partners with accessible virtual, on-site, and mobile care.",
    features: ["Virtual and on-site healthcare access", "Connected provider and mobile care networks", "Healthcare infrastructure with AI and fintech capabilities"],
    detail: "Empass presents its EmpassOne ecosystem as connected healthcare infrastructure combining provider networks, mobile services, AI, and fintech to broaden access to care."
  },
  {
    id: "fay",
    thumbnail: "/assets/projects/fay-preview-v2.jpg",
    title: "Fay Nutrition",
    category: "Healthcare",
    domain: "faynutrition.com",
    link: "https://www.faynutrition.com/",
    description: "A nutrition-care marketplace that helps people discover registered dietitians, explore specialties, and find care that fits their insurance.",
    features: ["Search dietitians by location and specialty", "Insurance-aware care discovery", "Patient and dietitian onboarding experiences"],
    detail: "Fay's public-facing platform connects clients with nutrition professionals, with search tools for geographic location, insurance provider, and nutrition specialty."
  },
  {
    id: "flyhomes",
    thumbnail: "/assets/projects/flyhomes-preview-v2.jpg",
    title: "Flyhomes",
    category: "Real Estate & Fintech",
    domain: "flyhomes.com",
    link: "https://flyhomes.com/",
    description: "A real estate platform that enables homeowners to buy their next home before selling their current one, with less dependence on sale contingencies.",
    features: ["Buy-before-you-sell homeownership solutions", "Home equity and financing support", "Tools and partner services for smoother transactions"],
    detail: "Flyhomes helps people bridge the timing gap between buying a new home and selling an existing one. Its platform highlights home equity access and a network of lending and real estate partners."
  }
];

const education = [
  {
    degree: "Bachelor of Computer Science",
    institution: "Princeton University",
    location: "Princeton, NJ",
    period: "Sep 2009 – May 2013"
  }
];

function useScrollProgress() {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const update = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return progress;
}

function useReveal() {
  React.useEffect(() => {
    const items = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.16 }
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCommandOpen, setIsCommandOpen] = React.useState(false);
  const [theme, setTheme] = React.useState("dark");
  const progress = useScrollProgress();
  useReveal();

  React.useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setIsCommandOpen(true);
      }
      if (event.key === "Escape") setIsCommandOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <div className="app-shell min-h-screen overflow-hidden text-slate-100">
      <Spotlight />
      <AnimatedBackground />
      <div className="fixed left-0 top-0 z-[60] h-1 bg-gradient-to-r from-teal-300 via-sky-300 to-amber-200 transition-all duration-150" style={{ width: `${progress}%` }} />
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        setIsCommandOpen={setIsCommandOpen}
        theme={theme}
        setTheme={setTheme}
      />
      <main>
        <Hero />
        <ShowcaseStrip />
        <SkillMarquee />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
      <FloatingDock setIsCommandOpen={setIsCommandOpen} />
      <CommandPalette isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </div>
  );
}

function Spotlight() {
  React.useEffect(() => {
    const update = (event) => {
      document.documentElement.style.setProperty("--spotlight-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--spotlight-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", update, { passive: true });
    return () => window.removeEventListener("pointermove", update);
  }, []);

  return <div className="spotlight" aria-hidden="true" />;
}

function AnimatedBackground() {
  const canvasRef = React.useRef(null);

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let frame = 0;
    let particles = [];

    const resize = () => {
      width = canvas.width = window.innerWidth * window.devicePixelRatio;
      height = canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      const count = Math.min(84, Math.floor(window.innerWidth / 18));
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
        vy: (Math.random() - 0.5) * 0.28 * window.devicePixelRatio,
        r: (index % 4 === 0 ? 1.8 : 1.2) * window.devicePixelRatio
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      gradient.addColorStop(0, "rgba(45, 212, 191, 0.18)");
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.08)");
      gradient.addColorStop(1, "rgba(251, 191, 36, 0.12)");

      particles.forEach((p, i) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.beginPath();
        ctx.fillStyle = i % 5 === 0 ? "rgba(251, 191, 36, 0.55)" : "rgba(125, 211, 252, 0.46)";
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();

        for (let j = i + 1; j < particles.length; j += 1) {
          const next = particles[j];
          const dx = p.x - next.x;
          const dy = p.y - next.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150 * window.devicePixelRatio) {
            ctx.strokeStyle = gradient;
            ctx.globalAlpha = 1 - dist / (150 * window.devicePixelRatio);
            ctx.lineWidth = 0.45 * window.devicePixelRatio;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(next.x, next.y);
            ctx.stroke();
            ctx.globalAlpha = 1;
          }
        }
      });

      frame = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 -z-10 opacity-70" aria-hidden="true" />;
}

function AvatarBadge({ size = "md", rounded = "full", className = "", alt = profile.name }) {
  const sizeClass = size === "sm" ? "h-10 w-10" : size === "lg" ? "h-14 w-14" : "h-11 w-11";
  const roundedClass = rounded === "xl" ? "rounded-2xl" : "rounded-full";

  return (
    <img
      src={profile.avatar}
      alt={alt}
      className={`object-cover object-center ring-1 ring-white/15 shadow-glow ${sizeClass} ${roundedClass} ${className}`.trim()}
      loading="eager"
    />
  );
}

function Header({ isMenuOpen, setIsMenuOpen, setIsCommandOpen, theme, setTheme }) {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-[#061018]/78 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="group flex items-center gap-3">
          <AvatarBadge size="sm" rounded="xl" alt={`${profile.name} avatar`} />
          <span className="text-sm font-semibold tracking-wide text-white group-hover:text-teal-200">{profile.name}</span>
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">
              {link}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <button onClick={() => setIsCommandOpen(true)} className="utility-btn">
            <Search size={16} />
            <span>Ctrl K</span>
          </button>
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="icon-link" aria-label="Toggle visual theme">
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white md:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#061018]/95 px-5 py-4 md:hidden">
          <div className="grid gap-2">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-xl px-3 py-3 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white"
              >
                {link}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
              <button
                onClick={() => {
                  setIsCommandOpen(true);
                  setIsMenuOpen(false);
                }}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-bold text-slate-100"
              >
                Search
              </button>
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-3 py-3 text-sm font-bold text-slate-100"
              >
                {theme === "dark" ? "Light" : "Dark"} Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative pt-32 sm:pt-36 lg:pt-40">
      <div className="mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-5 pb-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-8">
        <div className="reveal">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-teal-300/30 bg-teal-300/10 px-4 py-2 text-sm font-medium text-teal-100 shadow-glow">
            <Sparkles size={16} />
            Senior Full-Stack & AI Software Engineer
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
            Building software that scales. Making AI useful in the real world.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            I’m {profile.name}. I design, build, and lead the delivery of enterprise platforms, SaaS products,
            mobile apps, and AI-powered systems — from the first architecture sketch through production.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={profile.resume} download className="primary-btn">
              <ArrowDownToLine size={19} />
              Download Resume
            </a>
            <a href="#contact" className="secondary-btn">
              Get in Touch
              <ArrowRight size={19} />
            </a>
          </div>
          <div className="mt-9 grid max-w-xl grid-cols-3 gap-3">
            <MiniStat value="React / Next" label="Full Stack" />
            <MiniStat value="AI / LLMs" label="Intelligent Systems" />
            <MiniStat value="AWS / Azure" label="Cloud" />
          </div>
          <div className="mt-8 flex flex-wrap gap-3 text-sm text-slate-300">
            {["AI Agents & RAG", "SaaS Architecture", "Flutter & React Native", "Cloud & DevOps"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-3 py-2">
                <CheckCircle2 size={15} className="text-teal-200" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <CommandCenter />
      </div>
    </section>
  );
}

function ShowcaseStrip() {
  return (
    <section className="py-8">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal grid gap-4 md:grid-cols-4">
          {snapshot.map((item) => (
            <div key={item.label} className="snapshot-card">
              <p>{item.value}</p>
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillMarquee() {
  return (
    <section className="py-5" aria-label="Core technologies">
      <div className="marquee-wrap">
        <div className="marquee-track">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span key={`${skill}-${index}`}>
              <Star size={14} />
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommandCenter() {
  return (
    <div className="reveal relative mx-auto w-full max-w-xl [perspective:1100px]">
      <div className="hero-device">
        <div className="absolute -right-4 -top-4 rounded-2xl border border-amber-200/30 bg-amber-200/15 px-4 py-2 text-xs font-bold text-amber-100 shadow-2xl">
          Engineering since 2013
        </div>
        <div className="grid gap-5 sm:grid-cols-[0.78fr_1fr]">
          <div className="profile-shell">
            <img src={profile.avatar} alt="Beach photo avatar" className="profile-photo" loading="eager" decoding="async" />
            <div className="orbit-tag left-2 top-5">AI</div>
            <div className="orbit-tag bottom-8 right-0">Cloud</div>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-slate-400">Engineering Console</p>
            <h2 className="mt-2 text-2xl font-black text-white">{profile.name}</h2>
            <p className="mt-1 text-sm font-semibold text-teal-200">{profile.role}</p>
            <div className="mt-5 rounded-2xl border border-white/10 bg-slate-950/80 p-4 font-mono text-xs text-slate-300">
              <p><span className="text-teal-300">build</span>: React + Next.js + Node.js</p>
              <p><span className="text-sky-300">intelligence</span>: Agents + LLMs + RAG</p>
              <p><span className="text-amber-200">deploy</span>: Azure + AWS</p>
              <p className="typing-line mt-3 text-white">engineeringForImpact(true)</p>
            </div>
          </div>
        </div>
        <div className="mt-6 grid gap-3">
          {[
            ["Full Stack", "React, Next.js, Node.js, TypeScript, .NET"],
            ["AI Engineering", "Python, LLMs, RAG, Agents, Automation"],
            ["Mobile", "Flutter, React Native, iOS and Android"],
            ["Infrastructure", "Azure, AWS, Docker, Kubernetes, CI/CD"]
          ].map(([label, value]) => (
            <div key={label} className="feature-row">
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" label="About Me" title="A full-stack engineer drawn to the hard problems.">
      <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-panel reveal p-6 sm:p-8">
          <p className="text-base leading-8 text-slate-300">
            I started in full-stack development and kept gravitating toward the systems that needed to scale,
            stay reliable, and integrate with complex business workflows. Today, I work across enterprise
            applications, SaaS platforms, AI-powered products, and mobile experiences.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            My work spans React, Next.js, Node.js, TypeScript, Python, C#, and .NET, along with Flutter and React
            Native. I own the details behind the product — APIs, databases, cloud deployment, CI/CD, and the
            performance tuning that matters once real users arrive.
          </p>
          <p className="mt-5 text-base leading-8 text-slate-300">
            I also bring AI agents, retrieval-augmented generation, and workflow automation into applications
            with the same focus on usefulness, reliability, and long-term maintainability.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          <Metric value="2013" label="Started professional software engineering" />
          <Metric value="Full Stack" label="Web, backend, mobile and cloud" />
          <Metric value="AI + RAG" label="Intelligent products and workflows" />
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" label="Technical Skills" title="A versatile stack for ambitious software products.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {skillGroups.map(({ title, icon: Icon, skills }) => (
          <article key={title} className="tilt-card reveal group glass-panel p-6">
            <div className="mb-5 flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-teal-300/15 text-teal-200">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-bold text-white">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Experience() {
  return (
    <Section id="experience" label="Experience" title="From hands-on engineering to architecture and technical leadership.">
      <div className="relative grid gap-6 before:absolute before:left-4 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-gradient-to-b before:from-teal-300 before:to-sky-300 sm:before:block">
        {experiences.map((item) => (
          <article key={`${item.company}-${item.period}`} className="reveal glass-panel p-6 sm:ml-12 sm:p-8">
            <div className="absolute -left-[3.15rem] mt-1 hidden h-8 w-8 rounded-full border-4 border-[#061018] bg-teal-300 shadow-glow sm:block" />
            <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <h3 className="text-2xl font-bold text-white">{item.role}</h3>
                <p className="mt-2 text-lg font-semibold text-teal-200">{item.company}</p>
                <p className="mt-2 flex items-center gap-2 text-sm text-slate-400">
                  <MapPin size={16} />
                  {item.location}
                </p>
              </div>
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                <CalendarDays size={16} />
                {item.period}
              </p>
            </div>
            <ul className="mt-6 grid gap-3 text-slate-300">
              {item.bullets.map((bullet) => (
                <li key={bullet} className="flex gap-3 leading-7">
                  <span className="mt-3 h-2 w-2 shrink-0 rounded-full bg-teal-300" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

function ProjectPreview({ project }) {
  return (
    <div className={`project-preview preview-${project.id}`}>
      <div className="project-browser-bar" aria-hidden="true">
        <div className="flex items-center gap-1.5"><i /><i /><i /></div>
        <span>{project.domain}</span>
        <ExternalLink size={13} />
      </div>
      <div className="project-thumbnail-stage">
        <img
          src={project.thumbnail}
          alt={`Illustrated preview of ${project.title}`}
          loading="lazy"
          decoding="async"
          width="900"
          height="510"
        />
        <span className="project-thumbnail-tag">Project preview</span>
      </div>
    </div>
  );
}

function Projects() {
  const filters = ["All", ...new Set(projects.map((project) => project.category))];
  const [active, setActive] = React.useState("All");
  const [selectedProject, setSelectedProject] = React.useState(null);
  const visibleProjects = active === "All" ? projects : projects.filter((project) => project.category === active);

  return (
    <Section id="projects" label="Selected Projects" title="Real products. Real-world impact.">
      <p className="reveal mb-8 max-w-3xl text-base leading-8 text-slate-300">
        A selection of live products I’ve worked on across wellness, healthcare, nutrition, and real estate.
        Explore each platform or open a project card for a closer look.
      </p>
      <div className="reveal mb-7 flex flex-wrap gap-2" role="group" aria-label="Filter projects">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            aria-pressed={active === filter}
            onClick={() => setActive(filter)}
            className={`filter-pill ${active === filter ? "is-active" : ""}`}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        {visibleProjects.map((project) => (
          <article key={project.id} className="project-card group glass-panel flex h-full flex-col overflow-hidden p-5 sm:p-6">
            <ProjectPreview project={project} />
            <div className="mt-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-amber-100">{project.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-white">{project.title}</h3>
                <p className="mt-1 text-sm text-teal-200">{project.domain}</p>
              </div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="icon-link" aria-label={`Visit ${project.title} website`}>
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="mt-4 flex-1 leading-7 text-slate-300">{project.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.features.map((feature, index) => <span key={feature} className="project-feature-chip">{index === 0 ? <CheckCircle2 size={13} /> : null}{feature}</span>)}
            </div>
            <div className="mt-6 flex flex-wrap gap-3">
              <button onClick={() => setSelectedProject(project)} className="inline-flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-bold text-white transition hover:border-teal-300/50 hover:bg-teal-300/10">
                Project details <ArrowRight size={16} />
              </button>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-bold text-teal-200 transition hover:text-white">
                Live website <ExternalLink size={15} />
              </a>
            </div>
          </article>
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </Section>
  );
}

function ProjectModal({ project, onClose }) {
  React.useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[70] grid place-items-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-xl" role="presentation" onMouseDown={onClose}>
      <div className="modal-panel my-8 w-full max-w-2xl" role="dialog" aria-modal="true" aria-label={`${project.title} project details`} onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-teal-200">{project.category}</p>
            <h3 className="mt-2 text-2xl font-black text-white">{project.title}</h3>
            <p className="mt-1 text-sm text-slate-400">{project.domain}</p>
          </div>
          <button onClick={onClose} className="icon-link" aria-label="Close project details"><X size={18} /></button>
        </div>
        <img
          className="project-modal-thumbnail"
          src={project.thumbnail}
          alt={`Illustrated preview of ${project.title}`}
          width="900"
          height="510"
        />
        <p className="mt-5 leading-8 text-slate-300">{project.detail}</p>
        <h4 className="mt-6 font-bold text-white">Platform highlights</h4>
        <div className="mt-3 grid gap-3">
          {project.features.map((feature) => (
            <div key={feature} className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-slate-200">
              <CheckCircle2 className="mt-0.5 shrink-0 text-teal-200" size={18} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="primary-btn mt-7 w-full sm:w-fit">
          Visit live website <ExternalLink size={18} />
        </a>
      </div>
    </div>
  );
}

function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = React.useState("");
  const inputRef = React.useRef(null);
  const visibleLinks = commandLinks.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  React.useEffect(() => {
    if (isOpen) {
      setQuery("");
      setTimeout(() => inputRef.current?.focus(), 30);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const openItem = (item) => {
    if (item.download) {
      window.location.href = item.href;
    } else if (item.external) {
      window.open(item.href, "_blank", "noreferrer");
    } else {
      window.location.href = item.href;
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[80] bg-slate-950/75 p-4 backdrop-blur-xl" onMouseDown={onClose}>
      <div className="command-panel mx-auto mt-24 max-w-xl" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
          <Search className="text-teal-200" size={20} />
          <input
            ref={inputRef}
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search actions..."
            className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
          />
          <button onClick={onClose} className="text-slate-400 hover:text-white">
            <X size={18} />
          </button>
        </div>
        <div className="grid gap-2 p-3">
          {visibleLinks.map((item) => (
            <button key={item.label} onClick={() => openItem(item)} className="command-item">
              <span>{item.label}</span>
              <ArrowRight size={16} />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

function Education() {
  return (
    <Section id="education" label="Education" title="Academic foundation in computer science.">
      <div className="grid gap-5">
        {education.map((item) => (
          <article key={item.degree} className="reveal glass-panel flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex gap-4">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-teal-300/15 text-teal-200">
                <GraduationCap size={24} />
              </span>
              <div>
                <h3 className="text-lg font-bold text-white">{item.degree}</h3>
                <p className="mt-1 text-slate-300">{item.institution}</p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <p className="font-semibold text-teal-200">{item.location}</p>
              <p className="text-sm text-slate-400">{item.period}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  const contacts = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/[^+\d]/g, "")}`, icon: Phone },
    { label: "LinkedIn", value: "linkedin.com/in/averyfoote", href: profile.linkedin, icon: BriefcaseBusiness },
    { label: "Location", value: profile.location, href: null, icon: MapPin }
  ];

  return (
    <Section id="contact" label="Contact" title="Let’s build what comes next.">
      <div className="reveal glass-panel overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative overflow-hidden bg-gradient-to-br from-teal-300 via-sky-300 to-amber-200 p-8 text-slate-950 sm:p-10">
            <Rocket className="absolute -right-5 -top-5 opacity-20" size={150} />
            <h3 className="relative text-3xl font-black">Let’s connect.</h3>
            <p className="relative mt-4 leading-7">
              Have a complex platform, an AI initiative, or an engineering challenge? I’d love to learn what you’re building.
            </p>
            <a href={`mailto:${profile.email}`} className="relative mt-8 inline-flex items-center gap-2 rounded-2xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:-translate-y-0.5">
              Email Me <Mail size={18} />
            </a>
          </div>
          <div className="grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
            {contacts.map(({ label, value, href, icon: Icon }) => {
              const content = <><Icon className="text-teal-200" size={24} /><p className="mt-4 text-sm uppercase tracking-[0.16em] text-slate-400">{label}</p><p className="mt-1 break-words font-semibold text-white">{value}</p></>;
              return href ? (
                <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className="contact-card">{content}</a>
              ) : (
                <div key={label} className="contact-card">{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </Section>
  );
}

function Section({ id, label, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="reveal mb-10 max-w-3xl">
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-teal-200">{label}</p>
          <h2 className="text-3xl font-black leading-tight text-white sm:text-4xl">{title}</h2>
        </div>
        {children}
      </div>
    </section>
  );
}

function Metric({ value, label }) {
  return (
    <div className="metric-card reveal">
      <p className="text-4xl font-black text-teal-200">{value}</p>
      <p className="mt-2 font-medium text-slate-300">{label}</p>
    </div>
  );
}

function MiniStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-3">
      <p className="text-sm font-black text-white sm:text-base">{value}</p>
      <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.12em] text-slate-400">{label}</p>
    </div>
  );
}

function FloatingDock({ setIsCommandOpen }) {
  const [showTop, setShowTop] = React.useState(false);
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    const update = () => setShowTop(window.scrollY > 520);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const goTop = () => window.scrollTo({ top: 0, behavior: "smooth" });
  const sharePortfolio = async () => {
    const shareData = {
      title: `${profile.name} | ${profile.role}`,
      text: `Portfolio of ${profile.name}, ${profile.role}`,
      url: window.location.href
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        return;
      }

      if (navigator.clipboard) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = window.location.href;
        textarea.setAttribute("readonly", "");
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      if (error?.name !== "AbortError") {
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1800);
      }
    }
  };

  return (
    <div className="floating-dock" aria-label="Quick actions">
      <button onClick={() => setIsCommandOpen(true)} aria-label="Open command palette">
        <Search size={18} />
      </button>
      <a href={profile.resume} download aria-label="Download resume">
        <ArrowDownToLine size={18} />
      </a>
      <button onClick={sharePortfolio} aria-label={copied ? "Portfolio link copied" : "Share portfolio"} className={copied ? "is-copied" : ""}>
        {copied ? <CheckCircle2 size={18} /> : <Share2 size={18} />}
      </button>
      <button onClick={goTop} aria-label="Back to top" className={showTop ? "is-visible" : ""}>
        <ChevronUp size={18} />
      </button>
      {copied && <span className="dock-toast">Link copied</span>}
    </div>
  );
}

function Footer() {
  return (
    <footer className="footer-section">
      <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
        <div className="grid gap-8 border-b border-white/10 pb-8 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <AvatarBadge size="md" rounded="xl" alt={`${profile.name} avatar`} />
              <span>
                <strong className="block text-lg text-white">{profile.name}</strong>
                <small className="text-sm font-semibold text-slate-400">Senior Full-Stack & AI Software Engineer</small>
              </span>
            </a>
            <p className="mt-4 max-w-md leading-7 text-slate-400">
              Architecting and building reliable SaaS platforms, mobile applications, AI-powered products, and cloud systems.
            </p>
          </div>
          <div>
            <h3 className="footer-title">Explore</h3>
            <div className="mt-4 grid gap-2">
              {["About", "Skills", "Projects", "Experience", "Education"].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="footer-link">{link}</a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="footer-title">Connect</h3>
            <div className="mt-4 grid gap-2">
              <a href={`mailto:${profile.email}`} className="footer-link">Email</a>
              <a href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`} className="footer-link">Phone</a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
              <a href={profile.resume} download className="footer-link">Resume</a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pt-6 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Built with React, Vite, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
