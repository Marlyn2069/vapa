const scholarships = [
  {
    slug: "becas-mescyt",
    title: "Becas MESCyT",
    institution: "Ministerio de Educación Superior, Ciencia y Tecnología",
    officialUrl: "https://mescyt.gob.do/becas/nacionales/",
    region: "dominicana",
    type: "Gobierno",
    level: "Licenciatura",
    careers: ["Medicina", "Ingeniería", "Educación", "Tecnología", "Ciencias sociales"],
    openDate: "Según convocatoria oficial",
    closeDate: "Consultar convocatoria vigente",
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
    institution: "Gobierno de la República Dominicana",
    officialUrl: "https://becas.gob.do/",
    region: "dominicana",
    type: "Programa oficial",
    level: "Pregrado",
    careers: ["Medicina", "Administración", "Educación", "Ingeniería", "Tecnología"],
    openDate: "Según convocatoria oficial",
    closeDate: "Consultar convocatoria vigente",
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
    institution: "Instituto Tecnológico de Las Américas",
    officialUrl: "https://puntostecnologicos.itla.edu.do/",
    region: "dominicana",
    type: "Universidad",
    level: "Técnico / Grado",
    careers: ["Software", "Ciberseguridad", "Redes", "Multimedia", "Mecatrónica"],
    openDate: "Según convocatoria de admisión",
    closeDate: "Consultar convocatoria vigente",
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
    institution: "Instituto Tecnológico de Santo Domingo",
    officialUrl: "https://www.intec.edu.do/admisiones/becas/como-aplicar",
    region: "dominicana",
    type: "Universidad",
    level: "Licenciatura",
    careers: ["Ingeniería", "Ciencia de datos", "Economía", "Biotecnología", "Ciberseguridad"],
    openDate: "17 de febrero de 2026",
    closeDate: "10 de abril de 2026",
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
    institution: "Global Affairs Canada",
    officialUrl: "https://www.international.gc.ca/education/scholarships-bourses.aspx?lang=eng",
    region: "internacional",
    type: "Internacional",
    level: "Maestría",
    careers: ["Investigación", "Ciencia", "Tecnología", "Educación", "Salud"],
    openDate: "Según convocatoria oficial",
    closeDate: "Consultar convocatoria vigente",
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
    institution: "Latin American Leadership Academy",
    officialUrl: "https://latinamericanleadershipacademy.org/es/financial-aid/",
    region: "fundacion",
    type: "Fundación",
    level: "Pregrado",
    careers: ["Liderazgo", "Emprendimiento", "Ciencias sociales", "Educación"],
    openDate: "Según convocatoria oficial",
    closeDate: "Consultar convocatoria vigente",
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
    route: "alertas",
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
    route: "asistente",
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

const universities = [
  {
    slug: "uasd",
    name: "Universidad Autónoma de Santo Domingo",
    shortName: "UASD",
    location: "Santo Domingo y recintos regionales",
    officialUrl: "https://uasd.edu.do/",
    admissionUrl: "https://uasd.edu.do/admisiones-grado/",
    admissionProcess: "Crear solicitud, elegir campus y carrera, pagar la solicitud, entregar documentos y completar las evaluaciones requeridas.",
    admissionPeriod: "Según calendario de nuevo ingreso publicado por Admisiones.",
    scholarships: "Programas de apoyo y categoría financiera estudiantil; revisar convocatorias vigentes.",
  },
  {
    slug: "intec",
    name: "Instituto Tecnológico de Santo Domingo",
    shortName: "INTEC",
    location: "Santo Domingo, Distrito Nacional",
    officialUrl: "https://www.intec.edu.do/",
    admissionUrl: "https://www.intec.edu.do/estudiantes/calendarios/calendario-de-admisiones",
    admissionProcess: "Completar admisión, entregar documentos, realizar las pruebas asignadas y esperar la publicación de admitidos.",
    admissionPeriod: "Calendario 2026: recepción final hasta el 3 de octubre; inicio de docencia el 2 de noviembre, sujeto a cambios oficiales.",
    scholarships: "Becas PIES y otras ayudas de admisión y excelencia.",
  },
  {
    slug: "unibe",
    name: "Universidad Iberoamericana",
    shortName: "UNIBE",
    location: "Santo Domingo, Distrito Nacional",
    officialUrl: "https://www.unibe.edu.do/",
    admissionUrl: "https://admision.unibe.edu.do/",
    admissionProcess: "Completar el formulario de admisión, presentar documentos y realizar las evaluaciones indicadas por la carrera.",
    admissionPeriod: "La convocatoria de Becas Líderes del Mañana suele abrir entre enero y finales de marzo; verificar cada edición.",
    scholarships: "Becas Líderes del Mañana y ayudas financieras según convocatoria.",
  },
  {
    slug: "itla",
    name: "Instituto Tecnológico de Las Américas",
    shortName: "ITLA",
    location: "Santo Domingo Este, Santo Domingo",
    officialUrl: "https://itla.edu.do/",
    admissionUrl: "https://puntostecnologicos.itla.edu.do/",
    admissionProcess: "Consultar la oferta disponible, completar el proceso de admisión y entregar los documentos solicitados.",
    admissionPeriod: "Según calendario y cupos de cada período académico.",
    scholarships: "Programas de apoyo vinculados a formación tecnológica y convocatorias institucionales.",
  },
];

const plans = [
  {
    name: "Básico",
    price: "Gratis",
    description: "Para comenzar a explorar y organizar tus oportunidades.",
    features: ["Buscador nacional de becas", "Guía práctica", "Checklist de documentos", "Guardar postulaciones en este dispositivo"],
    accent: "blue",
  },
  {
    name: "Premium",
    price: "Próximamente",
    description: "Herramientas avanzadas para preparar mejor cada postulación.",
    features: ["Alertas personalizadas por carrera", "Asistente de orientación ampliado", "Plantillas premium", "Comparador de universidades", "Seguimiento avanzado"],
    accent: "lilac",
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
  alertSubscription: "vapa_alert_subscription",
  planOfferDismissed: "vapa_plan_offer_dismissed",
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
  portada: renderLanding,
  inicio: () => (getCurrentUser() ? renderInicio() : renderLanding()),
  home: () => (getCurrentUser() ? renderInicio() : renderLanding()),
  dashboard: renderDashboard,
  postulaciones: renderApplicationsView,
  intro: renderIntro,
  secciones: renderVapaSections,
  alertas: renderAlerts,
  planes: renderPlans,
  universidades: renderUniversities,
  asistente: renderAssistant,
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

function renderLanding() {
  return `
    <div class="landing-page reveal">
      <section class="landing-hero">
        <div class="landing-copy">
          <p class="section-kicker">Visualiza • Aprende • Progresa • Avanza</p>
          <h2>Tu camino hacia una beca empieza aquí.</h2>
          <p class="lead">VAPA te ayuda a encontrar oportunidades en República Dominicana, entender los requisitos y organizar tus postulaciones paso a paso.</p>
          <div class="landing-actions">
            <button class="btn btn-primary" type="button" data-route="login">Iniciar sesión</button>
            <button class="btn btn-secondary" type="button" data-route="register">Crear cuenta gratis</button>
          </div>
          <p class="landing-note">Crea tu cuenta para guardar becas, activar alertas y continuar tu proceso.</p>
        </div>
        <div class="landing-visual" aria-label="Resumen de funciones de VAPA">
          <div class="landing-logo-mark">V</div>
          <div class="landing-visual-card landing-visual-main">
            <span class="mini-tag">VAPA</span>
            <h3>Encuentra oportunidades que impulsen tu futuro.</h3>
            <div class="landing-progress"><span></span></div>
            <small>Explora · Prepárate · Postúlate</small>
          </div>
          <div class="landing-visual-card landing-visual-float landing-float-one"><strong>🔔 Alertas</strong><span>Nuevas convocatorias</span></div>
          <div class="landing-visual-card landing-visual-float landing-float-two"><strong>✓ Seguimiento</strong><span>Organiza tus postulaciones</span></div>
        </div>
      </section>

      <section class="landing-features" aria-label="Funciones principales">
        <article><span>01</span><strong>Explora becas</strong><p>Busca por carrera, universidad o institución.</p></article>
        <article><span>02</span><strong>Prepárate mejor</strong><p>Conoce requisitos, documentos y fechas.</p></article>
        <article><span>03</span><strong>Avanza con orden</strong><p>Guarda tus postulaciones y recibe alertas.</p></article>
      </section>

      <section class="landing-opportunities">
        <div class="landing-photo-wrap">
          <img src="./assets/landing-opportunities.png" alt="Estudiantes estudiando, trabajando en tecnología y recibiendo orientación académica" />
        </div>
        <div class="landing-opportunity-copy">
          <p class="section-kicker">Más posibilidades para tu futuro</p>
          <h3>Una beca puede abrirte diferentes caminos.</h3>
          <p>VAPA te ayuda a descubrir oportunidades según tus metas: estudiar una carrera, formarte en tecnología, desarrollar investigación o recibir apoyo para continuar tus estudios.</p>
          <div class="opportunity-list">
            <div><span>🎓</span><strong>Universidades</strong><small>Licenciaturas, posgrados y ayudas de admisión.</small></div>
            <div><span>💻</span><strong>Formación técnica</strong><small>Programas de tecnología, software y áreas STEM.</small></div>
            <div><span>🌱</span><strong>Liderazgo e investigación</strong><small>Convocatorias que valoran impacto, talento y comunidad.</small></div>
          </div>
        </div>
      </section>

      <section class="landing-institutions" aria-labelledby="landingInstitutionsTitle">
        <div class="landing-section-heading">
          <div>
            <p class="section-kicker">Instituciones que puedes revisar</p>
            <h3 id="landingInstitutionsTitle">Empieza por encontrar tu opción.</h3>
          </div>
          <button class="ghost-btn" type="button" data-route="login">Explorar con una cuenta</button>
        </div>
        <div class="landing-institution-grid">
          ${universities
            .map(
              (university) => `
                <article class="landing-institution-card">
                  <span class="institution-initial">${escapeHtml(university.shortName.slice(0, 1))}</span>
                  <div><strong>${escapeHtml(university.shortName)}</strong><p>${escapeHtml(university.name)}</p><small>${escapeHtml(university.location)}</small></div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    </div>
  `;
}

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
                ? `<p class="account-chip">Sesión activa</p>`
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
        ${navItem("dashboard", "Perfil", navRoute)}
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
          <h2>Encuentra la beca que impulsa tu futuro.</h2>
          <p class="lead">
            Encuentra oportunidades de estudio en República Dominicana, revisa requisitos y
            organiza tus postulaciones desde un solo lugar.
          </p>

          <form class="home-search" id="homeSearchForm">
            <input id="homeSearch" type="search" placeholder="Busca por carrera, universidad o institución..." autocomplete="off" />
            <button class="btn btn-primary" type="submit">Buscar becas</button>
          </form>

          <div class="hero-badges">
            <span>Inicio</span>
            <span>Buscar</span>
            <span>Alertas</span>
            <span>Universidades</span>
          </div>

          ${
            user
              ? `<p class="account-chip">Tu sesión ya está activa.</p>`
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

        <section class="home-featured" aria-labelledby="featured-title">
          <div class="home-featured-head">
            <div>
              <p class="section-kicker">Oportunidades para ti</p>
              <h3 id="featured-title">Becas destacadas</h3>
            </div>
            <button class="ghost-btn" type="button" data-route="buscar">Ver todas</button>
          </div>
          <div class="home-featured-grid">
            ${featuredScholarships
              .map(
                (item) => `
                  <article class="home-featured-card">
                    <span class="mini-tag">${escapeHtml(item.level)}</span>
                    <h4>${escapeHtml(item.title)}</h4>
                    <p>${escapeHtml(item.institution)}</p>
                    <span class="home-featured-date">Cierre: ${escapeHtml(item.closeDate)}</span>
                    <button class="btn btn-secondary" type="button" data-route="beca/${escapeHtml(item.slug)}">Ver detalle</button>
                  </article>
                `,
              )
              .join("")}
          </div>
        </section>
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
  const showPlanOffer = Boolean(user) && localStorage.getItem(storageKeys.planOfferDismissed) !== "true";

  return layout(
    "Cuenta",
    user ? "Bienvenido a tu cuenta" : "Tu espacio personal",
    `
      <div class="dashboard-grid">
        <article class="panel-box accent">
          <h3>${user ? "Tu perfil" : "Aún no has iniciado sesión"}</h3>
          ${
            user
              ? `
                <div class="stack-list compact">
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
      ${
        showPlanOffer
          ? `
            <div class="plan-offer-backdrop" role="presentation">
              <section class="plan-offer" role="dialog" aria-modal="true" aria-labelledby="planOfferTitle">
                <button class="plan-offer-close" type="button" aria-label="Cerrar oferta" data-action="continue-free-plan">×</button>
                <p class="section-kicker">Una mejor ruta para tus metas</p>
                <h3 id="planOfferTitle">Prueba VAPA Premium</h3>
                <p>Organiza mejor tus postulaciones con alertas, plantillas y herramientas avanzadas.</p>
                <div class="plan-offer-features">
                  <span>Alertas por carrera</span>
                  <span>Plantillas premium</span>
                  <span>Seguimiento avanzado</span>
                </div>
                <div class="plan-offer-actions">
                  <button class="btn btn-primary" type="button" data-action="choose-premium">Ver plan Premium</button>
                  <button class="btn btn-secondary" type="button" data-action="continue-free-plan">Continuar con el plan gratuito por 3 meses</button>
                </div>
              </section>
            </div>
          `
          : ""
      }
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
            VAPA reúne herramientas para explorar becas, preparar tu solicitud, recibir alertas y
            resolver dudas sobre oportunidades académicas en el país.
          </p>
          <div class="cta-row">
            <button class="btn btn-primary" type="button" data-route="buscar">Explorar becas</button>
            <button class="btn btn-secondary" type="button" data-route="intro">Guía práctica</button>
            <button class="btn btn-secondary" type="button" data-route="alertas">Alertas</button>
            <button class="btn btn-secondary" type="button" data-route="universidades">Universidades</button>
            <button class="btn btn-secondary" type="button" data-route="planes">Planes</button>
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
        <div class="profile-scope-note">
          <strong>Enfoque actual: República Dominicana</strong>
          <span>En esta primera etapa VAPA está orientada a estudiantes que viven o estudian en el país.</span>
        </div>
        <div class="profile-form">
          <label>
            País de residencia
            <select id="country" disabled>
              <option>República Dominicana</option>
            </select>
          </label>
          <label>
            Carrera o programa
            <input type="text" id="career" placeholder="Ej. Ingeniería, medicina, diseño..." />
          </label>
          <label>
            Modalidad
            <select id="modality">
              <option>Estudios en República Dominicana</option>
              <option>Modalidad virtual desde República Dominicana</option>
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
              placeholder="Busca por beca, carrera, universidad o institución..."
              value="${escapeHtml(searchState.query)}"
            />
          </div>
          <div class="search-actions">
            <button class="ghost-btn" type="button" data-route="universidades">Universidades</button>
            <button class="ghost-btn" type="button" data-route="documentos">Documentos</button>
          </div>
        </div>

        <div class="quick-filters" id="quickFilters">
          ${filterButton("todos", "Todos")}
          ${filterButton("dominicana", "Dominicana")}
          ${filterButton("universidad", "Universidad")}
        </div>

        <p class="search-helper">Prueba con ejemplos como <strong>Medicina</strong>, <strong>ciberseguridad</strong>, <strong>INTEC</strong> o <strong>MESCyT</strong>.</p>

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

function renderAlerts() {
  const subscribed = localStorage.getItem(storageKeys.alertSubscription) === "true";

  return layout(
    "Convocatorias",
    "Alertas de becas",
    `
      <div class="alerts-page">
        <article class="panel-box accent alert-hero">
          <div>
            <p class="section-kicker">Mantente al día</p>
            <h3>Recibe avisos de nuevas oportunidades</h3>
            <p class="panel-text">Activa las alertas para recibir un mensaje en este dispositivo cuando agreguemos una convocatoria.</p>
          </div>
          <label class="switch-row">
            <input type="checkbox" id="alertSubscription" ${subscribed ? "checked" : ""} />
            <span class="switch-ui"></span>
            <strong>${subscribed ? "Alertas activadas" : "Activar alertas"}</strong>
          </label>
        </article>

        <div class="alert-feed">
          ${scholarships.slice(0, 4)
            .map(
              (item) => `
                <article class="panel-box alert-feed-card">
                  <div class="alert-feed-icon">🔔</div>
                  <div class="alert-feed-copy">
                    <p class="section-kicker">Nueva convocatoria</p>
                    <h3>${escapeHtml(item.title)}</h3>
                    <p><strong>Institución:</strong> ${escapeHtml(item.institution)}</p>
                    <p><strong>Fecha límite:</strong> ${escapeHtml(item.closeDate)}</p>
                  </div>
                  <button class="btn btn-secondary" type="button" data-route="beca/${escapeHtml(item.slug)}">Ver beca</button>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
    "alertas",
  );
}

function renderPlans() {
  return layout(
    "Cuenta",
    "Planes de VAPA",
    `
      <div class="plans-page">
        <article class="panel-box accent">
          <p class="panel-text">Empieza gratis y desbloquea herramientas avanzadas cuando necesites preparar una postulación más completa.</p>
        </article>
        <div class="plans-grid">
          ${plans
            .map(
              (plan, index) => `
                <article class="plan-card plan-${escapeHtml(plan.accent)} ${index === 1 ? "plan-featured" : ""}">
                  ${index === 1 ? '<span class="plan-badge">Más herramientas</span>' : ""}
                  <p class="section-kicker">Plan ${escapeHtml(plan.name)}</p>
                  <h3>${escapeHtml(plan.price)}</h3>
                  <p>${escapeHtml(plan.description)}</p>
                  <ul class="detail-list">${plan.features.map((feature) => `<li>${escapeHtml(feature)}</li>`).join("")}</ul>
                  <button class="btn ${index === 1 ? "btn-primary" : "btn-secondary"}" type="button" data-action="plan-info" data-plan="${escapeHtml(plan.name)}">${index === 1 ? "Ver opciones premium" : "Usar plan básico"}</button>
                </article>
              `,
            )
            .join("")}
        </div>
        <p class="form-hint">El plan Premium está preparado como una propuesta de producto; el cobro real se conectará cuando se configure una pasarela de pagos.</p>
      </div>
    `,
    "dashboard",
  );
}

function renderUniversities() {
  return layout(
    "Explora",
    "Universidades de República Dominicana",
    `
      <div class="university-page">
        <article class="panel-box accent">
          <p class="panel-text">Consulta en un solo lugar dónde estudiar, cómo iniciar admisión y qué oportunidades de apoyo revisar.</p>
        </article>
        <div class="university-grid">
          ${universities
            .map(
              (university) => `
                <article class="panel-box university-card">
                  <div class="university-topline"><span class="pill">${escapeHtml(university.shortName)}</span><span>${escapeHtml(university.location)}</span></div>
                  <h3>${escapeHtml(university.name)}</h3>
                  <div class="stack-list compact">
                    <div><strong>Proceso de admisión</strong><span>${escapeHtml(university.admissionProcess)}</span></div>
                    <div><strong>Período</strong><span>${escapeHtml(university.admissionPeriod)}</span></div>
                    <div><strong>Becas</strong><span>${escapeHtml(university.scholarships)}</span></div>
                  </div>
                  <div class="detail-actions">
                    <a class="btn btn-primary" href="${escapeHtml(university.officialUrl)}" target="_blank" rel="noreferrer">Sitio oficial</a>
                    <a class="btn btn-secondary" href="${escapeHtml(university.admissionUrl)}" target="_blank" rel="noreferrer">Admisiones</a>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
    "universidades",
  );
}

function renderAssistant() {
  return layout(
    "Ayuda VAPA",
    "Resuelve tus dudas",
    `
      <div class="assistant-page">
        <article class="panel-box accent assistant-intro">
          <p class="section-kicker">Asistente de orientación</p>
          <h3>Pregunta sobre becas, carreras o admisiones</h3>
          <p class="panel-text">Esta primera versión responde con orientación basada en el contenido de VAPA. Más adelante se puede conectar a un modelo de IA con una clave segura.</p>
        </article>
        <section class="assistant-box panel-box">
          <div class="chat-messages" id="chatMessages">
            <div class="chat-message assistant"><strong>VAPA</strong><span>Hola. ¿Quieres saber sobre requisitos, documentos, universidades o cómo buscar una beca?</span></div>
          </div>
          <form class="chat-form" id="assistantForm">
            <input id="assistantInput" type="text" placeholder="Escribe tu pregunta..." autocomplete="off" required />
            <button class="btn btn-primary" type="submit">Enviar</button>
          </form>
          <div class="chat-suggestions">
            <button class="filter-btn" type="button" data-chat-question="¿Qué documentos necesito?">Documentos</button>
            <button class="filter-btn" type="button" data-chat-question="¿Qué universidades puedo revisar?">Universidades</button>
            <button class="filter-btn" type="button" data-chat-question="¿Cómo busco una beca para Medicina?">Buscar Medicina</button>
          </div>
        </section>
      </div>
    `,
    "secciones",
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
      `${item.title} ${item.institution} ${item.type} ${item.level} ${item.description} ${(item.careers || []).join(" ")}`.toLowerCase().includes(query);
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
            <span>República Dominicana</span>
            <span>${escapeHtml(item.type)}</span>
            <span>${escapeHtml(item.level)}</span>
          </div>
          <h4>${escapeHtml(item.title)}</h4>
          <p class="card-institution">${escapeHtml(item.institution)}</p>
          <p>${escapeHtml(item.description)}</p>
          <div class="card-dates"><span>Apertura: ${escapeHtml(item.openDate)}</span><span>Cierre: ${escapeHtml(item.closeDate)}</span></div>
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
            <span class="pill">República Dominicana</span>
            <span class="pill">${escapeHtml(scholarship.type)}</span>
            <span class="pill">${escapeHtml(scholarship.level)}</span>
          </div>
          <h3>${escapeHtml(scholarship.title)}</h3>
          <p class="detail-institution"><strong>Institución:</strong> ${escapeHtml(scholarship.institution)}</p>
          <p class="panel-text">${escapeHtml(scholarship.description)}</p>
          <p class="detail-audience">${escapeHtml(scholarship.audience)}</p>
          <div class="detail-facts">
            <div><strong>Fecha de apertura</strong><span>${escapeHtml(scholarship.openDate)}</span></div>
            <div><strong>Fecha límite</strong><span>${escapeHtml(scholarship.closeDate)}</span></div>
            <div><strong>Carreras relacionadas</strong><span>${escapeHtml((scholarship.careers || []).join(", "))}</span></div>
          </div>
          <div class="detail-actions">
            <button class="btn btn-primary" type="button" data-action="open-official" data-slug="${escapeHtml(scholarship.slug)}">Ver sitio oficial</button>
            <button class="btn btn-secondary" type="button" data-route="postular/${escapeHtml(scholarship.slug)}">Guardar postulación</button>
            <button class="btn btn-secondary" type="button" data-route="buscar">Volver al buscador</button>
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
  updateGlobalHeader();
  bindViewEvents();
  refreshSearchView();
  updateDynamicFields();
  updateTitle(route);
}

function updateGlobalHeader() {
  const user = getCurrentUser();
  const brand = document.querySelector(".brand-button");
  const topnav = document.querySelector(".topnav");

  if (brand) {
    brand.dataset.route = user ? "inicio" : "portada";
  }

  if (!topnav) return;

  topnav.innerHTML = user
    ? `
        <a href="#/dashboard">Perfil</a>
        <button class="topnav-action" type="button" data-action="global-logout">Cerrar sesión</button>
      `
    : `
        <a href="#/login">Iniciar sesión</a>
        <a href="#/register">Registrarse</a>
      `;
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
  const homeSearchForm = document.querySelector("#homeSearchForm");
  const homeSearch = document.querySelector("#homeSearch");
  if (homeSearchForm && homeSearch) {
    homeSearchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      searchState.query = homeSearch.value.trim();
      navigate("buscar");
    });
  }

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

      const focus = modality.value === "Modalidad virtual desde República Dominicana"
        ? "Puedes combinar oportunidades nacionales con programas virtuales disponibles desde el país."
        : "Te conviene priorizar ministerios, universidades y convocatorias nacionales.";

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

  const alertSubscription = document.querySelector("#alertSubscription");
  if (alertSubscription) {
    alertSubscription.addEventListener("change", (event) => {
      localStorage.setItem(storageKeys.alertSubscription, String(event.target.checked));
      renderCurrentView();
    });
  }

  const assistantForm = document.querySelector("#assistantForm");
  const assistantInput = document.querySelector("#assistantInput");
  const chatMessages = document.querySelector("#chatMessages");
  if (assistantForm && assistantInput && chatMessages) {
    const addMessage = (role, message) => {
      const node = document.createElement("div");
      node.className = `chat-message ${role}`;
      node.innerHTML = `<strong>${role === "assistant" ? "VAPA" : "Tú"}</strong><span>${escapeHtml(message)}</span>`;
      chatMessages.appendChild(node);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    };

    const answer = (question) => {
      const text = question.toLowerCase();
      if (text.includes("document") || text.includes("requisit")) {
        return "Empieza por reunir tu documento de identidad, récord de notas, carta de motivación, certificados y cualquier requisito específico de la convocatoria.";
      }
      if (text.includes("medicina") || text.includes("carrera")) {
        return "Para Medicina puedes buscar por carrera en Buscar becas. Revisa también MESCyT, universidades y las fechas de cada convocatoria antes de aplicar.";
      }
      if (text.includes("universidad") || text.includes("admis")) {
        return "Consulta la sección Universidades para ver ubicación, admisiones, períodos y enlaces oficiales de instituciones dominicanas.";
      }
      if (text.includes("alert") || text.includes("fecha")) {
        return "Activa Alertas de convocatorias para consultar el nombre de la beca, la institución y la fecha límite de las oportunidades publicadas.";
      }
      return "Puedo orientarte sobre becas, carreras, documentos, universidades, admisiones y alertas. Prueba con una de esas opciones.";
    };

    const submitQuestion = (question) => {
      const cleanQuestion = question.trim();
      if (!cleanQuestion) return;
      addMessage("user", cleanQuestion);
      assistantInput.value = "";
      window.setTimeout(() => addMessage("assistant", answer(cleanQuestion)), 180);
    };

    assistantForm.addEventListener("submit", (event) => {
      event.preventDefault();
      submitQuestion(assistantInput.value);
    });

    document.querySelectorAll("[data-chat-question]").forEach((button) => {
      button.addEventListener("click", () => submitQuestion(button.dataset.chatQuestion || ""));
    });
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

  document.addEventListener("click", (event) => {
    const routeTarget = event.target.closest("[data-route]");
    if (routeTarget && (app.contains(routeTarget) || routeTarget.closest(".topbar"))) {
      navigate(routeTarget.dataset.route);
      return;
    }

    const actionTarget = event.target.closest("[data-action]");
    if (!actionTarget) {
      return;
    }

    const { action } = actionTarget.dataset;
    if (action === "global-logout") {
      clearSession();
      localStorage.removeItem(storageKeys.planOfferDismissed);
      navigate("portada");
      return;
    }

    if (!app.contains(actionTarget)) {
      return;
    }
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

    if (action === "open-official") {
      const scholarship = getScholarshipBySlug(actionTarget.dataset.slug);
      if (scholarship?.officialUrl) {
        window.open(scholarship.officialUrl, "_blank", "noopener,noreferrer");
      }
      return;
    }

    if (action === "plan-info") {
      if (actionTarget.dataset.plan === "Premium") {
        alert("El plan Premium estará disponible próximamente. Mientras tanto puedes usar alertas, búsqueda y postulaciones guardadas.");
      } else {
        navigate("buscar");
      }
      return;
    }

    if (action === "choose-premium") {
      localStorage.setItem(storageKeys.planOfferDismissed, "true");
      navigate("planes");
      return;
    }

    if (action === "continue-free-plan") {
      localStorage.setItem(storageKeys.planOfferDismissed, "true");
      renderCurrentView();
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
    portada: "VAPA | Encuentra tu beca",
    inicio: "VAPA | Inicio",
    home: "VAPA | Inicio",
    dashboard: "Cuenta | VAPA",
    postulaciones: "Mis postulaciones | VAPA",
    intro: "Introducción | VAPA",
    secciones: "Sección VAPA | VAPA",
    alertas: "Alertas de convocatorias | VAPA",
    planes: "Planes | VAPA",
    universidades: "Universidades dominicanas | VAPA",
    asistente: "Asistente VAPA | VAPA",
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
    navigate(getCurrentUser() ? "inicio" : "portada");
    return;
  }

  renderCurrentView();
});
