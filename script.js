// script.js — Light the Season: Christmas Trail Experience
// Wires together ACTS + SCENES from scenes.js, builds DOM, drives overlays + progress nav

// ============================================================
// Overlay System — Canvas-based animated effects
// Each class follows the same interface: init() → start() → stop() → destroy()
// ============================================================

class OverlayBase {
  constructor(canvas) {
    this.canvas = canvas;
    this.ctx    = canvas.getContext('2d');
    this.raf    = null;
    this.active = false;
    this._onResize = () => this._resize();
    window.addEventListener('resize', this._onResize);
    this._resize();
  }

  _resize() {
    this.canvas.width  = this.canvas.offsetWidth  || this.canvas.clientWidth  || 1;
    this.canvas.height = this.canvas.offsetHeight || this.canvas.clientHeight || 1;
    this.w = this.canvas.width;
    this.h = this.canvas.height;
    if (typeof this.onResize === 'function') this.onResize();
  }

  init()  {}

  start() {
    if (this.active) return;
    this.active = true;
    const tick = () => {
      if (!this.active) return;
      this.tick();
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  stop() {
    this.active = false;
    if (this.raf) { cancelAnimationFrame(this.raf); this.raf = null; }
  }

  tick() {}

  destroy() {
    this.stop();
    window.removeEventListener('resize', this._onResize);
    this.ctx.clearRect(0, 0, this.w, this.h);
  }
}

// ── Twinkling Lights ─────────────────────────────────────────
class TwinklingLights extends OverlayBase {
  init() {
    const COLORS = ['255,255,255', '255,220,100', '255,175,80', '190,215,255'];
    this.stars = Array.from({ length: 130 }, () => ({
      x:     Math.random(),
      y:     Math.random(),
      r:     0.5 + Math.random() * 2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.008 + Math.random() * 0.022,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));
  }

  tick() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (const s of this.stars) {
      s.phase += s.speed;
      const alpha = ((Math.sin(s.phase) + 1) / 2) * 0.75 + 0.12;
      this.ctx.beginPath();
      this.ctx.arc(s.x * this.w, s.y * this.h, s.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(${s.color},${alpha.toFixed(2)})`;
      this.ctx.fill();
    }
  }
}

// ── Raining Lights ───────────────────────────────────────────
class RainingLights extends OverlayBase {
  init() {
    this.drops = Array.from({ length: 90 }, () => this._spawn(true));
  }

  _spawn(randomY = false) {
    return {
      x:     Math.random(),
      y:     randomY ? Math.random() : -0.06,
      len:   0.035 + Math.random() * 0.09,
      speed: 0.0008 + Math.random() * 0.0025,
      alpha: 0.25 + Math.random() * 0.5,
      color: Math.random() > 0.45 ? '255,200,80' : '255,235,160',
      w:     0.8 + Math.random() * 1.4,
    };
  }

  tick() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (let i = 0; i < this.drops.length; i++) {
      const d = this.drops[i];
      d.y += d.speed;
      if (d.y > 1.08) { this.drops[i] = this._spawn(); continue; }

      const x  = d.x * this.w;
      const y1 = d.y * this.h;
      const y2 = y1 + d.len * this.h;
      const g  = this.ctx.createLinearGradient(x, y1, x, y2);
      g.addColorStop(0,   `rgba(${d.color},0)`);
      g.addColorStop(0.2, `rgba(${d.color},${d.alpha})`);
      g.addColorStop(1,   `rgba(${d.color},0)`);
      this.ctx.beginPath();
      this.ctx.moveTo(x, y1);
      this.ctx.lineTo(x, y2);
      this.ctx.strokeStyle = g;
      this.ctx.lineWidth   = d.w;
      this.ctx.stroke();
    }
  }
}

// ── Shooting Stars ───────────────────────────────────────────
class ShootingStars extends OverlayBase {
  init() {
    this.meteors  = [];
    this._counter = 0;
    this._next    = 55 + Math.random() * 80;
  }

  _spawn() {
    return {
      x:       0.1 + Math.random() * 0.7,
      y:       -0.05 + Math.random() * 0.35,
      vx:      0.003 + Math.random() * 0.004,
      vy:      0.0008 + Math.random() * 0.002,
      tailLen: 0.10 + Math.random() * 0.18,
      alpha:   0.7 + Math.random() * 0.3,
      life:    0,
      maxLife: 55 + Math.random() * 75,
    };
  }

  tick() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this._counter++;
    if (this._counter >= this._next) {
      this.meteors.push(this._spawn());
      this._counter = 0;
      this._next    = 50 + Math.random() * 100;
    }
    this.meteors = this.meteors.filter(m => m.life < m.maxLife);
    for (const m of this.meteors) {
      m.life++;
      m.x += m.vx;
      m.y += m.vy;
      const t     = m.life / m.maxLife;
      const alpha = m.alpha * Math.sin(t * Math.PI);
      const hx    = m.x * this.w;
      const hy    = m.y * this.h;
      const tx    = hx - m.tailLen * this.w * (m.vx / 0.004);
      const ty    = hy - m.tailLen * this.h * (m.vy / 0.002);
      const g     = this.ctx.createLinearGradient(tx, ty, hx, hy);
      g.addColorStop(0,    `rgba(180,210,255,0)`);
      g.addColorStop(0.6,  `rgba(210,228,255,${(alpha * 0.45).toFixed(2)})`);
      g.addColorStop(1,    `rgba(255,255,255,${alpha.toFixed(2)})`);
      this.ctx.beginPath();
      this.ctx.moveTo(tx, ty);
      this.ctx.lineTo(hx, hy);
      this.ctx.strokeStyle = g;
      this.ctx.lineWidth   = 1.8;
      this.ctx.stroke();
      this.ctx.beginPath();
      this.ctx.arc(hx, hy, 1.8, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(255,255,255,${alpha.toFixed(2)})`;
      this.ctx.fill();
    }
  }
}

// ── Snow Particles ────────────────────────────────────────────
class SnowParticles extends OverlayBase {
  init() {
    this.flakes = Array.from({ length: 110 }, () => this._spawn(true));
  }

  _spawn(randomY = false) {
    return {
      x:     Math.random(),
      y:     randomY ? Math.random() : -0.02,
      r:     1 + Math.random() * 3,
      vy:    0.0004 + Math.random() * 0.0009,
      vx:    (Math.random() - 0.5) * 0.0004,
      sway:  Math.random() * Math.PI * 2,
      swayS: 0.004 + Math.random() * 0.009,
      alpha: 0.35 + Math.random() * 0.5,
    };
  }

  tick() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    for (let i = 0; i < this.flakes.length; i++) {
      const f = this.flakes[i];
      f.y     += f.vy;
      f.sway  += f.swayS;
      f.x     += f.vx + Math.sin(f.sway) * 0.00025;
      if (f.y > 1.02) { this.flakes[i] = this._spawn(); continue; }
      this.ctx.beginPath();
      this.ctx.arc(f.x * this.w, f.y * this.h, f.r, 0, Math.PI * 2);
      this.ctx.fillStyle = `rgba(235,245,255,${f.alpha})`;
      this.ctx.fill();
    }
  }
}

// ── Aurora ───────────────────────────────────────────────────
class Aurora extends OverlayBase {
  init() {
    this.t = 0;
    this.bands = [
      { color: '50,185,125',  phase: 0             },
      { color: '75,125,225',  phase: Math.PI / 2.5 },
      { color: '155,65,210',  phase: Math.PI * 1.2 },
    ];
  }

  tick() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.t += 0.004;
    for (const b of this.bands) {
      const g = this.ctx.createLinearGradient(0, 0, 0, this.h * 0.55);
      g.addColorStop(0,   `rgba(${b.color},0.06)`);
      g.addColorStop(0.4, `rgba(${b.color},0.13)`);
      g.addColorStop(1,   `rgba(${b.color},0)`);
      this.ctx.beginPath();
      this.ctx.moveTo(0, 0);
      for (let x = 0; x <= this.w; x += 16) {
        const pct = x / this.w;
        const y   = this.h * (0.12 + 0.09 * Math.sin(pct * 3.5 + this.t + b.phase));
        this.ctx.lineTo(x, y);
      }
      this.ctx.lineTo(this.w, 0);
      this.ctx.closePath();
      this.ctx.fillStyle = g;
      this.ctx.fill();
    }
  }
}

// ── Warm Glow ────────────────────────────────────────────────
class WarmGlow extends OverlayBase {
  init() {
    this.t = 0;
    this.orbs = [
      { x: 0.18, y: 0.25, r: 0.42, color: '255,140,45', phase: 0   },
      { x: 0.82, y: 0.62, r: 0.36, color: '255,95,25',  phase: 2.2 },
      { x: 0.5,  y: 0.85, r: 0.52, color: '215,115,55', phase: 4.5 },
    ];
  }

  tick() {
    this.ctx.clearRect(0, 0, this.w, this.h);
    this.t += 0.007;
    for (const o of this.orbs) {
      const pulse = 0.06 + 0.03 * Math.sin(this.t + o.phase);
      const alpha = 0.045 + 0.022 * Math.sin(this.t * 1.25 + o.phase);
      const r     = (o.r + pulse) * Math.min(this.w, this.h);
      const cx    = o.x * this.w;
      const cy    = o.y * this.h;
      const g     = this.ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0, `rgba(${o.color},${(alpha * 2.2).toFixed(3)})`);
      g.addColorStop(1, `rgba(${o.color},0)`);
      this.ctx.beginPath();
      this.ctx.arc(cx, cy, r, 0, Math.PI * 2);
      this.ctx.fillStyle = g;
      this.ctx.fill();
    }
  }
}

// Overlay registry — keys match scene.overlays strings in scenes.js
const OVERLAY_CLASSES = {
  'twinkling-lights': TwinklingLights,
  'raining-lights':   RainingLights,
  'shooting-stars':   ShootingStars,
  'snow-particles':   SnowParticles,
  'aurora':           Aurora,
  'warm-glow':        WarmGlow,
};

// ============================================================
// Image Effects — Ken Burns slow zoom + scroll parallax
// JS owns all transforms on .scene__bg-image elements.
// CSS transition/transform rules are overridden via inline style.
// ============================================================

// sceneId → { el: Element, visibleSince: DOMHighResTimeStamp|null }
const _imgData = new Map();

function _registerImgEffect(sceneId, bgImgEl) {
  _imgData.set(sceneId, { el: bgImgEl, visibleSince: null });
}

function setBgImageVisible(sceneId, visible) {
  const d = _imgData.get(sceneId);
  if (!d) return;
  d.visibleSince = visible ? performance.now() : null;
  // Instant scale reset while offscreen so next entry always starts at base scale
  if (!visible) d.el.style.transform = 'scale(1.04)';
}

function initImageEffects() {
  _tickImageEffects();
}

function _tickImageEffects() {
  if (_imgData.size > 0) {
    const now = performance.now();
    const vh  = window.innerHeight;

    for (const [, d] of _imgData) {
      const scene = d.el.closest('.scene');
      if (!scene) continue;

      const rect        = scene.getBoundingClientRect();
      const sceneCenter = rect.top + rect.height / 2;
      const viewCenter  = vh / 2;

      // Parallax: background lags behind scene scroll by ±25 px.
      // As scene centre rises above viewport centre, image shifts down (positive Y)
      // relative to the container — the classic parallax depth illusion.
      const norm      = (viewCenter - sceneCenter) / (vh / 2 + rect.height / 2);
      const parallaxY = Math.max(-1, Math.min(1, norm)) * 25;

      // Ken Burns: scale 1.04 → 1.10 over 25 s while scene is visible.
      // Starting at 1.04 gives enough overflow to absorb the ±25 px parallax shift.
      let scale = 1.04;
      if (d.visibleSince !== null) {
        const t = Math.min((now - d.visibleSince) / 25000, 1);
        scale   = 1.04 + 0.06 * t;
      }

      d.el.style.transform = `translateY(${parallaxY.toFixed(1)}px) scale(${scale.toFixed(4)})`;
    }
  }
  requestAnimationFrame(_tickImageEffects);
}

// ============================================================
// DOM Builders
// ============================================================

function buildScene(scene) {
  const el = document.createElement('section');
  el.className        = 'scene';
  el.id               = `scene-${scene.id}`;
  el.dataset.act      = scene.act;
  el.dataset.sceneId  = scene.id;
  el.setAttribute('aria-label', scene.title);

  // Per-scene CSS custom property for subtitle colour
  const theme = scene.theme || {
    primary:    '#FFD04B',
    background: 'radial-gradient(ellipse at 50% 50%, #120800 0%, #080608 60%, #030306 100%)',
    textColor:  '#FFF8E7',
  };
  el.style.setProperty('--scene-primary', theme.primary);
  el.style.background = theme.background;
  el.style.color      = theme.textColor;

  // Background layer
  const bg        = document.createElement('div');
  bg.className    = 'scene__background';
  const bgOverlay = document.createElement('div');
  bgOverlay.className = 'scene__bg-overlay';
  if (scene.image) {
    const bgImg = document.createElement('div');
    bgImg.className        = 'scene__bg-image';
    bgImg.style.transition = 'none';        // JS owns all transforms; disable CSS transition
    bgImg.style.transform  = 'scale(1.04)'; // base scale — JS updates every frame
    bg.appendChild(bgImg);

    // Probe load: set image + register effects on success; remove element on failure
    // so the theme gradient shows through as a clean fallback.
    const probe = new Image();
    probe.onload  = () => {
      bgImg.style.backgroundImage = `url('${scene.image}')`;
      _registerImgEffect(scene.id, bgImg);
    };
    probe.onerror = () => bgImg.remove();
    probe.src = scene.image;
  }
  bg.appendChild(bgOverlay);
  el.appendChild(bg);

  // Canvas for animated overlays
  const canvas     = document.createElement('canvas');
  canvas.className = 'scene__canvas';
  el.appendChild(canvas);

  // Text content
  const content = document.createElement('div');
  content.className = 'scene__content';

  const sceneNum     = document.createElement('span');
  sceneNum.className = 'scene__number-text';
  sceneNum.textContent = `Scene ${String(scene.sceneNumber).padStart(2, '0')}`;

  const badge        = document.createElement('div');
  badge.className    = 'scene__act-badge';
  badge.textContent  = `Act ${toRoman(scene.act)}`;

  const title        = document.createElement('h2');
  title.className    = 'scene__title';
  title.textContent  = scene.title;

  const subtitle     = document.createElement('h3');
  subtitle.className = 'scene__subtitle';
  subtitle.textContent = scene.subtitle;

  const desc         = document.createElement('p');
  desc.className     = 'scene__description';
  desc.textContent   = scene.description;

  content.append(sceneNum, badge, title, subtitle, desc);
  el.appendChild(content);

  return el;
}

function buildTransition() {
  const el = document.createElement('div');
  el.className = 'scene-transition';
  el.setAttribute('aria-hidden', 'true');

  const top    = document.createElement('div');
  top.className = 'scene-transition__line-top';
  const orn    = document.createElement('div');
  orn.className = 'scene-transition__ornament';
  const bot    = document.createElement('div');
  bot.className = 'scene-transition__line-bottom';

  el.append(top, orn, bot);
  return el;
}

// ── Progress Nav ──────────────────────────────────────────────
function buildProgressNav() {
  const track = document.getElementById('progress-track');
  if (!track) return;

  ACTS.forEach((act, i) => {
    const node = document.createElement('div');
    node.className        = 'act-node is-future';
    node.dataset.act      = act.id;
    node.setAttribute('role', 'listitem button');
    node.setAttribute('tabindex', '0');
    node.setAttribute('aria-label', `${act.name} — ${act.label}`);
    node.title            = act.label;

    node.addEventListener('click', () => scrollToAct(act.id));
    node.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); scrollToAct(act.id); }
    });

    const dot = document.createElement('div');
    dot.className = 'act-node__dot';

    const label = document.createElement('span');
    label.className  = 'act-node__label';
    label.textContent = act.name;

    node.append(dot, label);
    track.appendChild(node);

    if (i < ACTS.length - 1) {
      const connector = document.createElement('div');
      connector.className = 'act-connector';
      const fill      = document.createElement('div');
      fill.className  = 'act-connector__fill';
      connector.appendChild(fill);
      track.appendChild(connector);
    }
  });
}

// ============================================================
// Overlay lifecycle
// ============================================================

const _overlayMap = new Map(); // sceneId → OverlayBase[]

function attachOverlays(sceneEl, scene) {
  if (!scene.overlays || !scene.overlays.length) return;
  const canvas = sceneEl.querySelector('.scene__canvas');
  if (!canvas) return;

  const instances = scene.overlays
    .map(key => {
      const Cls = OVERLAY_CLASSES[key];
      if (!Cls) { console.warn(`Unknown overlay: "${key}"`); return null; }
      const inst = new Cls(canvas);
      inst.init();
      return inst;
    })
    .filter(Boolean);

  _overlayMap.set(scene.id, instances);
}

const startOverlays = id => (_overlayMap.get(id) || []).forEach(i => i.start());
const stopOverlays  = id => (_overlayMap.get(id) || []).forEach(i => i.stop());

// ============================================================
// Intersection Observers
// ============================================================

function initSceneObserver() {
  const obs = new IntersectionObserver(entries => {
    for (const e of entries) {
      const id = e.target.dataset.sceneId;
      if (e.isIntersecting) {
        e.target.classList.add('is-visible');
        startOverlays(id);
        setBgImageVisible(id, true);
      } else {
        stopOverlays(id);
        setBgImageVisible(id, false);
      }
    }
  }, { threshold: 0.25 });

  document.querySelectorAll('.scene').forEach(el => obs.observe(el));
}

function initProgressObserver() {
  const obs = new IntersectionObserver(entries => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      const act = parseInt(e.target.dataset.act, 10);
      if (!isNaN(act)) updateProgressNav(act);
    }
  }, { threshold: 0.5 });

  const hero = document.getElementById('hero');
  if (hero) { hero.dataset.act = '0'; obs.observe(hero); }
  document.querySelectorAll('.scene').forEach(el => obs.observe(el));
}

function updateProgressNav(activeAct) {
  document.querySelectorAll('.act-node').forEach(node => {
    const a = parseInt(node.dataset.act, 10);
    node.classList.toggle('is-active',  a === activeAct);
    node.classList.toggle('is-visited', a <  activeAct);
    node.classList.toggle('is-future',  a >  activeAct);
  });

  document.querySelectorAll('.act-connector__fill').forEach((fill, i) => {
    const gap = i + 1;  // connector i bridges act-node i to act-node i+1
    if (gap <  activeAct) fill.style.width = '100%';
    else if (gap === activeAct) fill.style.width = '50%';
    else fill.style.width = '0%';
  });
}

// ============================================================
// Hero overlay — ambient stars
// ============================================================

function initHeroOverlay() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;
  const stars = new TwinklingLights(canvas);
  stars.init();
  stars.start();
}

// ============================================================
// Scroll helpers
// ============================================================

function scrollToScenes() {
  const first = document.querySelector('#scenes-container .scene');
  if (first) first.scrollIntoView({ behavior: 'smooth' });
}

function scrollToAct(actId) {
  const el = document.querySelector(`.scene[data-act="${actId}"]`);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// ============================================================
// Utility
// ============================================================

function toRoman(n) {
  return ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', 'X'][n] ?? String(n);
}

// ============================================================
// Bootstrap
// ============================================================

function probeImage(src) {
  return new Promise(resolve => {
    if (!src) { resolve(false); return; }
    const img = new Image();
    img.onload  = () => resolve(true);
    img.onerror = () => resolve(false);
    img.src = src;
  });
}

async function init() {
  buildProgressNav();

  const container = document.getElementById('scenes-container');
  if (!container) return;

  // Pre-check every scene image; only render scenes whose image file loads.
  const checks  = await Promise.all(SCENES.map(s => probeImage(s.image)));
  const validIds = new Set(SCENES.filter((_, i) => checks[i]).map(s => s.id));

  let rendered = 0;
  SCENES.forEach((scene, i) => {
    scene.sceneNumber = i + 1;
    if (!validIds.has(scene.id)) return;
    if (rendered > 0) container.appendChild(buildTransition());
    rendered++;
    const el = buildScene(scene);
    container.appendChild(el);
    attachOverlays(el, scene);
  });

  initHeroOverlay();
  initSceneObserver();
  initProgressObserver();
  initImageEffects();
  updateProgressNav(0);
}

document.addEventListener('DOMContentLoaded', init);
