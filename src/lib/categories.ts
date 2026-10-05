export const NOTE_CATEGORIES = [
  { id: "skills", label: "Context 與 Skills" },
  { id: "harness", label: "Harness 與 factory" },
  { id: "evals", label: "Evals 與 verification" },
  { id: "memory", label: "Memory" },
  { id: "security", label: "Security" },
  { id: "team", label: "團隊與採用" },
  { id: "models", label: "模型與工具" },
  { id: "other", label: "其他" },
] as const;

export type NoteCategoryId = (typeof NOTE_CATEGORIES)[number]["id"];

const RULES: { id: Exclude<NoteCategoryId, "other">; pattern: RegExp }[] = [
  {
    id: "security",
    pattern:
      /secur|snyk|vulnerab|malicious|malware|owasp|prompt injection|supply chain|\bsecrets?\b|openclaw|hacked|risky software/i,
  },
  {
    id: "memory",
    pattern: /\bmemor|\bdreaming\b|context drift|\brag\b|fine-tun/i,
  },
  {
    id: "evals",
    pattern:
      /\bevals?\b|benchmark|code review|observab|opentelemetry|\btdd\b|verif|sentry|\btracing\b|population test|\brubrics?\b/i,
  },
  {
    id: "skills",
    pattern:
      /\bskills?\b|context engineer|context as code|\bspecs?\b|\bcontext\b|\brules\b|usage spec/i,
  },
  {
    id: "harness",
    pattern:
      /harness|\bfactory\b|orchestrat|multi-agent|workflow|self-merg|control plane|software factory|\bsparc\b/i,
  },
  {
    id: "team",
    pattern:
      /adopt|enterprise|transform|identity|productiv|hiring|\bteam\b|working at|organis|organiz/i,
  },
  {
    id: "models",
    pattern:
      /\bmodels?\b|\bides?\b|cursor|copilot|\bmcp\b|gemini|\bgpt\b|\bcli\b|codex|claude code|hugging face|tessl init/i,
  },
];

const PRIORITY = RULES.map((rule) => rule.id);

export const PREVIEW_IDS = new Set([
  "LFAAHnAzBlk",
  "Gl5ZJGTb72w",
  "fVvKI_ouVp4",
  "hgO_F90MFAc",
  "XH8jVolg7S0",
  "l1WyQKUeRWI",
  "3fXAZZusxew",
  "Nm8N5BThi58",
  "W6CntScmhzM",
  "HnLRDYI6HxM",
  "PfDOFL_Fu_A",
  "b9izY52Yzkk",
  "r8a6zq7WJpY",
  "Dhsuh9d97Yo",
  "fquEseoZQNg",
  "Z7lNA_SQZRU",
  "q5M7fktysTQ",
  "Ej17vt34twY",
  "XPgl3ZjCJbI",
  "7I1T7i4zwLI",
  "rNG_7Etlh7U",
  "mVIRYUoVD6Y",
  "Ua-fy6qzgYk",
  "uHF5KTuwktk",
  "Z-4kjZmGJTg",
  "-JVY1JWCgRM",
  "uoLQ0UAYfEI",
]);

function hits(text: string) {
  return RULES.map((rule) => (rule.pattern.test(text) ? rule.id : null)).filter(
    (id): id is Exclude<NoteCategoryId, "other"> => id !== null,
  );
}

export function classifyNote(title: string, excerpt: string): NoteCategoryId {
  const titleHits = new Set(hits(title));
  const excerptHits = new Set(hits(excerpt));
  let best = 0;
  let winner: NoteCategoryId = "other";
  for (const id of PRIORITY) {
    const score = (titleHits.has(id) ? 3 : 0) + (excerptHits.has(id) ? 1 : 0);
    if (score > best) {
      best = score;
      winner = id;
    }
  }
  return winner;
}

export function categoryLabel(id: NoteCategoryId) {
  return NOTE_CATEGORIES.find((category) => category.id === id)?.label ?? "其他";
}
