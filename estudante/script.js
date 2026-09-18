const STORAGE_KEY = 'ava-ned-estudante-state-v1';
const SESSION_KEY = 'ava-ned-estudante-session-v1';
const STUDENT_SESSION_KEY = 'ava_student_session';

const FIGMA_ASSETS = [
  'https://www.figma.com/api/mcp/asset/68b5737a-8608-4067-b20c-1a2426cf7f80',
  'https://www.figma.com/api/mcp/asset/2c54316c-730e-49b8-8151-d9565e118667',
  'https://www.figma.com/api/mcp/asset/93029584-9e0d-40bc-af06-3a18193cfe64',
  'https://www.figma.com/api/mcp/asset/9a5ebd00-448e-4465-95c5-b31dbd6ac410',
  'https://www.figma.com/api/mcp/asset/971a525b-af53-464a-a712-266cc6c273a7',
  'https://www.figma.com/api/mcp/asset/d574c7b9-8adb-4125-9616-f82d0d607282',
  'https://www.figma.com/api/mcp/asset/cba07691-dcce-4521-8657-3744b5553844'
];

const INITIAL_STATE = {
  user: {
    name: 'João das neves',
    firstName: 'João',
    role: 'Estudante',
    email: 'joao.neves@empresa.com.br',
    cpf: '123.456.789-00',
    company: 'Nossa Escola Digital',
    phone: '(11) 98888-1234',
    avatar: 'JN'
  },
  preferences: { darkMode: false, emailNotifications: true, language: 'Português (Brasil)', digest: 'Sem resumo' },
  courses: [
    {
      id: 'ux', title: 'Fundamentos de UX e Experiência do Usuário', category: 'Design e Produto', workload: '12h', progress: 75, status: 'progress', image: FIGMA_ASSETS[0], description: 'Aprenda os fundamentos de experiência do usuário e transforme necessidades reais em soluções digitais mais simples e úteis.', instructor: 'Mariana Santos', modules: [
        { title: 'Introdução à experiência do usuário', lessons: [
          { id: 'ux-1', title: 'O que é UX e por que importa', type: 'video', duration: '12 min', done: true },
          { id: 'ux-2', title: 'Diferença de UX para UI design', type: 'video', duration: '18 min', done: false },
          { id: 'ux-3', title: 'Mapa de empatia', type: 'text', duration: '10 min', done: false }
        ] },
        { title: 'Pesquisa e descoberta', lessons: [
          { id: 'ux-4', title: 'Entrevistas com usuários', type: 'podcast', duration: '22 min', done: false },
          { id: 'ux-5', title: 'Atividade: roteiro de pesquisa', type: 'task', duration: '15 min', done: false }
        ] }
      ]
    },
    {
      id: 'safety', title: 'Segurança do Trabalho em Ambientes Industriais', category: 'Segurança', workload: '8h', progress: 75, status: 'progress', image: FIGMA_ASSETS[1], description: 'Práticas essenciais para reconhecer riscos, agir com responsabilidade e manter ambientes industriais mais seguros.', instructor: 'Carlos Alberto', modules: [
        { title: 'Fundamentos de segurança', lessons: [
          { id: 'safety-1', title: 'Cultura de prevenção', type: 'video', duration: '14 min', done: true },
          { id: 'safety-2', title: 'Identificação de riscos', type: 'text', duration: '16 min', done: false }
        ] },
        { title: 'Rotinas e equipamentos', lessons: [
          { id: 'safety-3', title: 'Equipamentos de proteção', type: 'video', duration: '12 min', done: false },
          { id: 'safety-4', title: 'Checklist de segurança', type: 'task', duration: '20 min', done: false }
        ] }
      ]
    },
    {
      id: 'quality', title: 'Ferramentas da Qualidade como Impulsionadoras de Processos', category: 'Processos', workload: '10h', progress: 75, status: 'progress', image: FIGMA_ASSETS[2], description: 'Use ferramentas de qualidade para analisar processos, identificar causas e apoiar decisões melhores.', instructor: 'Ana Paula Lima', modules: [
        { title: 'Qualidade na prática', lessons: [
          { id: 'quality-1', title: 'Visão geral das ferramentas', type: 'video', duration: '20 min', done: true },
          { id: 'quality-2', title: 'Diagrama de Ishikawa', type: 'text', duration: '15 min', done: false },
          { id: 'quality-3', title: 'Exercício aplicado', type: 'task', duration: '25 min', done: false }
        ] }
      ]
    },
    { id: 'automation', title: 'Introdução à Automação Industrial', category: 'Indústria 4.0', workload: '16h', progress: 0, status: 'pending', image: FIGMA_ASSETS[3], description: 'Conheça sensores, controladores e os princípios da automação aplicada à indústria.', instructor: 'Rafael Martins', modules: [{ title: 'Primeiros passos', lessons: [{ id: 'automation-1', title: 'Conceitos de automação', type: 'video', duration: '17 min', done: false }, { id: 'automation-2', title: 'Sensores e atuadores', type: 'text', duration: '13 min', done: false }] }] },
    { id: 'productivity', title: 'Gestão do Tempo e Produtividade', category: 'Desenvolvimento', workload: '6h', progress: 100, status: 'done', image: FIGMA_ASSETS[4], description: 'Organize sua rotina com clareza, foco e métodos práticos para priorizar o que importa.', instructor: 'Juliana Costa', modules: [{ title: 'Organização pessoal', lessons: [{ id: 'productivity-1', title: 'Planejamento semanal', type: 'video', duration: '13 min', done: true }, { id: 'productivity-2', title: 'Matriz de prioridades', type: 'text', duration: '12 min', done: true }] }] },
    { id: 'logic', title: 'Lógica de Programação', category: 'Tecnologia', workload: '14h', progress: 0, status: 'pending', image: FIGMA_ASSETS[5], description: 'Desenvolva raciocínio lógico para solucionar problemas e dar os primeiros passos em programação.', instructor: 'Beatriz Rocha', modules: [{ title: 'Pensamento computacional', lessons: [{ id: 'logic-1', title: 'Algoritmos no cotidiano', type: 'video', duration: '15 min', done: false }, { id: 'logic-2', title: 'Variáveis e decisões', type: 'text', duration: '20 min', done: false }] }] },
    { id: 'process', title: 'Gestão de Processos Produtivos', category: 'Gestão', workload: '9h', progress: 0, status: 'pending', image: FIGMA_ASSETS[6], description: 'Entenda como mapear, acompanhar e melhorar processos produtivos de ponta a ponta.', instructor: 'Eduardo Freitas', modules: [{ title: 'Processos e indicadores', lessons: [{ id: 'process-1', title: 'O processo como sistema', type: 'video', duration: '16 min', done: false }, { id: 'process-2', title: 'Indicadores essenciais', type: 'text', duration: '18 min', done: false }] }] }
  ],
  trails: [
    { id: 'agile', title: 'Gestão de Projetos e Metodologias Ágeis', category: 'Gestão', progress: 75, image: FIGMA_ASSETS[3], courseIds: ['ux', 'productivity', 'process'], description: 'Uma jornada prática para organizar projetos, colaborar melhor e entregar valor com agilidade.' },
    { id: 'communication', title: 'Comunicação e Inteligência Emocional', category: 'Desenvolvimento', progress: 50, image: FIGMA_ASSETS[4], courseIds: ['productivity', 'safety', 'ux'], description: 'Fortaleça suas relações de trabalho por meio de comunicação consciente e inteligência emocional.' }
  ],
  certificates: [
    { id: 'cert-ux', title: 'Fundamentos de UX e Experiência do Usuário', issued: '12 de maio de 2026', code: 'NED-UX-2026-0048', image: FIGMA_ASSETS[5] },
    { id: 'cert-productivity', title: 'Gestão do Tempo e Produtividade', issued: '18 de abril de 2026', code: 'NED-GTP-2026-0031', image: FIGMA_ASSETS[5] },
    { id: 'cert-safety', title: 'Segurança do Trabalho', issued: '02 de fevereiro de 2026', code: 'NED-ST-2026-0017', image: FIGMA_ASSETS[5] }
  ],
  activities: [
    { id: 'act-1', courseId: 'ux', title: 'Trabalho Python', type: 'Atividade avaliativa', due: 'Faltam 4 dias e 19 horas' },
    { id: 'act-2', courseId: 'safety', title: 'Checklist de segurança', type: 'Atividade avaliativa', due: 'Faltam 7 dias e 3 horas' },
    { id: 'act-3', courseId: 'quality', title: 'Exercício aplicado', type: 'Tarefa', due: 'Faltam 9 dias e 12 horas' }
  ],
  events: [
    { id: 'event-1', date: '2026-09-22', title: 'Trabalho Python', courseId: 'ux', type: 'Atividade avaliativa', time: '14:00' },
    { id: 'event-2', date: '2026-09-25', title: 'Encontro ao vivo — Segurança', courseId: 'safety', type: 'Aula ao vivo', time: '10:00' },
    { id: 'event-3', date: '2026-09-30', title: 'Entrega do exercício aplicado', courseId: 'quality', type: 'Tarefa', time: '23:59' }
  ],
  notifications: [
    { id: 'notification-1', title: 'Nova atividade disponível', body: 'A atividade Trabalho Python foi adicionada ao curso de UX.', time: 'Hoje, 09:42', unread: true },
    { id: 'notification-2', title: 'Certificado emitido', body: 'Seu certificado de Gestão do Tempo está disponível.', time: 'Ontem, 16:10', unread: true },
    { id: 'notification-3', title: 'Lembrete de aula', body: 'Você tem um encontro ao vivo nesta semana.', time: '18 set, 08:20', unread: false }
  ],
  messages: [
    { id: 'm-1', name: 'Mariana Santos', initials: 'MS', subject: 'Dúvida sobre a atividade', preview: 'Oi, João! Vi sua entrega e deixei um comentário.', time: '09:20', unread: true, messages: [{ text: 'Oi, João! Vi sua entrega e deixei um comentário.', mine: false }, { text: 'Obrigado, Mariana. Vou revisar ainda hoje.', mine: true }] },
    { id: 'm-2', name: 'Carlos Alberto', initials: 'CA', subject: 'Encontro ao vivo', preview: 'O material do encontro já está disponível.', time: 'Ontem', unread: false, messages: [{ text: 'O material do encontro já está disponível.', mine: false }] },
    { id: 'm-3', name: 'Equipe AVA NED', initials: 'AN', subject: 'Boas-vindas', preview: 'Como podemos ajudar sua jornada?', time: '15 set', unread: false, messages: [{ text: 'Como podemos ajudar sua jornada?', mine: false }] }
  ],
  notes: [
    { id: 'note-1', title: 'Mapa de empatia', body: 'Lembrar de separar observações, dores e necessidades nas entrevistas.', courseId: 'ux' },
    { id: 'note-2', title: 'Checklist de segurança', body: 'Revisar os EPIs obrigatórios antes do próximo encontro.', courseId: 'safety' },
    { id: 'note-3', title: 'Matriz de prioridades', body: 'Usar a matriz para organizar as entregas da semana.', courseId: 'productivity' }
  ],
  grades: [
    { courseId: 'ux', activity: 'Trabalho Python', score: '9,2', status: 'Concluída' },
    { courseId: 'safety', activity: 'Checklist de segurança', score: '8,7', status: 'Concluída' },
    { courseId: 'quality', activity: 'Exercício aplicado', score: '—', status: 'Pendente' }
  ]
};

const ui = { sidebarOpen: false, notificationsOpen: false, modal: null, courseSearch: '', courseStatus: 'Todos', catalogSearch: '', trailSearch: '', helpSearch: '', messageId: 'm-1', calendarMode: 'month', toast: null };
const app = document.querySelector('#app');
let state = loadState();

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function loadState() { try { const stored = localStorage.getItem(STORAGE_KEY); return stored ? { ...clone(INITIAL_STATE), ...JSON.parse(stored) } : clone(INITIAL_STATE); } catch { return clone(INITIAL_STATE); } }
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
function isSessionActive() {
  try {
    const session = JSON.parse(localStorage.getItem(STUDENT_SESSION_KEY) || 'null');
    return session?.authenticated === true;
  } catch {
    return localStorage.getItem(SESSION_KEY) === 'active';
  }
}
function setSession(active) {
  if (active) {
    const session = { authenticated: true, userId: 'student-01' };
    localStorage.setItem(STUDENT_SESSION_KEY, JSON.stringify(session));
    localStorage.setItem(SESSION_KEY, 'active');
  } else {
    localStorage.removeItem(STUDENT_SESSION_KEY);
    localStorage.removeItem(SESSION_KEY);
  }
}
function resetTest() { localStorage.removeItem(STORAGE_KEY); setSession(false); state = clone(INITIAL_STATE); window.history.replaceState({}, '', window.location.pathname); window.location.hash = '#login'; }
if (new URLSearchParams(window.location.search).get('resetTest') === 'true') resetTest();

function icon(name, size = 18) {
  const paths = {
    home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Z"/><path d="M9 21v-6h6v6"/>',
    book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 5.5v16"/>',
    trail: '<path d="m12 3 2.8 5.8 6.2.9-4.5 4.4 1.1 6.2-5.6-3-5.6 3 1.1-6.2L3 9.7l6.2-.9Z"/>',
    calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    certificate: '<circle cx="12" cy="9" r="6"/><path d="m9.5 14.2-1 6.2 3.5-2 3.5 2-1-6.2"/>',
    grades: '<path d="M4 19V5M4 19h16"/><path d="m7 15 3-4 3 2 4-6"/>',
    notification: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    settings: '<path d="M12 15.3a3.3 3.3 0 1 0 0-6.6 3.3 3.3 0 0 0 0 6.6Z"/><path d="m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a2 2 0 1 1-4 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1A1.8 1.8 0 0 0 2.4 12a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1A1.8 1.8 0 0 0 9.6 4.8h.2a2 2 0 1 0 4 0h.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1A1.8 1.8 0 0 0 21.2 12a1.8 1.8 0 0 0-1.3 3.1Z"/>',
    user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 21a7 7 0 0 1 14 0"/>',
    search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    close: '<path d="m6 6 12 12M18 6 6 18"/>',
    chevron: '<path d="m8 10 4 4 4-4"/>',
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    back: '<path d="m15 18-6-6 6-6M9 12h10"/>',
    check: '<path d="m5 12 4 4L19 6"/>',
    eye: '<path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12Z"/><circle cx="12" cy="12" r="2.5"/>',
    bell: '<path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4"/>',
    message: '<path d="M4 5h16v11H8l-4 4Z"/><path d="M8 9h8M8 12h5"/>',
    note: '<path d="M5 3h10l4 4v14H5Z"/><path d="M15 3v5h5M8 12h8M8 16h6"/>',
    help: '<circle cx="12" cy="12" r="9"/><path d="M9.6 9a2.5 2.5 0 1 1 4.3 1.7c-1 1-1.9 1.4-1.9 2.8M12 17h.01"/>',
    download: '<path d="M12 3v12M7 10l5 5 5-5M5 21h14"/>',
    play: '<path d="m9 6 9 6-9 6Z" fill="currentColor" stroke="none"/>',
    file: '<path d="M6 3h8l4 4v14H6Z"/><path d="M14 3v5h5M9 13h6M9 17h6"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    filter: '<path d="M4 5h16M7 12h10M10 19h4"/>',
    edit: '<path d="m4 16-.8 4.8L8 20l11-11-4-4Z"/><path d="m13 6 4 4"/>',
    logout: '<path d="M10 4H5v16h5M14 8l4 4-4 4M18 12H9"/>'
  };
  return `<span class="icon" style="width:${size}px;height:${size}px" aria-hidden="true"><svg viewBox="0 0 24 24">${paths[name] || paths.help}</svg></span>`;
}
function initials(name) { return name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase(); }
function escapeHtml(value) { return String(value).replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' }[char])); }
function getCourse(id) { return state.courses.find((course) => course.id === id); }
function getTrail(id) { return state.trails.find((trail) => trail.id === id); }
function getLesson(course, lessonId) { for (const module of course.modules) { const lesson = module.lessons.find((item) => item.id === lessonId); if (lesson) return lesson; } return null; }
function allLessons(course) { return course.modules.flatMap((module) => module.lessons); }
function statusLabel(status) { return ({ progress: 'Em andamento', done: 'Finalizado', pending: 'Não iniciado' })[status] || status; }
function progressOf(course) { const lessons = allLessons(course); return lessons.length ? Math.round(lessons.filter((lesson) => lesson.done).length / lessons.length * 100) : course.progress; }
function syncCourseProgress(course) { course.progress = progressOf(course); course.status = course.progress >= 100 ? 'done' : course.progress > 0 ? 'progress' : 'pending'; }
function firstOpenLesson(course) { return allLessons(course).find((lesson) => !lesson.done) || allLessons(course)[0]; }
function image(url, alt, className = '') { return `<img class="${className}" src="${url}" alt="${escapeHtml(alt)}" loading="lazy" onerror="this.style.display='none'" />`; }
function progressRing(value) { return `<span class="progress-ring" style="--progress:${value * 3.6}deg"><span>${value}%</span></span>`; }
function courseCard(course, options = {}) { const progress = course.progress; return `<article class="card course-card ${options.compact ? 'compact' : ''}" data-route="course" data-id="${course.id}" tabindex="0" role="link" aria-label="Abrir ${escapeHtml(course.title)}"><div class="course-image">${image(course.image, course.title)}<span class="course-overlay-icon">${icon('arrow', 16)}</span></div><div class="card-body"><div class="card-meta"><span class="meta-pill">${escapeHtml(course.category)}</span><span class="meta-pill">${escapeHtml(course.workload)}</span></div><div class="card-title-row"><h3 class="card-title">${escapeHtml(course.title)}</h3>${progressRing(progress)}</div><div class="course-footer"><span>${statusLabel(course.status)}</span><span>${allLessons(course).length} aulas</span></div>${options.catalog ? `<button class="button primary small side-action" data-action="enroll-course" data-id="${course.id}">${course.status === 'pending' ? 'Inscrever-se' : 'Abrir curso'} ${icon('arrow',13)}</button>` : ''}</div></article>`; }
function trailCard(trail) { return `<article class="card course-card trail-card" data-route="trail" data-id="${trail.id}" tabindex="0" role="link" aria-label="Abrir trilha ${escapeHtml(trail.title)}"><div class="course-image">${image(trail.image, trail.title)}<span class="trail-badge">${icon('trail', 12)} Trilha</span></div><div class="card-body"><div class="card-meta"><span class="meta-pill">${escapeHtml(trail.category)}</span><span class="meta-pill">6 cursos</span></div><div class="card-title-row"><h3 class="card-title">${escapeHtml(trail.title)}</h3>${progressRing(trail.progress)}</div><div class="course-footer"><span class="trail-count">+ ${trail.courseIds.length} cursos incluídos</span></div></div></article>`; }
function navLink(route, label, iconName, current) { const active = current === route || (route === 'courses' && current === 'course') || (route === 'trails' && current === 'trail') || (route === 'certificates' && current === 'certificate'); return `<a href="#${route}" class="nav-link ${active ? 'active' : ''}" data-route="${route}">${icon(iconName, 17)}<span>${label}</span></a>`; }
function sidebar(current) { return `<aside class="sidebar ${ui.sidebarOpen ? 'open' : ''}" aria-label="Navegação principal"><div class="brand"><span class="brand-mark" aria-hidden="true"></span><span class="brand-text"><strong>Nossa</strong><span>Escola Digital</span></span></div><div class="sidebar-section">Aprendizado</div><nav class="nav-list">${navLink('home','Início','home',current)}${navLink('courses','Meus cursos','book',current)}${navLink('trails','Minhas trilhas','trail',current)}${navLink('catalog','Cursos Disponíveis','certificate',current)}</nav><div class="sidebar-section">Acompanhamento</div><nav class="nav-list">${navLink('calendar','Calendário','calendar',current)}${navLink('certificates','Certificados','certificate',current)}${navLink('grades','Notas','grades',current)}</nav><div class="sidebar-bottom"><div class="sidebar-toggle-row"><span>${icon('settings',15)} Modo escuro</span><button class="switch ${state.preferences.darkMode ? 'on' : ''}" data-action="toggle-dark" aria-label="Alternar modo escuro"></button></div>${navLink('help','Central de ajuda','help',current)}<a href="#profile" class="profile-mini" data-route="profile"><span class="avatar">${state.user.avatar}</span><span class="profile-copy"><strong>${escapeHtml(state.user.name)}</strong><span>${escapeHtml(state.user.email)}</span></span>${icon('chevron',14)}</a><span class="version">Versão 1.0</span></div></aside>`; }
function header(title) { const unread = state.notifications.filter((item) => item.unread).length; return `<header class="app-header"><button class="icon-button mobile-menu" data-action="toggle-sidebar" aria-label="Abrir menu">${icon('menu')}</button><h1>${escapeHtml(title)}</h1><label class="header-search"><span class="icon">${icon('search',16)}</span><input type="search" placeholder="Buscar por cursos" aria-label="Buscar por cursos" data-action="header-search" /></label><div class="header-actions"><button class="icon-button" data-route="help" aria-label="Central de ajuda">${icon('help')}</button><button class="icon-button" data-route="notes" aria-label="Anotações">${icon('note')}</button><button class="icon-button" data-action="toggle-notifications" aria-label="Notificações">${icon('bell')}${unread ? `<span class="icon-badge">${unread}</span>` : ''}</button><button class="icon-button" data-route="messages" aria-label="Mensagens">${icon('message')}</button></div></header>`; }
function footer() { return `<div class="toast-region" id="toast-region"></div>`; }
function appShell(current, title, content) { return `<div class="app-shell">${sidebar(current)}${header(title)}<main class="app-content"><div class="content-inner">${content}</div></main>${ui.notificationsOpen ? notificationDropdown() : ''}${footer()}</div>`; }
function notificationDropdown() { return `<aside class="notification-dropdown" aria-label="Notificações"><header><span>Notificações</span><button class="link-button" data-action="mark-notifications">Marcar como lidas</button></header>${state.notifications.map((item) => `<div class="notification-row"><span class="activity-icon">${icon('bell',15)}</span><p><strong>${escapeHtml(item.title)}</strong><br>${escapeHtml(item.body)}<small>${escapeHtml(item.time)}</small></p></div>`).join('')}</aside>`; }
function breadcrumbs(items) { return `<div class="breadcrumbs">${items.map((item, index) => index === items.length - 1 ? `<strong>${escapeHtml(item.label)}</strong>` : `<a href="#${item.route || 'home'}" data-route="${item.route || 'home'}">${escapeHtml(item.label)}</a>${icon('chevron',12)}`).join('')}</div>`; }

function renderLogin() { app.innerHTML = `<div class="login-page"><section class="login-panel"><a href="#login" class="brand"><span class="brand-mark" aria-hidden="true"></span><span class="brand-text"><strong>Nossa</strong><span>Escola Digital</span></span></a><div class="login-content"><h1>Bem-vindo de volta</h1><p>Insira suas credenciais para acessar seu painel de aprendizagem.</p><form class="login-form" id="login-form"><div class="field"><label for="cpf">CPF</label><input id="cpf" name="cpf" type="text" inputmode="numeric" autocomplete="username" placeholder="000.000.000-00" value="" required /></div><div class="field"><label for="password">Senha</label><div class="password-wrap"><input id="password" name="password" type="password" autocomplete="current-password" placeholder="Digite sua senha" required /><button class="password-toggle" type="button" data-action="toggle-password" aria-label="Mostrar senha">${icon('eye',18)}</button></div></div><div class="form-row"><label class="check"><input type="checkbox" name="remember" /> <span>Lembrar de mim</span></label><button class="link-button" type="button" data-action="forgot-password">Esqueceu a senha?</button></div><div class="login-error" id="login-error" role="alert">CPF ou senha inválidos. Tente novamente com os dados de teste.</div><button class="login-submit" type="submit" id="login-submit">Entrar ${icon('arrow',17)}</button><button class="link-button login-help" type="button" data-action="contact">Tem alguma dúvida? Fale conosco</button></form></div><footer class="login-footer">© 2026 NossaEscolaDigital <u>Segurança & Privacidade</u></footer></section><section class="login-art"><div class="art-copy"><span class="eyebrow">Aprendizagem corporativa</span><h2>Aprenda, evolua e acompanhe sua jornada em um só lugar.</h2><p>Acesse cursos, trilhas e atividades em um ambiente simples, escalável e pronto para diferentes marcas.</p></div><div class="art-mock" aria-hidden="true"><img class="figma-art" src="https://www.figma.com/api/mcp/asset/635ec676-54b5-4459-9a46-2ae91e3fb70" alt="" /><div class="mock-top"></div><div class="mock-body"><div class="mock-sidebar"><span></span><span></span><span></span><span></span><span></span></div><div class="mock-main"><div class="mock-banner"></div><div class="mock-grid"><div class="mock-card"></div><div class="mock-card"></div><div class="mock-card"></div></div></div></div></div></section></div>`; }
function renderHome() { const activeCourses = state.courses.filter((course) => course.status !== 'done'); const upcoming = state.activities.slice(0, 3); return appShell('home', `Olá, ${state.user.name} 👋`, `<section class="hero"><div class="hero-content"><h2>Continue sua jornada de aprendizado: acompanhe seu progresso, retome seus cursos e explore novos conteúdos para evoluir suas habilidades.</h2><p>Seu próximo passo está a poucos minutos de distância.</p><button class="button" data-route="course" data-id="ux">Continuar onde parei ${icon('arrow',15)}</button></div></section><div class="section-heading"><h3>Próximas atividades</h3><span class="muted">Tudo em um só lugar</span></div><div class="activity-row">${upcoming.map((activity) => `<article class="activity"><span class="activity-icon">${icon('file',16)}</span><div><strong>${escapeHtml(activity.title)} <span class="tag">${escapeHtml(activity.type)}</span></strong><small>${escapeHtml(getCourse(activity.courseId)?.category || '')}</small><time>${escapeHtml(activity.due)}</time></div></article>`).join('')}</div><div class="section-heading"><h3>Minhas trilhas</h3><div class="toolbar-right"><div class="chips"><button class="chip active">Todos</button><button class="chip">Em andamento</button><button class="chip">Não iniciado</button><button class="chip">Finalizado</button></div><label class="compact-label">Ordenar por<select><option>Mais recentes</option><option>Mais acessados</option></select></label></div></div><div class="card-grid two">${state.trails.map(trailCard).join('')}</div><div class="section-heading"><h3>Meus cursos</h3><a class="link-button" href="#courses" data-route="courses">Ver todos</a></div><div class="card-grid">${activeCourses.slice(0, 3).map(courseCard).join('')}</div><div class="section-heading"><h3>Personalize suas recomendações</h3></div><div class="recommendations"><article class="card course-card"> <div class="course-image">${image(FIGMA_ASSETS[5], 'Curso recomendado')}</div><div class="card-body"><div class="card-meta"><span class="meta-pill">Recomendado</span><span class="meta-pill">6h</span></div><h3 class="card-title">Comunicação profissional</h3><button class="button primary small side-action" data-action="recommendation">Ver curso</button></div></article><article class="card course-card"><div class="course-image">${image(FIGMA_ASSETS[6], 'Curso recomendado')}</div><div class="card-body"><div class="card-meta"><span class="meta-pill">Recomendado</span><span class="meta-pill">8h</span></div><h3 class="card-title">Gestão de processos produtivos</h3><button class="button primary small side-action" data-route="course" data-id="process">Ver curso</button></div></article><article class="card recommendation-copy"><h3>Personalize suas recomendações e descubra cursos ideais para você!</h3><button class="button primary" data-action="recommendation">Personalizar recomendações</button></article></div>`); }
function renderCourses() { const filtered = state.courses.filter((course) => (ui.courseStatus === 'Todos' || statusLabel(course.status) === ui.courseStatus) && course.title.toLowerCase().includes(ui.courseSearch.toLowerCase())); return appShell('courses', 'Meus cursos', `<div class="page-heading">${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Meus cursos' }])}<div><h2>Meus cursos</h2><p>Acompanhe sua evolução e continue aprendendo.</p></div></div><div class="toolbar"><div class="toolbar-left"><label class="compact-label">Buscar e filtrar<input class="search-field" type="search" value="${escapeHtml(ui.courseSearch)}" placeholder="Buscar por cursos, tópicos" data-action="course-search" /></label><div><span class="compact-label">Status</span><div class="chips">${['Todos','Em andamento','Não iniciado','Finalizado'].map((status) => `<button class="chip ${ui.courseStatus === status ? 'active' : ''}" data-action="course-filter" data-value="${status}">${status}</button>`).join('')}</div></div></div><label class="compact-label">Ordenar por<select><option>Mais recentes</option><option>Mais acessados</option><option>Nome</option></select></label></div>${filtered.length ? `<div class="card-grid">${filtered.map(courseCard).join('')}</div>` : `<div class="empty">${icon('search',34)}<strong>Nenhum curso encontrado</strong><p>Tente buscar por outro termo ou remova os filtros.</p></div>`}<div class="toolbar" style="margin-top:22px"><span class="muted">1–${filtered.length} de ${state.courses.length}</span><div class="chips"><button class="chip">‹</button><button class="chip active">1</button><button class="chip">2</button><button class="chip">›</button></div></div>`); }
function renderCourse(id) { const course = getCourse(id) || state.courses[0]; const next = firstOpenLesson(course); return appShell('courses', course.title, `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Meus cursos', route: 'courses' }, { label: course.title }])}<section class="detail-hero"><div class="detail-image">${image(course.image, course.title)}</div><div><div class="card-meta"><span class="meta-pill">${escapeHtml(course.category)}</span><span class="meta-pill">${escapeHtml(course.workload)}</span><span class="status ${course.status}">${statusLabel(course.status)}</span></div><h2>${escapeHtml(course.title)}</h2><p>${escapeHtml(course.description)}</p><p style="margin-top:12px">Instrutor: <strong>${escapeHtml(course.instructor)}</strong></p></div><aside class="detail-aside"><div class="metric"><span>Seu progresso</span><strong>${course.progress}%</strong></div><div class="progress-line"><span style="width:${course.progress}%"></span></div><div class="metric"><span>Carga horária</span><strong>${course.workload}</strong></div><div class="metric"><span>Conteúdos</span><strong>${allLessons(course).length} aulas</strong></div><button class="button primary" data-route="lesson" data-course="${course.id}" data-lesson="${next.id}">${course.progress ? 'Continuar de onde parei' : 'Iniciar curso'} ${icon('arrow',15)}</button></aside></section><div class="detail-layout"><section><div class="section-heading"><h3>Conteúdo do curso</h3><span class="muted">${allLessons(course).filter((lesson) => lesson.done).length} de ${allLessons(course).length} concluídos</span></div>${course.modules.map((module) => `<article class="module"><div class="module-header"><span>${escapeHtml(module.title)}</span><span class="muted">${module.lessons.filter((lesson) => lesson.done).length}/${module.lessons.length}</span></div><div class="lesson-list">${module.lessons.map((lesson) => `<div class="lesson-item ${lesson.id === next.id ? 'current' : ''}" data-route="lesson" data-course="${course.id}" data-lesson="${lesson.id}" role="button" tabindex="0"><span class="lesson-check ${lesson.done ? 'done' : ''}">${lesson.done ? icon('check',13) : ''}</span><span>${escapeHtml(lesson.title)}</span><span class="lesson-type">${escapeHtml(lesson.type)} · ${lesson.duration}</span></div>`).join('')}</div></article>`).join('')}</section><aside><article class="card side-card"><h3>Sobre este curso</h3><p class="muted">Ao concluir todos os conteúdos, seu certificado ficará disponível automaticamente.</p><button class="button secondary side-action" data-action="open-certificate" data-course="${course.id}">Ver certificado</button></article><article class="card side-card"><h3>Materiais</h3><div class="file-box"><span class="icon">${icon('file',22)}</span><div><strong style="font-size:12px">Guia do estudante.pdf</strong><small style="display:block;color:var(--text-500);margin-top:4px">2,4 MB</small></div></div></article></aside></div>`); }
function renderLesson(courseId, lessonId) { const course = getCourse(courseId) || state.courses[0]; const lesson = getLesson(course, lessonId) || firstOpenLesson(course); const lessons = allLessons(course); const index = lessons.findIndex((item) => item.id === lesson.id); const previous = lessons[index - 1]; const next = lessons[index + 1]; const typeContent = lesson.type === 'video' ? `<div class="video-player"><button class="play" data-action="play-video" aria-label="Reproduzir aula">${icon('play',27)}</button></div>` : lesson.type === 'podcast' ? `<div class="card file-box" style="min-height:180px;justify-content:center"><span class="icon" style="width:48px;height:48px;color:var(--primary-600)">${icon('message',48)}</span><div><strong>Podcast da aula</strong><p class="muted">Ouça o conteúdo enquanto acompanha sua jornada.</p><button class="button primary small" data-action="play-video">Reproduzir áudio</button></div></div>` : lesson.type === 'task' ? `<article class="card form-card"><h2>Atividade avaliativa</h2><p class="muted">Responda ao exercício e envie sua resposta para registrar a conclusão.</p><div class="field"><label for="answer">Sua resposta</label><textarea id="answer" placeholder="Digite sua resposta..."></textarea></div><button class="button primary" data-action="submit-activity" data-course="${course.id}" data-lesson="${lesson.id}">Enviar atividade ${icon('arrow',15)}</button></article>` : `<article class="rich-content"><h2>Aprendendo na prática</h2><p>Uma boa experiência começa por entender o contexto de quem utiliza o produto. Neste conteúdo você vai conhecer ferramentas e exemplos para aplicar os conceitos no seu dia a dia.</p><p>Observe as necessidades, formule hipóteses e valide suas decisões com as pessoas envolvidas.</p><ul><li>Organize os principais aprendizados.</li><li>Registre evidências e oportunidades.</li><li>Compartilhe os próximos passos com o time.</li></ul><div class="file-box"><span class="icon">${icon('file',22)}</span><div><strong>Material complementar</strong><small style="display:block;color:var(--text-500);margin-top:4px">Baixe o guia da aula para consultar depois.</small></div><button class="button secondary small" data-action="download-material">Baixar</button></div></article>`; return `<div class="lesson-shell"><header class="lesson-header"><a href="#course?id=${course.id}" class="icon-button" data-route="course" data-id="${course.id}" aria-label="Voltar para o curso">${icon('back')}</a><a href="#home" class="brand"><span class="brand-mark" aria-hidden="true"></span><span class="brand-text"><strong>Nossa</strong><span>Escola Digital</span></span></a><span class="lesson-name">${escapeHtml(course.title)}</span><div class="lesson-progress"><small><span>Progresso do curso</span><strong>${course.progress}%</strong></small><div class="progress-line"><span style="width:${course.progress}%"></span></div></div><button class="icon-button" data-route="help" aria-label="Ajuda">${icon('help')}</button></header><main class="lesson-layout"><aside class="lesson-sidebar"><h3>Conteúdo do curso</h3>${course.modules.map((module) => `<div class="lesson-module-title">${escapeHtml(module.title)}</div>${module.lessons.map((item) => `<div class="lesson-item ${item.id === lesson.id ? 'current' : ''}" data-route="lesson" data-course="${course.id}" data-lesson="${item.id}" role="button" tabindex="0"><span class="lesson-check ${item.done ? 'done' : ''}">${item.done ? icon('check',13) : ''}</span><span>${escapeHtml(item.title)}</span></div>`).join('')}`).join('')}</aside><section class="lesson-main"><div class="breadcrumbs">${icon('book',12)} ${escapeHtml(course.title)} <span>›</span> <strong>${escapeHtml(lesson.title)}</strong></div><h1>${escapeHtml(lesson.title)}</h1><p class="lesson-subtitle">${escapeHtml(lesson.duration)} · ${lesson.done ? 'Conteúdo concluído' : 'Conteúdo em andamento'}</p>${typeContent}<div class="lesson-actions"><button class="button ghost" ${previous ? `data-route="lesson" data-course="${course.id}" data-lesson="${previous.id}"` : 'disabled'}>${icon('back',15)} Aula anterior</button><button class="button ${lesson.done ? 'secondary' : 'primary'}" data-action="complete-lesson" data-course="${course.id}" data-lesson="${lesson.id}">${lesson.done ? 'Concluída' : 'Marcar como concluída'} ${icon('check',15)}</button><button class="button secondary" ${next ? `data-route="lesson" data-course="${course.id}" data-lesson="${next.id}"` : `data-route="course" data-id="${course.id}"`}>${next ? 'Próxima aula' : 'Voltar ao curso'} ${icon('arrow',15)}</button></div></section></main></div>`; }
function renderTrails() { const filtered = state.trails.filter((trail) => trail.title.toLowerCase().includes(ui.trailSearch.toLowerCase())); return appShell('trails', 'Minhas trilhas', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Minhas trilhas' }])}<div class="page-heading"><div><h2>Minhas trilhas</h2><p>Jornadas organizadas para desenvolver novas competências.</p></div><button class="button primary" data-route="catalog">Explorar cursos ${icon('arrow',15)}</button></div><div class="toolbar"><label class="search-field"><span class="icon">${icon('search',16)}</span><input type="search" value="${escapeHtml(ui.trailSearch)}" placeholder="Buscar por trilhas" data-action="trail-search" /></label><div class="chips"><button class="chip active">Todos</button><button class="chip">Em andamento</button><button class="chip">Finalizado</button></div></div><div class="card-grid two">${filtered.map(trailCard).join('')}</div>`); }
function renderTrail(id) { const trail = getTrail(id) || state.trails[0]; const courses = trail.courseIds.map(getCourse).filter(Boolean); return appShell('trails', trail.title, `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Minhas trilhas', route: 'trails' }, { label: trail.title }])}<section class="detail-hero"><div class="detail-image">${image(trail.image, trail.title)}</div><div><div class="card-meta"><span class="meta-pill">${escapeHtml(trail.category)}</span><span class="meta-pill">${courses.length} cursos</span></div><h2>${escapeHtml(trail.title)}</h2><p>${escapeHtml(trail.description)}</p></div><aside class="detail-aside"><div class="metric"><span>Progresso da trilha</span><strong>${trail.progress}%</strong></div><div class="progress-line"><span style="width:${trail.progress}%"></span></div><button class="button primary" data-route="course" data-id="${courses[0]?.id}">Continuar trilha ${icon('arrow',15)}</button></aside></section><div class="section-heading"><h3>Cursos da trilha</h3><span class="muted">Obrigatórios e recomendados</span></div><div class="card-grid">${courses.map(courseCard).join('')}</div>`); }
function renderCatalog(showcase = false) { const list = state.courses.filter((course) => !showcase || course.status === 'pending').filter((course) => course.title.toLowerCase().includes(ui.catalogSearch.toLowerCase())); return appShell('catalog', showcase ? 'Vitrine' : 'Cursos disponíveis', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: showcase ? 'Vitrine' : 'Cursos disponíveis' }])}<div class="page-heading"><div><h2>${showcase ? 'Vitrine' : 'Cursos disponíveis'}</h2><p>${showcase ? 'Descubra experiências de aprendizagem selecionadas para você.' : 'Encontre novos conteúdos para continuar evoluindo.'}</p></div><button class="button secondary" data-route="courses">Meus cursos</button></div><div class="toolbar"><label class="search-field"><span class="icon">${icon('search',16)}</span><input type="search" value="${escapeHtml(ui.catalogSearch)}" placeholder="Buscar por cursos, tópicos" data-action="catalog-search" /></label><div class="chips"><button class="chip active">Todos</button><button class="chip">Tecnologia</button><button class="chip">Gestão</button><button class="chip">Desenvolvimento</button></div></div>${list.length ? `<div class="card-grid">${list.map((course) => courseCard(course, { catalog: true })).join('')}</div>` : `<div class="empty">${icon('search',34)}<strong>Nenhum curso disponível</strong><p>Não encontramos resultados para sua busca.</p></div>`}`); }
function renderCertificates() { return appShell('certificates', 'Certificados', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Certificados' }])}<div class="page-heading"><div><h2>Certificados</h2><p>Consulte e compartilhe suas conquistas.</p></div><label class="search-field"><span class="icon">${icon('search',16)}</span><input type="search" placeholder="Buscar por cursos" /></label></div><div class="card-grid">${state.certificates.map((certificate) => `<article class="card course-card" data-route="certificate" data-id="${certificate.id}" tabindex="0" role="link"><div class="course-image">${image(certificate.image, certificate.title)}</div><div class="card-body"><div class="card-meta"><span class="meta-pill">Certificado</span><span class="meta-pill">${escapeHtml(certificate.issued)}</span></div><h3 class="card-title">${escapeHtml(certificate.title)}</h3><div class="course-footer"><span>Concluído</span><button class="button primary small" data-action="download-certificate" data-id="${certificate.id}">${icon('download',13)} Baixar</button></div></div></article>`).join('')}</div>`); }
function renderCertificate(id) { const certificate = state.certificates.find((item) => item.id === id) || state.certificates[0]; return appShell('certificates', 'Certificado', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Certificados', route: 'certificates' }, { label: certificate.title }])}<div class="detail-layout"><section class="card" style="padding:22px"><div class="certificate-paper"><div class="certificate-decoration"></div><p>Certificado de conclusão</p><h2>${escapeHtml(certificate.title)}</h2><span>Concedido a</span><h3>${escapeHtml(state.user.name)}</h3><p>pela conclusão da jornada de aprendizagem em ${escapeHtml(certificate.issued)}.</p><strong>${escapeHtml(certificate.code)}</strong></div></section><aside><article class="card side-card"><h3>Informações detalhadas</h3><div class="metric"><span>Curso</span><strong>${escapeHtml(certificate.title)}</strong></div><div class="metric" style="margin-top:12px"><span>Data de emissão</span><strong>${escapeHtml(certificate.issued)}</strong></div><button class="button primary side-action" data-action="download-certificate" data-id="${certificate.id}">${icon('download',15)} Baixar PDF</button><button class="button secondary side-action" data-action="share-certificate">Compartilhar</button></article></aside></div>`); }
function renderCalendar() { const days = ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb']; const dates = Array.from({ length: 35 }, (_, index) => index - 2); const dayEvents = (number) => state.events.filter((event) => Number(event.date.slice(-2)) === number); return appShell('calendar', 'Calendário', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Calendário' }])}<div class="page-heading"><div><h2>Calendário</h2><p>Visualize prazos, encontros e próximos eventos.</p></div><button class="button primary" data-action="new-event">Novo evento ${icon('arrow',15)}</button></div><div class="toolbar"><div class="chips"><button class="chip ${ui.calendarMode === 'month' ? 'active' : ''}" data-action="calendar-mode" data-value="month">Mês</button><button class="chip ${ui.calendarMode === 'week' ? 'active' : ''}" data-action="calendar-mode" data-value="week">Semana</button><button class="chip ${ui.calendarMode === 'agenda' ? 'active' : ''}" data-action="calendar-mode" data-value="agenda">Agenda</button></div><button class="button ghost small">Hoje</button></div>${ui.calendarMode === 'agenda' ? `<div class="event-list">${state.events.map(eventRow).join('')}</div>` : ui.calendarMode === 'week' ? `<div class="card calendar-card"><div class="calendar-toolbar"><button class="icon-button">${icon('back',15)}</button><strong>21 — 27 de setembro de 2026</strong><button class="icon-button">${icon('arrow',15)}</button></div><div class="empty" style="border:0;border-radius:0">${icon('calendar',30)}<strong>Semana de aprendizagem</strong><p>Seus próximos eventos aparecem na agenda.</p></div></div>` : `<div class="card calendar-card"><div class="calendar-toolbar"><button class="icon-button">${icon('back',15)}</button><strong>Setembro de 2026</strong><button class="icon-button">${icon('arrow',15)}</button></div><div class="calendar-grid">${days.map((day) => `<div class="calendar-weekday">${day}</div>`).join('')}${dates.map((number) => { const day = number < 1 ? 31 + number : number > 30 ? number - 30 : number; const muted = number < 1 || number > 30; const events = muted ? [] : dayEvents(day); return `<div class="calendar-day ${muted ? 'muted' : ''}"><span class="calendar-number ${day === 18 && !muted ? 'today' : ''}">${day}</span>${events.map((event) => `<span class="calendar-event" title="${escapeHtml(event.title)}" data-action="show-event" data-id="${event.id}">${escapeHtml(event.title)}</span>`).join('')}</div>`; }).join('')}</div></div>`}<div class="section-heading"><h3>Próximos eventos</h3></div><div class="event-list">${state.events.map(eventRow).join('')}</div>`); }
function eventRow(event) { const day = event.date.slice(-2); return `<article class="event-row" data-action="show-event" data-id="${event.id}" tabindex="0"><span class="event-date">${day}<small>SET</small></span><div><strong>${escapeHtml(event.title)}</strong><span>${escapeHtml(getCourse(event.courseId)?.title || '')} · ${escapeHtml(event.time)} · ${escapeHtml(event.type)}</span></div>${icon('chevron',16)}</article>`; }
function renderMessages() { const current = state.messages.find((item) => item.id === ui.messageId) || state.messages[0]; return appShell('messages', 'Mensagens', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Mensagens' }])}<div class="page-heading"><div><h2>Mensagens</h2><p>Converse com instrutores e equipe de apoio.</p></div><button class="button primary" data-action="new-message">Nova mensagem ${icon('arrow',15)}</button></div><section class="card messages-layout"><div class="message-list"><div class="message-list-header"><label class="search-field"><span class="icon">${icon('search',15)}</span><input type="search" placeholder="Buscar conversa" /></label></div>${state.messages.map((message) => `<div class="message-item ${current.id === message.id ? 'active' : ''}" data-action="select-message" data-id="${message.id}"><span class="avatar">${message.initials}</span><div style="min-width:0;flex:1"><strong>${escapeHtml(message.name)}</strong><p>${escapeHtml(message.preview)}</p></div><time>${escapeHtml(message.time)}</time></div>`).join('')}</div><div class="conversation"><div class="conversation-header"><h3>${escapeHtml(current.name)}</h3><span class="muted">${escapeHtml(current.subject)}</span></div><div class="conversation-body">${current.messages.map((message) => `<div class="bubble ${message.mine ? 'mine' : ''}">${escapeHtml(message.text)}</div>`).join('')}</div><form class="message-compose" data-form="message"><input type="text" placeholder="Escreva uma mensagem..." aria-label="Nova mensagem" required /><button class="button primary small" type="submit">Enviar</button></form></div></section>`); }
function renderNotes() { return appShell('notes', 'Anotações', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Anotações' }])}<div class="page-heading"><div><h2>Minhas anotações</h2><p>Guarde lembretes para acompanhar seus cursos.</p></div><button class="button primary" data-action="new-note">Nova anotação ${icon('arrow',15)}</button></div><div class="note-grid">${state.notes.map((note) => `<article class="note"><h3>${escapeHtml(note.title)}</h3><p>${escapeHtml(note.body)}</p><div class="course-footer"><span>${escapeHtml(getCourse(note.courseId)?.title || '')}</span><button class="icon-button" data-action="edit-note" data-id="${note.id}" aria-label="Editar anotação">${icon('edit',15)}</button></div></article>`).join('')}</div>`); }
function renderNotifications() { return appShell('notifications', 'Notificações', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Notificações' }])}<div class="page-heading"><div><h2>Notificações</h2><p>Acompanhe as novidades da sua jornada.</p></div><button class="button secondary" data-action="mark-notifications">Marcar como lidas</button></div><div class="setting-list">${state.notifications.map((item) => `<article class="setting-row"><span class="activity-icon">${icon('bell',16)}</span><div style="flex:1"><strong>${escapeHtml(item.title)}</strong><p>${escapeHtml(item.body)}</p><p>${escapeHtml(item.time)}</p></div>${item.unread ? '<span class="status progress">Nova</span>' : ''}</article>`).join('')}</div>`); }
function renderGrades() { return appShell('grades', 'Notas', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Notas' }])}<div class="page-heading"><div><h2>Notas</h2><p>Veja seu desempenho nas atividades dos cursos.</p></div></div><div class="stats"><div class="stat"><strong>8,9</strong><span>Média geral</span></div><div class="stat"><strong>12</strong><span>Atividades concluídas</span></div><div class="stat"><strong>3</strong><span>Cursos acompanhados</span></div></div><div class="card table-card"><table><thead><tr><th>Curso</th><th>Atividade</th><th>Nota</th><th>Status</th></tr></thead><tbody>${state.grades.map((grade) => `<tr><td>${escapeHtml(getCourse(grade.courseId)?.title || '')}</td><td>${escapeHtml(grade.activity)}</td><td><strong>${escapeHtml(grade.score)}</strong></td><td><span class="status ${grade.status === 'Pendente' ? 'pending' : 'done'}">${escapeHtml(grade.status)}</span></td></tr>`).join('')}</tbody></table></div>`); }
function renderProfile() { return appShell('profile', 'Perfil', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Perfil' }])}<div class="profile-banner"><span class="avatar">${state.user.avatar}</span><div><h2>${escapeHtml(state.user.name)}</h2><p>${escapeHtml(state.user.role)} · ${escapeHtml(state.user.company)}</p></div><button class="button secondary" style="margin-left:auto;position:relative;z-index:1" data-action="edit-profile">Editar perfil</button></div><div class="section-heading"><h3>Informações pessoais</h3></div><section class="card form-card"><div class="form-grid"><div class="field"><label>Nome completo</label><input value="${escapeHtml(state.user.name)}" readonly /></div><div class="field"><label>E-mail</label><input value="${escapeHtml(state.user.email)}" readonly /></div><div class="field"><label>CPF</label><input value="${escapeHtml(state.user.cpf)}" readonly /></div><div class="field"><label>Telefone</label><input value="${escapeHtml(state.user.phone)}" readonly /></div></div></section><div class="section-heading"><h3>Cursos recentes</h3></div><div class="card-grid two">${state.courses.filter((course) => course.status === 'done' || course.status === 'progress').slice(0,2).map(courseCard).join('')}</div>`); }
function renderSettings() { return appShell('settings', 'Preferências', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Preferências' }])}<div class="page-heading"><div><h2>Preferências</h2><p>Personalize a forma como você usa a plataforma.</p></div></div><section class="setting-list"><div class="setting-row"><div><strong>Notificações por e-mail</strong><p>Receba lembretes e novidades dos seus cursos.</p></div><button class="switch ${state.preferences.emailNotifications ? 'on' : ''}" data-action="toggle-email" aria-label="Alternar notificações"></button></div><div class="setting-row"><div><strong>Idioma</strong><p>Idioma usado nos textos da plataforma.</p></div><select data-action="language"><option ${state.preferences.language.startsWith('Português') ? 'selected' : ''}>Português (Brasil)</option><option ${state.preferences.language === 'English' ? 'selected' : ''}>English</option></select></div><div class="setting-row"><div><strong>Resumo de e-mails</strong><p>Escolha como deseja receber mensagens dos fóruns.</p></div><select data-action="digest"><option ${state.preferences.digest === 'Sem resumo' ? 'selected' : ''}>Sem resumo</option><option ${state.preferences.digest === 'Completo' ? 'selected' : ''}>Completo</option><option ${state.preferences.digest === 'Assunto' ? 'selected' : ''}>Assunto</option></select></div></section>`); }
function renderHelp() { const results = ['Como iniciar um curso?', 'Como emitir meu certificado?', 'Como alterar meus dados pessoais?', 'Como acompanhar minhas notas?'].filter((item) => item.toLowerCase().includes(ui.helpSearch.toLowerCase())); return appShell('help', 'Central de ajuda', `${breadcrumbs([{ label: 'Início', route: 'home' }, { label: 'Central de ajuda' }])}<div class="page-heading"><div><h2>Como podemos ajudar?</h2><p>Encontre respostas para as dúvidas mais comuns.</p></div></div><div class="card" style="padding:28px;margin-bottom:20px;background:#f7fbfe"><label class="search-field" style="width:100%"><span class="icon">${icon('search',16)}</span><input type="search" value="${escapeHtml(ui.helpSearch)}" placeholder="Buscar por tópicos" data-action="help-search" /></label></div>${results.length ? `<div class="setting-list">${results.map((item) => `<button class="setting-row" data-action="help-article"><span style="text-align:left"><strong>${escapeHtml(item)}</strong><p>Veja o passo a passo para encontrar a resposta.</p></span>${icon('chevron',16)}</button>`).join('')}</div>` : `<div class="empty">${icon('help',34)}<strong>Não encontramos este tópico</strong><p>Tente usar outros termos ou fale conosco.</p><button class="button primary" data-action="contact">Fale conosco</button></div>`}`); }

function showModal(type, payload = {}) { ui.modal = { type, ...payload }; render(); }
function modalMarkup() { if (!ui.modal) return ''; const type = ui.modal.type; if (type === 'forgot') return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onclick="event.stopPropagation()"><div class="modal-header"><h2 id="modal-title">Esqueceu a senha?</h2><button class="close" data-action="close-modal" aria-label="Fechar">${icon('close',16)}</button></div><p class="muted">Insira seu e-mail para receber um link de recuperação.</p><div class="field" style="margin-top:18px"><label for="recover-email">E-mail</label><input id="recover-email" type="email" placeholder="nome@empresa.com.br" /></div><div class="modal-footer"><button class="button ghost" data-action="close-modal">Cancelar</button><button class="button primary" data-action="send-recovery">Enviar link</button></div></section></div>`; if (type === 'contact') return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onclick="event.stopPropagation()"><div class="modal-header"><h2 id="modal-title">Fale conosco</h2><button class="close" data-action="close-modal" aria-label="Fechar">${icon('close',16)}</button></div><p class="muted">Envie sua dúvida e nossa equipe responderá por e-mail.</p><div class="form-grid" style="margin-top:18px"><div class="field full"><label for="contact-subject">Assunto</label><input id="contact-subject" placeholder="Como podemos ajudar?" /></div><div class="field full"><label for="contact-message">Mensagem</label><textarea id="contact-message" placeholder="Descreva sua dúvida..."></textarea></div></div><div class="modal-footer"><button class="button ghost" data-action="close-modal">Cancelar</button><button class="button primary" data-action="send-contact">Enviar mensagem</button></div></section></div>`; if (type === 'event') { const event = state.events.find((item) => item.id === ui.modal.id); return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" onclick="event.stopPropagation()"><div class="modal-header"><h2>${escapeHtml(event?.title || 'Evento')}</h2><button class="close" data-action="close-modal" aria-label="Fechar">${icon('close',16)}</button></div><p class="muted">${escapeHtml(event?.type || '')} · ${escapeHtml(event?.time || '')}</p><p style="line-height:1.6">Este evento está relacionado ao curso <strong>${escapeHtml(getCourse(event?.courseId)?.title || '')}</strong>. Acesse o conteúdo para continuar sua preparação.</p><div class="modal-footer"><button class="button ghost" data-action="close-modal">Fechar</button><button class="button primary" data-route="course" data-id="${event?.courseId}">Acessar curso</button></div></section></div>`; } if (type === 'new-note') return `<div class="modal-backdrop" data-action="close-modal"><section class="modal" role="dialog" aria-modal="true" onclick="event.stopPropagation()"><div class="modal-header"><h2>Nova anotação</h2><button class="close" data-action="close-modal" aria-label="Fechar">${icon('close',16)}</button></div><div class="field"><label for="note-title">Título</label><input id="note-title" placeholder="Ex.: Pontos importantes" /></div><div class="field" style="margin-top:15px"><label for="note-body">Anotação</label><textarea id="note-body" placeholder="Escreva uma anotação..."></textarea></div><div class="modal-footer"><button class="button ghost" data-action="close-modal">Cancelar</button><button class="button primary" data-action="save-note">Salvar</button></div></section></div>`; return ''; }

function parseRoute() { const raw = (window.location.hash || '#home').slice(1); const [name, query = ''] = raw.split('?'); return { name: name || 'home', params: Object.fromEntries(new URLSearchParams(query)) }; }
function render() {
  const route = parseRoute();
  if (!isSessionActive() && route.name !== 'login') {
    window.location.hash = '#login';
    renderLogin();
    return;
  }
  if (route.name === 'login') {
    renderLogin();
    return;
  }

  let view;
  if (route.name === 'home') view = renderHome();
  else if (route.name === 'courses') view = renderCourses();
  else if (route.name === 'course') view = renderCourse(route.params.id);
  else if (route.name === 'lesson') view = renderLesson(route.params.course, route.params.lesson);
  else if (route.name === 'trails') view = renderTrails();
  else if (route.name === 'trail') view = renderTrail(route.params.id);
  else if (route.name === 'catalog') view = renderCatalog();
  else if (route.name === 'showcase') view = renderCatalog(true);
  else if (route.name === 'calendar') view = renderCalendar();
  else if (route.name === 'certificates') view = renderCertificates();
  else if (route.name === 'certificate') view = renderCertificate(route.params.id);
  else if (route.name === 'grades') view = renderGrades();
  else if (route.name === 'messages') view = renderMessages();
  else if (route.name === 'notes') view = renderNotes();
  else if (route.name === 'notifications') view = renderNotifications();
  else if (route.name === 'profile') view = renderProfile();
  else if (route.name === 'settings') view = renderSettings();
  else if (route.name === 'help') view = renderHelp();
  else view = renderHome();

  app.innerHTML = view;
  if (ui.modal) app.insertAdjacentHTML('beforeend', modalMarkup());
}
function navigate(route, params = {}) { const query = new URLSearchParams(params).toString(); ui.sidebarOpen = false; ui.notificationsOpen = false; ui.modal = null; window.location.hash = `#${route}${query ? `?${query}` : ''}`; }
function showToast(title, message, type = 'success') { ui.toast = { title, message, type }; const region = document.querySelector('#toast-region'); if (!region) return; const toast = document.createElement('div'); toast.className = `toast ${type}`; toast.innerHTML = `${icon(type === 'error' ? 'help' : 'check',18)}<p><strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span></p>`; region.appendChild(toast); setTimeout(() => toast.remove(), 3600); }

window.addEventListener('hashchange', render);
document.addEventListener('click', (event) => {
  const action = event.target.closest('[data-action]');
  if (!action) {
    const target = event.target.closest('[data-route]');
    if (target) { event.preventDefault(); const route = target.dataset.route; if (route === 'lesson') navigate('lesson', { course: target.dataset.course, lesson: target.dataset.lesson }); else if (route === 'course' || route === 'trail' || route === 'certificate') navigate(route, { id: target.dataset.id }); else navigate(route); return; }
    const passiveButton = event.target.closest('button');
    if (passiveButton && !passiveButton.disabled) showToast('Ação simulada', 'Esta interação está disponível para o teste de usabilidade.');
    return;
  }
  const name = action.dataset.action;
  if (name === 'toggle-sidebar') { ui.sidebarOpen = !ui.sidebarOpen; render(); }
  if (name === 'toggle-notifications') { ui.notificationsOpen = !ui.notificationsOpen; render(); }
  if (name === 'toggle-password') { const input = document.querySelector('#password'); input.type = input.type === 'password' ? 'text' : 'password'; }
  if (name === 'forgot-password') showModal('forgot');
  if (name === 'contact') showModal('contact');
  if (name === 'close-modal') { ui.modal = null; render(); }
  if (name === 'course-filter') { ui.courseStatus = action.dataset.value; render(); }
  if (name === 'calendar-mode') { ui.calendarMode = action.dataset.value; render(); }
  if (name === 'select-message') { ui.messageId = action.dataset.id; render(); }
  if (name === 'toggle-dark') { state.preferences.darkMode = !state.preferences.darkMode; saveState(); document.documentElement.classList.toggle('dark-mode', state.preferences.darkMode); render(); }
  if (name === 'toggle-email') { state.preferences.emailNotifications = !state.preferences.emailNotifications; saveState(); render(); }
  if (name === 'mark-notifications') { state.notifications.forEach((item) => { item.unread = false; }); saveState(); ui.notificationsOpen = false; showToast('Tudo certo', 'Suas notificações foram marcadas como lidas.'); render(); }
  if (name === 'complete-lesson' || name === 'submit-activity') { const course = getCourse(action.dataset.course); const lesson = getLesson(course, action.dataset.lesson); if (course && lesson && !lesson.done) { lesson.done = true; const lessons = allLessons(course); course.progress = lessons.every((item) => item.done) ? 100 : Math.min(99, course.progress + Math.ceil(100 / lessons.length)); course.status = course.progress >= 100 ? 'done' : 'progress'; saveState(); showToast('Progresso atualizado', lesson.type === 'task' ? 'Atividade enviada e aula concluída.' : 'Aula marcada como concluída.'); render(); } }
  if (name === 'enroll-course') { const course = getCourse(action.dataset.id); if (course) { course.status = 'progress'; course.progress = Math.max(5, course.progress); saveState(); showToast('Inscrição realizada', 'O curso foi adicionado aos seus cursos.'); navigate('course', { id: course.id }); } }
  if (name === 'open-certificate') { const certificate = state.certificates.find((item) => item.title === getCourse(action.dataset.course)?.title); if (certificate) navigate('certificate', { id: certificate.id }); else showToast('Certificado indisponível', 'Conclua o curso para liberar o certificado.', 'error'); }
  if (name === 'play-video') showToast('Conteúdo simulado', 'O player foi iniciado para o teste de usabilidade.');
  if (name === 'download-material') showToast('Material pronto', 'O download do material foi simulado.');
  if (name === 'download-certificate') { const certificate = state.certificates.find((item) => item.id === action.dataset.id); const link = document.createElement('a'); link.href = `data:text/plain;charset=utf-8,Certificado ${encodeURIComponent(certificate?.title || '')} - ${encodeURIComponent(state.user.name)}`; link.download = 'certificado-ava-ned.txt'; link.click(); showToast('Download iniciado', 'O certificado foi preparado para download.'); }
  if (name === 'share-certificate') { navigator.clipboard?.writeText(window.location.href); showToast('Link copiado', 'O link do certificado foi copiado para a área de transferência.'); }
  if (name === 'recommendation') showToast('Preferências salvas', 'Vamos usar seus interesses para personalizar as recomendações.');
  if (name === 'show-event') showModal('event', { id: action.dataset.id });
  if (name === 'new-event') showToast('Evento simulado', 'A criação de eventos está disponível para o teste.');
  if (name === 'new-message') showToast('Nova mensagem', 'Escolha um contato para iniciar uma conversa.');
  if (name === 'new-note') showModal('new-note');
  if (name === 'save-note') { const title = document.querySelector('#note-title')?.value.trim(); const body = document.querySelector('#note-body')?.value.trim(); if (title && body) { state.notes.unshift({ id: `note-${Date.now()}`, title, body, courseId: 'ux' }); saveState(); ui.modal = null; showToast('Anotação salva', 'Sua anotação foi adicionada.'); render(); } }
  if (name === 'edit-profile') showToast('Edição de perfil', 'Os campos de perfil estão prontos para edição.');
  if (name === 'help-article') showToast('Artigo aberto', 'Este artigo foi preparado para orientar sua jornada.');
  if (name === 'send-recovery') { ui.modal = null; render(); showToast('Link enviado', 'Verifique seu e-mail para redefinir sua senha.'); }
  if (name === 'send-contact') { ui.modal = null; render(); showToast('Mensagem enviada', 'Nossa equipe responderá em breve.'); }
});
document.addEventListener('submit', (event) => {
  if (event.target.id === 'login-form') {
    event.preventDefault();
    const form = new FormData(event.target);
    const cpf = String(form.get('cpf') || '').replace(/\D/g, '');
    const password = String(form.get('password') || '');
    const error = document.querySelector('#login-error');
    const submit = document.querySelector('#login-submit');
    const isValid = cpf === '123' && password === 'teste';

    if (!isValid) {
      submit.disabled = false;
      submit.innerHTML = `Entrar ${icon('arrow',17)}`;
      error.textContent = 'CPF ou senha inválidos. Tente novamente com os dados de teste.';
      error.classList.add('show');
      return;
    }

    error.classList.remove('show');
    submit.disabled = true;
    submit.textContent = 'Entrando...';
    event.target.querySelectorAll('input, button').forEach((field) => { field.disabled = true; });

    window.setTimeout(() => {
      try {
        setSession(true);
        if (!isSessionActive()) throw new Error('Sessão não foi persistida');
        app.innerHTML = renderHome();
        window.history.replaceState({}, '', `${window.location.pathname}#home`);
      } catch (sessionError) {
        submit.disabled = false;
        submit.innerHTML = `Entrar ${icon('arrow',17)}`;
        event.target.querySelectorAll('input, button').forEach((field) => { field.disabled = false; });
        error.textContent = 'Não foi possível iniciar sua sessão. Tente novamente.';
        error.classList.add('show');
        console.error('Falha ao iniciar sessão simulada:', sessionError);
      }
    }, 450);
    return;
  }

  if (event.target.dataset.form === 'message') {
    event.preventDefault();
    const input = event.target.querySelector('input');
    if (input.value.trim()) {
      const current = state.messages.find((item) => item.id === ui.messageId);
      current.messages.push({ text: input.value.trim(), mine: true });
      current.preview = input.value.trim();
      input.value = '';
      saveState();
      render();
    }
  }
});
document.addEventListener('input', (event) => { const action = event.target.dataset.action; if (action === 'course-search') { ui.courseSearch = event.target.value; render(); } if (action === 'catalog-search') { ui.catalogSearch = event.target.value; render(); } if (action === 'trail-search') { ui.trailSearch = event.target.value; render(); } if (action === 'help-search') { ui.helpSearch = event.target.value; render(); } });
document.addEventListener('change', (event) => { const action = event.target.dataset.action; if (action === 'language') { state.preferences.language = event.target.value; saveState(); showToast('Preferência atualizada', 'Idioma salvo.'); } if (action === 'digest') { state.preferences.digest = event.target.value; saveState(); showToast('Preferência atualizada', 'Resumo de e-mails salvo.'); } });

document.documentElement.classList.toggle('dark-mode', state.preferences.darkMode);
render();
