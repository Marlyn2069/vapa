const scholarships = [
  {
    slug: "becas-mescyt",
    title: "Becas MESCyT",
    officialUrl: "https://mescyt.gob.do/becas/nacionales/",
    region: "dominicana",
    type: "Gobierno",
    level: "Licenciatura",
    description:
      "Opciones para estudios nacionales e internacionales con apoyo institucional.",
    audience: "Estudiantes dominicanos que buscan apoyo público para pregrado, posgrado o especialidades.",
    benefits: ["Cobertura académica", "Oportunidades nacionales e internacionales", "Convocatorias oficiales"],
    documents: ["Récord académico", "Cédula o pasaporte", "Carta de motivación", "Currículum vitae"],
    steps: [
      "Revisa la convocatoria vigente.",
      "Confirma que cumples el perfil académico.",
      "Reúne tu expediente y cartas solicitadas.",
      "Completa el formulario y guarda el comprobante.",
    ],
    tip: "Sigue siempre el portal oficial para evitar fechas o documentos desactualizados.",
  },
  {
    slug: "beca-tu-futuro",
    title: "Beca Tu Futuro",
    officialUrl: "https://becas.gob.do/",
    region: "dominicana",
    type: "Programa oficial",
    level: "Pregrado",
    description:
      "Convocatorias enfocadas en estudiantes dominicanos con alto potencial académico.",
    audience: "Jóvenes que quieren acceder a programas de apoyo educativo dentro del país.",
    benefits: ["Apoyo para estudios", "Orientación de convocatoria", "Acceso a múltiples opciones"],
    documents: ["Expediente académico", "Documento de identidad", "Carta de intención", "Formulario oficial"],
    steps: [
      "Busca la convocatoria activa.",
      "Verifica requisitos y condiciones.",
      "Prepara tus documentos.",
      "Aplica y revisa tu correo regularmente.",
    ],
    tip: "Ten a mano tus datos personales y académicos antes de completar la solicitud.",
  },
  {
    slug: "itla",
    title: "ITLA",
    officialUrl: "https://puntostecnologicos.itla.edu.do/",
    region: "dominicana",
    type: "Universidad",
    level: "Técnico / Grado",
    description:
      "Oportunidades tecnológicas como ciberseguridad, software y áreas STEM.",
    audience: "Personas interesadas en carreras tecnológicas, innovación y formación práctica.",
    benefits: ["Carreras STEM", "Enfoque técnico", "Proyección laboral"],
    documents: ["Récord académico", "Documento de identidad", "Pruebas o formularios internos", "Carta motivacional"],
    steps: [
      "Consulta la oferta de carreras o becas.",
      "Revisa requisitos de admisión.",
      "Prepara tu expediente.",
      "Sigue el proceso de selección indicado.",
    ],
    tip: "Si te interesa tecnología, esta opción suele ser una de las más útiles para empezar.",
  },
  {
    slug: "intec",
    title: "INTEC",
    officialUrl: "https://www.intec.edu.do/admisiones/becas/como-aplicar",
    region: "dominicana",
    type: "Universidad",
    level: "Licenciatura",
    description:
      "Becas y ayudas para carreras de alto rendimiento académico y liderazgo.",
    audience: "Estudiantes con buen rendimiento que buscan una universidad exigente y de alto nivel.",
    benefits: ["Becas parciales o completas", "Red de liderazgo", "Programas académicos sólidos"],
    documents: ["Expediente académico", "Ensayo o carta", "Documento de identidad", "Cartas de recomendación"],
    steps: [
      "Identifica la beca o admisión que más te conviene.",
      "Prepara tus documentos y ensayos.",
      "Aplica dentro de la fecha límite.",
      "Haz seguimiento al resultado.",
    ],
    tip: "Tu promedio y tu historia personal pueden pesar mucho en esta clase de convocatorias.",
  },
  {
    slug: "canada-latinoamericanos",
    title: "Canadá para latinoamericanos",
    officialUrl: "https://www.international.gc.ca/education/scholarships-bourses.aspx?lang=eng",
    region: "internacional",
    type: "Internacional",
    level: "Maestría",
    description:
      "Convocatorias para posgrado con enfoque en investigación, ciencia y tecnología.",
    audience: "Personas que buscan estudios de posgrado en el extranjero con foco académico e investigativo.",
    benefits: ["Experiencia internacional", "Formación de posgrado", "Red académica global"],
    documents: ["Pasaporte", "Certificados de idioma", "CV académico", "Carta de motivación"],
    steps: [
      "Busca programas vigentes en portales confiables.",
      "Revisa idioma, admisión y fondos disponibles.",
      "Reúne tus certificados y traducciones.",
      "Aplica con tiempo y guarda evidencia.",
    ],
    tip: "Las becas internacionales suelen pedir más preparación previa, así que conviene empezar temprano.",
  },
  {
    slug: "fondos-liderazgo",
    title: "Fondos de liderazgo",
    officialUrl: "https://latinamericanleadershipacademy.org/es/financial-aid/",
    region: "fundacion",
    type: "Fundación",
    level: "Pregrado",
    description:
      "Apoyos que valoran voluntariado, deportes, clubes y compromiso social.",
    audience: "Estudiantes que destacan por liderazgo, servicio y participación extracurricular.",
    benefits: ["Reconocimiento al liderazgo", "Apoyo a proyectos", "Mayor valor de actividades sociales"],
    documents: ["Carta de motivación", "Evidencias de liderazgo", "CV actualizado", "Referencias"],
    steps: [
      "Agrupa tus logros y evidencias.",
      "Redacta una historia clara sobre tu liderazgo.",
      "Aplica a la fundación u organización.",
      "Da seguimiento y mantente activo.",
    ],
    tip: "No solo cuentan las notas: también importa lo que has construido fuera del aula.",
  },
];

const documents = [
  "Récord o expediente académico",
  "Copia del documento de identidad o pasaporte",
  "Currículum vitae actualizado",
  "Carta de motivación",
  "Cartas de recomendación",
  "Certificados de idiomas (si aplica)",
  "Certificados de actividades extracurriculares",
  "Ensayos o proyectos personales (cuando se soliciten)",
];

const vapaSections = [
  {
    title: "Explora becas",
    description: "Lista de universidades y programas para aplicar, con requisitos y enlace oficial.",
    route: "buscar",
    accent: "blue",
  },
  {
    title: "Guía práctica",
    description: "Paso a paso para solicitar una beca, preparar documentos y ordenar tu proceso.",
    route: "intro",
    accent: "green",
  },
  {
    title: "Alertas de convocatorias",
    description: "Convocatorias activas, fechas y avisos para que no se te pase ningún cierre.",
    route: "postulaciones",
    accent: "yellow",
  },
  {
    title: "Conoce antes de decidir",
    description: "Pros y contras de una beca y lo que implica mantenerla a largo plazo.",
    route: "recursos",
    accent: "lilac",
  },
  {
    title: "Resuelve tus dudas",
    description: "Preguntas frecuentes sobre becas, universidades, requisitos y el proceso.",
    route: "documentos",
    accent: "mint",
  },
];

const vapaAlerts = scholarships.slice(0, 3).map((item) => ({
  title: item.title,
  subtitle: item.level,
  description: item.description,
  route: `beca/${item.slug}`,
}));

const vapaFaqs = [
  {
    question: "¿Cómo sé si una beca me conviene?",
    answer:
      "Compara tu promedio, nivel académico, idioma, documentos y modalidad con lo que pide la convocatoria oficial.",
  },
  {
    question: "¿Puedo guardar una postulación y seguir después?",
    answer:
      "Sí. VAPA guarda la solicitud como borrador, enviada o en revisión para que la retomes cuando quieras.",
  },
  {
    question: "¿Dónde veo el enlace oficial de cada beca?",
    answer:
      "En la vista de detalle. Si la beca tiene portal oficial cargado, el botón te lleva directamente al sitio real.",
  },
  {
    question: "¿Qué hago antes de enviar mi solicitud?",
    answer:
      "Revisa requisitos, reúne documentos, escribe un buen motivo y confirma la fecha límite antes de postular.",
  },
];

const app = document.querySelector("#app");
let appInteractionsBound = false;
const searchState = {
  query: "",
  filter: "todos",
};
const applicationStatuses = ["Borrador", "En revisión", "Enviada"];
const storageKeys = {
  users: "vapa_users",
  session: "vapa_session",
  applications: "vapa_applications",
  lastRoute: "vapa_last_route",
};

function loadUsers() {
  try {
    const users = JSON.parse(localStorage.getItem(storageKeys.users) || "[]");
    if (!users.length) {
      const demoUser = { name: "Usuario demo", email: "demo@vapa.app", password: "vapa123" };
      localStorage.setItem(storageKeys.users, JSON.stringify([demoUser]));
      return [demoUser];
    }
    return users;
  } catch {
    const demoUser = { name: "Usuario demo", email: "demo@vapa.app", password: "vapa123" };
    localStorage.setItem(storageKeys.users, JSON.stringify([demoUser]));
    return [demoUser];
  }
}

function saveUsers(users) {
  localStorage.setItem(storageKeys.users, JSON.stringify(users));
}

function loadSession() {
  try {
    return JSON.parse(localStorage.getItem(storageKeys.session) || "null");
  } catch {
    return null;
  }
}

function saveSession(user) {
  localStorage.setItem(storageKeys.session, JSON.stringify(user));
}

function clearSession() {
  localStorage.removeItem(storageKeys.session);
}

function getCurrentUser() {
  return loadSession();
}

function loadLastRoute() {
  return localStorage.getItem(storageKeys.lastRoute) || "";
}

function saveLastRoute(route) {
  if (!route) {
    return;
  }

  localStorage.setItem(storageKeys.lastRoute, route);
}

const routes = {
  inicio: renderInicio,
  home: renderInicio,
  dashboard: renderDashboard,
  postulaciones: renderApplicationsView,
  intro: renderIntro,
  secciones: renderVapaSections,
  perfil: renderProfile,
  buscar: renderSearch,
  beca: renderScholarshipDetail,
  postular: renderScholarshipApplication,
  documentos: renderDocuments,
  seguimiento: renderFollowUp,
  recursos: renderResources,
  login: renderLogin,
  register: renderRegister,
};

function navigate(route) {
  window.location.hash = `#/${route}`;
}

function getRoute() {
  const raw = window.location.hash.replace(/^#\//, "");
  if (raw.startsWith("beca/")) {
    return "beca";
  }
  if (raw.startsWith("postular/")) {
    return "postular";
  }
  return routes[raw] ? raw : "inicio";
}

function getRouteParam() {
  const raw = window.location.hash.replace(/^#\//, "");
  if (raw.startsWith("beca/")) {
    return raw.slice("beca/".length);
  }
  if (raw.startsWith("postular/")) {
    return raw.slice("postular/".length);
  }
  return "";
}

function activeNavRoute(route = getRoute()) {
  if (route === "beca" || route === "postular" || route === "postulaciones") {
    return "buscar";
  }
  return route;
}

function layout(title, subtitle, content, navRoute = activeNavRoute()) {
  const user = getCurrentUser();
  return `
    <div class="shell">
      <section class="view-panel reveal">
        <div class="view-header">
          <div>
            <p class="section-kicker">${title}</p>
            <h2>${subtitle}</h2>
            ${
              user
                ? `<p class="account-chip">Sesión activa: ${escapeHtml(user.name || user.email)}</p>`
                : ""
            }
          </div>
          <div class="header-actions">
            <button class="ghost-btn" type="button" data-route="inicio">Volver al inicio</button>
            ${
              user
                ? `<button class="ghost-btn danger" type="button" data-action="logout">Salir</button>`
                : `<button class="ghost-btn" type="button" data-route="login">Entrar</button>`
            }
          </div>
        </div>
        ${content}
      </section>

      <nav class="bottom-nav" aria-label="Navegación de la app">
        ${navItem("inicio", "Inicio", navRoute)}
        ${navItem("dashboard", "Cuenta", navRoute)}
        ${navItem("postulaciones", "Postulaciones", navRoute)}
        ${navItem("intro", "Guía", navRoute)}
        ${navItem("buscar", "Buscar", navRoute)}
      </nav>
    </div>
  `;
}

function navItem(route, label, activeRoute) {
  return `<button type="button" class="bottom-link ${route === activeRoute ? "active" : ""}" data-route="${route}">${label}</button>`;
}

function renderInicio() {
  const user = getCurrentUser();
  const featuredScholarships = scholarships.slice(0, 3);
  const mobileApplications = [
    { title: "Beca Innovación 2025", institution: "Fundación Educa", status: "En revisión", accent: "blue", time: "20 May 2025" },
    { title: "Beca Talento Académico", institution: "Universidad del Futuro", status: "Enviada", accent: "green", time: "18 May 2025" },
    { title: "Beca Formación Técnica", institution: "Instituto Superior", status: "Borrador", accent: "yellow", time: "10 May 2025" },
  ];

  return `
    <div class="inicio-grid">
      <section class="hero-card reveal">
        <div class="hero-copy">
          <span class="pill">Tu espacio para crecer, aprender y alcanzar tus sueños</span>
          <h2>Encuentra, comprende y solicita becas con una experiencia visual clara.</h2>
          <p class="lead">
            VAPA reúne el contenido del prototipo en una interfaz más parecida a una app real:
            vista de inicio, buscador, detalle de beca, postulaciones y seguimiento, con un diseño
            pensado para escritorio y móvil.
          </p>

          <div class="hero-badges">
            <span>Inicio</span>
            <span>Buscar</span>
            <span>Recursos</span>
            <span>Postulaciones</span>
          </div>

          ${
            user
              ? `<p class="account-chip">Hola, ${escapeHtml(user.name || user.email)}. Tu sesión ya está activa.</p>`
              : `<p class="account-chip muted">Puedes entrar o registrarte para guardar tu avance.</p>`
          }

          <div class="cta-row">
            <button class="btn btn-primary" type="button" data-route="intro">Comenzar</button>
            <button class="btn btn-secondary" type="button" data-route="buscar">Explorar becas</button>
            <button class="btn btn-secondary" type="button" data-route="secciones">Qué incluye VAPA</button>
            <button class="btn btn-secondary" type="button" data-route="${user ? "dashboard" : "register"}">
              ${user ? "Ir a mi cuenta" : "Crear cuenta"}
            </button>
          </div>

          <div class="stat-grid">
            <article class="stat-card">
              <strong>8</strong>
              <span>pasos prácticos</span>
            </article>
            <article class="stat-card">
              <strong>6</strong>
              <span>secciones clave</span>
            </article>
            <article class="stat-card">
              <strong>1</strong>
              <span>flujo multiplataforma</span>
            </article>
          </div>
        </div>

        <div class="hero-showcase">
          <div class="device laptop-mock">
            <div class="device-topbar">
              <span class="device-dots">
                <i></i><i></i><i></i>
              </span>
              <span class="device-brand">VAPA</span>
            </div>
            <div class="laptop-screen">
              <aside class="laptop-sidebar">
                <div class="sidebar-brand">
                  <span class="sidebar-cap">🎓</span>
                  <strong>VAPA</strong>
                </div>
                <button class="sidebar-item active" type="button">Inicio</button>
                <button class="sidebar-item" type="button">Buscar</button>
                <button class="sidebar-item" type="button">Recursos</button>
                <button class="sidebar-item" type="button">Postulaciones</button>
              </aside>

              <section class="laptop-main">
                <div class="laptop-banner">
                  <div>
                    <p class="section-kicker">Encuentra la beca</p>
                    <h3>que impulsa tu futuro</h3>
                    <div class="search-pill">
                      <span>Buscar becas, instituciones o palabras clave...</span>
                      <button type="button">⌕</button>
                    </div>
                  </div>
                </div>

                <div class="showcase-row">
                  ${featuredScholarships
                    .map(
                      (item, index) => `
                        <article class="mini-scholarship mini-${index === 0 ? "green" : index === 1 ? "blue" : "yellow"}">
                          <span class="mini-tag">${escapeHtml(item.level)}</span>
                          <h4>${escapeHtml(item.title)}</h4>
                          <p>${escapeHtml(item.audience.slice(0, 90))}...</p>
                          <button type="button">Ver detalle</button>
                        </article>
                      `,
                    )
                    .join("")}
                </div>

                <div class="category-row">
                  <span>Académicas</span>
                  <span>Investigación</span>
                  <span>Movilidad</span>
                  <span>Técnicas</span>
                  <span>Deportivas</span>
                </div>
              </section>

              <aside class="laptop-detail">
                <span class="pill detail-pill">Pregrado</span>
                <h4>Beca Talento Académico</h4>
                <p>Apoyo económico para estudiantes con excelente rendimiento académico.</p>
                <div class="detail-meta">
                  <div><strong>Modalidad</strong><span>Presencial</span></div>
                  <div><strong>Cobertura</strong><span>Parcial</span></div>
                  <div><strong>Fecha de cierre</strong><span>30 Jun 2025</span></div>
                  <div><strong>Requisitos</strong><span>Promedio mínimo, carta y expediente</span></div>
                </div>
                <button class="btn btn-primary device-cta" type="button" data-route="postulaciones">Solicitar beca</button>
              </aside>
            </div>
          </div>

          <div class="device phone-mock">
            <div class="phone-notch"></div>
            <div class="phone-shell">
              <div class="phone-head">
                <div>
                  <p class="section-kicker">VAPA</p>
                  <h3>Mis postulaciones</h3>
                </div>
                <span class="phone-bell">🔔</span>
              </div>

              <div class="tabs-row">
                <span class="tab active">Todas</span>
                <span class="tab">Activas</span>
                <span class="tab">Finalizadas</span>
              </div>

              <div class="status-stack">
                ${mobileApplications
                  .map(
                    (item) => `
                      <article class="status-card ${item.accent}">
                        <div class="status-icon">${item.accent === "green" ? "🎓" : item.accent === "blue" ? "📘" : "🗂️"}</div>
                        <div class="status-copy">
                          <strong>${escapeHtml(item.title)}</strong>
                          <span>${escapeHtml(item.institution)}</span>
                          <small>Estado</small>
                          <div class="status-row">
                            <span class="status-chip">${escapeHtml(item.status)}</span>
                            <span class="status-date">Actualizado: ${escapeHtml(item.time)}</span>
                          </div>
                        </div>
                      </article>
                    `,
                  )
                  .join("")}
              </div>

              <button class="btn btn-primary phone-cta" type="button" data-route="postulaciones">Nueva postulación</button>

              <nav class="phone-nav" aria-label="Navegación móvil">
                <span class="phone-nav-item active">Inicio</span>
                <span class="phone-nav-item">Buscar</span>
                <span class="phone-nav-item">Recursos</span>
                <span class="phone-nav-item">Postulaciones</span>
              </nav>
            </div>
          </div>
        </div>
      </section>

      <section class="section-stack reveal">
        <article class="panel-box">
          <h3>Atajos útiles</h3>
          <div class="summary-grid">
            <button class="summary-card" type="button" data-route="intro">
              <strong>Introducción</strong>
              <span>Aprende el proceso paso a paso.</span>
            </button>
            <button class="summary-card" type="button" data-route="buscar">
              <strong>Dónde buscar</strong>
              <span>Portales oficiales, universidades y fundaciones.</span>
            </button>
            <button class="summary-card" type="button" data-route="documentos">
              <strong>Documentos</strong>
              <span>Récord, carta de motivación, CV y más.</span>
            </button>
            <button class="summary-card" type="button" data-route="login">
              <strong>Cuenta</strong>
              <span>Inicia sesión o regístrate.</span>
            </button>
            <button class="summary-card" type="button" data-route="secciones">
              <strong>Qué incluye VAPA</strong>
              <span>Explora becas, guía, alertas y dudas frecuentes.</span>
            </button>
          </div>
        </article>

        <article class="panel-box accent">
          <h3>Consejos del documento</h3>
          <div class="stack-list compact">
            <div><strong>Organiza</strong><span>Haz una tabla con beca, institución, país, requisitos y fecha límite.</span></div>
            <div><strong>Prepara documentos</strong><span>Ten el expediente, CV, pasaporte y cartas listos antes de aplicar.</span></div>
            <div><strong>Mejora tu perfil</strong><span>Participa en voluntariados, clubes, deportes y cursos.</span></div>
            <div><strong>Aplica a varias</strong><span>No te limites a una sola oportunidad.</span></div>
          </div>
        </article>
      </section>
    </div>
  `;
}

function renderDashboard() {
  const user = getCurrentUser();

  return layout(
    "Cuenta",
    user ? `Bienvenido, ${escapeHtml(user.name || user.email)}` : "Tu espacio personal",
    `
      <div class="dashboard-grid">
        <article class="panel-box accent">
          <h3>${user ? "Tu perfil" : "Aún no has iniciado sesión"}</h3>
          ${
            user
              ? `
                <div class="stack-list compact">
                  <div><strong>Nombre</strong><span>${escapeHtml(user.name || "Sin nombre")}</span></div>
                  <div><strong>Correo</strong><span>${escapeHtml(user.email)}</span></div>
                  <div><strong>Estado</strong><span>Sesión activa y lista para usar.</span></div>
                </div>
              `
              : `
                <p class="panel-text">Inicia sesión o regístrate para guardar tu progreso y volver rápido a tus becas.</p>
              `
          }
        </article>

        <article class="panel-box">
          <h3>Acciones rápidas</h3>
          <div class="action-grid account-actions">
            <button class="menu-card blue" type="button" data-route="buscar"><strong>Buscar becas</strong></button>
            <button class="menu-card green" type="button" data-route="perfil"><strong>Editar perfil</strong></button>
            <button class="menu-card lilac" type="button" data-route="documentos"><strong>Ver documentos</strong></button>
            <button class="menu-card yellow" type="button" data-route="seguimiento"><strong>Seguimiento</strong></button>
          </div>
          <div class="cta-row">
            ${user ? '<button class="btn btn-secondary" type="button" data-action="logout">Cerrar sesión</button>' : '<button class="btn btn-primary" type="button" data-route="login">Iniciar sesión</button>'}
            <button class="btn btn-primary" type="button" data-route="intro">Continuar guía</button>
          </div>
        </article>
      </div>
    `
  );
}

function renderApplicationsView() {
  const user = getCurrentUser();
  const applications = loadApplications();
  const userEmail = user?.email?.toLowerCase?.() || "";
  const visibleApplications = userEmail
    ? applications.filter((item) => String(item.email || "").trim().toLowerCase() === userEmail)
    : applications;

  const content =
    visibleApplications.length > 0
      ? `
        <div class="applications-grid">
          ${visibleApplications
            .map((application) => {
              const scholarship = getScholarshipBySlug(application.scholarshipSlug);
              const createdAt = application.createdAt ? new Date(application.createdAt) : null;
              const dateLabel =
                createdAt && !Number.isNaN(createdAt.getTime())
                  ? createdAt.toLocaleDateString("es-DO", { year: "numeric", month: "short", day: "numeric" })
                  : "Fecha no disponible";
              const status = getApplicationStatusLabel(application.status);
              const statusClass = status.toLowerCase().replaceAll(" ", "-");

              return `
                <article class="panel-box application-card">
                  <div class="application-head">
                    <div>
                      <p class="section-kicker">Postulación guardada</p>
                      <h3>${escapeHtml(application.scholarshipTitle || "Beca")}</h3>
                    </div>
                    <div class="application-badges">
                      <span class="pill status-pill status-${escapeHtml(statusClass)}">${escapeHtml(status)}</span>
                      <span class="pill">${escapeHtml(dateLabel)}</span>
                    </div>
                  </div>
                  <div class="stack-list compact">
                    <div><strong>Nombre</strong><span>${escapeHtml(application.name || "Sin nombre")}</span></div>
                    <div><strong>Correo</strong><span>${escapeHtml(application.email || "Sin correo")}</span></div>
                    ${application.phone ? `<div><strong>Teléfono</strong><span>${escapeHtml(application.phone)}</span></div>` : ""}
                    <div><strong>Motivo</strong><span>${escapeHtml(application.message || "")}</span></div>
                  </div>
                  <div class="detail-actions application-actions">
                    ${scholarship ? `<button class="btn btn-primary" type="button" data-route="beca/${scholarship.slug}">Ver beca</button>` : ""}
                    <button class="btn btn-secondary" type="button" data-route="postular/${application.scholarshipSlug}">Abrir solicitud</button>
                    <button class="btn btn-secondary" type="button" data-action="cycle-application-status" data-application-id="${escapeHtml(application.id)}">Cambiar estado</button>
                    <button class="ghost-btn danger" type="button" data-action="delete-application" data-application-id="${escapeHtml(application.id)}">Eliminar</button>
                  </div>
                </article>
              `;
            })
            .join("")}
        </div>
      `
      : `
        <article class="panel-box detail-empty">
          <h3>Aún no tienes postulaciones guardadas</h3>
          <p class="panel-text">
            Cuando abras una beca y guardes su solicitud, aparecerá aquí para que puedas retomarla después.
          </p>
          <div class="detail-actions">
            <button class="btn btn-primary" type="button" data-route="buscar">Buscar becas</button>
            <button class="btn btn-secondary" type="button" data-route="inicio">Ir al inicio</button>
          </div>
        </article>
      `;

  return layout(
    "Cuenta",
    "Mis postulaciones",
    `
      <div class="applications-shell">
        <article class="panel-box accent">
          <h3>Tu historial</h3>
          <p class="panel-text">
            Aquí ves las solicitudes guardadas en este navegador. Si inicias sesión con el mismo correo,
            te resultará más fácil seguir tu avance.
          </p>
        </article>
        ${content}
      </div>
    `,
    "dashboard",
  );
}

function renderIntro() {
  const steps = [
    ["1", "Identifica tu perfil", "País, carrera, promedio, idiomas y objetivos."],
    ["2", "Busca fuentes confiables", "Portales oficiales, universidades, fundaciones y organismos."],
    ["3", "Realiza una búsqueda inteligente", "Usa palabras clave específicas para resultados útiles."],
    ["4", "Organiza las oportunidades", "Guarda requisitos, fechas, enlaces y estado de tu solicitud."],
  ];

  return layout(
    "Guía VAPA",
    "Introducción",
    `
      <div class="two-col">
        <article class="panel-box">
          <p class="panel-text">
            Encontrar y solicitar una beca puede parecer complejo, sobre todo si es la primera vez.
            VAPA te acompaña paso a paso con una ruta clara para que te organices y prepares una solicitud más fuerte.
          </p>
          <div class="timeline">
            ${steps
              .map(
                ([n, title, body]) => `
                  <div class="step-card">
                    <span>${n}</span>
                    <div>
                      <strong>${title}</strong>
                      <p>${body}</p>
                    </div>
                  </div>
                `,
              )
              .join("")}
          </div>
        </article>

        <aside class="panel-box accent">
          <h3>Tu ruta</h3>
          <div class="stack-list compact">
            <div><strong>Paso 5</strong><span>Reúne documentos con anticipación.</span></div>
            <div><strong>Paso 6</strong><span>Completa la solicitud con cuidado.</span></div>
            <div><strong>Paso 7</strong><span>Guarda el comprobante.</span></div>
            <div><strong>Paso 8</strong><span>No te limites a una sola beca.</span></div>
          </div>
          <div class="cta-row">
            <button class="btn btn-primary" type="button" data-route="secciones">Ver lo que incluye VAPA</button>
            <button class="btn btn-secondary" type="button" data-route="buscar">Ir a becas</button>
          </div>
        </aside>
      </div>
    `
  );
}

function renderVapaSections() {
  return layout(
    "Sección VAPA",
    "¿Qué incluye?",
    `
      <div class="vapa-hub">
        <article class="panel-box accent">
          <p class="panel-text">
            Esta vista reúne las partes más importantes del prototipo: exploración de becas, guía práctica,
            alertas, recomendaciones para decidir y respuestas rápidas a dudas frecuentes.
          </p>
          <div class="cta-row">
            <button class="btn btn-primary" type="button" data-route="buscar">Explorar becas</button>
            <button class="btn btn-secondary" type="button" data-route="intro">Guía práctica</button>
            <button class="btn btn-secondary" type="button" data-route="postulaciones">Postulaciones</button>
          </div>
        </article>

        <section class="feature-grid">
          ${vapaSections
            .map(
              (item) => `
                <article class="feature-card feature-${escapeHtml(item.accent)}">
                  <p class="section-kicker">VAPA</p>
                  <h3>${escapeHtml(item.title)}</h3>
                  <p>${escapeHtml(item.description)}</p>
                  <div class="feature-actions">
                    <button class="btn btn-secondary" type="button" data-route="${escapeHtml(item.route)}">Abrir</button>
                  </div>
                </article>
              `,
            )
            .join("")}
        </section>

        <div class="two-col">
          <article class="panel-box">
            <h3>Alertas de convocatorias</h3>
            <p class="panel-text">
              Aquí puedes ver ejemplos de convocatorias destacadas y entrar directo al detalle o al enlace oficial.
            </p>
            <div class="alert-list">
              ${vapaAlerts
                .map(
                  (item) => `
                    <article class="alert-item">
                      <div>
                        <strong>${escapeHtml(item.title)}</strong>
                        <span>${escapeHtml(item.subtitle)}</span>
                        <p>${escapeHtml(item.description)}</p>
                      </div>
                      <button class="btn btn-secondary" type="button" data-route="${escapeHtml(item.route)}">Ver detalle</button>
                    </article>
                  `,
                )
                .join("")}
            </div>
          </article>

          <article class="panel-box accent">
            <h3>Resuelve tus dudas</h3>
            <div class="faq-list">
              ${vapaFaqs
                .map(
                  (item) => `
                    <details class="faq-item">
                      <summary>${escapeHtml(item.question)}</summary>
                      <p>${escapeHtml(item.answer)}</p>
                    </details>
                  `,
                )
                .join("")}
            </div>
          </article>
        </div>

        <article class="panel-box">
          <h3>Conoce antes de decidir</h3>
          <div class="pros-cons">
            <div class="pros-card">
              <strong>Pros</strong>
              <ul class="detail-list">
                <li>Apoyo económico para estudiar sin tanta presión financiera.</li>
                <li>Acceso a mejores universidades, programas y redes académicas.</li>
                <li>Más posibilidades de crecer profesional y personalmente.</li>
              </ul>
            </div>
            <div class="cons-card">
              <strong>Contras</strong>
              <ul class="detail-list">
                <li>Hay que cumplir requisitos y mantener el rendimiento.</li>
                <li>El proceso puede tomar tiempo y pedir varios documentos.</li>
                <li>Algunas becas exigen reportes, compromiso o seguimiento constante.</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    `,
    "secciones",
  );
}

function renderProfile() {
  return layout(
    "Paso 1",
    "Define tu perfil académico",
    `
      <div class="panel-box">
        <div class="profile-form">
          <label>
            País de residencia
            <input type="text" id="country" placeholder="Ej. República Dominicana" />
          </label>
          <label>
            Carrera o programa
            <input type="text" id="career" placeholder="Ej. Ingeniería, medicina, diseño..." />
          </label>
          <label>
            Modalidad
            <select id="modality">
              <option>Dentro de mi país</option>
              <option>En el extranjero</option>
              <option>Ambas opciones</option>
            </select>
          </label>
          <label>
            Promedio o índice
            <input type="text" id="score" placeholder="Ej. 3.8 / 4.0" />
          </label>
        </div>
        <div class="profile-note" id="profileResult">
          Completa el formulario para obtener una sugerencia de enfoque.
        </div>
        <div class="profile-chips">
          <span>Idiomas</span>
          <span>Voluntariado</span>
          <span>Clubes</span>
          <span>Deportes</span>
          <span>Proyectos</span>
        </div>
      </div>
    `
  );
}

function renderSearch() {
  return layout(
    "Paso 2 y 3",
    "¿Dónde buscar? y búsqueda inteligente",
    `
      <div class="panel-box">
        <div class="search-toolbar">
          <div class="search-box">
            <input
              type="search"
              id="scholarshipSearch"
              placeholder="Busca: MESCYT, ITLA, INTEC, maestría..."
              value="${escapeHtml(searchState.query)}"
            />
          </div>
          <button class="ghost-btn" type="button" data-route="documentos">Ver documentos</button>
        </div>

        <div class="quick-filters" id="quickFilters">
          ${filterButton("todos", "Todos")}
          ${filterButton("dominicana", "Dominicana")}
          ${filterButton("internacional", "Internacional")}
          ${filterButton("universidad", "Universidad")}
          ${filterButton("fundacion", "Fundación")}
        </div>

        <div class="cards-grid" id="scholarshipGrid"></div>

        <div class="source-row">
          <div class="source-card blue-soft">
            <strong>Fuentes confiables</strong>
            <p>Portales gubernamentales, ministerios, universidades y organismos reconocidos.</p>
          </div>
          <div class="source-card green-soft">
            <strong>Verifica el dominio</strong>
            <p>Revisa extensiones como <code>.gob.do</code>, <code>.gov</code>, <code>.edu</code> y <code>.org</code>.</p>
          </div>
          <div class="source-card lilac-soft">
            <strong>Ejemplos de búsqueda</strong>
            <p>Becas para ciberseguridad, becas completas, maestría en Canadá, estudiantes dominicanos.</p>
          </div>
        </div>
      </div>
    `
  );
}

function renderDocuments() {
  const items = documents
    .map(
      (item, index) => `
        <label class="checklist-item">
          <input type="checkbox" ${index < 2 ? "checked" : ""} />
          <p>${item}</p>
        </label>
      `,
    )
    .join("");

  return layout(
    "Paso 4 y 5",
    "Documentos necesarios",
    `
      <div class="two-col">
        <article class="panel-box">
          <p class="panel-text">
            Prepara todo con anticipación. Muchas oportunidades se pierden por buscar documentos a última hora.
          </p>
          <div class="checklist" id="docChecklist">${items}</div>
        </article>

        <aside class="panel-box accent">
          <h3>Carta de motivación</h3>
          <div class="stack-list compact">
            <div><strong>Encabezado</strong><span>Fecha y nombre de la institución.</span></div>
            <div><strong>Saludo</strong><span>Estimado comité de becas.</span></div>
            <div><strong>Presentación</strong><span>Quién eres y por qué escribes.</span></div>
            <div><strong>Motivación</strong><span>Tus metas, inspiración y razones.</span></div>
            <div><strong>Fortalezas</strong><span>Logros, cualidades y experiencia.</span></div>
            <div><strong>Cierre</strong><span>Agradecimiento y despedida.</span></div>
          </div>
        </aside>
      </div>
    `
  );
}

function renderFollowUp() {
  return layout(
    "Paso 6 y 7",
    "Completa la solicitud y guarda el comprobante",
    `
      <div class="panel-box">
        <div class="stack-list">
          <div><strong>Lee las instrucciones</strong><span>No dejes espacios vacíos ni envíes archivos incorrectos.</span></div>
          <div><strong>Revisa ortografía</strong><span>Cuida tu redacción antes de enviar.</span></div>
          <div><strong>Guarda el registro</strong><span>Anota folio, correo de confirmación y fecha límite.</span></div>
          <div><strong>Haz seguimiento</strong><span>Revisa correo, portal y redes oficiales.</span></div>
        </div>
      </div>
    `
  );
}

function renderResources() {
  return layout(
    "Paso 8",
    "No te limites a una sola beca",
    `
      <div class="panel-box">
        <p class="panel-text">
          Aplica a varias oportunidades al mismo tiempo, siempre que cumplas los requisitos.
          En VAPA te recordamos que la constancia, la preparación y el liderazgo también abren puertas.
        </p>
        <div class="tag-cloud">
          <span>Universidades</span>
          <span>Fundaciones</span>
          <span>Empresas privadas</span>
          <span>Organizaciones sin fines de lucro</span>
          <span>Bibliotecas</span>
          <span>Periódicos locales</span>
        </div>
        <div class="action-grid">
          <article><strong>1. Organiza</strong><p>Anota becas, fechas, requisitos y estado en una sola vista.</p></article>
          <article><strong>2. Prepara</strong><p>Reúne expediente, CV, cartas y certificados antes de postular.</p></article>
          <article><strong>3. Envío</strong><p>Completa la solicitud con calma y guarda el comprobante.</p></article>
          <article><strong>4. Da seguimiento</strong><p>Revisa correos, portales y convocatorias complementarias.</p></article>
        </div>
      </div>
    `
  );
}

function renderLogin() {
  const user = getCurrentUser();
  return `
    <div class="auth-shell reveal">
      <section class="auth-card">
        <div class="auth-copy">
          <p class="section-kicker">Cuenta</p>
          <h2>Inicia sesión</h2>
          <p class="lead">
            ${
              user
                ? "Ya tienes una sesión activa. Puedes entrar al panel o salir."
                : "Accede a tu espacio de becas y continúa donde lo dejaste."
            }
          </p>
        </div>

        <form class="auth-form" data-auth-form="login">
          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="tu@email.com" required />
          </label>
          <label>
            Contraseña
            <input type="password" name="password" placeholder="••••••••" required />
          </label>
          <button class="btn btn-primary" type="submit">Entrar</button>
          <button class="btn btn-secondary" type="button" data-route="register">Crear cuenta</button>
          <p class="form-hint">Cuenta de prueba: <strong>demo@vapa.app</strong> / <strong>vapa123</strong></p>
          ${user ? '<button class="btn btn-secondary" type="button" data-action="logout">Salir</button>' : ""}
        </form>
      </section>
    </div>
  `;
}

function renderRegister() {
  return `
    <div class="auth-shell reveal">
      <section class="auth-card">
        <div class="auth-copy">
          <p class="section-kicker">Cuenta</p>
          <h2>Regístrate</h2>
          <p class="lead">Crea tu perfil para guardar tu progreso y organizar tus becas.</p>
        </div>

        <form class="auth-form" data-auth-form="register">
          <label>
            Nombre completo
            <input type="text" name="name" placeholder="Tu nombre" required />
          </label>
          <label>
            Correo electrónico
            <input type="email" name="email" placeholder="tu@email.com" required />
          </label>
          <label>
            Contraseña
            <input type="password" name="password" placeholder="Crea una contraseña" required />
          </label>
          <label>
            Confirmar contraseña
            <input type="password" name="confirm" placeholder="Repítela" required />
          </label>
          <button class="btn btn-primary" type="submit">Crear cuenta</button>
          <button class="btn btn-secondary" type="button" data-route="login">Ya tengo cuenta</button>
        </form>
      </section>
    </div>
  `;
}

function filterButton(value, label) {
  return `<button type="button" class="filter-btn ${searchState.filter === value ? "active" : ""}" data-filter="${value}">${label}</button>`;
}

function renderScholarshipCards() {
  const query = searchState.query.toLowerCase().trim();

  const filtered = scholarships.filter((item) => {
    const matchesFilter = searchState.filter === "todos" || item.region === searchState.filter;
    const matchesQuery =
      !query ||
      `${item.title} ${item.type} ${item.level} ${item.description}`.toLowerCase().includes(query);
    return matchesFilter && matchesQuery;
  });

  if (!filtered.length) {
    return `
      <article class="scholarship-card no-results">
        <h4>No encontramos coincidencias</h4>
        <p>Prueba con otro término, por ejemplo: MESCyT, ITLA, INTEC o maestría.</p>
      </article>
    `;
  }

  return filtered
    .map(
      (item) => `
        <button type="button" class="scholarship-card scholarship-card-action" data-route="beca/${item.slug}">
          <div class="meta-row">
            <span>${escapeHtml(item.region)}</span>
            <span>${escapeHtml(item.type)}</span>
            <span>${escapeHtml(item.level)}</span>
          </div>
          <h4>${escapeHtml(item.title)}</h4>
          <p>${escapeHtml(item.description)}</p>
          <span class="card-link">Ver detalle</span>
        </button>
      `,
    )
    .join("");
}

function getScholarshipBySlug(slug) {
  return scholarships.find((item) => item.slug === slug) || null;
}

function renderScholarshipDetail() {
  const slug = getRouteParam();
  const scholarship = getScholarshipBySlug(slug);

  if (!scholarship) {
    return layout(
      "Beca",
      "No encontramos esa beca",
      `
        <div class="panel-box detail-empty">
          <p class="panel-text">Esa beca no está disponible ahora mismo o el enlace no es válido.</p>
          <div class="detail-actions">
            <button class="btn btn-primary" type="button" data-route="buscar">Volver al buscador</button>
            <button class="btn btn-secondary" type="button" data-route="inicio">Ir al inicio</button>
          </div>
        </div>
      `,
      "buscar",
    );
  }

  return layout(
    scholarship.title,
    "Detalle de la beca",
    `
      <div class="detail-shell">
        <article class="panel-box scholarship-hero">
          <div class="hero-topline">
            <span class="pill">${escapeHtml(scholarship.region)}</span>
            <span class="pill">${escapeHtml(scholarship.type)}</span>
            <span class="pill">${escapeHtml(scholarship.level)}</span>
          </div>
          <h3>${escapeHtml(scholarship.title)}</h3>
          <p class="panel-text">${escapeHtml(scholarship.description)}</p>
          <p class="detail-audience">${escapeHtml(scholarship.audience)}</p>
          <div class="detail-actions">
            <button class="btn btn-primary" type="button" data-action="open-application" data-slug="${escapeHtml(scholarship.slug)}">Solicitar esta beca</button>
            <button class="btn btn-primary" type="button" data-route="buscar">Volver al buscador</button>
            <button class="btn btn-secondary" type="button" data-route="documentos">Revisar documentos</button>
          </div>
        </article>

        <div class="detail-grid">
          <article class="panel-box">
            <h4>Beneficios</h4>
            <ul class="detail-list">
              ${scholarship.benefits.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>

          <article class="panel-box">
            <h4>Documentos clave</h4>
            <ul class="detail-list">
              ${scholarship.documents.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ul>
          </article>

          <article class="panel-box">
            <h4>Cómo aplicar</h4>
            <ol class="detail-steps">
              ${scholarship.steps.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
            </ol>
          </article>

          <article class="panel-box accent">
            <h4>Consejo rápido</h4>
            <p class="panel-text">${escapeHtml(scholarship.tip)}</p>
            <div class="detail-note">
              <strong>Recomendación</strong>
              <span>Guarda el enlace, revisa fechas y prepara tu expediente antes de empezar.</span>
            </div>
          </article>
        </div>
      </div>
    `,
    "buscar",
  );
}

function loadApplications() {
  try {
    const raw = JSON.parse(localStorage.getItem(storageKeys.applications) || "[]");
    let changed = false;
    const normalized = raw.map((item) => {
      if (!item.id || !item.status) {
        changed = true;
      }

      return {
        ...item,
        id: item.id || createApplicationId(),
        status: getApplicationStatusLabel(item.status),
      };
    });

    if (changed) {
      saveApplications(normalized);
    }

    return normalized;
  } catch {
    return [];
  }
}

function saveApplications(applications) {
  localStorage.setItem(storageKeys.applications, JSON.stringify(applications));
}

function createApplicationId() {
  if (window.crypto && typeof window.crypto.randomUUID === "function") {
    return window.crypto.randomUUID();
  }

  return `app_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
}

function getApplicationStatusLabel(status) {
  return applicationStatuses.includes(status) ? status : "Borrador";
}

function getNextApplicationStatus(status) {
  const currentIndex = applicationStatuses.indexOf(getApplicationStatusLabel(status));
  return applicationStatuses[(currentIndex + 1) % applicationStatuses.length];
}

function findApplicationById(id) {
  return loadApplications().find((item) => item.id === id) || null;
}

function updateApplicationStatus(id) {
  const applications = loadApplications();
  const index = applications.findIndex((item) => item.id === id);
  if (index === -1) {
    return;
  }

  applications[index] = {
    ...applications[index],
    status: getNextApplicationStatus(applications[index].status),
  };

  saveApplications(applications);
  renderCurrentView();
}

function deleteApplicationById(id) {
  const application = findApplicationById(id);
  if (!application) {
    return;
  }

  const confirmed = window.confirm(`¿Quieres eliminar la postulación de ${application.scholarshipTitle || "esta beca"}?`);
  if (!confirmed) {
    return;
  }

  const remaining = loadApplications().filter((item) => item.id !== id);
  saveApplications(remaining);
  renderCurrentView();
}

function renderScholarshipApplication() {
  const slug = getRouteParam();
  const scholarship = getScholarshipBySlug(slug);
  const user = getCurrentUser();

  if (!scholarship) {
    return layout(
      "Solicitar beca",
      "No encontramos esa beca",
      `
        <div class="panel-box detail-empty">
          <p class="panel-text">No se pudo abrir la solicitud porque el enlace no es válido.</p>
          <div class="detail-actions">
            <button class="btn btn-primary" type="button" data-route="buscar">Volver al buscador</button>
          </div>
        </div>
      `,
      "buscar",
    );
  }

  return layout(
    scholarship.title,
    "Solicitud de beca",
    `
      <div class="detail-shell">
        <article class="panel-box scholarship-hero">
          <div class="hero-topline">
            <span class="pill">${escapeHtml(scholarship.region)}</span>
            <span class="pill">${escapeHtml(scholarship.type)}</span>
            <span class="pill">${escapeHtml(scholarship.level)}</span>
          </div>
          <h3>Solicita ${escapeHtml(scholarship.title)}</h3>
          <p class="panel-text">
            Completa esta solicitud para dejar tu avance registrado y organizar mejor tu postulación.
          </p>
          <div class="detail-actions">
            <button class="btn btn-secondary" type="button" data-route="beca/${scholarship.slug}">Volver al detalle</button>
            <button class="btn btn-secondary" type="button" data-route="documentos">Revisar documentos</button>
          </div>
        </article>

        <div class="two-col">
          <article class="panel-box">
            <h4>Datos de la solicitud</h4>
            <form class="application-form" data-application-form="scholarship">
              <label>
                Nombre completo
                <input type="text" name="name" value="${escapeHtml(user?.name || "")}" placeholder="Tu nombre" required />
              </label>
              <label>
                Correo electrónico
                <input type="email" name="email" value="${escapeHtml(user?.email || "")}" placeholder="tu@email.com" required />
              </label>
              <label>
                Teléfono
                <input type="tel" name="phone" placeholder="Ej. 809 000 0000" />
              </label>
              <label>
                Motivo principal
                <textarea name="message" rows="5" placeholder="Cuéntanos por qué quieres esta beca" required></textarea>
              </label>
              <label>
                Estado inicial
                <select name="status">
                  <option value="Borrador">Borrador</option>
                  <option value="En revisión">En revisión</option>
                  <option value="Enviada">Enviada</option>
                </select>
              </label>
              <input type="hidden" name="scholarshipSlug" value="${escapeHtml(scholarship.slug)}" />
              <input type="hidden" name="scholarshipTitle" value="${escapeHtml(scholarship.title)}" />
              <button class="btn btn-primary" type="submit">Guardar solicitud</button>
            </form>
          </article>

          <aside class="panel-box accent">
            <h4>Antes de enviar</h4>
            <div class="stack-list compact">
              <div><strong>1. Revisa</strong><span>Verifica requisitos, fecha límite y documentos.</span></div>
              <div><strong>2. Completa</strong><span>Llena tu información sin dejar campos vacíos.</span></div>
              <div><strong>3. Guarda</strong><span>Tu avance quedará registrado en el navegador.</span></div>
              <div><strong>4. Continúa</strong><span>Si quieres, luego seguimos con el portal oficial.</span></div>
            </div>
            <div class="detail-note">
              <strong>Nota</strong>
              <span>Esto funciona como un paso de organización dentro de VAPA. Si existe portal oficial, puedes enlazarlo después.</span>
            </div>
          </aside>
        </div>
      </div>
    `,
    "buscar",
  );
}

function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCurrentView() {
  const route = getRoute();
  const rawRoute = window.location.hash.replace(/^#\//, "");
  saveLastRoute(rawRoute || route);
  const view = routes[route]();
  app.innerHTML = view;
  bindViewEvents();
  refreshSearchView();
  updateDynamicFields();
  updateTitle(route);
}

function refreshSearchView() {
  const grid = document.querySelector("#scholarshipGrid");
  const input = document.querySelector("#scholarshipSearch");
  const filters = document.querySelectorAll("#quickFilters .filter-btn");

  if (input) {
    input.value = searchState.query;
  }

  if (grid) {
    grid.innerHTML = renderScholarshipCards();
  }

  filters.forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === searchState.filter);
  });
}

function updateDynamicFields() {
  const searchInput = document.querySelector("#scholarshipSearch");
  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      searchState.query = event.target.value;
      refreshSearchView();
    });
  }

  document.querySelectorAll("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      searchState.filter = button.dataset.filter;
      refreshSearchView();
    });
  });

  const country = document.querySelector("#country");
  const career = document.querySelector("#career");
  const modality = document.querySelector("#modality");
  const score = document.querySelector("#score");
  const profileResult = document.querySelector("#profileResult");

  if (profileResult && country && career && modality && score) {
    const updateProfileResult = () => {
      const parts = [];
      if (country.value.trim()) parts.push(`País: <strong>${country.value.trim()}</strong>`);
      if (career.value.trim()) parts.push(`Carrera: <strong>${career.value.trim()}</strong>`);
      if (score.value.trim()) parts.push(`Promedio: <strong>${score.value.trim()}</strong>`);

      const focus =
        modality.value === "En el extranjero"
          ? "Te conviene priorizar convocatorias internacionales, programas de intercambio y maestrías."
          : modality.value === "Dentro de mi país"
            ? "Te conviene priorizar ministerios, universidades y fundaciones nacionales."
            : "Puedes combinar convocatorias nacionales e internacionales para ampliar tus opciones.";

      profileResult.innerHTML = `
        <div>${parts.join(" · ") || "Completa los campos para personalizar tu ruta."}</div>
        <div style="margin-top: 8px;">${focus}</div>
      `;
    };

    ["input", "change"].forEach((evt) => {
      country.addEventListener(evt, updateProfileResult);
      career.addEventListener(evt, updateProfileResult);
      modality.addEventListener(evt, updateProfileResult);
      score.addEventListener(evt, updateProfileResult);
    });

    updateProfileResult();
  }

  document.querySelectorAll("[data-auth-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const formType = form.dataset.authForm;
      const email = String(formData.get("email") || "").trim().toLowerCase();
      const password = String(formData.get("password") || "").trim();
      const name = String(formData.get("name") || "").trim();
      const confirm = String(formData.get("confirm") || "").trim();

      if (formType === "register") {
        if (!name || !email || password.length < 6) {
          alert("Completa nombre, correo y una contraseña de al menos 6 caracteres.");
          return;
        }

        if (password !== confirm) {
          alert("Las contraseñas no coinciden.");
          return;
        }

        const users = loadUsers();
        if (users.some((user) => user.email === email)) {
          saveSession({ name, email });
          navigate("dashboard");
          return;
        }

        users.push({ name, email, password });
        saveUsers(users);
        saveSession({ name, email });
        navigate("dashboard");
        return;
      }

      const users = loadUsers();
      const found = users.find((user) => user.email === email && user.password === password);

      if (!found) {
        alert("No encontramos esa cuenta. Usa la cuenta de prueba o regístrate.");
        return;
      }

      saveSession({ name: found.name, email: found.email });
      navigate("dashboard");
    });
  });

  document.querySelectorAll("[data-application-form]").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(form);
      const scholarshipSlug = String(formData.get("scholarshipSlug") || "").trim();
      const scholarshipTitle = String(formData.get("scholarshipTitle") || "").trim();
      const name = String(formData.get("name") || "").trim();
      const email = String(formData.get("email") || "").trim();
      const phone = String(formData.get("phone") || "").trim();
      const message = String(formData.get("message") || "").trim();

      if (!name || !email || !message) {
        alert("Completa nombre, correo y motivo principal.");
        return;
      }

      const applications = loadApplications();
      applications.unshift({
        id: createApplicationId(),
        scholarshipSlug,
        scholarshipTitle,
        name,
        email,
        phone,
        message,
        status: getApplicationStatusLabel(String(formData.get("status") || "Borrador").trim()),
        createdAt: new Date().toISOString(),
      });
      saveApplications(applications);

      alert(`Tu solicitud para ${scholarshipTitle || "esta beca"} quedó guardada.`);
      navigate("postulaciones");
    });
  });

  document.querySelectorAll("[data-action='logout']").forEach((button) => {
    button.addEventListener("click", () => {
      clearSession();
      navigate("inicio");
    });
  });
}

function bindViewEvents() {
  if (appInteractionsBound) {
    return;
  }

  appInteractionsBound = true;

  app.addEventListener("click", (event) => {
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget && app.contains(routeTarget)) {
      navigate(routeTarget.dataset.route);
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget || !app.contains(actionTarget)) {
      return;
    }

    const { action } = actionTarget.dataset;
    if (action === "open-application") {
      const slug = actionTarget.dataset.slug;
      const scholarship = getScholarshipBySlug(slug);
      const officialUrl = scholarship?.officialUrl?.trim();

      if (officialUrl) {
        window.open(officialUrl, "_blank", "noopener,noreferrer");
        return;
      }

      navigate(`postular/${slug}`);
      return;
    }

    if (action === "cycle-application-status") {
      updateApplicationStatus(actionTarget.dataset.applicationId);
      return;
    }

    if (action === "delete-application") {
      deleteApplicationById(actionTarget.dataset.applicationId);
      return;
    }
  });
}

function updateTitle(route) {
  const titles = {
    inicio: "VAPA | Inicio",
    home: "VAPA | Inicio",
    dashboard: "Cuenta | VAPA",
    postulaciones: "Mis postulaciones | VAPA",
    intro: "Introducción | VAPA",
    secciones: "Sección VAPA | VAPA",
    perfil: "Perfil académico | VAPA",
    buscar: "Buscar becas | VAPA",
    postular: "Solicitar beca | VAPA",
    documentos: "Documentos | VAPA",
    seguimiento: "Seguimiento | VAPA",
    recursos: "Recursos | VAPA",
    login: "Iniciar sesión | VAPA",
    register: "Registrarse | VAPA",
  };

  if (route === "beca" || route === "postular" || route === "postulaciones") {
    const scholarship = getScholarshipBySlug(getRouteParam());
    document.title = scholarship
      ? `${scholarship.title} | VAPA`
      : route === "postular"
        ? "Solicitar beca | VAPA"
        : route === "postulaciones"
          ? "Mis postulaciones | VAPA"
        : "Beca | VAPA";
    return;
  }

  document.title = titles[route] || "VAPA | Becas";
}

window.addEventListener("hashchange", renderCurrentView);
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    const savedRoute = loadLastRoute();

    if (savedRoute) {
      navigate(savedRoute);
      return;
    }

    if (getCurrentUser()) {
      navigate("dashboard");
      return;
    }

    navigate("inicio");
    return;
  }

  renderCurrentView();
});
