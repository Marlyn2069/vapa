const scholarships = [
  {
    title: "Becas MESCyT",
    region: "dominicana",
    type: "Gobierno",
    level: "Licenciatura",
    description:
      "Opciones para estudios nacionales e internacionales con apoyo institucional.",
  },
  {
    title: "Beca Tu Futuro",
    region: "dominicana",
    type: "Programa oficial",
    level: "Pregrado",
    description:
      "Convocatorias enfocadas en estudiantes dominicanos con alto potencial académico.",
  },
  {
    title: "ITLA",
    region: "dominicana",
    type: "Universidad",
    level: "Técnico / Grado",
    description:
      "Oportunidades tecnológicas como ciberseguridad, software y áreas STEM.",
  },
  {
    title: "INTEC",
    region: "dominicana",
    type: "Universidad",
    level: "Licenciatura",
    description:
      "Becas y ayudas para carreras de alto rendimiento académico y liderazgo.",
  },
  {
    title: "Canadá para latinoamericanos",
    region: "internacional",
    type: "Internacional",
    level: "Maestría",
    description:
      "Convocatorias para posgrado con enfoque en investigación, ciencia y tecnología.",
  },
  {
    title: "Fondos de liderazgo",
    region: "fundacion",
    type: "Fundación",
    level: "Pregrado",
    description:
      "Apoyos que valoran voluntariado, deportes, clubes y compromiso social.",
  },
];

const docs = [
  "Récord o expediente académico",
  "Copia de documento de identidad o pasaporte",
  "Currículum vitae actualizado",
  "Carta de motivación",
  "Cartas de recomendación",
  "Certificados de idiomas, si aplica",
  "Certificados de actividades extracurriculares",
  "Ensayos o proyectos personales, cuando se soliciten",
];

const scholarshipGrid = document.querySelector("#scholarshipGrid");
const searchInput = document.querySelector("#scholarshipSearch");
const quickFilters = document.querySelector("#quickFilters");
const docChecklist = document.querySelector("#docChecklist");
const profileResult = document.querySelector("#profileResult");

let activeFilter = "todos";

function renderScholarships() {
  const query = (searchInput.value || "").toLowerCase().trim();

  const filtered = scholarships.filter((item) => {
    const matchesFilter = activeFilter === "todos" || item.region === activeFilter;
    const matchesQuery =
      !query ||
      `${item.title} ${item.type} ${item.level} ${item.description}`.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  scholarshipGrid.innerHTML = filtered
    .map(
      (item) => `
        <article class="scholarship-card reveal">
          <div class="meta-row">
            <span>${item.region}</span>
            <span>${item.type}</span>
            <span>${item.level}</span>
          </div>
          <h4>${item.title}</h4>
          <p>${item.description}</p>
        </article>
      `,
    )
    .join("");

  if (!filtered.length) {
    scholarshipGrid.innerHTML = `
      <article class="scholarship-card reveal" style="grid-column: 1 / -1;">
        <h4>No encontramos coincidencias</h4>
        <p>Prueba con otro término, por ejemplo: MESCyT, ITLA, INTEC o maestría.</p>
      </article>
    `;
  }
}

function renderDocs() {
  docChecklist.innerHTML = docs
    .map(
      (item, index) => `
        <label class="checklist-item reveal">
          <input type="checkbox" ${index < 2 ? "checked" : ""} />
          <p>${item}</p>
        </label>
      `,
    )
    .join("");
}

function updateProfileResult() {
  const country = document.querySelector("#country").value.trim();
  const career = document.querySelector("#career").value.trim();
  const modality = document.querySelector("#modality").value;
  const score = document.querySelector("#score").value.trim();

  const pieces = [];
  if (country) pieces.push(`País: <strong>${country}</strong>`);
  if (career) pieces.push(`Carrera: <strong>${career}</strong>`);
  if (score) pieces.push(`Promedio: <strong>${score}</strong>`);

  const focus =
    modality === "En el extranjero"
      ? "Te conviene priorizar convocatorias internacionales, programas de intercambio y maestrías."
      : modality === "Dentro de mi país"
        ? "Te conviene priorizar ministerios, universidades y fundaciones nacionales."
        : "Puedes combinar convocatorias nacionales e internacionales para ampliar tus opciones.";

  profileResult.innerHTML = `
    <div>${pieces.join(" · ") || "Completa los campos para personalizar tu ruta."}</div>
    <div style="margin-top: 8px;">${focus}</div>
  `;
}

function bindNavButtons() {
  document.querySelectorAll("[data-scroll]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = document.querySelector(button.dataset.scroll);
      target?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

function bindRevealOnScroll() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("reveal");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 },
  );

  document.querySelectorAll(".panel, .stat-card, .phone, .scholarship-card, .source-card, .action-grid article, .step-card, .checklist-item")
    .forEach((node) => observer.observe(node));
}

quickFilters.addEventListener("click", (event) => {
  const button = event.target.closest(".filter-btn");
  if (!button) return;

  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-btn").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  renderScholarships();
});

searchInput.addEventListener("input", renderScholarships);

["country", "career", "modality", "score"].forEach((id) => {
  document.querySelector(`#${id}`).addEventListener("input", updateProfileResult);
  document.querySelector(`#${id}`).addEventListener("change", updateProfileResult);
});

renderScholarships();
renderDocs();
updateProfileResult();
bindNavButtons();
bindRevealOnScroll();
