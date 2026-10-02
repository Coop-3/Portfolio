/* Shared helpers used by every page. You shouldn't need to edit this. */

// Tiny DOM builder: h("a", { href: "#" }, "text") -> <a href="#">text</a>
function h(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [key, value] of Object.entries(attrs)) {
    if (key === "class") node.className = value;
    else if (value !== undefined && value !== null && value !== false) {
      node.setAttribute(key, value);
    }
  }
  for (const child of children.flat()) {
    if (child === null || child === undefined || child === false) continue;
    node.append(child.nodeType ? child : document.createTextNode(child));
  }
  return node;
}

// Fills in the header and footer and wires up the mobile menu.
function setupChrome() {
  document.getElementById("brand").textContent = SITE.name;
  document.getElementById("nav-resume").href = SITE.resume;
  document.getElementById("footer-text").textContent =
    "© " + new Date().getFullYear() + " " + SITE.name;

  const toggle = document.querySelector(".nav-toggle");
  const links = document.getElementById("nav-links");

  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.addEventListener("click", (event) => {
    if (event.target.tagName === "A") {
      links.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

// GitHub / LinkedIn / email links (skips any that are empty).
function contactLinks() {
  return [
    SITE.email && h("a", { href: "mailto:" + SITE.email }, "Email"),
    SITE.github && h("a", { href: SITE.github, target: "_blank", rel: "noopener" }, "GitHub"),
    SITE.linkedin && h("a", { href: SITE.linkedin, target: "_blank", rel: "noopener" }, "LinkedIn"),
  ].filter(Boolean);
}

// Screenshot if there is one, otherwise a placeholder block.
function projectImage(project, className) {
  if (project.image) {
    return h("img", {
      class: className,
      src: project.image,
      alt: project.title + " screenshot",
      loading: "lazy",
    });
  }
  return h("div", { class: className + " placeholder" }, project.title);
}