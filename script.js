(function () {
  "use strict";

  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Sticky header compact state + scroll progress ---------- */
  const header = document.getElementById("siteHeader");
  const scrollProgress = document.getElementById("scrollProgress");
  const onScroll = () => {
    header.classList.toggle("is-compact", window.scrollY > 40);
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
    scrollProgress.style.width = `${Math.min(100, Math.max(0, pct))}%`;
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile nav ---------- */
  const menuToggle = document.getElementById("menuToggle");
  const mobileNav = document.getElementById("mobileNav");
  menuToggle.addEventListener("click", () => {
    const isOpen = mobileNav.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  });
  mobileNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------- Hero console typing ---------- */
  const consoleBody = document.getElementById("consoleBody");
  function renderConsole() {
    if (prefersReducedMotion) {
      consoleBody.innerHTML = CONSOLE_LINES.map(
        (line) => `<div class="console-line" style="opacity:1;">${escapeLine(line)}</div>`
      ).join("");
      return;
    }
    CONSOLE_LINES.forEach((line, i) => {
      const el = document.createElement("div");
      el.className = "console-line";
      el.style.animationDelay = `${0.15 + i * 0.35}s`;
      el.innerHTML = escapeLine(line);
      consoleBody.appendChild(el);
    });
    const cursor = document.createElement("span");
    cursor.className = "console-cursor";
    consoleBody.appendChild(cursor);
  }
  function escapeLine(line) {
    const idx = line.indexOf(">");
    if (idx === -1) return line;
    return `<span class="arrow">&gt;</span>${line.slice(idx + 1)}`;
  }
  renderConsole();

  /* ---------- Timeline (Experience) ---------- */
  const timelineList = document.getElementById("timelineList");
  TIMELINE.forEach((item) => {
    const li = document.createElement("li");
    li.className = "timeline-item reveal";
    li.innerHTML = `
      <div>
        <p class="timeline-date">${item.date}</p>
        <span class="timeline-tag">${item.tag}</span>
      </div>
      <div>
        <p class="timeline-role">${item.role}</p>
        <p class="timeline-org">${item.org}</p>
        <ul class="timeline-bullets">
          ${item.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
      </div>
    `;
    timelineList.appendChild(li);
  });

  /* ---------- Projects ---------- */
  const projectGrid = document.getElementById("projectGrid");
  PROJECTS.forEach((p) => {
    const card = document.createElement("article");
    card.className = "project-card reveal" + (p.featured ? " featured" : "");
    card.innerHTML = `
      <p class="project-date">${p.date}</p>
      <h3 class="project-name">${p.name}</h3>
      <p class="project-desc">${p.description}</p>
      ${p.security_angle ? `<p class="project-angle">${p.security_angle}</p>` : ""}
      <div class="project-tech">
        ${p.tech.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
      </div>
    `;
    projectGrid.appendChild(card);
  });

  /* ---------- Security practice tabs ---------- */
  const tabsEl = document.getElementById("practiceTabs");
  const panelsEl = document.getElementById("practicePanels");
  PRACTICE_AREAS.forEach((area, i) => {
    const tab = document.createElement("button");
    tab.className = "practice-tab" + (i === 0 ? " is-active" : "");
    tab.textContent = area.label;
    tab.setAttribute("role", "tab");
    tab.setAttribute("aria-selected", i === 0 ? "true" : "false");
    tab.dataset.id = area.id;
    tab.addEventListener("click", () => activateTab(area.id));
    tabsEl.appendChild(tab);

    const panel = document.createElement("div");
    panel.className = "practice-panel" + (i === 0 ? " is-active" : "");
    panel.dataset.id = area.id;
    panel.setAttribute("role", "tabpanel");
    panel.innerHTML = `
      <h3 class="practice-heading">${area.heading}</h3>
      <p class="practice-body">${area.body}</p>
      ${area.tools.length ? `<div class="practice-tools">${area.tools.map((t) => `<span class="tech-tag">${t}</span>`).join("")}</div>` : ""}
    `;
    panelsEl.appendChild(panel);
  });
  function activateTab(id) {
    tabsEl.querySelectorAll(".practice-tab").forEach((t) => {
      const active = t.dataset.id === id;
      t.classList.toggle("is-active", active);
      t.setAttribute("aria-selected", String(active));
    });
    panelsEl.querySelectorAll(".practice-panel").forEach((p) => {
      p.classList.toggle("is-active", p.dataset.id === id);
    });
  }

  /* ---------- Speaking ---------- */
  const speakingGrid = document.getElementById("speakingGrid");
  SPEAKING.forEach((s) => {
    const card = document.createElement("article");
    card.className = "speaking-card reveal";
    card.innerHTML = `
      <p class="speaking-title">${s.title}</p>
      <span class="speaking-org">${s.org}</span>
      <p class="speaking-desc">${s.description}</p>
    `;
    speakingGrid.appendChild(card);
  });

  /* ---------- Skills ---------- */
  const skillsGrid = document.getElementById("skillsGrid");
  SKILLS.forEach((s) => {
    const card = document.createElement("div");
    card.className = "skill-card reveal";
    card.innerHTML = `
      <p class="skill-cat">${s.category}</p>
      <div class="skill-items">
        ${s.items.map((item) => `<span class="skill-item">${item}</span>`).join("")}
      </div>
    `;
    skillsGrid.appendChild(card);
  });

  /* ---------- Certifications ---------- */
  const certList = document.getElementById("certList");
  CERTIFICATIONS.forEach((c) => {
    const li = document.createElement("li");
    li.className = "cert-item";
    li.innerHTML = `<span class="cert-name">${c.name}</span><span class="cert-org">${c.org}</span>`;
    certList.appendChild(li);
  });
  document.getElementById("courseList").textContent = SHORT_COURSES;

  /* ---------- Copy email to clipboard ---------- */
  const copyBtn = document.getElementById("copyEmailBtn");
  if (copyBtn) {
    const label = copyBtn.querySelector(".copy-label");
    copyBtn.addEventListener("click", async () => {
      const email = copyBtn.dataset.email;
      try {
        await navigator.clipboard.writeText(email);
      } catch (err) {
        const tmp = document.createElement("textarea");
        tmp.value = email;
        tmp.style.position = "fixed";
        tmp.style.opacity = "0";
        document.body.appendChild(tmp);
        tmp.select();
        document.execCommand("copy");
        document.body.removeChild(tmp);
      }
      copyBtn.classList.add("is-copied");
      label.textContent = "Copied";
      window.clearTimeout(copyBtn._resetTimer);
      copyBtn._resetTimer = window.setTimeout(() => {
        copyBtn.classList.remove("is-copied");
        label.textContent = "Copy";
      }, 1800);
    });
  }

  /* ---------- Scrollspy: highlight active nav link ---------- */
  const navLinks = Array.from(document.querySelectorAll(".primary-nav a[href^='#'], .mobile-nav a[href^='#']"));
  const spySections = Array.from(
    new Set(navLinks.map((a) => a.getAttribute("href").slice(1)))
  )
    .map((id) => document.getElementById(id))
    .filter(Boolean);
  if (spySections.length && "IntersectionObserver" in window) {
    const spyObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const id = entry.target.id;
          navLinks.forEach((link) => {
            link.classList.toggle("is-current", link.getAttribute("href") === `#${id}`);
          });
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    spySections.forEach((section) => spyObserver.observe(section));
  }

  /* ---------- Scroll reveal ---------- */
  const revealEls = document.querySelectorAll(".reveal");
  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );
    revealEls.forEach((el) => io.observe(el));
  }
})();
