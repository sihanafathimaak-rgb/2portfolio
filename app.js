const resumeAssetPath = "public/assets/resume/Sihana-Fathima-Resume.pdf";
const characterVideoPath = "public/assets/character/intro-walking.mp4";
const characterPosterPath = "public/assets/character/intro-poster.jpg";
const resumeAssetAvailable = false;
const characterVideoAvailable = false;
const characterPosterAvailable = false;

const skills = [
  { title: "Programming languages", items: ["C", "C++", "Python"] },
  { title: "Web technologies", items: ["HTML", "CSS", "JavaScript", "Tailwind CSS", "Bootstrap"] },
  { title: "Core skills", items: ["Data Structures and Algorithms", "Problem Solving", "Team Collaboration", "Basic Web Development"] },
  { title: "Tools", items: ["VS Code", "GitHub"] }
];

const projects = [
  {
    number: "01", title: "Phishing domain detection using AI/ML", short: "Exploring how machine learning can distinguish legitimate and phishing domains.",
    description: "Academic project exploring how machine learning can classify website domains as legitimate or phishing by analysing URL and domain-based features, with a focus on data preparation, model training and result evaluation.",
    focus: "Data preparation · Model training · Result evaluation", visual: "visual--domains", label: "DOMAIN STUDY / 01"
  },
  {
    number: "02", title: "SentinelAI — Autonomous Smart Street Intelligence", short: "A team concept for AI-assisted street monitoring and safer public spaces.",
    description: "Team project proposing an AI-assisted street monitoring concept for safer public spaces, covering the solution design, feature planning and presentation of the idea.",
    focus: "Team project · Concept design · Feature planning", visual: "visual--streets", label: "CITY STUDY / 02"
  },
  {
    number: "03", title: "Python mini projects", short: "A collection of small builds to practise programming and problem-solving.",
    description: "Developed multiple Python mini projects to strengthen programming, problem-solving and practical coding skills.",
    focus: "Python · Learning projects", visual: "visual--python", label: "PRACTICE NOTES / 03"
  }
];

const chapters = [
  ["Starting Computer Science", "Beginning the journey as a first-year B.Sc. Computer Science student."],
  ["Learning programming", "Building foundations through C, C++ and Python."],
  ["Exploring data structures", "Learning Data Structures and Algorithms and participating in visual learning activities."],
  ["Building projects", "Working on Phishing Domain Detection using AI/ML, SentinelAI — Autonomous Smart Street Intelligence, and Python Mini Projects."],
  ["Exploring AI", "Learning about AI/ML through academic projects, AI-related workshops and prompt engineering."],
  ["Web development training", "Building web development fundamentals through ongoing internship training in HTML, CSS and JavaScript."],
  ["Hackathon experience", "Team Lead in the college-level Smart India Hackathon internal round, contributing to team coordination, solution development and presentation."],
  ["First semester — the journey so far", "Learning, projects, certifications, activities, creative experience and technical exploration. Still in progress."]
];

const certificates = [
  { title: "Business Development Workshop", organization: "Oviya Meraki", date: "17 May 2026" },
  { title: "Mehandi Class", organization: "Nira Mehandi Artistry" },
  { title: "Python and C Programming", organization: "Study Shine Software Solution", date: "June 2026" },
  { title: "Resin Art Workshop", organization: "Oviya Meraki", date: "20 April 2026" },
  { title: "Prompt Engineering", organization: "SoloLearn", date: "18 August 2026" },
  { title: "AI Tool Workshop", organization: "be10x", date: "23 August 2026" },
  { title: "Certificate for Participation in Online Hackathon", organization: "Compass Crew" }
];

const creativeWork = [
  { number: "A", title: "Mehandi artist", description: "Independent creative work involving direct customer interaction and strong attention to detail.", mark: "✳", className: "craft--mehandi" },
  { number: "B", title: "Resin keychain business", description: "Part-time handmade product business involving custom product creation, customer interaction, creativity, time management and entrepreneurial experience.", mark: "◌", className: "craft--resin" }
];

const activities = [
  { number: "01", title: "DSA visual learning", label: "COLLEGE ACTIVITY", description: "Created visual representations of Data Structures and Algorithms concepts and participated in a college-level drama-based learning activity." },
  { number: "02", title: "Smart India Hackathon internal round", label: "TEAM LEAD · COLLEGE-LEVEL", description: "Team Lead in the college-level Smart India Hackathon internal round, coordinating the team and contributing to the development and presentation of the proposed solution." }
];

const skillList = document.querySelector("#skill-list");
skillList.innerHTML = skills.map((group, index) => `
  <div class="skill-row reveal"><span class="skill-index">0${index + 1}</span><h3>${group.title}</h3><ul>${group.items.map(item => `<li>${item}</li>`).join("")}</ul><span class="row-arrow" aria-hidden="true">↗</span></div>
`).join("");

const projectList = document.querySelector("#project-list");
projectList.innerHTML = projects.map(project => `
  <button class="project-row reveal" type="button" data-project="${project.number}" aria-label="View details for ${project.title}">
    <span class="project-number">${project.number}</span><span class="project-visual ${project.visual}" aria-hidden="true"><span class="visual-label">${project.label}</span><span class="visual-mark"></span></span>
    <span class="project-copy"><span class="project-kicker">ACADEMIC / LEARNING PROJECT</span><strong>${project.title}</strong><span class="project-short">${project.short}</span><span class="project-cta">Explore project <i aria-hidden="true">↗</i></span></span><span class="project-arrow" aria-hidden="true">↗</span>
  </button>
`).join("");

document.querySelector("#timeline").innerHTML = chapters.map((chapter, index) => `
  <article class="timeline-chapter reveal"><span class="timeline-node" aria-hidden="true"></span><div class="timeline-number">CHAPTER 0${index + 1}</div><div class="timeline-copy"><h3>${chapter[0]}</h3><p>${chapter[1]}</p></div><span class="timeline-progress" aria-hidden="true">0${index + 1}</span></article>
`).join("");

document.querySelector("#certificate-grid").innerHTML = certificates.map((certificate, index) => `
  <button class="certificate-card reveal" type="button" data-certificate="${index}" aria-label="View certificate details: ${certificate.title}"><span class="certificate-art" aria-hidden="true"><span>SF / LEARNING ARCHIVE</span><i>✳</i><b>0${index + 1}</b></span><span class="certificate-number">CERTIFICATE 0${index + 1}</span><strong>${certificate.title}</strong><span class="certificate-organization">${certificate.organization}</span>${certificate.date ? `<time>${certificate.date}</time>` : ""}<span class="certificate-open">View details <i aria-hidden="true">↗</i></span></button>
`).join("");

document.querySelector("#craft-grid").innerHTML = creativeWork.map(work => `
  <article class="craft-item ${work.className} reveal"><span class="craft-number">${work.number} / PERSONAL PRACTICE</span><span class="craft-mark" aria-hidden="true">${work.mark}</span><div><h3>${work.title}</h3><p>${work.description}</p></div><span class="craft-line" aria-hidden="true"></span></article>
`).join("");

document.querySelector("#activity-list").innerHTML = activities.map(activity => `
  <article class="activity-row reveal"><span class="activity-number">${activity.number}</span><div><p class="eyebrow">${activity.label}</p><h3>${activity.title}</h3><p>${activity.description}</p></div><span class="activity-mark" aria-hidden="true">↗</span></article>
`).join("");

const intro = document.querySelector("#intro");
const header = document.querySelector("#site-header");
let introFinished = false;
function finishIntro() {
  if (introFinished) return;
  introFinished = true;
  intro.classList.add("is-leaving");
  header.classList.add("is-visible");
  window.setTimeout(() => { intro.hidden = true; }, 1100);
}

document.querySelector("#intro-skip").addEventListener("click", finishIntro);
window.setTimeout(finishIntro, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 1400 : 14000);

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches && characterVideoAvailable) {
    const video = document.querySelector("#intro-character-video");
    if (characterPosterAvailable) video.poster = characterPosterPath;
    video.src = characterVideoPath;
    video.hidden = false;
    video.addEventListener("loadeddata", () => {
      document.querySelector(".student-silhouette").hidden = true;
      video.classList.add("is-ready");
    }, { once: true });
    video.play().catch(() => {});
}

const menuToggle = document.querySelector("#menu-toggle");
const mobileNav = document.querySelector("#mobile-nav");
menuToggle.addEventListener("click", () => {
  const expanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!expanded));
  menuToggle.setAttribute("aria-label", expanded ? "Open navigation menu" : "Close navigation menu");
  mobileNav.hidden = expanded;
  document.body.classList.toggle("menu-open", !expanded);
});
mobileNav.addEventListener("click", event => {
  if (event.target.closest("a")) {
    mobileNav.hidden = true;
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("menu-open");
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-revealed");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });
document.querySelectorAll(".reveal").forEach(element => revealObserver.observe(element));

const navLinks = [...document.querySelectorAll(".desktop-nav a")];
const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.classList.toggle("is-active", link.hash === `#${entry.target.id}`));
    }
  });
}, { rootMargin: "-35% 0px -55% 0px" });
document.querySelectorAll("main > section[id]").forEach(section => sectionObserver.observe(section));

const finaleObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => entry.target.classList.toggle("is-active", entry.isIntersecting));
}, { threshold: 0.3 });
finaleObserver.observe(document.querySelector("#finale"));

const detailDialog = document.querySelector("#detail-dialog");
projectList.addEventListener("click", event => {
  const button = event.target.closest("[data-project]");
  if (!button) return;
  const project = projects.find(item => item.number === button.dataset.project);
  document.querySelector("#detail-kicker").textContent = `PROJECT ${project.number} / FIRST-YEAR WORK`;
  document.querySelector("#detail-title").textContent = project.title;
  document.querySelector("#detail-description").textContent = project.description;
  document.querySelector("#detail-meta").textContent = project.focus;
  const visual = document.querySelector("#detail-art");
  visual.className = `detail-art project-visual ${project.visual}`;
  visual.innerHTML = `<span class="visual-label">${project.label}</span><span class="visual-mark"></span>`;
  detailDialog.showModal();
});

const certificateDialog = document.querySelector("#certificate-dialog");
document.querySelector("#certificate-grid").addEventListener("click", event => {
  const button = event.target.closest("[data-certificate]");
  if (!button) return;
  const certificate = certificates[Number(button.dataset.certificate)];
  document.querySelector("#certificate-dialog-number").textContent = `CERTIFICATE 0${Number(button.dataset.certificate) + 1}`;
  document.querySelector("#certificate-dialog-title").textContent = certificate.title;
  document.querySelector("#certificate-dialog-org").textContent = certificate.organization;
  document.querySelector("#certificate-dialog-date").textContent = certificate.date || "";
  certificateDialog.showModal();
});

document.querySelectorAll("[data-close-dialog]").forEach(button => button.addEventListener("click", () => button.closest("dialog").close()));
document.querySelectorAll("dialog").forEach(dialog => dialog.addEventListener("click", event => {
  if (event.target === dialog) dialog.close();
}));

const resumeDialog = document.querySelector("#resume-dialog");
const resumeFrame = document.querySelector("#resume-frame");
const resumeMissing = document.querySelector("#resume-missing");
const resumeDownload = document.querySelector("#resume-download");
const dialogDownload = document.querySelector("#resume-dialog-download");
const resumeAvailability = document.querySelector("#resume-availability");
const resumeDialogStatus = document.querySelector("#resume-dialog-status");
const resumeAvailable = resumeAssetAvailable;
if (resumeAvailable) {
  resumeDownload.setAttribute("aria-disabled", "false");
  dialogDownload.setAttribute("aria-disabled", "false");
  resumeAvailability.textContent = "PDF ready to view and download.";
  resumeDialogStatus.textContent = "Complete document · scroll and zoom in the viewer.";
}

document.querySelectorAll("[data-resume-open]").forEach(button => button.addEventListener("click", () => {
  if (resumeAvailable) {
    resumeFrame.src = resumeAssetPath;
    resumeFrame.hidden = false;
    resumeMissing.hidden = true;
  } else {
    resumeFrame.removeAttribute("src");
    resumeFrame.hidden = true;
    resumeMissing.hidden = false;
  }
  resumeDialog.showModal();
}));

[resumeDownload, dialogDownload].forEach(link => link.addEventListener("click", event => {
  if (!resumeAvailable) event.preventDefault();
}));

const cursor = document.querySelector(".cursor-dot");
if (window.matchMedia("(pointer: fine) and (hover: hover)").matches && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.body.classList.add("has-custom-cursor");
  window.addEventListener("pointermove", event => {
    cursor.style.transform = `translate(${event.clientX}px, ${event.clientY}px)`;
  }, { passive: true });
  document.addEventListener("pointerover", event => {
    cursor.classList.toggle("is-hovering", Boolean(event.target.closest("a, button, [role='button']")));
  });
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    const activeDialog = [...document.querySelectorAll("dialog[open]")].at(-1);
    if (activeDialog) {
      event.preventDefault();
      activeDialog.close();
    }
    if (!mobileNav.hidden) {
      mobileNav.hidden = true;
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation menu");
      document.body.classList.remove("menu-open");
    }
  }
});