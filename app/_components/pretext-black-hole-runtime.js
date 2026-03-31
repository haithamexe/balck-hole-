import { prepareWithSegments, layoutWithLines } from "@chenglou/pretext";

// ── Config ──
const DEFAULT_FONT_SIZE = 15;
const DEFAULT_LINE_HEIGHT = 16;
const DEFAULT_FONT = `${DEFAULT_FONT_SIZE}px "Georgia", "Noto Serif KR", serif`;
const DEFAULT_PADDING = 60;
const DEFAULT_MAX_DPR = 1.5;

// Black hole config
const DEFAULT_EVENT_HORIZON = 20; // inner void radius
const DEFAULT_GRAVITY_RADIUS = 280; // how far gravity reaches
const DEFAULT_GRAVITY_STRENGTH = 150; // pull force
const DEFAULT_WARP_STRENGTH = 0.2; // how much text bends tangentially
const DEFAULT_SWALLOW_RADIUS = 50; // chars inside this vanish

// Colors
const DEFAULT_BACKGROUND_COLOR = "#020108";
const DEFAULT_CHAR_COLOR = [90, 80, 110]; // dim purple-grey
const DEFAULT_CHAR_GLOW_COLOR = [180, 140, 255]; // bright purple when warped
const DEFAULT_ACCRETION_COLORS = [
  [255, 180, 60], // gold
  [255, 120, 40], // orange
  [200, 100, 255], // purple
  [100, 160, 255], // blue
  [255, 200, 150], // warm white
];

// Star config
const DEFAULT_STAR_COUNT = 300;
const DEFAULT_NEBULA_LAYERS = 4;

// ── Text content ──
const DEFAULT_TEXT_CONTENT = `In the beginning God created the heaven and the earth. And the earth was without form, and void; and darkness was upon the face of the deep. And the Spirit of God moved upon the face of the waters. And God said, Let there be light: and there was light. And God saw the light, that it was good: and God divided the light from the darkness.

Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off — then, I account it high time to get to sea as soon as I can.

It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way.

In my younger and more vulnerable years my father gave me some advice that I have been turning over in my mind ever since. Whenever you feel like criticizing anyone, he told me, just remember that all the people in this world have not had the advantages that you have had.

Happy families are all alike; every unhappy family is unhappy in its own way. Everything was in confusion in the Oblonskys' house. The wife had discovered that the husband was carrying on an intrigue with a French girl, who had been a governess in their family, and she had announced to her husband that she could not go on living in the same house with him.

It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters.

All children, except one, grow up. They soon know that they will grow up, and the way Wendy knew was this. One day when she was two years old she was playing in a garden, and she plucked another flower and ran with it to her mother. I suppose she must have looked rather delightful, for Mrs. Darling put her hand to her heart and cried, Oh, why can't you remain like this for ever!

Far out in the uncharted backwaters of the unfashionable end of the Western Spiral arm of the Galaxy lies a small unregarded yellow sun. Orbiting this at a distance of roughly ninety-two million miles is an utterly insignificant little blue-green planet whose ape-descended life forms are so amazingly primitive that they still think digital watches are a pretty neat idea.

The studio was filled with the rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn. From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum.

Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show. To begin my life with the beginning of my life, I record that I was born on a Friday, at twelve o'clock at night. It was remarked that the clock began to strike, and I began to cry, simultaneously.

母は、朝から夜まで家の中のあらゆるものを磨いていた。窓ガラスから銀のスプーンまで、そしてその合間にも世界のあらゆる不思議について語ってくれた。彼女の言葉は水のように流れ、私の心の土壌に染み込んでいった。 rich odour of roses, and when the light summer wind stirred amidst the trees of the garden, there came through the open door the heavy scent of the lilac, or the more delicate perfume of the pink-flowering thorn. From the corner of the divan of Persian saddle-bags on which he was lying, smoking, as was his custom, innumerable cigarettes, Lord Henry Wotton could just catch the gleam of the honey-sweet and honey-coloured blossoms of a laburnum.

Whether I shall turn out to be the hero of my own life, or whether that station will be held by anybody else, these pages must show. To begin my life with the beginning of my life, I record that I was born on a Friday, at twelve o'clock at night. It was remarked that the clock began to strike, and I began to cry, simultaneously.

母は、朝から夜まで家の中のあらゆるものを磨いていた。窓ガラスから銀のスプーンまで、そしてその合間にも世界のあらゆる不思議について語ってくれた。彼女の言葉は水のように流れ、私の心の土壌に染み込んでいった。 One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.

One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.

It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.

The sun shone, having no alternative One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.

One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin. He lay on his armour-like back, and if he lifted his head a little he could see his brown belly, slightly domed and divided by arches into stiff sections.

In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor yet a dry, bare, sandy hole with nothing in it to sit down on or to eat: it was a hobbit-hole, and that means comfort.

It was a bright cold day in April, and the clocks were striking thirteen. Winston Smith, his chin nuzzled into his breast in an effort to escape the vile wind, slipped quickly through the glass doors of Victory Mansions, though not quickly enough to prevent a swirl of gritty dust from entering along with him.

The sun shone, having no alternative, on the nothing new. Murphy sat out of it, as though he were free, in a mew in West Brompton. Here for what might have been six months he had eaten, drunk, slept, and put his clothes on and off, in a medium-sized cage of north-western aspect commanding an unbroken view of medium-sized cages of south-eastern aspect.`;

export function mountPretextBlackHole(canvas, options = {}) {
  const ctx = canvas.getContext("2d");
  if (ctx === null) return () => {};
  const container = canvas.parentElement ?? canvas;
  const FONT = options.font ?? DEFAULT_FONT;
  const LINE_HEIGHT = options.lineHeight ?? DEFAULT_LINE_HEIGHT;
  const PADDING = options.padding ?? DEFAULT_PADDING;
  const MAX_DPR = options.maxDevicePixelRatio ?? DEFAULT_MAX_DPR;
  const EVENT_HORIZON = options.eventHorizon ?? DEFAULT_EVENT_HORIZON;
  const GRAVITY_RADIUS = options.gravityRadius ?? DEFAULT_GRAVITY_RADIUS;
  const GRAVITY_STRENGTH =
    options.gravityStrength ?? DEFAULT_GRAVITY_STRENGTH;
  const WARP_STRENGTH = options.warpStrength ?? DEFAULT_WARP_STRENGTH;
  const SWALLOW_RADIUS = options.swallowRadius ?? DEFAULT_SWALLOW_RADIUS;
  const BG_COLOR = options.backgroundColor ?? DEFAULT_BACKGROUND_COLOR;
  const CHAR_COLOR = options.charColor ?? DEFAULT_CHAR_COLOR;
  const CHAR_GLOW_COLOR = options.charGlowColor ?? DEFAULT_CHAR_GLOW_COLOR;
  const ACCRETION_COLORS =
    options.accretionColors ?? DEFAULT_ACCRETION_COLORS;
  const STAR_COUNT = options.starCount ?? DEFAULT_STAR_COUNT;
  const NEBULA_LAYERS = options.nebulaLayers ?? DEFAULT_NEBULA_LAYERS;
  const TEXT_CONTENT = options.text ?? DEFAULT_TEXT_CONTENT;
  let W, H;
  let mouse = { x: -999, y: -999 };
  let smoothMouse = { x: -999, y: -999 };
  let prevSmoothMouse = { x: -999, y: -999 };
  let holeVelocity = { x: 0, y: 0 };
  let chars = [];
  let time = 0;
  let dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
  let stars = [];
  let accretionParticles = [];
  let animationFrameId = 0;
  const prepared = prepareWithSegments(TEXT_CONTENT, FONT);
  const charWidthCache = new Map();
  const hasResizeObserver = typeof ResizeObserver === "function";
  let resizeObserver = null;

  function getCharWidth(ch) {
    let width = charWidthCache.get(ch);
    if (width !== undefined) return width;

    width = ctx.measureText(ch).width;
    charWidthCache.set(ch, width);
    return width;
  }

  function getCanvasBounds() {
    const rect = container.getBoundingClientRect();
    return {
      left: rect.left,
      top: rect.top,
      width: Math.max(1, Math.round(rect.width || canvas.clientWidth || 1)),
      height: Math.max(1, Math.round(rect.height || canvas.clientHeight || 1)),
    };
  }

  function setMouseFromClient(clientX, clientY) {
    const bounds = getCanvasBounds();
    mouse.x = clientX - bounds.left;
    mouse.y = clientY - bounds.top;
  }

  // ── Stars ──
  function initStars() {
    stars = [];
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 1.8 + 0.3,
        brightness: Math.random() * 0.5 + 0.2,
        twinkleSpeed: Math.random() * 3 + 1,
        twinklePhase: Math.random() * Math.PI * 2,
        hue:
          Math.random() < 0.3
            ? 220 + Math.random() * 40
            : Math.random() < 0.5
              ? 30 + Math.random() * 20
              : 270 + Math.random() * 30,
      });
    }
  }

  // ── Accretion disk particles ──
  function initAccretion() {
    accretionParticles = [];
    for (let i = 0; i < 200; i++) {
      const angle = Math.random() * Math.PI * 2;
      const orbitRadius = EVENT_HORIZON + Math.random() * 100 + 10;
      accretionParticles.push({
        angle,
        orbitRadius,
        speed: (0.3 + Math.random() * 0.8) / (orbitRadius * 0.02),
        size: Math.random() * 2.5 + 0.5,
        colorIdx: Math.floor(Math.random() * ACCRETION_COLORS.length),
        brightness: Math.random() * 0.6 + 0.4,
        z: (Math.random() - 0.5) * 0.6, // vertical offset for 3d feel
      });
    }
    accretionParticles.sort((a, b) => a.z - b.z);
  }

  // ── Build character positions using pretext ──
  function buildLayout() {
    chars = [];
    const maxWidth = W - PADDING * 2;
    const { lines } = layoutWithLines(prepared, maxWidth, LINE_HEIGHT);

    ctx.save();
    ctx.font = FONT;
    for (let i = 0; i < lines.length; i++) {
      const lineText = lines[i].text;
      const baseY = PADDING + i * LINE_HEIGHT;
      if (baseY > H + 50) break;
      let x = PADDING;
      for (let j = 0; j < lineText.length; j++) {
        const ch = lineText[j];
        const charWidth = getCharWidth(ch);
        if (ch === " ") {
          x += charWidth;
          continue;
        }
        chars.push({
          char: ch,
          baseX: x,
          baseY,
          x,
          y: baseY,
          vx: 0,
          vy: 0,
          absorbed: false,
          absorbProgress: 0,
          fieldInfluence: 0,
          stretch: 1,
          rotation: 0,
        });
        x += charWidth;
      }
    }
    ctx.restore();
  }

  // ── Resize ──
  function resize() {
    const bounds = getCanvasBounds();
    W = bounds.width;
    H = bounds.height;
    dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = W + "px";
    canvas.style.height = H + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    initStars();
    initAccretion();
    buildLayout();
  }

  // ── Draw stars ──
  function drawStars() {
    for (const star of stars) {
      const twinkle =
        Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.3 + 0.7;
      const alpha = star.brightness * twinkle;

      // Gravitational lensing: stars near black hole shift position
      const dx = star.x - smoothMouse.x;
      const dy = star.y - smoothMouse.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let sx = star.x;
      let sy = star.y;
      let sizeMultiplier = 1;

      if (dist < GRAVITY_RADIUS * 1.5 && dist > EVENT_HORIZON * 0.5) {
        // Lensing: shift star position tangentially
        const lensStrength = 1 - dist / (GRAVITY_RADIUS * 1.5);
        const angle = Math.atan2(dy, dx);
        const tangent = angle + Math.PI / 2;
        sx += Math.cos(tangent) * lensStrength * 30;
        sy += Math.sin(tangent) * lensStrength * 30;
        // Stars near event horizon appear brighter (Einstein ring effect)
        if (dist < EVENT_HORIZON * 2.5) {
          sizeMultiplier = 1 + (1 - dist / (EVENT_HORIZON * 2.5)) * 3;
        }
      }

      if (dist < EVENT_HORIZON * 0.8) continue; // swallowed

      ctx.beginPath();
      ctx.arc(sx, sy, star.size * sizeMultiplier, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${star.hue}, 60%, 85%, ${alpha})`;
      ctx.fill();

      // Glow for brighter stars
      if (star.size > 1.2) {
        ctx.beginPath();
        ctx.arc(sx, sy, star.size * sizeMultiplier * 3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 50%, 80%, ${alpha * 0.1})`;
        ctx.fill();
      }
    }
  }

  // ── Draw nebula background ──
  function drawNebula() {
    for (let i = 0; i < NEBULA_LAYERS; i++) {
      const centerX = W * (0.2 + i * 0.2);
      const centerY = H * (0.3 + (i % 2) * 0.4);
      const radius = W * (0.2 + i * 0.05);
      const hue = [260, 220, 300, 200][i];

      const grad = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius,
      );
      grad.addColorStop(0, `hsla(${hue}, 60%, 15%, 0.04)`);
      grad.addColorStop(0.5, `hsla(${hue}, 40%, 10%, 0.02)`);
      grad.addColorStop(1, "hsla(0, 0%, 0%, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, W, H);
    }
  }

  // ── Draw accretion disk ──
  function drawAccretionDisk() {
    const mx = smoothMouse.x;
    const my = smoothMouse.y;

    // Disk tilt factor (slight 3D perspective)
    const tiltY = 0.35;

    // Outer glow
    const glowSize = EVENT_HORIZON * 3.5;
    const outerGlow = ctx.createRadialGradient(
      mx,
      my,
      EVENT_HORIZON * 0.8,
      mx,
      my,
      glowSize,
    );
    outerGlow.addColorStop(0, "rgba(180, 120, 255, 0.06)");
    outerGlow.addColorStop(0.3, "rgba(255, 150, 50, 0.03)");
    outerGlow.addColorStop(0.6, "rgba(100, 80, 200, 0.015)");
    outerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = outerGlow;
    ctx.fillRect(mx - glowSize, my - glowSize, glowSize * 2, glowSize * 2);

    // Draw particles in orbit
    for (const p of accretionParticles) {
      p.angle += p.speed * 0.016;

      const px = mx + Math.cos(p.angle) * p.orbitRadius;
      const py = my + Math.sin(p.angle) * p.orbitRadius * tiltY + p.z * 15;

      // Particles behind the black hole are dimmer
      const behindFactor = Math.sin(p.angle) < 0 ? 0.3 : 1.0;

      const col = ACCRETION_COLORS[p.colorIdx];
      const alpha =
        p.brightness *
        behindFactor *
        (0.5 + Math.sin(time * 2 + p.angle) * 0.2);

      // Doppler-like effect: approaching side brighter
      const dopplerBoost = 1 + Math.cos(p.angle) * 0.4;

      ctx.beginPath();
      ctx.arc(px, py, p.size * dopplerBoost, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${col[0]}, ${col[1]}, ${col[2]}, ${alpha * dopplerBoost})`;
      ctx.fill();

      // Trail
      const trailLen = 5;
      for (let t = 1; t <= trailLen; t++) {
        const ta = p.angle - p.speed * 0.016 * t * 3;
        const tx = mx + Math.cos(ta) * p.orbitRadius;
        const ty = my + Math.sin(ta) * p.orbitRadius * tiltY + p.z * 15;
        const tAlpha = alpha * (1 - t / trailLen) * 0.3;
        ctx.beginPath();
        ctx.arc(tx, ty, p.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${col[0]}, ${col[1]}, ${col[2]}, ${tAlpha})`;
        ctx.fill();
      }
    }

    // Photon ring — bright ring right at event horizon
    ctx.beginPath();
    ctx.ellipse(
      mx,
      my,
      EVENT_HORIZON * 1.15,
      EVENT_HORIZON * 1.15 * tiltY,
      0,
      0,
      Math.PI * 2,
    );
    ctx.strokeStyle = `rgba(255, 200, 100, ${0.15 + Math.sin(time * 1.5) * 0.05})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    // Inner photon ring
    ctx.beginPath();
    ctx.ellipse(
      mx,
      my,
      EVENT_HORIZON * 1.05,
      EVENT_HORIZON * 1.05 * tiltY,
      0,
      0,
      Math.PI * 2,
    );
    ctx.strokeStyle = `rgba(220, 180, 255, ${0.2 + Math.sin(time * 2) * 0.05})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // Event horizon — pure black circle with soft edge
    const horizonGrad = ctx.createRadialGradient(
      mx,
      my,
      EVENT_HORIZON * 0.6,
      mx,
      my,
      EVENT_HORIZON,
    );
    horizonGrad.addColorStop(0, "rgba(2, 1, 8, 1)");
    horizonGrad.addColorStop(0.7, "rgba(2, 1, 8, 0.98)");
    horizonGrad.addColorStop(1, "rgba(2, 1, 8, 0)");
    ctx.beginPath();
    ctx.arc(mx, my, EVENT_HORIZON, 0, Math.PI * 2);
    ctx.fillStyle = horizonGrad;
    ctx.fill();
  }

  // ── Gravitational text warping ──
  function warpChar(c) {
    const dx = c.baseX - smoothMouse.x;
    const dy = c.baseY - smoothMouse.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    c.fieldInfluence = 0;

    if (dist < GRAVITY_RADIUS && dist > 1) {
      const angle = Math.atan2(dy, dx);
      const tangent = angle + Math.PI / 2;

      // Gravitational pull — inverse square-ish
      const normalized = dist / GRAVITY_RADIUS;
      const pullStrength = Math.pow(1 - normalized, 2) * GRAVITY_STRENGTH;
      const flowStrength = Math.pow(1 - normalized, 1.5);
      c.fieldInfluence = flowStrength;

      // Radial pull (toward black hole)
      c.vx -= Math.cos(angle) * pullStrength * 0.15;
      c.vy -= Math.sin(angle) * pullStrength * 0.15;

      // Tangential warp (frame dragging / Kerr black hole effect)
      const tangentialForce = pullStrength * WARP_STRENGTH * (1 - normalized);
      c.vx += Math.cos(tangent) * tangentialForce * 0.08;
      c.vy += Math.sin(tangent) * tangentialForce * 0.08;
      c.vx += holeVelocity.x * (0.18 + flowStrength * 0.72);
      c.vy += holeVelocity.y * (0.18 + flowStrength * 0.72);

      // Spaghettification: stretch chars near event horizon
      if (dist < EVENT_HORIZON * 2.5) {
        c.stretch = 1 + (1 - dist / (EVENT_HORIZON * 2.5)) * 2;
        c.rotation = angle + Math.PI; // point toward black hole
      } else {
        c.stretch = 1;
        c.rotation = 0;
      }

      // Absorption
      if (dist < SWALLOW_RADIUS && !c.absorbed) {
        c.absorbed = true;
      }
    } else {
      c.stretch = 1;
      c.rotation = 0;
    }

    if (c.absorbed) {
      c.absorbProgress += 0.02;
      if (c.absorbProgress > 1) c.absorbProgress = 1;
      c.fieldInfluence = 1;

      // Pull hard toward center
      c.vx += (smoothMouse.x - c.x) * 0.08;
      c.vy += (smoothMouse.y - c.y) * 0.08;
      c.vx += holeVelocity.x * 0.95;
      c.vy += holeVelocity.y * 0.95;
    }

    // Gradually release absorbed chars when mouse moves away
    if (c.absorbed) {
      const currentDist = Math.sqrt(
        (c.baseX - smoothMouse.x) ** 2 + (c.baseY - smoothMouse.y) ** 2,
      );
      if (currentDist > GRAVITY_RADIUS * 0.8) {
        c.absorbProgress -= 0.03;
        if (c.absorbProgress <= 0) {
          c.absorbed = false;
          c.absorbProgress = 0;
        }
      }
    }
  }

  // ── Gravitational lensing ring (Einstein ring glow) ──
  function drawLensingRing() {
    const mx = smoothMouse.x;
    const my = smoothMouse.y;

    // Multiple subtle rings at different radii
    const rings = [
      { radius: EVENT_HORIZON * 1.8, alpha: 0.04, width: 8, hue: 45 },
      { radius: EVENT_HORIZON * 2.5, alpha: 0.025, width: 12, hue: 260 },
      { radius: EVENT_HORIZON * 3.5, alpha: 0.015, width: 18, hue: 220 },
    ];

    for (const ring of rings) {
      const pulse = 1 + Math.sin(time * 0.8 + ring.radius * 0.01) * 0.1;
      const r = ring.radius * pulse;

      const grad = ctx.createRadialGradient(
        mx,
        my,
        r - ring.width,
        mx,
        my,
        r + ring.width,
      );
      grad.addColorStop(0, `hsla(${ring.hue}, 60%, 70%, 0)`);
      grad.addColorStop(0.5, `hsla(${ring.hue}, 60%, 70%, ${ring.alpha})`);
      grad.addColorStop(1, `hsla(${ring.hue}, 60%, 70%, 0)`);
      ctx.fillStyle = grad;
      ctx.fillRect(
        mx - r - ring.width,
        my - r - ring.width,
        (r + ring.width) * 2,
        (r + ring.width) * 2,
      );
    }
  }

  // ── Hawking radiation particles ──
  let hawkingParticles = [];
  function updateHawkingRadiation() {
    // Spawn
    if (Math.random() < 0.3) {
      const angle = Math.random() * Math.PI * 2;
      hawkingParticles.push({
        x: smoothMouse.x + Math.cos(angle) * EVENT_HORIZON * 1.1,
        y: smoothMouse.y + Math.sin(angle) * EVENT_HORIZON * 1.1,
        vx: Math.cos(angle) * (1 + Math.random() * 2),
        vy: Math.sin(angle) * (1 + Math.random() * 2),
        life: 1,
        size: Math.random() * 1.5 + 0.5,
        hue: Math.random() < 0.5 ? 260 : 40,
      });
    }

    // Update & draw
    for (let i = hawkingParticles.length - 1; i >= 0; i--) {
      const p = hawkingParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.015;
      p.vx *= 0.98;
      p.vy *= 0.98;

      if (p.life <= 0) {
        hawkingParticles.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${p.hue}, 70%, 80%, ${p.life * 0.4})`;
      ctx.fill();
    }
  }

  // ── Main loop ──
  function frame() {
    time += 0.016;

    // Smooth mouse follow
    prevSmoothMouse.x = smoothMouse.x;
    prevSmoothMouse.y = smoothMouse.y;
    smoothMouse.x += (mouse.x - smoothMouse.x) * 0.08;
    smoothMouse.y += (mouse.y - smoothMouse.y) * 0.08;
    holeVelocity.x = smoothMouse.x - prevSmoothMouse.x;
    holeVelocity.y = smoothMouse.y - prevSmoothMouse.y;

    // Clear
    ctx.fillStyle = BG_COLOR;
    ctx.fillRect(0, 0, W, H);

    // Background layers
    drawNebula();
    drawStars();
    drawLensingRing();

    // Characters
    ctx.font = FONT;
    ctx.textBaseline = "top";

    for (let i = 0; i < chars.length; i++) {
      const c = chars[i];

      warpChar(c);

      // Spring back
      const spring = 0.04 * (1 - c.fieldInfluence * 0.75);
      c.vx += (c.baseX - c.x) * spring;
      c.vy += (c.baseY - c.y) * spring;
      c.vx *= 0.9;
      c.vy *= 0.9;
      c.x += c.vx;
      c.y += c.vy;

      // Don't draw fully absorbed chars
      if (c.absorbProgress >= 1) continue;

      const displacement = Math.sqrt(
        (c.x - c.baseX) ** 2 + (c.y - c.baseY) ** 2,
      );
      const distToHole = Math.sqrt(
        (c.x - smoothMouse.x) ** 2 + (c.y - smoothMouse.y) ** 2,
      );

      // Color: shift from dim purple to bright purple/gold near black hole
      let r, g, b, alpha;

      if (displacement > 1) {
        const t = Math.min(displacement / 40, 1);
        // Gravitational blueshift/redshift effect
        if (distToHole < GRAVITY_RADIUS * 0.5) {
          // Close: gold-orange (redshifted)
          r = Math.round(CHAR_COLOR[0] + (255 - CHAR_COLOR[0]) * t);
          g = Math.round(CHAR_COLOR[1] + (160 - CHAR_COLOR[1]) * t);
          b = Math.round(CHAR_COLOR[2] + (50 - CHAR_COLOR[2]) * t);
        } else {
          // Further: purple-blue (blueshifted)
          r = Math.round(
            CHAR_COLOR[0] + (CHAR_GLOW_COLOR[0] - CHAR_COLOR[0]) * t,
          );
          g = Math.round(
            CHAR_COLOR[1] + (CHAR_GLOW_COLOR[1] - CHAR_COLOR[1]) * t,
          );
          b = Math.round(
            CHAR_COLOR[2] + (CHAR_GLOW_COLOR[2] - CHAR_COLOR[2]) * t,
          );
        }
        alpha = Math.max(0.3, 1 - c.absorbProgress);
      } else {
        r = CHAR_COLOR[0];
        g = CHAR_COLOR[1];
        b = CHAR_COLOR[2];
        alpha = 0.6;
      }

      ctx.save();

      // Spaghettification transform
      if (c.stretch > 1.05) {
        ctx.translate(c.x, c.y);
        ctx.rotate(c.rotation);
        ctx.scale(c.stretch, 1 / Math.sqrt(c.stretch));
        ctx.translate(-c.x, -c.y);
      }

      // Glow for strongly displaced chars
      if (displacement > 15 && distToHole < GRAVITY_RADIUS * 0.6) {
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.5)`;
        ctx.shadowBlur = Math.min(displacement * 0.3, 12);
      }

      ctx.globalAlpha = alpha * (1 - c.absorbProgress);
      ctx.fillStyle = `rgb(${r},${g},${b})`;
      ctx.fillText(c.char, c.x, c.y);

      ctx.restore();
    }
    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    // Accretion disk & black hole (on top of text)
    drawAccretionDisk();
    updateHawkingRadiation();

    // Vignette — deep space edge fade
    const grad = ctx.createRadialGradient(
      W / 2,
      H / 2,
      W * 0.25,
      W / 2,
      H / 2,
      W * 0.75,
    );
    grad.addColorStop(0, "rgba(2,1,8,0)");
    grad.addColorStop(1, "rgba(2,1,8,0.7)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, W, H);

    animationFrameId = requestAnimationFrame(frame);
  }

  const handleMouseMove = (e) => {
    setMouseFromClient(e.clientX, e.clientY);
  };

  const handlePointerLeave = () => {
    mouse.x = -999;
    mouse.y = -999;
  };

  canvas.addEventListener("pointermove", handleMouseMove);
  canvas.addEventListener("pointerdown", handleMouseMove);
  canvas.addEventListener("pointerleave", handlePointerLeave);

  if (hasResizeObserver) {
    resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(container);
  } else {
    window.addEventListener("resize", resize);
  }

  resize();
  animationFrameId = requestAnimationFrame(frame);

  return () => {
    cancelAnimationFrame(animationFrameId);
    canvas.removeEventListener("pointermove", handleMouseMove);
    canvas.removeEventListener("pointerdown", handleMouseMove);
    canvas.removeEventListener("pointerleave", handlePointerLeave);
    resizeObserver?.disconnect();
    if (!hasResizeObserver) {
      window.removeEventListener("resize", resize);
    }
  };
}
