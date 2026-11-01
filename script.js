document.addEventListener("DOMContentLoaded", () => {
    const year = document.querySelector("#year");
    if (year) year.textContent = new Date().getFullYear();

    const menuButton = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".main-nav");
    if (menuButton && nav) {
        menuButton.addEventListener("click", () => {
            const isOpen = nav.classList.toggle("is-open");
            menuButton.setAttribute("aria-expanded", String(isOpen));
        });
        nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
            nav.classList.remove("is-open");
            menuButton.setAttribute("aria-expanded", "false");
        }));
    }

    const grid = document.querySelector("#episode-grid");
    if (grid) renderCatalogue();

    const detail = document.querySelector("#episode-detail");
    if (detail) renderEpisodeDetail(detail);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
});

function episodeCard(episode) {
    const cover = episode.cover;
    return `
        <article class="episode-card reveal is-visible">
            <a class="episode-cover" href="episode.html?ep=${encodeURIComponent(episode.slug)}">
                <img src="${cover}" alt="Portada del episodio ${episode.number}" onerror="this.parentElement.classList.add('cover-fallback')">
                <span class="cover-number">EP. ${episode.number}</span>
                <span class="cover-prism">△</span>
                <span class="cover-open">↗</span>
            </a>
            <div class="episode-meta"><span>${episode.category}</span><span>${episode.duration || "PRISMA"}</span></div>
            <h4><a href="episode.html?ep=${encodeURIComponent(episode.slug)}">${episode.title}</a></h4>
            <p>${episode.description}</p>
            <a class="card-link" href="episode.html?ep=${encodeURIComponent(episode.slug)}">Descubrir episodio <span>→</span></a>
        </article>`;
}

function renderCatalogue() {
    const grid = document.querySelector("#episode-grid");
    const filters = document.querySelector("#category-filters");
    const featuredContainer = document.querySelector("#featured-episode");
    const categories = [...new Set(episodes.map(ep => ep.category))];

    if (filters) {
        filters.innerHTML = `
            <button class="filter-button active" type="button" data-category="Todos">Todos</button>
            <select class="filter-select" aria-label="Filtrar per categoria">
                <option value="" selected>Categoria</option>
                ${categories.map(category => `<option value="${category}">${category}</option>`).join("")}
            </select>`;
        const allButton = filters.querySelector("button[data-category='Todos']");
        const categorySelect = filters.querySelector(".filter-select");
        allButton.addEventListener("click", () => {
            categorySelect.value = "";
            categorySelect.classList.remove("active");
            allButton.classList.add("active");
            renderCards("Todos");
        });
        categorySelect.addEventListener("change", () => {
            allButton.classList.toggle("active", !categorySelect.value);
            categorySelect.classList.toggle("active", Boolean(categorySelect.value));
            renderCards(categorySelect.value || "Todos");
        });
    }

    const featured = episodes.find(ep => ep.featured) || episodes[0];
    if (featuredContainer && featured) {
        featuredContainer.innerHTML = `
            <a class="featured-cover" href="episode.html?ep=${encodeURIComponent(featured.slug)}">
                <img src="${featured.cover}" alt="Portada del episodio ${featured.number}" onerror="this.parentElement.classList.add('cover-fallback')">
                <span class="featured-cover-number">EPISODIO ${featured.number}</span><span class="featured-cover-mark">△</span>
            </a>
            <div class="featured-copy">
                <div class="eyebrow"><span class="eyebrow-line"></span> EPISODIO DESTACADO · ${featured.category.toUpperCase()}</div>
                <h3>${featured.title}</h3><p>${featured.description}</p>
                <a class="button button-primary" href="episode.html?ep=${encodeURIComponent(featured.slug)}">Explorar episodio <span>↗</span></a>
            </div>`;
    }
    renderCards("Todos");
}

function renderCards(category) {
    const grid = document.querySelector("#episode-grid");
    if (!grid) return;
    const filtered = episodes.filter(ep => category === "Todos" || ep.category === category);
    grid.innerHTML = filtered.length ? filtered.map(episodeCard).join("") : "<p class='empty-state'>Todavía no hay episodios en esta categoría.</p>";
}

function renderEpisodeDetail(container) {
    const params = new URLSearchParams(window.location.search);
    const episode = episodes.find(ep => ep.slug === params.get("ep"));
    if (!episode) {
        container.innerHTML = `<section class="not-found"><span class="eyebrow">404 · EPISODIO NO ENCONTRADO</span><h1>Esta página aún<br><em>no existe.</em></h1><a class="button button-primary" href="index.html#episodios">Volver a episodios</a></section>`;
        return;
    }

    document.title = `${episode.title} — PRISMA`;
    const sources = episode.sources.length
        ? `<ul class="source-list">${episode.sources.map(source => `<li><a href="${source.url}" target="_blank" rel="noopener">${source.title} ↗</a>${source.note ? `<small>${source.note}</small>` : ""}</li>`).join("")}</ul>`
        : `<p class="pending-note">Las fuentes consultadas se añadirán aquí.</p>`;
    const transcript = episode.transcript
        ? `<div class="transcript-text">${episode.transcript}</div>`
        : `<p class="pending-note">La transcripción estará disponible próximamente.</p>`;
    const spotify = episode.spotifyUrl
        ? `<a class="button button-primary" href="${episode.spotifyUrl}" target="_blank" rel="noopener">Escuchar en Spotify <span>↗</span></a>`
        : `<span class="button button-disabled" aria-disabled="true">Enlace de Spotify pendiente</span>`;

    container.innerHTML = `
        <div class="detail-top"><a class="back-link" href="index.html#episodios">← Volver al catálogo</a><span class="detail-index">PRISMA / EP. ${episode.number}</span></div>
        <section class="detail-hero">
            <div class="detail-cover"><img src="${episode.cover}" alt="Portada del episodio ${episode.number}" onerror="this.parentElement.classList.add('cover-fallback')"><span>EP. ${episode.number}</span><b>△</b></div>
            <div class="detail-heading"><div class="eyebrow"><span class="eyebrow-line"></span> ${episode.category.toUpperCase()} ${episode.date ? "· " + episode.date : ""}</div>
                <h1>${episode.title}</h1><p>${episode.description}</p><div class="detail-actions">${spotify}</div>
                <div class="detail-facts"><span>EPISODIO ${episode.number}</span>${episode.duration ? `<span>${episode.duration}</span>` : ""}<span>PRISMA · TODO ESTÁ CONECTADO</span></div>
            </div>
        </section>
        <section class="detail-content">
            <article class="detail-block"><div class="eyebrow">01 / CONTENIDO</div><h2>Sobre este episodio</h2><p>${episode.description}</p></article>
            <article class="detail-block"><div class="eyebrow">02 / DOCUMENTACIÓN</div><h2>Fuentes y referencias</h2>${sources}</article>
            <article class="detail-block transcript-block"><div class="eyebrow">03 / TEXTO</div><h2>Transcripción</h2>${transcript}</article>
        </section>
        <section class="detail-next"><span class="eyebrow">SIGUE EXPLORANDO</span><h2>Hay más perspectivas<br><em>por descubrir.</em></h2><a class="text-link" href="index.html#episodios">Volver a todos los episodios →</a></section>`;
}