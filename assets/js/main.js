/* =========================================================================
   main.js — rendering, i18n, theme, animations
   ========================================================================= */
(function () {
  "use strict";

  const $  = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => Array.from(r.querySelectorAll(s));
  const htmlEl = document.documentElement;

  let lang  = localStorage.getItem("lang")  || "en";
  let theme = localStorage.getItem("theme") || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  /* bold markdown -> <b>, with self-name highlight + equal-contrib star */
  function fmt(str) {
    if (!str) return "";
    return str
      .replace(/\*\*Tianchi Liu\*\*\*/g, '<span class="me">Tianchi Liu</span><sup class="eq">*</sup>')
      .replace(/\*\*Tianchi Liu\*\*/g, '<span class="me">Tianchi Liu</span>')
      .replace(/\*\*(.+?)\*\*/g, "<b>$1</b>")
      .replace(/(\w)\*/g, '$1<sup class="eq">*</sup>');
  }
  const t = (obj) => (obj ? obj[lang] : "");

  /* author role */
  function roleOf(p) {
    const a = p.authors || "";
    const cofirst = /\*\*Tianchi Liu\*\*\*/.test(a);
    const first   = a.startsWith("**Tianchi Liu**") && !cofirst;
    return { first, cofirst, corr: !!p.corr };
  }

  /* ---------------- THEME / LANG ---------------- */
  function applyTheme() { htmlEl.setAttribute("data-theme", theme); }
  function toggleTheme() { theme = theme === "dark" ? "light" : "dark"; localStorage.setItem("theme", theme); applyTheme(); }
  function applyLangClass() { htmlEl.classList.toggle("lang-zh", lang === "zh"); htmlEl.lang = lang === "zh" ? "zh" : "en"; }
  function toggleLang() { lang = lang === "en" ? "zh" : "en"; localStorage.setItem("lang", lang); applyLangClass(); renderAll(); }

  function applyI18n() {
    $$("[data-i18n]").forEach((el) => {
      const path = el.getAttribute("data-i18n");
      if (path === "brand") { el.textContent = "Tianchi Liu"; return; }
      let v = I18N; path.split(".").forEach((p) => (v = v && v[p]));
      if (v && v[lang] != null) el.textContent = v[lang];
    });
  }

  /* ---------------- BADGES / TAGS ---------------- */
  function venueBadge(key) {
    const v = VENUES[key]; if (!v) return "";
    const cls = v.emphasis ? "venue-emph" : "venue-plain";
    return `<span class="badge ${cls}">${v.name}</span>`;
  }
  /* CCF / CAS rank — shown only in Chinese, on its own line under the name */
  function rankLine(key) {
    const v = VENUES[key];
    if (!v || lang !== "zh" || !v.rank) return "";
    return `<span class="rank-line">${v.rank}</span>`;
  }
  /* venue name + (zh) rank stacked vertically */
  function venueBlock(key) {
    return `<span class="venue-wrap">${venueBadge(key)}${rankLine(key)}</span>`;
  }
  const taskTags = (keys) => (keys || []).map((k) => `<span class="tag task">${t(TASKS[k])}</span>`).join("");
  function metaTags(p) {
    let h = "";
    if (p.oral)   h += `<span class="tag oral">${I18N.misc.oral[lang]}</span>`;
    if (p.award)  h += `<span class="tag award">🏆 ${p.award}</span>`;
    if (p.team)   h += `<span class="tag team">${p.team}</span>`;
    if (p.note)   h += `<span class="tag note">${t(p.note)}</span>`;
    h += taskTags(p.tasks);
    if (p.method) h += `<span class="tag method">${t(p.method)}</span>`;
    return h;
  }
  function links(p) {
    let h = (p.links || []).map((l) => `<a class="link-pill" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join("");
    if (p.stars) h += `<a class="link-pill stars-pill" href="https://github.com/${p.stars}" target="_blank" rel="noopener"><img src="https://img.shields.io/github/stars/${p.stars}?style=social" alt="stars"></a>`;
    return h;
  }

  /* ---------------- HERO ---------------- */
  function renderHero() {
    $("#heroTagline").textContent = t(SITE.tagline);
    $("#heroName").textContent = SITE.name[lang];
    $("#heroNameSub").textContent = SITE.nameSub[lang];
    $("#heroRoles").innerHTML = SITE.roles[lang].map((r) => `<li>${r}</li>`).join("");
    $("#heroBio").innerHTML = BIO[lang];
    $("#heroStats").innerHTML = STATS[lang].map((s) => `
      <div class="stat"${s.id ? ` id="stat-${s.id}"` : ""}>
        <div class="stat-num${s.small ? " sm" : ""}">${s.num}</div>
        <div class="stat-label">${s.label}${s.sub ? `<span class="stat-sub">${s.sub}</span>` : ""}</div>
      </div>`).join("");
    $("#ctaEmail").href = "mailto:" + SITE.email;
    $("#ctaScholar").href = SITE.links.scholar;
    $("#ctaGithub").href = SITE.links.github;
    const sub = $("#heroNameSub");
    sub.style.display = SITE.nameSub[lang] ? "block" : "none";
    $("#footerName").textContent = SITE.footerName[lang];
    $("#footScholar").href = SITE.links.scholar;
    $("#footGithub").href = SITE.links.github;
    $("#footEmail").href = "mailto:" + SITE.email;
  }

  /* ---------------- NEWS ---------------- */
  function renderNews() {
    $("#newsList").innerHTML = NEWS.map((n) => `
      <div class="news-item">
        <div class="news-date">${n.date}</div>
        <div class="news-body"><span class="news-tag ${n.type}">${n.type}</span>${n[lang]}</div>
      </div>`).join("");
  }

  /* ---------------- RESEARCH / EDU / EXP ---------------- */
  function renderResearch() {
    const g = $("#researchGrid"); g.classList.add("stagger");
    g.innerHTML = RESEARCH[lang].map((r) => `
      <div class="research-card"><div class="r-icon">${r.icon}</div><h3>${r.title}</h3><p>${r.desc}</p></div>`).join("");
    $("#eduList").innerHTML = EDUCATION[lang].map((e) => `
      <li><div class="t-period">${e.period}</div><div class="t-role">${e.deg}</div><div class="t-org">${e.org}</div></li>`).join("");
    $("#expList").innerHTML = EXPERIENCE[lang].map((e) => `
      <li><div class="t-period">${e.period}</div><div class="t-role">${e.role}</div><div class="t-org">${e.org}</div></li>`).join("");
  }

  /* ---------------- SELECTED ---------------- */
  function renderSelected() {
    const g = $("#selectedGrid"); g.classList.add("stagger");
    g.innerHTML = PUBLICATIONS.filter((p) => p.featured).map((p) => {
      if (p.placeholder) return `
        <article class="feat-card feat-reserved">
          <div class="reserved-inner">
            <div class="reserved-plus">+</div>
            <div class="reserved-title">${I18N.misc.reserved[lang]}</div>
            <div class="reserved-sub">${I18N.misc.reservedSub[lang]}</div>
          </div>
        </article>`;
      const cite = (p.citations != null)
        ? `<span class="cite-chip" title="${I18N.misc.cited[lang]} (Google Scholar)"><svg viewBox="0 0 24 24" width="13" height="13" aria-label="Google Scholar"><path d="M5.242 13.769L0 9.5 12 0l12 9.5-5.242 4.269C17.548 11.249 14.978 9.5 12 9.5c-2.977 0-5.548 1.748-6.758 4.269zM12 10a7 7 0 1 0 0 14 7 7 0 0 0 0-14z"/></svg><span class="cnum">${p.citations}</span></span>` : "";
      const isImg = (s) => typeof s === "string" && /[./]/.test(s) && !/^[\p{Emoji}]/u.test(s);
      const logoHTML = p.logo ? `<div class="feat-logo">${isImg(p.logo) ? `<img src="${p.logo}" alt="logo">` : p.logo}</div>` : "";
      return `
      <article class="feat-card" data-title="${p.title.replace(/"/g, "&quot;")}">
        <div class="feat-teaser">
          <img src="${p.teaser}" alt="${p.title}" loading="lazy">
          ${logoHTML}
        </div>
        <div class="feat-body">
          <div class="feat-meta-top">
            ${venueBlock(p.venue)}<span class="year-chip">${p.year}</span>
            ${p.oral ? `<span class="tag oral">${I18N.misc.oral[lang]}</span>` : ""}
            ${cite}
          </div>
          <h3 class="feat-title">${p.title}</h3>
          <p class="feat-authors">${fmt(p.authors)}</p>
          <div class="feat-tags">${taskTags(p.tasks)}${p.method ? `<span class="tag method">${t(p.method)}</span>` : ""}</div>
          <div class="feat-links">${links(p)}</div>
        </div>
      </article>`;
    }).join("");
  }

  /* ---------------- ALL PUBLICATIONS (grouped by category) ---------------- */
  let activeRole = "all";
  let activeTopic = "all";
  function pubItemHTML(p, n) {
    return `
      <div class="pub-item">
        <div class="pub-num">${String(n).padStart(2, "0")}</div>
        <div class="pub-venue-col">${venueBlock(p.venue)}<span class="year-chip">${p.year}</span></div>
        <div class="pub-main">
          <div class="pub-title">${p.title}</div>
          <div class="pub-authors">${fmt(p.authors)}</div>
          <div class="pub-meta">${metaTags(p)}</div>
          ${(p.links && p.links.length) || p.stars ? `<div class="feat-links" style="margin-top:11px">${links(p)}</div>` : ""}
        </div>
      </div>`;
  }
  function matchFilter(p) {
    const r = roleOf(p);
    const roleOk = activeRole === "all" || (activeRole === "first" && r.first) || (activeRole === "cofirst" && r.cofirst);
    const topicOk = activeTopic === "all" || p.cat === activeTopic;
    return roleOk && topicOk;
  }
  function renderPubList() {
    let html = "";
    let n = 0;
    CATEGORIES.forEach((cat) => {
      const items = PUBLICATIONS
        .filter((p) => !p.placeholder && p.cat === cat.key && matchFilter(p))
        .sort((a, b) => b.year - a.year);
      if (!items.length) return;
      const rows = items.map((p) => { n++; return pubItemHTML(p, n); }).join("");
      html += `<div class="pub-cat"><h3 class="pub-cat-title">${cat[lang]}</h3><div class="pub-cat-list">${rows}</div></div>`;
    });
    if (n === 0) html = `<div class="pub-empty show">${I18N.role.none[lang]}</div>`;
    $("#pubList").innerHTML = html;
  }
  function renderFilters() {
    const roleBtns = ["all", "first", "cofirst"]
      .map((r) => `<button class="filter-btn ${activeRole === r ? "active" : ""}" data-g="role" data-f="${r}">${I18N.role[r][lang]}</button>`).join("");
    const topicBtns = [`<button class="filter-btn ${activeTopic === "all" ? "active" : ""}" data-g="topic" data-f="all">${I18N.role.all[lang]}</button>`]
      .concat(CATEGORIES.map((c) => `<button class="filter-btn ${activeTopic === c.key ? "active" : ""}" data-g="topic" data-f="${c.key}">${c[lang]}</button>`)).join("");

    $("#pubFilters").innerHTML = `
      <div class="filter-group"><span class="filter-label">${I18N.filter.taskLabel[lang]}</span>${topicBtns}</div>
      <div class="filter-group"><span class="filter-label">${I18N.filter.roleLabel[lang]}</span>${roleBtns}</div>`;

    $$("#pubFilters .filter-btn").forEach((b) =>
      b.addEventListener("click", () => {
        if (b.dataset.g === "role") activeRole = b.dataset.f; else activeTopic = b.dataset.f;
        $$(`#pubFilters .filter-btn[data-g="${b.dataset.g}"]`).forEach((x) => x.classList.toggle("active", x === b));
        renderPubList();
      }));
  }
  function renderPubs() { renderFilters(); renderPubList(); }

  /* ---------------- OPEN SOURCE / AWARDS / SERVICE ---------------- */
  function renderMisc() {
    const g = $("#osGrid"); g.classList.add("stagger");
    g.innerHTML = OPENSOURCE.map((o) => `
      <a class="os-card" href="https://github.com/${o.repo}" target="_blank" rel="noopener">
        <div><div class="os-name">${o.name}</div><div class="os-desc">${o[lang]}</div></div>
        <div class="os-star"><img src="https://img.shields.io/github/stars/${o.repo}?style=social" alt="stars"></div>
      </a>`).join("");
    $("#awardList").innerHTML = AWARDS[lang].map((a) => `<li><span class="a-ico">${a.icon}</span><span>${a.text}</span></li>`).join("");
    $("#serviceRoles").innerHTML = SERVICE.roles[lang].map((r) => `<li>${r}</li>`).join("");
    const chip = (x) => `<span class="tag">${x.n}<span class="ry">${x.y}</span></span>`;
    $("#reviewerJ").innerHTML = SERVICE.reviewerJournal.map(chip).join("");
    $("#reviewerC").innerHTML = SERVICE.reviewerConf.map(chip).join("");
  }

  /* ---------------- LIFE ---------------- */
  function renderLife() {
    const g = $("#hobbyGrid"); g.classList.add("stagger");
    g.innerHTML = HOBBIES[lang].map((h) => `
      <div class="hobby-card"><div class="h-ico">${h.icon}</div><h3>${h.title}</h3><p>${h.desc}</p></div>`).join("");
  }

  let scholarData = null;
  function renderAll() {
    applyI18n();
    renderHero(); renderNews(); renderResearch(); renderSelected();
    renderPubs(); renderMisc(); renderLife();
    setupReveal();
    if (scholarData) applyScholar(scholarData);
  }

  /* ---------------- SCROLL REVEAL ---------------- */
  let io;
  function setupReveal() {
    if (io) io.disconnect();
    io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    $$(".reveal, .stagger").forEach((el) => io.observe(el));
  }

  /* ---------------- NAV ---------------- */
  function setupNav() {
    const nav = $("#nav"), prog = $("#scrollProgress");
    const sections = ["news", "research", "selected", "pubs", "life"].map((id) => $("#" + id)).filter(Boolean);
    const linkMap = {};
    $$("#navLinks a").forEach((a) => (linkMap[a.getAttribute("href").slice(1)] = a));
    function onScroll() {
      const y = window.scrollY;
      nav.classList.toggle("scrolled", y > 24);
      const h = document.body.scrollHeight - innerHeight;
      prog.style.width = (h > 0 ? (y / h) * 100 : 0) + "%";
      let cur = "";
      sections.forEach((s) => { if (y >= s.offsetTop - 140) cur = s.id; });
      Object.values(linkMap).forEach((a) => a.classList.remove("active"));
      if (linkMap[cur]) linkMap[cur].classList.add("active");
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    $("#menuToggle").addEventListener("click", () => $("#navLinks").classList.toggle("open"));
    $$("#navLinks a").forEach((a) => a.addEventListener("click", () => $("#navLinks").classList.remove("open")));
  }

  /* ---------------- GOOGLE SCHOLAR LIVE STATS ---------------- */
  const normTitle = (s) => (s || "").toLowerCase().replace(/[^a-z0-9]+/g, "");
  function applyScholar(data) {
    if (!data) return;
    scholarData = data;
    if (data.citedby != null) {
      const el = $("#stat-citedby .stat-num");
      if (el) el.textContent = Number(data.citedby).toLocaleString();
    }
    if (data.hindex != null) {
      const el = $("#stat-hindex .stat-num");
      if (el) el.textContent = data.hindex;
    }
    const map = {};
    Object.values(data.publications || {}).forEach((p) => {
      const title = p && p.bib && p.bib.title;
      if (title) map[normTitle(title)] = p.num_citations || 0;
    });
    $$(".feat-card[data-title]").forEach((card) => {
      const key = normTitle(card.getAttribute("data-title"));
      const hit = map[key] != null ? map[key] : Object.keys(map).find((k) => k.startsWith(key) || key.startsWith(k));
      const val = (map[key] != null) ? map[key] : (typeof hit === "string" ? map[hit] : null);
      const num = card.querySelector(".cite-chip .cnum");
      if (num && val != null) num.textContent = val;
    });
  }
  async function loadScholar() {
    const gs = SITE.scholar; if (!gs) return;
    const urls = [
      `https://cdn.jsdelivr.net/gh/${gs.repo}@${gs.branch}/gs_data.json`,
      `https://raw.githubusercontent.com/${gs.repo}/${gs.branch}/gs_data.json`,
    ];
    for (const url of urls) {
      try {
        const r = await fetch(url, { cache: "no-cache" });
        if (!r.ok) continue;
        applyScholar(await r.json());
        return;
      } catch (e) { /* try next */ }
    }
  }

  /* ---------------- INIT ---------------- */
  applyTheme(); applyLangClass();
  renderAll();
  setupNav();
  loadScholar();
  $("#langToggle").addEventListener("click", toggleLang);
  $("#themeToggle").addEventListener("click", toggleTheme);
})();
