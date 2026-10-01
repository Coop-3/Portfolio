/* ==========================================================
   ALL YOUR CONTENT LIVES HERE.
   Edit this file and the whole site updates. Anything left as
   "" or [] is simply hidden, so you can fill things in gradually.
   Search for TODO to find what still needs your input.
   ========================================================== */

const SITE = {
  name: "Your Name", // TODO
  title: "Computer science graduate building web apps and data-driven dashboards", // TODO tweak
  intro: "TODO: One or two sentences on what you build and what kind of work you're looking for.",
  email: "you@example.com", // TODO
  github: "https://github.com/your-username", // TODO
  linkedin: "https://www.linkedin.com/in/your-profile", // TODO
  resume: "assets/resume.pdf", // TODO: put your resume PDF in the assets folder
  photo: "", // e.g. "assets/me.jpg" (optional)

  // Short line shown under the hero. Leave "" to hide.
  recognition: "Presented at CSCENCES 2026 · Shark Tank competition submission",

  about: [
    "TODO: A short paragraph about you: your background, what you enjoy building, and what you're aiming for.",
    "TODO: (Optional) A second paragraph about your interests in frontend, full stack, and AI.",
  ],

  // Only list what you'd be comfortable being asked about in an interview.
  skills: {
    Languages: ["TODO"],
    Frontend: ["TODO"],
    "Backend & data": ["TODO"],
    Tools: ["TODO"],
  },
};

/* ----------------------------------------------------------
   PROJECTS
   - id: used in the URL (project.html?id=connect-plus). No spaces.
   - image: card/hero screenshot, e.g. "assets/connect-plus.png"
   - screenshots: more images for the project page
   - links: { label, url } pairs. Empty url = hidden.
   Reorder this list to reorder the site.
   ---------------------------------------------------------- */
const PROJECTS = [
  {
    id: "connect-plus",
    title: "Connect Plus",
    category: "Independent study",
    summary: "A dashboard system built as a senior-year independent study project.",
    image: "",
    role: "TODO",
    timeframe: "Senior year", // TODO add semester/year
    team: "TODO (solo or team?)",
    stack: ["TODO"],
    recognition:
      "Presented at CSCENCES 2026 (written into the national computer science archive) and submitted to a broadcast Shark Tank competition judged by business clients.",
    problem: "TODO: What problem was the dashboard solving, and for whom?",
    built: [
      "TODO: Key feature 1",
      "TODO: Key feature 2",
      "TODO: Key feature 3",
    ],
    contribution: "TODO: What you personally designed and built.",
    results: ["TODO: Outcomes, numbers, feedback from the conference or competition"],
    screenshots: [],
    links: [
      { label: "Live demo", url: "" },
      { label: "GitHub", url: "" },
      { label: "Conference archive entry", url: "" },
    ],
  },
  {
    id: "cavline-dashboard",
    title: "Cavline Internship Dashboard",
    category: "Internship",
    summary:
      "A dashboard for onboarding data collection, team organization, and outreach tracking, using Google APIs for maps and local businesses.",
    image: "",
    role: "TODO (e.g. Software Engineering Intern)",
    timeframe: "TODO",
    team: "TODO",
    stack: ["Google APIs (Maps)", "TODO"],
    recognition: "",
    problem:
      "TODO: What the team struggled with before (tracking outreach, coordinating goals, etc.).",
    built: [
      "Data collection on onboarding screens",
      "Team organization and tracking",
      "Google APIs for maps and coordinating local businesses",
      "Tracking who the team communicated with and reached out to",
      "Collaboration features with checkmarks for meetings plus weekly and monthly goals",
    ],
    contribution: "TODO: Your specific role.",
    results: ["TODO: Impact on the team (numbers if you have them)"],
    screenshots: [], // Use sanitized/mock screenshots unless Cavline approves real ones
    links: [],
  },
  {
    id: "food-expiration-app",
    title: "Food Expiration App",
    category: "Team project",
    summary:
      "A food expiration app built by a team for a senior-year software engineering class, documented and presented as if for a real company.",
    image: "",
    role: "TODO",
    timeframe: "Senior year", // TODO add semester/year
    team: "TODO (team size)",
    stack: ["TODO"],
    recognition: "",
    problem: "TODO: What problem the app solves.",
    built: [
      "TODO: Key feature 1",
      "TODO: Key feature 2",
      "Full project documentation, as if for a real company",
    ],
    contribution:
      "TODO: Your part in the team's design, implementation, and communication.",
    results: ["Presented the finished project to the class. TODO: add feedback or grade if you like."],
    screenshots: [],
    links: [
      { label: "GitHub", url: "" },
      { label: "Live demo", url: "" },
    ],
  },
  {
    id: "memcached-resilience",
    title: "Memcached Resilience Research",
    category: "Research",
    summary:
      "Test engineering to find bottlenecks in Memcached, plus a system solution and improved system networking to fix them.",
    image: "",
    role: "TODO",
    timeframe: "TODO",
    team: "TODO",
    stack: ["Memcached", "TODO"],
    recognition: "",
    problem: "TODO: Which bottleneck you found and why it matters for resilience.",
    built: [
      "TODO: How you tested and measured the bottleneck",
      "TODO: The system solution you designed",
      "TODO: The networking improvements you implemented",
    ],
    contribution: "TODO: Your specific role.",
    results: ["TODO: Before/after numbers. Add charts as screenshots."],
    screenshots: [],
    links: [
      { label: "Paper / write-up", url: "" },
      { label: "GitHub", url: "" },
    ],
  },
];
