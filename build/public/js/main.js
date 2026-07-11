(function () {
  "use strict";

  const page = document.body.dataset.page;
  const PHASE_PAGES = ["empati", "ideasi", "prototipe", "pengujian", "refleksi"];

  // ---- Journey progress (nav dots) ----
  async function markVisited() {
    if (!PHASE_PAGES.includes(page)) return null;
    try {
      const res = await fetch(`/api/progress/${page}`, { method: "POST" });
      if (!res.ok) throw new Error("progress post failed");
      return await res.json();
    } catch (err) {
      console.error("Could not save journey progress:", err);
      return null;
    }
  }

  async function fetchProgress() {
    try {
      const res = await fetch("/api/progress");
      if (!res.ok) throw new Error("progress fetch failed");
      return await res.json();
    } catch (err) {
      console.error("Could not load journey progress:", err);
      return null;
    }
  }

  function renderProgressDots(data) {
    const container = document.querySelector("[data-progress-dots]");
    if (!container || !data) return;
    const visited = new Set(data.visited || []);
    container.innerHTML = "";
    data.phases.forEach((phase) => {
      const dot = document.createElement("span");
      const isDone = visited.has(phase.key);
      const isCurrent = phase.key === page;
      dot.title = `${phase.label}${isDone ? " \u2014 selesai dilihat" : ""}`;
      dot.className =
        "w-2 h-2 rounded-full transition-all " +
        (isDone
          ? "bg-primary"
          : "bg-white/15 border border-white/20") +
        (isCurrent ? " ring-2 ring-primary/50 ring-offset-2 ring-offset-surface" : "");
      container.appendChild(dot);
    });
  }

  async function initProgress() {
    await markVisited();
    const data = await fetchProgress();
    renderProgressDots(data);
  }

  // ---- Landing page: dynamic "5 Fakta" cards sourced from /api/facts ----
  const VALUE_STYLE_CLASSES = {
    metric: "font-metric-display text-metric-display",
    headline: "font-metric-display text-headline-lg",
  };

  function factCardHTML(fact) {
    const valueClass = VALUE_STYLE_CLASSES[fact.valueStyle] || VALUE_STYLE_CLASSES.metric;
    return `
      <div class="p-8 bg-surface-muted border border-white/5 rounded-lg space-y-4 hover:border-primary/30 transition-all pb-16 h-full">
        <span class="${valueClass} ${fact.valueColor} block">${fact.value}</span>
        <p class="font-label-caps text-label-caps text-on-surface-variant">${fact.label}</p>
        <p class="text-sm opacity-60">${fact.description}</p>
        <p class="text-xs text-on-surface-variant opacity-60 mt-2 italic">${fact.source}</p>
      </div>`;
  }

  async function initFacts() {
    const grid = document.getElementById("facts-grid");
    if (!grid) return;
    try {
      const res = await fetch("/api/facts");
      if (!res.ok) throw new Error("facts fetch failed");
      const { facts } = await res.json();
      if (Array.isArray(facts) && facts.length) {
        grid.innerHTML = facts.map(factCardHTML).join("");
      }
    } catch (err) {
      // Keep the statically rendered facts already in the page markup.
      console.error("Could not load live facts from backend, showing defaults:", err);
    }
  }

  // ---- Pengujian page: YouTube embed sourced from /api/config ----
  async function initVideo() {
    const wrap = document.getElementById("yt-video-wrap");
    if (!wrap) return;
    try {
      const res = await fetch("/api/config");
      if (!res.ok) throw new Error("config fetch failed");
      const config = await res.json();
      const video = config.video;
      if (!video || !video.youtubeId) throw new Error("no video configured");

      const iframe = document.createElement("iframe");
      iframe.className = "w-full h-full";
      iframe.src = `https://www.youtube.com/embed/${video.youtubeId}`;
      iframe.title = video.title || "YouTube video player";
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute(
        "allow",
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      );
      iframe.setAttribute("referrerpolicy", "strict-origin-when-cross-origin");
      iframe.setAttribute("allowfullscreen", "");

      wrap.innerHTML = "";
      wrap.appendChild(iframe);

      const captionEl = document.querySelector("#yt-video-caption p");
      if (captionEl && video.credit) {
        captionEl.textContent = `${video.title || ""} \u2014 ${video.credit}`.trim();
      }
    } catch (err) {
      wrap.innerHTML =
        '<span class="font-label-caps text-label-caps text-on-surface-variant tracking-widest px-4 text-center">VIDEO TIDAK TERSEDIA SAAT INI</span>';
      console.error("Could not load video config from backend:", err);
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    initProgress();
    initFacts();
    initVideo();
  });
})();
