const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 3000;

const DATA_DIR = path.join(__dirname, "data");
const PAGES_DIR = path.join(__dirname, "public", "pages");
const PROGRESS_FILE = path.join(DATA_DIR, "progress-store.json");

const FACTS = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "facts.json"), "utf-8"));
const CONFIG = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "config.json"), "utf-8"));
const PHASES = JSON.parse(fs.readFileSync(path.join(DATA_DIR, "phases.json"), "utf-8"));
const PHASE_KEYS = PHASES.map((p) => p.key);

// --- Tiny file-backed store for per-visitor journey progress ---
function loadStore() {
  try {
    return JSON.parse(fs.readFileSync(PROGRESS_FILE, "utf-8"));
  } catch {
    return {};
  }
}
function saveStore(store) {
  fs.writeFileSync(PROGRESS_FILE, JSON.stringify(store, null, 2));
}
let store = loadStore();

app.use(cookieParser());
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Assign every visitor an anonymous id so we can remember which phases
// of the project journey they've already viewed. No personal data involved.
app.use((req, res, next) => {
  let visitorId = req.cookies.visitor_id;
  if (!visitorId) {
    visitorId = crypto.randomUUID();
    res.cookie("visitor_id", visitorId, {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      httpOnly: true,
      sameSite: "lax",
    });
  }
  req.visitorId = visitorId;
  next();
});

// --- Page routes (clean URLs backed by the exported Stitch templates) ---
const pageRoutes = {
  "/": "index.html",
  "/empati": "empati.html",
  "/ideasi": "ideasi.html",
  "/prototipe": "prototipe.html",
  "/pengujian": "pengujian.html",
  "/refleksi": "refleksi.html",
};

Object.entries(pageRoutes).forEach(([route, file]) => {
  app.get(route, (req, res) => {
    res.sendFile(path.join(PAGES_DIR, file));
  });
});

// --- API: 5 Fakta data that powers the landing page's facts section ---
app.get("/api/facts", (req, res) => {
  res.json({ facts: FACTS });
});

// --- API: site config, including which YouTube video is embedded on
//     the Pengujian (testing) page ---
app.get("/api/config", (req, res) => {
  res.json(CONFIG);
});

// --- API: project journey progress, tracked per anonymous visitor ---
app.get("/api/progress", (req, res) => {
  const visited = store[req.visitorId] || [];
  res.json({ phases: PHASES, visited });
});

app.post("/api/progress/:phase", (req, res) => {
  const { phase } = req.params;
  if (!PHASE_KEYS.includes(phase)) {
    return res.status(400).json({ error: "Unknown phase" });
  }
  const visited = new Set(store[req.visitorId] || []);
  visited.add(phase);
  store[req.visitorId] = Array.from(visited);
  saveStore(store);
  res.json({ phases: PHASES, visited: store[req.visitorId] });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(PAGES_DIR, "index.html"));
});

app.listen(PORT, () => {
  console.log(`SDG 14.3 Indonesia server running at http://localhost:${PORT}`);
});
