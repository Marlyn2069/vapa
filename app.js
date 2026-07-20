const scholarships = [
  {
    slug: "becas-mescyt",
    title: "Becas MESCyT",
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

const app = document.querySelector("#app");
const searchState = {
  query: "",
  filter: "todos",
};
const storageKeys = {
  users: "vapa_users",
  session: "vapa_session",
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

const routes = {
  inicio: renderInicio,
  home: renderInicio,
  dashboard: renderDashboard,
  intro: renderIntro,
  perfil: renderProfile,
  buscar: renderSearch,
  beca: renderScholarshipDetail,
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
  return routes[raw] ? raw : "inicio";
}

function getRouteParam() {
  const raw = window.location.hash.replace(/^#\//, "");
  if (raw.startsWith("beca/")) {
    return raw.slice("beca/".length);
  }
  return "";
}

function activeNavRoute(route = getRoute()) {
  if (route === "beca") {
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
  return `
    <div class="inicio-grid">
      <section class="hero-card reveal">
        <div class="hero-copy">
          <span class="pill">Visualiza • Aprende • Progresa • Avanza</span>
          <h2>Tu guía práctica para encontrar y solicitar becas.</h2>
          <p class="lead">
            Aquí empiezas con una vista clara: identificas tu perfil, buscas en fuentes
            confiables, organizas documentos y haces seguimiento sin perderte entre pantallas.
          </p>

          ${
            user
              ? `<p class="account-chip">Hola, ${escapeHtml(user.name || user.email)}. Tu sesión ya está activa.</p>`
              : `<p class="account-chip muted">Puedes entrar o registrarte para guardar tu avance.</p>`
          }

          <div class="cta-row">
            <button class="btn btn-primary" type="button" data-route="intro">Comenzar</button>
            <button class="btn btn-secondary" type="button" data-route="${user ? "dashboard" : "register"}">
              ${user ? "Ir a mi cuenta" : "Crear cuenta"}
            </button>
          </div>
        </div>
      </section>

      <section class="quick-panel reveal">
        <div class="phone screen-card">
          <div class="dashboard-head">
            <div>
              <p class="small-label">Resumen</p>
              <h3>Lo que encontrarás</h3>
            </div>
            <div class="heart">♡</div>
          </div>

          <div class="grid-menu">
            <button class="menu-card blue" type="button" data-route="perfil">
              <span class="menu-icon">👤</span>
              <strong>Perfil académico</strong>
            </button>
            <button class="menu-card green" type="button" data-route="buscar">
              <span class="menu-icon">🔎</span>
              <strong>Fuentes confiables</strong>
            </button>
            <button class="menu-card lilac" type="button" data-route="documentos">
              <span class="menu-icon">📄</span>
              <strong>Documentos</strong>
            </button>
            <button class="menu-card yellow" type="button" data-route="seguimiento">
              <span class="menu-icon">👑</span>
              <strong>Seguimiento</strong>
            </button>
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
        </aside>
      </div>
    `
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

  document.querySelectorAll("[data-action='logout']").forEach((button) => {
    button.addEventListener("click", () => {
      clearSession();
      navigate("inicio");
    });
  });
}

function bindViewEvents() {
  document.querySelectorAll("[data-route]").forEach((element) => {
    element.addEventListener("click", () => navigate(element.dataset.route));
  });
}

function updateTitle(route) {
  const titles = {
    inicio: "VAPA | Inicio",
    home: "VAPA | Inicio",
    dashboard: "Cuenta | VAPA",
    intro: "Introducción | VAPA",
    perfil: "Perfil académico | VAPA",
    buscar: "Buscar becas | VAPA",
    documentos: "Documentos | VAPA",
    seguimiento: "Seguimiento | VAPA",
    recursos: "Recursos | VAPA",
    login: "Iniciar sesión | VAPA",
    register: "Registrarse | VAPA",
  };

  if (route === "beca") {
    const scholarship = getScholarshipBySlug(getRouteParam());
    document.title = scholarship ? `${scholarship.title} | VAPA` : "Beca | VAPA";
    return;
  }

  document.title = titles[route] || "VAPA | Becas";
}

window.addEventListener("hashchange", renderCurrentView);
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    navigate("inicio");
    return;
  }

  renderCurrentView();
});
