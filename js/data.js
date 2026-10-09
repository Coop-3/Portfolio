/* ==========================================================
   ALL YOUR CONTENT LIVES HERE.
   Edit this file and the whole site updates. Anything left as
   "" or [] is simply hidden, so you can fill things in gradually.
   Search for TODO to find what still needs your input.
   ========================================================== */

const SITE = {
  name: "Makayla Coleman",
  title: "Computer science graduate building web apps and data-driven dashboards",
  intro:
    "I build full-stack web applications and dashboards, and I'm looking for frontend, full stack, and AI-focused software roles.",
  email: "Makaylacolemans11@gmail.com", 
  github: "https://github.com/Coop-3",
  linkedin: "https://linkedin.com/in/makayla-coleman-152b642ba",
  resume: "assets/Makayla_Coleman_Resume(updated on 10_1_26).pdf", 
  photo: "", // e.g. "assets/me.jpg" (optional)

  // Short line shown under the hero. Leave "" to hide.
  recognition: "Presented at CCSCNE 2026 · Utica University Shark Tank competition submission", 

  about: [
    "TODO: A short paragraph about you: your background, what you enjoy building, and what you're aiming for.",
    "TODO: (Optional) A second paragraph about your interests in frontend, full stack, and AI.",
  ],

  // Only list what you'd be comfortable being asked about in an interview.
  skills: {
    Languages: ["JavaScript", "Python", "Java", "C++", "PHP"],
    Frontend: ["React", "HTML5", "CSS3", "Bootstrap", "Vite"],
    "Backend & data": ["Node.js", "Express", "MongoDB", "SQLite", "Memcached"],
    Tools: ["Git & GitHub", "Figma", "Canva", "Linux (Ubuntu)"],
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
    summary:
      "A full-stack project management app that brings tasks, alerts, messaging, and a dashboard into one workspace so teams don't have to juggle scattered tools.",
    image: "assets/Logo 1.png", 
    role: "Led all phases: system design, frontend and backend, database modeling, and testing",
    timeframe: "Senior year, spring 2026", 
    team: "Independent study (paper co-authored with Dr. Unnati Shah)",
    stack: [
      "React",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Mongoose",
      "Bootstrap",
      "Figma",
    ],
    recognition:
      "Presented at CCSCNE 2026 (Consortium for Computing Sciences in Colleges), written into the national computer science archive, and submitted to a broadcast Shark Tank competition judged by business clients.",
    problem:
      "Group work often ends up scattered across texts, email, shared documents, and chat apps, which leads to missed updates, unclear responsibilities, and lost information. Connect Plus is a lightweight, centralized place for students, instructors, and coworkers to manage tasks and share updates.",
    built: [
      "Authentication with email validation, password complexity rules, bcrypt password hashing, and email-based password reset",
      "Task management: create, edit, archive with a completion checkbox, and permanently delete while saving details to a Task History collection, plus a summary/history view",
      "Alerts with a title, project, description, priority, creator, and resolved status, stored in MongoDB",
      "A dashboard with navigation to My Tasks, Projects, Messages, Alerts, and Settings",
      "A messaging prototype (static messages, with real-time messaging planned)",
      "A three-layer architecture (React client, Express server, MongoDB) with feature-based routes, controllers, and data models",
    ],
    contribution:
      "I led every phase of the project: system design, frontend and backend implementation, database modeling, and testing. I taught myself React and Node.js while building it, along with password security practices and API design. It was my first independent study and my largest project.",
    results: [
      "Task management, authentication, and alerts were tested end to end against MongoDB; task management was the most complete module",
      "Presented the project and a paper at CCSCNE 2026",
      "Submitted to a broadcast Shark Tank competition at Utica University judged by business clients",
      "Still an early-stage prototype: messaging is a placeholder, and real-time updates (WebSockets), file attachments, filtering, and role-based visibility are planned",
    ],
    screenshots: [ "assets/Dashboard_Module.png","assets/Projects_Module.png","assets/Alerts_Module.png","assets/Login_Signup.png"], 
    links: [
      { label: "GitHub", url: "https://github.com/Coop-3/Project-management-app" },
      { label: "Paper", url: "https://dl.acm.org/doi/10.5555/3820586.3820615" }, 
      { label: "Live demo", url: "" },
    ],
  },
  {
   id: "cavline-dashboard",
    title: "Cavline Internship Dashboard",
    category: "Internship",
    summary:
      "A communication and outreach dashboard I built as a frontend developer intern to track screen onboarding, plan daily Google Maps routes, and keep the team organized.",
    image: "", 
    role: "Frontend Developer Intern",
    timeframe: "Summer 2026", 
    team: "Onboarding team at Cavline Co.",
    stack: ["Google Maps API", "TODO: add the frameworks and tools you used"],
    recognition: "",
    problem:
      "The team needed one place to find businesses with TV screens to onboard, keep notes on every conversation, and track progress toward weekly and monthly goals, instead of spreading that information across different tools and people.",
    built: [
      "A team hub for screen onboarding, data collection, team organization, and outreach tracking",
      "Google API integration to map local businesses with TV screens that could be onboarded",
      "A daily route builder that groups 10 businesses per day, orders them from closest to farthest by coordinates, and opens the whole route in Google Maps with one button, so no one drives back and forth across the city",
      "Outreach tracking for each business: who was spoken to, their contact details, notes, and when to come back if no one was there, all visible to teammates and partners",
      "Weekly and monthly goal trackers for screens, plus campaign tracking and a count of fully onboarded businesses",
      "A status for each business (fully onboarded, considering, needs more information, or needs a revisit)",
    ],
    contribution:
      "I was the frontend developer, building the dashboard interface the whole team used as their home base for communication and organization. TODO: add anything backend, design, or integration work you also handled.",
    results: [
      "The dashboard became the team's central hub for tracking outreach, notes, and goals",
      "TODO: add numbers if you have them (team size, businesses tracked, screens onboarded, time saved on routes)",
    ],
    screenshots: [ "assets/cavline_AdvertiserAcquisition.png" ,"assets/Cavline_Admin.png", "assets/Cavline_HostAcquisition.jpg","assets/Cavline_Homepage.jpg" ], // Use mock data and screenshots; do not show real business names or contact details
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
    timeframe: "Senior year,Spring 2026", 
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
      "Research on keeping Memcached fast when the cache fails, using Resilient Caching Strategies (RCS) and Cache Transaction Integrity (CTI) with a database fallback.",
    role: "Test engineering and system design for the fallback solution", 
    timeframe: "Spring semester, 2025",
    team: "With Kate Vaughan; advisor Dr. Unnati Shah",
    stack: ["Python", "Memcached", "pymemcache", "SQLite", "Ubuntu (VMware, WSL)", "Chart.js"],
    recognition: "",
    problem:
      "When a cache fails, requests fall through to slower disk-based databases. That means higher latency, a poorer user experience, and a database bottleneck as the number of users grows.",
    built: [
      "A Python test that sends 1,000 queries to a local Memcached server and simulates cache failures with a 10% random eviction rate",
      "A fallback strategy: on a cache miss, the value is read from a SQLite database and restored to Memcached",
      "Reporting of failure rate, transactions per second (TPS), and requests per second (RPS)",
      "A latency comparison graph and research poster contrasting regular Memcached with the RCS/CTI fallback approach",
    ],
    contribution:
      "TODO: Describe your part in 2-3 sentences, for example: I ran the test engineering to find the bottleneck in Memcached, then worked on a system solution and improved system networking to address it.",
    results: [
      "Hypothesis: a database fallback with RCS/CTI keeps Memcached more resilient during and after a cache failure",
      "Latency comparison from my research and reading: regular Memcached 10 ms before a failure, 500 ms during, 250 ms after; with the RCS/CTI fallback 10 ms, 300 ms, and 120 ms (about 1.67x and 2.08x faster). These illustrate the expected difference and are not output by the test script.",
      "Example test run: 1,000 requests, 99 cache misses (9.90%), 121.30 TPS, 109.29 RPS, with each miss recovered from the SQLite fallback",
      "Next step: time individual requests and add a no-fallback baseline for a direct comparison",
    ],
    screenshots: ["assets/with_RSC_CTI.png","assets/without_RSC_CTI.png"], 
    links: [
      { label: "GitHub", url: "https://github.com/Coop-3/Mechached-Resilience-Test" },
      { label: "Research poster", url: "assets/Scaling_memcached_poster.pdf" },
    ],
  },
];