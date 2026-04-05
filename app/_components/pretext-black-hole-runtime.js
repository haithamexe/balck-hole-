const DEFAULT_FONT_SIZE = 18;
const DEFAULT_LINE_HEIGHT = 28;
const DEFAULT_FONT = `${DEFAULT_FONT_SIZE}px "Noto Naskh Arabic", "Amiri", "Noto Sans Arabic", "Segoe UI", serif`;
const DEFAULT_PADDING = 72;
const DEFAULT_MAX_DPR = 1.5;

const DEFAULT_EVENT_HORIZON = 78;
const DEFAULT_GRAVITY_RADIUS = 280;
const DEFAULT_GRAVITY_STRENGTH = 150;
const DEFAULT_WARP_STRENGTH = 0.2;
const DEFAULT_SWALLOW_RADIUS = 88;
const DEFAULT_HOLE_FOLLOW = 0.08;
const HOLE_WORD = "\u0627\u0644\u0644\u0647";
const INTRO_TEXT_FADE_START = 0.08;
const INTRO_TEXT_FADE_END = 1.05;
const INTRO_HOLE_FADE_START = 0.82;
const INTRO_HOLE_FADE_END = 1.78;
const INTRO_EFFECT_START = 1.12;
const INTRO_EFFECT_END = 3.08;
const INTRO_POINTER_START = 1.3;
const INTRO_POINTER_END = 2.6;

const DEFAULT_BACKGROUND_COLOR = "#020108";
const DEFAULT_CHAR_COLOR = [92, 86, 112];
const DEFAULT_CHAR_GLOW_COLOR = [208, 190, 255];
const DEFAULT_ACCRETION_COLORS = [
  [255, 184, 68],
  [255, 122, 56],
  [210, 110, 255],
  [110, 170, 255],
  [255, 220, 185],
];

const DEFAULT_STAR_COUNT = 260;
const DEFAULT_NEBULA_LAYERS = 4;
const DEFAULT_ACCRETION_PARTICLE_COUNT = 120;
const DEFAULT_ACCRETION_TRAIL_STEPS = 3;
const DEFAULT_MAX_HAWKING_PARTICLES = 18;

const DEFAULT_TEXT_CONTENT = `الرحمن الرحيم الملك القدوس السلام المؤمن المهيمن العزيز الجبار المتكبر الخالق البارئ المصور الغفار القهار الوهاب الرزاق الفتاح العليم القابض الباسط الخافض الرافع المعز المذل السميع البصير الحكم العدل اللطيف الخبير الحليم العظيم الغفور الشكور العلي الكبير الحفيظ المقيت الحسيب الجليل الكريم الرقيب المجيب الواسع الحكيم الودود المجيد الباعث الشهيد الحق الوكيل القوي المتين الولي الحميد المحصي المبدئ المعيد المحيي المميت الحي القيوم الواجد الماجد الواحد الصمد القادر المقتدر المقدم المؤخر الأول الآخر الظاهر الباطن الوالي المتعالي البر التواب المنتقم العفو الرؤوف مالك الملك ذو الجلال والإكرام المقسط الجامع الغني المغني المانع الضار النافع النور الهادي البديع الباقي الوارث الرشيد الصبور`;

const ARABIC_SEGMENTER =
  typeof Intl !== "undefined" && typeof Intl.Segmenter === "function"
    ? new Intl.Segmenter("ar", { granularity: "grapheme" })
    : null;

const ARABIC_FORM_MAP = {
  "\u0622": {
    isolated: "\uFE81",
    final: "\uFE82",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0623": {
    isolated: "\uFE83",
    final: "\uFE84",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0624": {
    isolated: "\uFE85",
    final: "\uFE86",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0625": {
    isolated: "\uFE87",
    final: "\uFE88",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0626": {
    isolated: "\uFE89",
    final: "\uFE8A",
    initial: "\uFE8B",
    medial: "\uFE8C",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0627": {
    isolated: "\uFE8D",
    final: "\uFE8E",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0628": {
    isolated: "\uFE8F",
    final: "\uFE90",
    initial: "\uFE91",
    medial: "\uFE92",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0629": {
    isolated: "\uFE93",
    final: "\uFE94",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u062A": {
    isolated: "\uFE95",
    final: "\uFE96",
    initial: "\uFE97",
    medial: "\uFE98",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u062B": {
    isolated: "\uFE99",
    final: "\uFE9A",
    initial: "\uFE9B",
    medial: "\uFE9C",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u062C": {
    isolated: "\uFE9D",
    final: "\uFE9E",
    initial: "\uFE9F",
    medial: "\uFEA0",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u062D": {
    isolated: "\uFEA1",
    final: "\uFEA2",
    initial: "\uFEA3",
    medial: "\uFEA4",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u062E": {
    isolated: "\uFEA5",
    final: "\uFEA6",
    initial: "\uFEA7",
    medial: "\uFEA8",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u062F": {
    isolated: "\uFEA9",
    final: "\uFEAA",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0630": {
    isolated: "\uFEAB",
    final: "\uFEAC",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0631": {
    isolated: "\uFEAD",
    final: "\uFEAE",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0632": {
    isolated: "\uFEAF",
    final: "\uFEB0",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0633": {
    isolated: "\uFEB1",
    final: "\uFEB2",
    initial: "\uFEB3",
    medial: "\uFEB4",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0634": {
    isolated: "\uFEB5",
    final: "\uFEB6",
    initial: "\uFEB7",
    medial: "\uFEB8",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0635": {
    isolated: "\uFEB9",
    final: "\uFEBA",
    initial: "\uFEBB",
    medial: "\uFEBC",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0636": {
    isolated: "\uFEBD",
    final: "\uFEBE",
    initial: "\uFEBF",
    medial: "\uFEC0",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0637": {
    isolated: "\uFEC1",
    final: "\uFEC2",
    initial: "\uFEC3",
    medial: "\uFEC4",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0638": {
    isolated: "\uFEC5",
    final: "\uFEC6",
    initial: "\uFEC7",
    medial: "\uFEC8",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0639": {
    isolated: "\uFEC9",
    final: "\uFECA",
    initial: "\uFECB",
    medial: "\uFECC",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u063A": {
    isolated: "\uFECD",
    final: "\uFECE",
    initial: "\uFECF",
    medial: "\uFED0",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0641": {
    isolated: "\uFED1",
    final: "\uFED2",
    initial: "\uFED3",
    medial: "\uFED4",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0642": {
    isolated: "\uFED5",
    final: "\uFED6",
    initial: "\uFED7",
    medial: "\uFED8",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0643": {
    isolated: "\uFED9",
    final: "\uFEDA",
    initial: "\uFEDB",
    medial: "\uFEDC",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0644": {
    isolated: "\uFEDD",
    final: "\uFEDE",
    initial: "\uFEDF",
    medial: "\uFEE0",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0645": {
    isolated: "\uFEE1",
    final: "\uFEE2",
    initial: "\uFEE3",
    medial: "\uFEE4",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0646": {
    isolated: "\uFEE5",
    final: "\uFEE6",
    initial: "\uFEE7",
    medial: "\uFEE8",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0647": {
    isolated: "\uFEE9",
    final: "\uFEEA",
    initial: "\uFEEB",
    medial: "\uFEEC",
    canConnectPrev: true,
    canConnectNext: true,
  },
  "\u0648": {
    isolated: "\uFEED",
    final: "\uFEEE",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u0649": {
    isolated: "\uFEEF",
    final: "\uFEF0",
    canConnectPrev: true,
    canConnectNext: false,
  },
  "\u064A": {
    isolated: "\uFEF1",
    final: "\uFEF2",
    initial: "\uFEF3",
    medial: "\uFEF4",
    canConnectPrev: true,
    canConnectNext: true,
  },
};

const DEFAULT_WORDS = getTextWords(DEFAULT_TEXT_CONTENT);

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function smoothstepRange(start, end, value) {
  if (end <= start) {
    return value >= end ? 1 : 0;
  }

  const t = clamp((value - start) / (end - start), 0, 1);
  return t * t * (3 - 2 * t);
}

function normalizeTextContent(text) {
  return `${text ?? ""}`
    .replace(/[,\u060C]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function getTextWords(text) {
  const normalized = normalizeTextContent(text);
  return normalized ? normalized.split(" ") : [];
}

function splitGraphemes(text) {
  if (ARABIC_SEGMENTER !== null) {
    return Array.from(
      ARABIC_SEGMENTER.segment(text),
      (segment) => segment.segment,
    );
  }

  return Array.from(text);
}

function shapeArabicWord(word) {
  const units = splitGraphemes(word);

  return units.map((source, index) => {
    const current = ARABIC_FORM_MAP[source] ?? null;
    const previous =
      index > 0 ? (ARABIC_FORM_MAP[units[index - 1]] ?? null) : null;
    const next =
      index < units.length - 1
        ? (ARABIC_FORM_MAP[units[index + 1]] ?? null)
        : null;

    const joinsPrev =
      current !== null &&
      previous !== null &&
      previous.canConnectNext &&
      current.canConnectPrev;
    const joinsNext =
      current !== null &&
      next !== null &&
      current.canConnectNext &&
      next.canConnectPrev;

    let glyph = source;

    if (current !== null) {
      if (joinsPrev && joinsNext && current.medial) {
        glyph = current.medial;
      } else if (joinsPrev && current.final) {
        glyph = current.final;
      } else if (joinsNext && current.initial) {
        glyph = current.initial;
      } else {
        glyph = current.isolated;
      }
    }

    return {
      glyph,
      joinsNext,
      width: 0,
    };
  });
}

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
  const GRAVITY_STRENGTH = options.gravityStrength ?? DEFAULT_GRAVITY_STRENGTH;
  const WARP_STRENGTH = options.warpStrength ?? DEFAULT_WARP_STRENGTH;
  const SWALLOW_RADIUS = options.swallowRadius ?? DEFAULT_SWALLOW_RADIUS;
  const BG_COLOR = options.backgroundColor ?? DEFAULT_BACKGROUND_COLOR;
  const CHAR_COLOR = options.charColor ?? DEFAULT_CHAR_COLOR;
  const CHAR_GLOW_COLOR = options.charGlowColor ?? DEFAULT_CHAR_GLOW_COLOR;
  const ACCRETION_COLORS = options.accretionColors ?? DEFAULT_ACCRETION_COLORS;
  const STAR_COUNT = options.starCount ?? DEFAULT_STAR_COUNT;
  const NEBULA_LAYERS = options.nebulaLayers ?? DEFAULT_NEBULA_LAYERS;
  const ACCRETION_PARTICLE_COUNT =
    options.accretionParticleCount ?? DEFAULT_ACCRETION_PARTICLE_COUNT;
  const ACCRETION_TRAIL_STEPS =
    options.accretionTrailSteps ?? DEFAULT_ACCRETION_TRAIL_STEPS;
  const MAX_HAWKING_PARTICLES =
    options.maxHawkingParticles ?? DEFAULT_MAX_HAWKING_PARTICLES;
  const TEXT_WORDS = getTextWords(options.text ?? DEFAULT_TEXT_CONTENT);
  const words = TEXT_WORDS.length > 0 ? TEXT_WORDS : DEFAULT_WORDS;

  let W = 1;
  let H = 1;
  let dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
  let time = 0;
  let animationFrameId = 0;
  let resizeObserver = null;

  let mouse = { x: 0, y: 0, active: false };
  let chars = [];
  let stars = [];
  let accretionParticles = [];
  let hawkingParticles = [];
  let backgroundLayerCanvas = null;
  let vignetteLayerCanvas = null;
  const hole = { x: 0, y: 0 };
  const holeVelocity = { x: 0, y: 0 };

  const charWidthCache = new Map();
  const wordLayoutCache = new Map();
  const hasResizeObserver = typeof ResizeObserver === "function";

  function configureTextContext(targetCtx = ctx) {
    targetCtx.font = FONT;
    targetCtx.textBaseline = "top";
    targetCtx.textAlign = "left";
    if ("direction" in targetCtx) {
      targetCtx.direction = "rtl";
    }
  }

  function configureCenterWordContext(targetCtx = ctx) {
    targetCtx.font = `600 ${Math.round(EVENT_HORIZON * 0.82)}px "Noto Naskh Arabic", "Amiri", "Noto Sans Arabic", "Segoe UI", serif`;
    targetCtx.textAlign = "center";
    targetCtx.textBaseline = "middle";
    if ("direction" in targetCtx) {
      targetCtx.direction = "rtl";
    }
  }

  function getEffectiveDpr(width, height) {
    const capped = Math.min(window.devicePixelRatio || 1, MAX_DPR);
    const area = width * height;

    if (area > 1_500_000) return Math.min(capped, 1);
    if (area > 1_100_000) return Math.min(capped, 1.1);
    if (area > 800_000) return Math.min(capped, 1.2);
    return capped;
  }

  function getDensityScale() {
    const area = W * H;

    if (area > 1_500_000) return 0.68;
    if (area > 1_100_000) return 0.78;
    if (area > 800_000) return 0.88;
    return 1;
  }

  function createBufferCanvas(width, height) {
    const bufferCanvas = document.createElement("canvas");
    bufferCanvas.width = Math.max(1, Math.round(width * dpr));
    bufferCanvas.height = Math.max(1, Math.round(height * dpr));
    const bufferCtx = bufferCanvas.getContext("2d");

    if (bufferCtx === null) {
      return null;
    }

    bufferCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    return { canvas: bufferCanvas, ctx: bufferCtx };
  }

  function updateHoleCenter() {
    hole.x = W / 2;
    hole.y = H / 2;
  }

  function setMouseFromClient(clientX, clientY) {
    const rect = canvas.getBoundingClientRect();
    mouse.x = clientX - rect.left;
    mouse.y = clientY - rect.top;
    mouse.active = true;
  }

  function getCharWidth(ch) {
    const cacheKey = `${FONT}::${ch}`;
    let width = charWidthCache.get(cacheKey);
    if (width !== undefined) return width;

    configureTextContext();
    width = ctx.measureText(ch).width;
    charWidthCache.set(cacheKey, width);
    return width;
  }

  function getWordLayout(word) {
    let layout = wordLayoutCache.get(word);
    if (layout !== undefined) return layout;

    configureTextContext();

    const units = shapeArabicWord(word).map((unit) => ({
      ...unit,
      width: getCharWidth(unit.glyph),
    }));

    const totalGlyphWidth = units.reduce((sum, unit) => sum + unit.width, 0);
    const adjustablePairs = [];

    for (let i = 0; i < units.length - 1; i++) {
      if (units[i].joinsNext) {
        adjustablePairs.push(i);
      }
    }

    if (adjustablePairs.length === 0) {
      for (let i = 0; i < units.length - 1; i++) {
        adjustablePairs.push(i);
      }
    }

    const naturalWidth = ctx.measureText(word).width || totalGlyphWidth;
    const pairAdjustment =
      adjustablePairs.length > 0
        ? (totalGlyphWidth - naturalWidth) / adjustablePairs.length
        : 0;

    layout = {
      units,
      width:
        adjustablePairs.length > 0
          ? totalGlyphWidth - pairAdjustment * adjustablePairs.length
          : totalGlyphWidth,
      pairAdjustment,
      adjustablePairs: new Set(adjustablePairs),
    };

    wordLayoutCache.set(word, layout);
    return layout;
  }

  function getCanvasBounds() {
    const rect = container.getBoundingClientRect();
    return {
      width: Math.max(1, Math.round(rect.width || canvas.clientWidth || 1)),
      height: Math.max(1, Math.round(rect.height || canvas.clientHeight || 1)),
    };
  }

  function initStars() {
    stars = [];
    const starCount = Math.max(120, Math.round(STAR_COUNT * getDensityScale()));
    for (let i = 0; i < starCount; i++) {
      stars.push({
        x: Math.random() * W,
        y: Math.random() * H,
        size: Math.random() * 1.6 + 0.25,
        brightness: Math.random() * 0.45 + 0.2,
        twinkleSpeed: Math.random() * 2.5 + 0.8,
        twinklePhase: Math.random() * Math.PI * 2,
        hue:
          Math.random() < 0.35
            ? 220 + Math.random() * 32
            : Math.random() < 0.6
              ? 30 + Math.random() * 18
              : 272 + Math.random() * 24,
      });
    }
  }

  function initAccretion() {
    accretionParticles = [];
    const particleCount = Math.max(
      72,
      Math.round(ACCRETION_PARTICLE_COUNT * getDensityScale()),
    );
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const orbitRadius = EVENT_HORIZON + 18 + Math.random() * 104;
      accretionParticles.push({
        angle,
        orbitRadius,
        speed: (0.28 + Math.random() * 0.42) / (orbitRadius * 0.024),
        size: Math.random() * 2.1 + 0.45,
        colorIdx: Math.floor(Math.random() * ACCRETION_COLORS.length),
        brightness: Math.random() * 0.55 + 0.35,
        z: (Math.random() - 0.5) * 0.6,
      });
    }
    accretionParticles.sort((a, b) => a.z - b.z);
  }

  function pushWordCharacters(wordLayout, cursorX, baseY) {
    for (let i = 0; i < wordLayout.units.length; i++) {
      const unit = wordLayout.units[i];
      const x = cursorX - unit.width;

      chars.push({
        char: unit.glyph,
        width: unit.width,
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
        orbitPhaseOffset: chars.length * 0.37,
      });

      cursorX = x;

      if (wordLayout.adjustablePairs.has(i)) {
        cursorX += wordLayout.pairAdjustment;
      }
    }

    return cursorX;
  }

  function buildLayout() {
    chars = [];

    if (words.length === 0) return;

    configureTextContext();

    const maxWidth = Math.max(1, W - PADDING * 2);
    const spaceWidth = Math.max(
      ctx.measureText(" ").width,
      DEFAULT_FONT_SIZE * 0.36,
    );
    const maxLines = Math.max(1, Math.floor((H - PADDING * 2) / LINE_HEIGHT));
    const lines = [];
    let wordIndex = 0;

    for (let lineIndex = 0; lineIndex < maxLines; lineIndex++) {
      const lineWords = [];
      let lineWidth = 0;
      let safety = 0;

      while (safety < words.length * 2) {
        const wordLayout = getWordLayout(words[wordIndex % words.length]);
        const nextWidth =
          lineWords.length === 0
            ? wordLayout.width
            : lineWidth + spaceWidth + wordLayout.width;

        if (nextWidth > maxWidth && lineWords.length > 0) {
          break;
        }

        lineWords.push(wordLayout);
        lineWidth = nextWidth;
        wordIndex++;
        safety++;

        if (wordLayout.width >= maxWidth) {
          break;
        }
      }

      if (lineWords.length === 0) {
        break;
      }

      lines.push({
        words: lineWords,
        width: lineWidth,
      });
    }

    if (lines.length === 0) return;

    const blockHeight = lines.length * LINE_HEIGHT;
    const startY = Math.max(PADDING, (H - blockHeight) / 2);

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      const baseY = startY + i * LINE_HEIGHT;
      let cursorX = PADDING + (maxWidth + line.width) / 2;

      for (let j = 0; j < line.words.length; j++) {
        cursorX = pushWordCharacters(line.words[j], cursorX, baseY);
        if (j < line.words.length - 1) {
          cursorX -= spaceWidth;
        }
      }
    }
  }

  function resize() {
    const bounds = getCanvasBounds();
    W = bounds.width;
    H = bounds.height;
    dpr = getEffectiveDpr(W, H);
    canvas.width = W * dpr;
    canvas.height = H * dpr;
    canvas.style.width = `${W}px`;
    canvas.style.height = `${H}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    updateHoleCenter();
    if (!mouse.active) {
      mouse.x = hole.x;
      mouse.y = hole.y;
    }
    initStars();
    initAccretion();
    buildLayout();
    rebuildBackgroundLayer();
    rebuildVignetteLayer();
  }

  function warpChar(char, effectStrength) {
    const dx = char.baseX - hole.x;
    const dy = char.baseY - hole.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    char.fieldInfluence = 0;

    if (effectStrength > 0 && dist < GRAVITY_RADIUS && dist > 1) {
      const angle = Math.atan2(dy, dx);
      const tangent = angle + Math.PI / 2;
      const normalized = dist / GRAVITY_RADIUS;
      const pullStrength =
        Math.pow(1 - normalized, 2) * GRAVITY_STRENGTH * effectStrength;
      const flowStrength = Math.pow(1 - normalized, 1.5) * effectStrength;

      char.fieldInfluence = flowStrength;
      char.vx -= Math.cos(angle) * pullStrength * 0.15;
      char.vy -= Math.sin(angle) * pullStrength * 0.15;

      const tangentialForce = pullStrength * WARP_STRENGTH * (1 - normalized);
      char.vx += Math.cos(tangent) * tangentialForce * 0.08;
      char.vy += Math.sin(tangent) * tangentialForce * 0.08;
      char.vx += holeVelocity.x * effectStrength * (0.18 + flowStrength * 0.72);
      char.vy += holeVelocity.y * effectStrength * (0.18 + flowStrength * 0.72);

      const orbitCenterX = char.x + char.width / 2;
      const orbitCenterY = char.y + LINE_HEIGHT / 2;
      const orbitDx = orbitCenterX - hole.x;
      const orbitDy = orbitCenterY - hole.y;
      const orbitDist = Math.sqrt(orbitDx * orbitDx + orbitDy * orbitDy);
      const loopStrength =
        clamp((GRAVITY_RADIUS * 0.72 - dist) / (GRAVITY_RADIUS * 0.72), 0, 1) *
        effectStrength;

      if (loopStrength > 0.01 && orbitDist > 1) {
        const orbitAngle = Math.atan2(orbitDy, orbitDx);
        const orbitTangent = orbitAngle + Math.PI / 2;
        const loopPulse =
          0.74 + Math.sin(time * 0.9 + char.orbitPhaseOffset) * 0.26;
        const radialPulse = Math.sin(time * 1.18 + char.orbitPhaseOffset);
        const orbitForce =
          GRAVITY_STRENGTH * 0.0036 * loopStrength * (0.85 + loopPulse);
        const radialForce =
          GRAVITY_STRENGTH * 0.0012 * loopStrength * radialPulse;

        char.vx += Math.cos(orbitTangent) * orbitForce;
        char.vy += Math.sin(orbitTangent) * orbitForce;
        char.vx += Math.cos(orbitAngle) * radialForce;
        char.vy += Math.sin(orbitAngle) * radialForce;
        char.fieldInfluence = Math.max(char.fieldInfluence, loopStrength);
      }

      if (dist < EVENT_HORIZON * 2.5) {
        char.stretch =
          1 + (1 - dist / (EVENT_HORIZON * 2.5)) * 2 * effectStrength;
        char.rotation = angle + Math.PI;
      } else {
        char.stretch = 1;
        char.rotation = 0;
      }

      if (dist < SWALLOW_RADIUS * effectStrength && !char.absorbed) {
        char.absorbed = true;
      }
    } else {
      char.stretch = 1;
      char.rotation = 0;
    }

    if (char.absorbed) {
      char.absorbProgress += 0.02 * Math.max(effectStrength, 0.35);
      if (char.absorbProgress > 1) {
        char.absorbProgress = 1;
      }
      char.fieldInfluence = 1;
      char.vx += (hole.x - char.x) * 0.08 * Math.max(effectStrength, 0.3);
      char.vy += (hole.y - char.y) * 0.08 * Math.max(effectStrength, 0.3);
      char.vx += holeVelocity.x * 0.95 * Math.max(effectStrength, 0.3);
      char.vy += holeVelocity.y * 0.95 * Math.max(effectStrength, 0.3);
    }

    if (char.absorbed) {
      const currentDist = Math.sqrt(
        (char.baseX - hole.x) ** 2 + (char.baseY - hole.y) ** 2,
      );
      if (currentDist > GRAVITY_RADIUS * 0.8) {
        char.absorbProgress -= 0.03;
        if (char.absorbProgress <= 0) {
          char.absorbed = false;
          char.absorbProgress = 0;
        }
      }
    }
  }

  function drawStars(effectStrength) {
    for (const star of stars) {
      const twinkle =
        Math.sin(time * star.twinkleSpeed + star.twinklePhase) * 0.25 + 0.75;
      const alpha = star.brightness * twinkle;

      const dx = star.x - hole.x;
      const dy = star.y - hole.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      let sx = star.x;
      let sy = star.y;
      let sizeMultiplier = 1;

      if (
        effectStrength > 0 &&
        dist < GRAVITY_RADIUS * 1.4 &&
        dist > EVENT_HORIZON * 0.8
      ) {
        const lensStrength =
          (1 - dist / (GRAVITY_RADIUS * 1.4)) * effectStrength;
        const angle = Math.atan2(dy, dx);
        const tangent = angle + Math.PI / 2;
        sx += Math.cos(tangent) * lensStrength * 18;
        sy += Math.sin(tangent) * lensStrength * 18;

        if (dist < EVENT_HORIZON * 2.8) {
          sizeMultiplier =
            1 + (1 - dist / (EVENT_HORIZON * 2.8)) * 2.2 * effectStrength;
        }
      }

      if (dist < EVENT_HORIZON * 0.92) continue;

      ctx.beginPath();
      ctx.arc(sx, sy, star.size * sizeMultiplier, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${star.hue}, 60%, 85%, ${alpha})`;
      ctx.fill();

      if (star.size > 1.1) {
        ctx.beginPath();
        ctx.arc(sx, sy, star.size * sizeMultiplier * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${star.hue}, 55%, 80%, ${alpha * 0.08})`;
        ctx.fill();
      }
    }
  }

  function drawNebula(targetCtx = ctx) {
    for (let i = 0; i < NEBULA_LAYERS; i++) {
      const centerX = W * (0.2 + i * 0.2);
      const centerY = H * (0.28 + (i % 2) * 0.42);
      const radius = W * (0.22 + i * 0.05);
      const hue = [258, 214, 304, 196][i];

      const gradient = targetCtx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        radius,
      );
      gradient.addColorStop(0, `hsla(${hue}, 60%, 16%, 0.045)`);
      gradient.addColorStop(0.55, `hsla(${hue}, 38%, 10%, 0.022)`);
      gradient.addColorStop(1, "hsla(0, 0%, 0%, 0)");
      targetCtx.fillStyle = gradient;
      targetCtx.fillRect(0, 0, W, H);
    }
  }

  function drawVignette(targetCtx = ctx) {
    const vignette = targetCtx.createRadialGradient(
      W / 2,
      H / 2,
      W * 0.24,
      W / 2,
      H / 2,
      W * 0.76,
    );
    vignette.addColorStop(0, "rgba(2, 1, 8, 0)");
    vignette.addColorStop(1, "rgba(2, 1, 8, 0.72)");
    targetCtx.fillStyle = vignette;
    targetCtx.fillRect(0, 0, W, H);
  }

  function rebuildBackgroundLayer() {
    const buffer = createBufferCanvas(W, H);

    if (buffer === null) {
      backgroundLayerCanvas = null;
      return;
    }

    backgroundLayerCanvas = buffer.canvas;
    buffer.ctx.fillStyle = BG_COLOR;
    buffer.ctx.fillRect(0, 0, W, H);
    drawNebula(buffer.ctx);
  }

  function rebuildVignetteLayer() {
    const buffer = createBufferCanvas(W, H);

    if (buffer === null) {
      vignetteLayerCanvas = null;
      return;
    }

    vignetteLayerCanvas = buffer.canvas;
    drawVignette(buffer.ctx);
  }

  function drawLensingRing(opacity) {
    if (opacity <= 0) {
      return;
    }

    const rings = [
      { radius: EVENT_HORIZON * 1.95, alpha: 0.05, width: 10, hue: 42 },
      { radius: EVENT_HORIZON * 2.7, alpha: 0.028, width: 14, hue: 260 },
      { radius: EVENT_HORIZON * 3.7, alpha: 0.016, width: 20, hue: 220 },
    ];

    for (const ring of rings) {
      const pulse = 1 + Math.sin(time * 0.7 + ring.radius * 0.01) * 0.06;
      const radius = ring.radius * pulse;
      const gradient = ctx.createRadialGradient(
        hole.x,
        hole.y,
        radius - ring.width,
        hole.x,
        hole.y,
        radius + ring.width,
      );
      gradient.addColorStop(0, `hsla(${ring.hue}, 60%, 72%, 0)`);
      gradient.addColorStop(
        0.5,
        `hsla(${ring.hue}, 60%, 72%, ${ring.alpha * opacity})`,
      );
      gradient.addColorStop(1, `hsla(${ring.hue}, 60%, 72%, 0)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(
        hole.x - radius - ring.width,
        hole.y - radius - ring.width,
        (radius + ring.width) * 2,
        (radius + ring.width) * 2,
      );
    }
  }

  function drawHoleCore(opacity) {
    if (opacity <= 0) {
      return;
    }

    ctx.save();
    ctx.globalAlpha = opacity;
    const coreGradient = ctx.createRadialGradient(
      hole.x,
      hole.y,
      EVENT_HORIZON * 0.18,
      hole.x,
      hole.y,
      EVENT_HORIZON * 1.1,
    );
    coreGradient.addColorStop(0, "rgba(255, 255, 255, 0.34)");
    coreGradient.addColorStop(0.24, "rgba(250, 248, 255, 0.46)");
    coreGradient.addColorStop(0.58, "rgba(236, 242, 255, 0.72)");
    coreGradient.addColorStop(0.82, "rgba(228, 235, 255, 0.5)");
    coreGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.beginPath();
    ctx.arc(hole.x, hole.y, EVENT_HORIZON, 0, Math.PI * 2);
    ctx.fillStyle = coreGradient;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(hole.x, hole.y, EVENT_HORIZON * 0.92, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(244, 246, 255, 0.84)";
    ctx.lineWidth = EVENT_HORIZON * 0.18;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(hole.x, hole.y, EVENT_HORIZON * 1.08, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(232, 238, 255, 0.26)";
    ctx.lineWidth = EVENT_HORIZON * 0.24;
    ctx.stroke();

    const featherGradient = ctx.createRadialGradient(
      hole.x,
      hole.y,
      EVENT_HORIZON * 0.56,
      hole.x,
      hole.y,
      EVENT_HORIZON * 1.36,
    );
    featherGradient.addColorStop(0, "rgba(255, 255, 255, 0)");
    featherGradient.addColorStop(0.58, "rgba(228, 235, 255, 0.2)");
    featherGradient.addColorStop(0.82, "rgba(245, 248, 255, 0.42)");
    featherGradient.addColorStop(1, "rgba(255, 255, 255, 0)");

    ctx.fillStyle = featherGradient;
    ctx.fillRect(
      hole.x - EVENT_HORIZON * 1.5,
      hole.y - EVENT_HORIZON * 1.5,
      EVENT_HORIZON * 3,
      EVENT_HORIZON * 3,
    );
    ctx.restore();
  }

  function drawCenterWord(opacity) {
    if (opacity <= 0) {
      return;
    }

    ctx.save();
    ctx.globalAlpha = opacity;
    configureCenterWordContext();
    ctx.shadowColor = "rgba(255, 255, 255, 0.92)";
    ctx.shadowBlur = EVENT_HORIZON * 0.3;
    ctx.fillStyle = "rgba(255, 255, 255, 0.98)";
    ctx.fillText(HOLE_WORD, hole.x, hole.y + EVENT_HORIZON * 0.04);
    ctx.restore();
  }

  function drawAccretionDisk(opacity) {
    if (opacity <= 0) {
      return;
    }

    ctx.save();
    ctx.globalAlpha = opacity;
    const tiltY = 0.35;
    const glowSize = EVENT_HORIZON * 4.1;
    const outerGlow = ctx.createRadialGradient(
      hole.x,
      hole.y,
      EVENT_HORIZON * 0.9,
      hole.x,
      hole.y,
      glowSize,
    );
    outerGlow.addColorStop(0, "rgba(188, 128, 255, 0.07)");
    outerGlow.addColorStop(0.32, "rgba(255, 152, 58, 0.04)");
    outerGlow.addColorStop(0.62, "rgba(104, 84, 206, 0.018)");
    outerGlow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = outerGlow;
    ctx.fillRect(
      hole.x - glowSize,
      hole.y - glowSize,
      glowSize * 2,
      glowSize * 2,
    );

    for (const particle of accretionParticles) {
      particle.angle += particle.speed * 0.016;

      const px = hole.x + Math.cos(particle.angle) * particle.orbitRadius;
      const py =
        hole.y +
        Math.sin(particle.angle) * particle.orbitRadius * tiltY +
        particle.z * 16;
      const behindFactor = Math.sin(particle.angle) < 0 ? 0.3 : 1;
      const color = ACCRETION_COLORS[particle.colorIdx];
      const alpha =
        particle.brightness *
        behindFactor *
        (0.52 + Math.sin(time * 2 + particle.angle) * 0.2);
      const dopplerBoost = 1 + Math.cos(particle.angle) * 0.35;

      ctx.beginPath();
      ctx.arc(px, py, particle.size * dopplerBoost, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha * dopplerBoost})`;
      ctx.fill();

      for (let i = 1; i <= ACCRETION_TRAIL_STEPS; i++) {
        const tailAngle = particle.angle - particle.speed * 0.016 * i * 3;
        const tx = hole.x + Math.cos(tailAngle) * particle.orbitRadius;
        const ty =
          hole.y +
          Math.sin(tailAngle) * particle.orbitRadius * tiltY +
          particle.z * 16;
        const tailAlpha = alpha * (1 - i / ACCRETION_TRAIL_STEPS) * 0.28;

        ctx.beginPath();
        ctx.arc(tx, ty, particle.size * 0.58, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${tailAlpha})`;
        ctx.fill();
      }
    }

    ctx.beginPath();
    ctx.ellipse(
      hole.x,
      hole.y,
      EVENT_HORIZON * 1.2,
      EVENT_HORIZON * 1.2 * tiltY,
      0,
      0,
      Math.PI * 2,
    );
    ctx.strokeStyle = `rgba(255, 204, 112, ${0.16 + Math.sin(time * 1.5) * 0.04})`;
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.beginPath();
    ctx.ellipse(
      hole.x,
      hole.y,
      EVENT_HORIZON * 1.06,
      EVENT_HORIZON * 1.06 * tiltY,
      0,
      0,
      Math.PI * 2,
    );
    ctx.strokeStyle = `rgba(226, 188, 255, ${0.2 + Math.sin(time * 1.8) * 0.04})`;
    ctx.lineWidth = 1.5;
    ctx.stroke();

    drawHoleCore(opacity);
    drawCenterWord(opacity);
    ctx.restore();
  }

  function updateHawkingRadiation(opacity) {
    if (
      hawkingParticles.length < MAX_HAWKING_PARTICLES &&
      Math.random() < 0.14 * opacity
    ) {
      const angle = Math.random() * Math.PI * 2;
      hawkingParticles.push({
        x: hole.x + Math.cos(angle) * EVENT_HORIZON * 1.05,
        y: hole.y + Math.sin(angle) * EVENT_HORIZON * 1.05,
        vx: Math.cos(angle) * (0.8 + Math.random() * 1.6),
        vy: Math.sin(angle) * (0.8 + Math.random() * 1.6),
        life: 1,
        size: Math.random() * 1.3 + 0.45,
        hue: Math.random() < 0.5 ? 260 : 42,
      });
    }

    for (let i = hawkingParticles.length - 1; i >= 0; i--) {
      const particle = hawkingParticles[i];
      particle.x += particle.vx;
      particle.y += particle.vy;
      particle.life -= 0.018;
      particle.vx *= 0.985;
      particle.vy *= 0.985;

      if (particle.life <= 0) {
        hawkingParticles.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fillStyle = `hsla(${particle.hue}, 72%, 82%, ${particle.life * 0.34 * opacity})`;
      ctx.fill();
    }
  }

  function frame() {
    time += 0.016;
    const textFade = smoothstepRange(
      INTRO_TEXT_FADE_START,
      INTRO_TEXT_FADE_END,
      time,
    );
    const holeFade = smoothstepRange(
      INTRO_HOLE_FADE_START,
      INTRO_HOLE_FADE_END,
      time,
    );
    const effectStrength = smoothstepRange(
      INTRO_EFFECT_START,
      INTRO_EFFECT_END,
      time,
    );
    const pointerBlend = smoothstepRange(
      INTRO_POINTER_START,
      INTRO_POINTER_END,
      time,
    );
    const mouseTargetX = mouse.active ? mouse.x : W / 2;
    const mouseTargetY = mouse.active ? mouse.y : H / 2;
    const targetX = W / 2 + (mouseTargetX - W / 2) * pointerBlend;
    const targetY = H / 2 + (mouseTargetY - H / 2) * pointerBlend;
    const previousHoleX = hole.x;
    const previousHoleY = hole.y;
    hole.x += (targetX - hole.x) * DEFAULT_HOLE_FOLLOW;
    hole.y += (targetY - hole.y) * DEFAULT_HOLE_FOLLOW;
    holeVelocity.x = hole.x - previousHoleX;
    holeVelocity.y = hole.y - previousHoleY;

    if (backgroundLayerCanvas !== null) {
      ctx.drawImage(backgroundLayerCanvas, 0, 0, W, H);
    } else {
      ctx.fillStyle = BG_COLOR;
      ctx.fillRect(0, 0, W, H);
      drawNebula();
    }

    drawStars(effectStrength);
    drawLensingRing(holeFade * effectStrength);

    configureTextContext();

    for (let i = 0; i < chars.length; i++) {
      const char = chars[i];

      warpChar(char, effectStrength);
      const spring = 0.04 * (1 - char.fieldInfluence * 0.75);
      char.vx += (char.baseX - char.x) * spring;
      char.vy += (char.baseY - char.y) * spring;
      const damping = 0.9 + char.fieldInfluence * 0.045;
      char.vx *= damping;
      char.vy *= damping;
      char.x += char.vx;
      char.y += char.vy;

      if (char.absorbProgress >= 1) {
        continue;
      }

      const displacement = Math.sqrt(
        (char.x - char.baseX) ** 2 + (char.y - char.baseY) ** 2,
      );
      const charCenterX = char.x + char.width / 2;
      const charCenterY = char.y + LINE_HEIGHT / 2;
      const distToHole = Math.sqrt(
        (charCenterX - hole.x) ** 2 + (charCenterY - hole.y) ** 2,
      );

      const distanceT = 1 - clamp(distToHole / (GRAVITY_RADIUS * 1.04), 0, 1);
      const gray = Math.round(54 + Math.pow(distanceT, 1.35) * 196);
      const alpha = Math.max(
        0.34,
        0.52 + distanceT * 0.34 - char.absorbProgress * 0.3,
      );
      const r = gray;
      const g = gray;
      const b = gray;

      const finalAlpha = alpha * (1 - char.absorbProgress) * textFade;
      const needsTransform = char.stretch > 1.03;
      const needsGlow = displacement > 8 && distToHole < GRAVITY_RADIUS * 0.62;
      const fillStyle = `rgb(${r}, ${g}, ${b})`;

      if (!needsTransform && !needsGlow) {
        ctx.globalAlpha = finalAlpha;
        ctx.fillStyle = fillStyle;
        ctx.fillText(char.char, char.x, char.y);
        continue;
      }

      ctx.save();

      if (needsTransform) {
        ctx.translate(charCenterX, charCenterY);
        ctx.rotate(char.rotation);
        ctx.scale(char.stretch, 1 / Math.sqrt(char.stretch));
        ctx.translate(-charCenterX, -charCenterY);
      }

      if (needsGlow) {
        ctx.shadowColor = `rgba(${r}, ${g}, ${b}, 0.4)`;
        ctx.shadowBlur = Math.min(displacement * 0.18, 8);
      }

      ctx.globalAlpha = finalAlpha;
      ctx.fillStyle = fillStyle;
      ctx.fillText(char.char, char.x, char.y);
      ctx.restore();
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;

    drawAccretionDisk(holeFade);
    updateHawkingRadiation(holeFade * effectStrength);

    if (vignetteLayerCanvas !== null) {
      ctx.drawImage(vignetteLayerCanvas, 0, 0, W, H);
    } else {
      drawVignette();
    }

    animationFrameId = requestAnimationFrame(frame);
  }

  const handlePointerMove = (event) => {
    setMouseFromClient(event.clientX, event.clientY);
  };

  const handlePointerDown = (event) => {
    setMouseFromClient(event.clientX, event.clientY);
  };

  const handlePointerLeave = () => {
    mouse.active = false;
  };

  canvas.addEventListener("pointermove", handlePointerMove);
  canvas.addEventListener("pointerdown", handlePointerDown);
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
    canvas.removeEventListener("pointermove", handlePointerMove);
    canvas.removeEventListener("pointerdown", handlePointerDown);
    canvas.removeEventListener("pointerleave", handlePointerLeave);
    resizeObserver?.disconnect();
    if (!hasResizeObserver) {
      window.removeEventListener("resize", resize);
    }
  };
}
