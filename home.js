/* Builds the home page from data.js. */
setupChrome();

document.title = SITE.name + " | Portfolio";

// Hero
document.getElementById("hero-name").textContent = SITE.name;
document.getElementById("hero-title").textContent = SITE.title;
document.getElementById("hero-intro").textContent = SITE.intro;
document.getElementById("hero-resume").href = SITE.resume;

const recognition = document.getElementById("recognition");
if (SITE.recognition) recognition.textContent = SITE.recognition;
else recognition.remove();

// Project cards
const grid = document.getElementById("project-grid");
PROJECTS.forEach((project) => {
  grid.append(
    h(
      "article",
      { class: "card" },
      projectImage(project, "card-image"),
      h(
        "div",
        { class: "card-body" },
        h("p", { class: "card-category" }, project.category),
        h(
          "h3",
          {},
          h("a", { class: "card-link", href: "project.html?id=" + project.id }, project.title)
        ),
        h("p", {}, project.summary),
        project.stack.length
          ? h("ul", { class: "tags" }, project.stack.map((tag) => h("li", {}, tag)))
          : null
      )
    )
  );
});

// About
const aboutText = document.getElementById("about-text");
SITE.about.forEach((paragraph) => aboutText.append(h("p", {}, paragraph)));
if (SITE.photo) {
  document
    .getElementById("about-photo")
    .append(h("img", { src: SITE.photo, alt: "Photo of " + SITE.name }));
} else {
  document.getElementById("about-photo").remove();
}

// Skills
const skills = document.getElementById("skills-list");
Object.entries(SITE.skills).forEach(([group, items]) => {
  skills.append(
    h("div", { class: "skill-group" }, h("h3", {}, group), h("p", {}, items.join(", ")))
  );
});

// Contact
document.getElementById("contact-links").append(...contactLinks());
