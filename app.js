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
  home: renderHome,
  dashboard: renderDashboard,
  intro: renderIntro,
  perfil: renderProfile,
  buscar: renderSearch,
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
  return routes[raw] ? raw : "home";
}

function layout(title, subtitle, content, navRoute = getRoute()) {
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
            <button class="ghost-btn" type="button" data-route="home">Volver al inicio</button>
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
        ${navItem("home", "Inicio", navRoute)}
        ${navItem("dashboard", "Cuenta", navRoute)}
        ${navItem("intro", "Guía", navRoute)}
        ${navItem("buscar", "Buscar", navRoute)}
        ${navItem("login", "Cuenta", navRoute)}
      </nav>
    </div>
  `;
}

function navItem(route, label, activeRoute) {
  return `<button type="button" class="bottom-link ${route === activeRoute ? "active" : ""}" data-route="${route}">${label}</button>`;
}

function renderHome() {
  const user = getCurrentUser();
  return `
    <div class="home-grid">
      <section class="hero-card reveal">
        <div class="hero-copy">
          <span class="pill">Tu espacio para crecer, aprender y alcanzar tus sueños</span>
          <h2>Encuentra, comprende y solicita becas con una guía clara y visual.</h2>
          <p class="lead">
            La experiencia ahora funciona como una app: cada sección vive en su propia vista,
            con acceso rápido a login, registro, búsqueda y seguimiento.
          </p>

          ${
            user
              ? `<p class="account-chip">Hola, ${escapeHtml(user.name || user.email)}. Ya tienes sesión iniciada.</p>`
              : `<p class="account-chip muted">Puedes crear una cuenta o iniciar sesión para guardar tu progreso.</p>`
          }

          <div class="cta-row">
            <button class="btn btn-primary" type="button" data-route="intro">Empezar guía</button>
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
              <span>vistas clave</span>
            </article>
            <article class="stat-card">
              <strong>1</strong>
              <span>experiencia unificada</span>
            </article>
          </div>
        </div>
      </section>

      <section class="quick-panel reveal">
        <div class="phone screen-card">
          <div class="dashboard-head">
            <div>
              <p class="small-label">Becas</p>
              <h3>Accesos rápidos</h3>
            </div>
            <div class="heart">♡</div>
          </div>

          <div class="grid-menu">
            <button class="menu-card blue" type="button" data-route="intro">
              <span class="menu-icon">💡</span>
              <strong>Introducción</strong>
            </button>
            <button class="menu-card green" type="button" data-route="perfil">
              <span class="menu-icon">👤</span>
              <strong>Perfil</strong>
            </button>
            <button class="menu-card lilac" type="button" data-route="buscar">
              <span class="menu-icon">🔎</span>
              <strong>Buscar</strong>
            </button>
            <button class="menu-card yellow" type="button" data-route="documentos">
              <span class="menu-icon">📄</span>
              <strong>Documentos</strong>
            </button>
            <button class="menu-card mint" type="button" data-route="seguimiento">
              <span class="menu-icon">👑</span>
              <strong>Seguimiento</strong>
            </button>
            <button class="menu-card sky" type="button" data-route="login">
              <span class="menu-icon">📝</span>
              <strong>Cuenta</strong>
            </button>
          </div>
        </div>
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
        <article class="scholarship-card">
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
      navigate("home");
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
    home: "VAPA | Becas",
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

  document.title = titles[route] || "VAPA | Becas";
}

window.addEventListener("hashchange", renderCurrentView);
window.addEventListener("DOMContentLoaded", () => {
  if (!window.location.hash) {
    navigate("home");
    return;
  }

  renderCurrentView();
});
