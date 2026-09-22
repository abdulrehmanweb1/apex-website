document.addEventListener("DOMContentLoaded", () => {
    const l = document.querySelector(".site-loader"); setTimeout(() => l?.classList.add("done"), 450);
    const current = location.pathname.split("/").pop() || "index.html"; const map = { "index.html": "home", "projects.html": "projects", "services.html": "services", "about.html": "about", "contact.html": "contact" };
    document.querySelectorAll(".nav a[data-page]").forEach(a => { if (a.dataset.page === map[current]) a.classList.add("active") });
    const t = document.querySelector(".menu-toggle"), n = document.querySelector(".nav"); t?.addEventListener("click", () => { const o = n.classList.toggle("open"); t.setAttribute("aria-expanded", String(o)) });
    document.querySelectorAll(".nav a").forEach(a => a.addEventListener("click", () => n.classList.remove("open")));
    document.querySelectorAll(".filter").forEach(b => b.addEventListener("click", () => { document.querySelectorAll(".filter").forEach(x => x.classList.remove("active")); b.classList.add("active"); const f = b.dataset.filter; document.querySelectorAll(".project-item").forEach(c => c.classList.toggle("hidden", f !== "all" && c.dataset.category !== f)) }));
    const form = document.querySelector("#contactForm"); form?.addEventListener("submit", e => { e.preventDefault(); const d = new FormData(form); const s = encodeURIComponent("New website project — " + d.get("type")); const body = encodeURIComponent("Name: " + d.get("name") + "\nEmail: " + d.get("email") + "\nProject type: " + d.get("type") + "\n\nMessage:\n" + d.get("message")); location.href = "mailto:abdulrehman.devweb@gmail.com?subject=" + s + "&body=" + body });
    const y = document.querySelector("#year"); if (y) y.textContent = new Date().getFullYear();
});
