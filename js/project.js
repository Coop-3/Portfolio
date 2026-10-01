/* Builds a project page from data.js, using ?id=... in the URL. */
setupChrome();

const params = new URLSearchParams(window.location.search);
const index = PROJECTS.findIndex((p) => p.id === params.get("id"));
const root = document.getElementById("project");

// A titled section; skipped when there is nothing to show.
function section(title, content) {
  if (!content) return null;
  return h("section", { class: "project-section" }, h("h2", {}, title), content);
}

function list(items) {
  return items && items.length ? h("ul", {}, items.map((item) => h("li", {}, item))) : null;
}

if (index === -1) {
  document.title = "Project not found | " + SITE.name;
  root.append(
    h("h1", {}, "Project not found"),
    h("p", {}, h("a", { href: "index.html#projects" }, "Back to all projects"))
  );
} else {
  const project = PROJECTS[index];
  const next = PROJECTS[(index + 1) % PROJECTS.length];
  document.title = project.title + " | " + SITE.name;

  const facts = [
    ["Role", project.role],
    ["Timeframe", project.timeframe],
    ["Team", project.team],
  ].filter(([, value]) => value);

  const links = (project.links || []).filter((link) => link.url);

  root.append(
    h("p", { class: "card-category" }, project.category),
    h("h1", {}, project.title),
    h("p", { class: "lead" }, project.summary),
    project.recognition ? h("p", { class: "recognition" }, project.recognition) : null,
    projectImage(project, "project-hero"),

    h(
      "dl",
      { class: "facts" },
      facts.map(([label, value]) =>
        h("div", {}, h("dt", {}, label), h("dd", {}, value))
      ),
      project.stack.length
        ? h(
            "div",
            {},
            h("dt", {}, "Tech"),
            h("dd", {}, h("ul", { class: "tags" }, project.stack.map((t) => h("li", {}, t))))
          )
        : null
    ),

    section("The problem", project.problem ? h("p", {}, project.problem) : null),
    section("What I built", list(project.built)),
    section("My contribution", project.contribution ? h("p", {}, project.contribution) : null),
    section("Results", list(project.results)),
    section(
      "Screenshots",
      project.screenshots && project.screenshots.length
        ? h(
            "div",
            { class: "gallery" },
            project.screenshots.map((src) =>
              h("img", { src, alt: project.title + " screenshot", loading: "lazy" })
            )
          )
        : null
    ),
    section(
      "Links",
      links.length
        ? h(
            "ul",
            { class: "link-list" },
            links.map((link) =>
              h(
                "li",
                {},
                h("a", { href: link.url, target: "_blank", rel: "noopener" }, link.label)
              )
            )
          )
        : null
    ),

    h(
      "nav",
      { class: "project-nav", "aria-label": "Project navigation" },
      h("a", { href: "index.html#projects" }, "All projects"),
      h("a", { href: "project.html?id=" + next.id }, "Next: " + next.title)
    )
  );
}
