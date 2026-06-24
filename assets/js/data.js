/* =========================================================================
   SITE DATA  — single source of truth
   Titles / author lists / venue names are kept in English in both languages
   (academic convention). CCF / JCR ranks are shown only in the Chinese view.
   ========================================================================= */

const SITE = {
  name:    { en: "Tianchi Liu",        zh: "柳天驰" },
  nameSub: { en: "",                   zh: "Tianchi Liu" },
  footerName: { en: "Tianchi Liu",     zh: "Tianchi Liu · 柳天驰" },
  roles: {
    en: [
      "Senior Researcher @ Tencent, Singapore",
      "Ph.D. @ National University of Singapore",
      "Ex-A*STAR, Singapore",
    ],
    zh: [
      "腾讯（新加坡）高级研究员",
      "新加坡国立大学 博士",
      "前新加坡 A*STAR 研究员",
    ],
  },
  tagline: {
    en: "Speech Generative AI · Speaker Recognition · Anti-Spoofing · Speech-LLM",
    zh: "语音生成式 AI · 说话人识别 · 反欺骗检测 · 语音大模型",
  },
  email: "tianchi_liu@u.nus.edu",
  links: {
    scholar: "https://scholar.google.com/citations?hl=en&user=1W24GsQAAAAJ",
    github:  "https://github.com/Liu-Tianchi",
    linkedin:"https://www.linkedin.com/in/tianchi-liu",
  },
  /* Google Scholar live stats (auto-updated daily by the GitHub Action).
     Per-paper citations & the hero total are fetched at runtime from the
     `google-scholar-stats` branch; the values below are fallbacks. */
  scholar: {
    repo:   "Liu-Tianchi/Liu-Tianchi.github.io",
    branch: "google-scholar-stats",
    fallbackCitedby: 520,
    fallbackHindex: 13,
  },
};

/* ----------------------------------------------------------------------- */
const BIO = {
  en: `I am a Senior Researcher at <b>Tencent Singapore</b>, selected for the <i>'Project Up' (青云计划)</i> talent programme, where I work on <b>Speech Synthesis &amp; Speech Generative AI</b>. I received my Ph.D. from the <b>National University of Singapore (NUS)</b>, advised by Prof. <a href="https://scholar.google.com/citations?user=z8_x7C8AAAAJ&hl=en" target="_blank" rel="noopener">Li Haizhou</a> and Prof. <a href="https://scholar.google.com/citations?user=h1-3lSoAAAAJ&hl=en" target="_blank" rel="noopener">Mike Z. Shou</a>. Before Tencent, I was a Senior Research Engineer at <b>A*STAR</b>, Singapore, working on Speech-LLM (MERaLiON Team), speech anti-spoofing, and speaker recognition.`,
  zh: `我是<b>腾讯（新加坡）</b>高级研究员，入选 <i>“青云计划”</i> 人才项目，研究方向为<b>语音合成与语音生成式 AI</b>。我于<b>新加坡国立大学（NUS）</b>获得博士学位，导师为 <a href="https://scholar.google.com/citations?user=z8_x7C8AAAAJ&hl=en" target="_blank" rel="noopener">Li Haizhou</a> 教授与 <a href="https://scholar.google.com/citations?user=h1-3lSoAAAAJ&hl=en" target="_blank" rel="noopener">Mike Z. Shou</a> 教授。加入腾讯前，我在新加坡 <b>A*STAR</b> 担任高级研究工程师，从事语音大模型（MERaLiON 团队）、语音反欺骗与说话人识别研究。`,
};

const STATS = {
  en: [
    { id: "citedby", num: "520", label: "Citations", sub: "Google Scholar" },
    { id: "hindex",  num: "13",  label: "h-index" },
    { num: "NeurIPS · TIFS · TASLP", label: "Top Venues", small: true },
    { num: "5+", label: "Awards" },
  ],
  zh: [
    { id: "citedby", num: "520", label: "总被引", sub: "Google Scholar" },
    { id: "hindex",  num: "13",  label: "h 指数" },
    { num: "NeurIPS · TIFS · TASLP", label: "顶级会议 / 期刊", small: true },
    { num: "5+", label: "获奖荣誉" },
  ],
};

/* ----------------------------------------------------------------------- */
const NEWS = [
  { date: "2025.12", type: "award",
    en: 'Co-authored paper received the <b>Best Paper Award</b> at <b>APSIPA ASC 2025</b>.',
    zh: '合作论文荣获 <b>APSIPA ASC 2025</b> <b>最佳论文奖</b>。' },
  { date: "2025.10", type: "paper",
    en: '<b>Nes2Net</b> published in <b>IEEE TIFS</b> — a lightweight foundation-model anti-spoofing backbone.',
    zh: '<b>Nes2Net</b> 发表于 <b>IEEE TIFS</b>，一种轻量级语音反欺骗骨干网络。' },
  { date: "2025.02", type: "career",
    en: 'Joined <b>Tencent Singapore</b> as Senior Researcher under the "Project Up" programme.',
    zh: '以“青云计划”身份加入<b>腾讯（新加坡）</b>，任高级研究员。' },
  { date: "2025.01", type: "career",
    en: 'Successfully defended my Ph.D. thesis at <b>NUS</b> 🎓.',
    zh: '顺利通过<b>新加坡国立大学</b>博士论文答辩 🎓。' },
];

/* ----------------------------------------------------------------------- */
const RESEARCH = {
  en: [
    { icon: "🗣️", title: "Speech Processing",
      desc: "Text-to-Speech, Speaker Recognition, Speech Foundation Models, Anti-Spoofing / Deepfake Detection, Target Speaker Extraction." },
    { icon: "🧩", title: "Multi-modal Learning",
      desc: "Speech-LLM, Audio-Visual understanding and reasoning." },
    { icon: "⚙️", title: "Algorithms",
      desc: "Self-supervised Learning, Disentanglement Learning, Efficient Architectures." },
  ],
  zh: [
    { icon: "🗣️", title: "语音处理",
      desc: "语音合成、说话人识别、语音基础模型、反欺骗 / 深度伪造检测、目标说话人提取。" },
    { icon: "🧩", title: "多模态学习",
      desc: "语音大模型（Speech-LLM）、音视频理解与推理。" },
    { icon: "⚙️", title: "算法研究",
      desc: "自监督学习、解耦表征学习、高效网络架构。" },
  ],
};

const EDUCATION = {
  en: [
    { period: "2021 – 2025", deg: "Ph.D. in Speech Processing", org: "National University of Singapore" },
    { period: "2018 – 2019", deg: "M.Sc. in Electronic & Computer Engineering", org: "National University of Singapore" },
  ],
  zh: [
    { period: "2021 – 2025", deg: "语音处理 博士", org: "National University of Singapore" },
    { period: "2018 – 2019", deg: "电子与计算机工程 硕士（计算机工程方向）", org: "National University of Singapore" },
  ],
};

const EXPERIENCE = {
  en: [
    { period: "2025.02 – Now",   role: "Senior Researcher · 'Project Up' (青云计划)", org: "Tencent, Singapore" },
    { period: "2020.09 – 2025.02", role: "Senior Research Engineer", org: "A*STAR, Singapore" },
    { period: "2019.06 – 2020.08", role: "AI Scientist", org: "PENSEES R&D Center, Singapore" },
  ],
  zh: [
    { period: "2025.02 – 至今",   role: "高级研究员 · 青云计划", org: "Tencent, Singapore" },
    { period: "2020.09 – 2025.02", role: "高级研究工程师", org: "A*STAR, Singapore" },
    { period: "2019.06 – 2020.08", role: "AI 科学家", org: "PENSEES R&D Center, Singapore" },
  ],
};

/* =========================================================================
   VENUE METADATA  — controls the venue badge + ranking chip
   tier:     'A' | 'B' | 'C' | 'work' (workshop) | 'pre' (preprint/other)
   rank:     short text shown ONLY in Chinese view (CCF / JCR). null = hidden
   emphasis: true -> extra highlighted colour for the most important venues
   ========================================================================= */
const VENUES = {
  NeurIPS:      { name: "NeurIPS",      kind: "conf",     tier: "A",    rank: "CCF-A",          emphasis: true },
  ACL:          { name: "ACL",          kind: "conf",     tier: "A",    rank: "CCF-A",          emphasis: true },
  EMNLP:        { name: "EMNLP",        kind: "conf",     tier: "B",    rank: "CCF-B",          emphasis: true },
  TIFS:         { name: "IEEE TIFS",    kind: "journal",  tier: "A",    rank: "CCF-A · 中科院 1 区", emphasis: true },
  TASLP:        { name: "IEEE/ACM TASLP", kind: "journal", tier: "B",   rank: "CCF-B · 中科院 2 区", emphasis: true },
  ICASSP:       { name: "ICASSP",       kind: "conf",     tier: "B",    rank: "CCF-B" },
  INTERSPEECH:  { name: "INTERSPEECH",  kind: "conf",     tier: "C",    rank: "CCF-B" },
  ASRU:         { name: "IEEE ASRU",    kind: "workshop", tier: "work", rank: "CCF-C" },
  SLT:          { name: "IEEE SLT",     kind: "workshop", tier: "work", rank: "CCF-C" },
  APSIPA:       { name: "APSIPA ASC",   kind: "conf",     tier: "pre",  rank: null },
  SPL:          { name: "IEEE SPL",     kind: "journal",  tier: "n",    rank: "CCF-C · 中科院 3 区" },
  JSJU:         { name: "J. SJTU (Sci.)", kind: "journal", tier: "n", rank: null },
  PREPRINT:     { name: "Preprint",     kind: "preprint", tier: "pre",  rank: null },
  THESIS:       { name: "Ph.D. Thesis", kind: "preprint", tier: "pre",  rank: null },
};

/* TASK taxonomy — per-paper "what" tags (kept specific & short) */
const TASKS = {
  SR:   { en: "Speaker Recognition",       zh: "说话人识别" },
  TSE:  { en: "Target Speaker Extraction", zh: "目标说话人提取" },
  AS:   { en: "Anti-Spoofing / Deepfake",  zh: "反欺骗 / 深度伪造检测" },
  DD:   { en: "Deception Detection",       zh: "欺骗检测" },
  SLLM: { en: "Speech-LLM",                zh: "语音大模型" },
  TTS:  { en: "Text-to-Speech",            zh: "语音合成" },
  ASR:  { en: "Speech Recognition",        zh: "语音识别" },
  DATA: { en: "Dataset / Benchmark",       zh: "数据集 / 基准" },
};

/* TOPIC grouping — used for the publication-list headers AND the Topic filter.
   A paper belongs to a topic via its `cat` field. */
const CATEGORIES = [
  { key: "sllm", en: "Speech-LLM: Pretraining & Reasoning", zh: "语音大模型：预训练与推理" },
  { key: "sre",  en: "Speaker Recognition / Extraction", zh: "说话人识别 / 提取" },
  { key: "sec",  en: "Security (DeepFake / Deception Detection, Anti-Spoofing)", zh: "安全（深度伪造 / 欺骗检测、反欺骗）" },
  { key: "tts",  en: "Text-to-Speech", zh: "语音合成" },
  { key: "asr",  en: "Speech Recognition", zh: "语音识别" },
];

/* =========================================================================
   PUBLICATIONS
   fields:
     authors   : string (**Tianchi Liu** = self; trailing * = equal contrib)
     title, venue (key into VENUES), year
     cat       : category key (for grouping)
     tasks     : [TASK keys]              (the "what")
     method    : { en, zh }               (one optional "how" tag)
     oral, award, note, team
     corr      : true   -> Tianchi is corresponding author  (set as needed)
     links     : [{label, url}]
     -- featured only --
     featured  : true ; teaser ; logo ; stars ; citations (number)
   ========================================================================= */
const PUBLICATIONS = [
  /* ---------- FEATURED / SELECTED ---------- */
  {
    authors: "**Tianchi Liu**, D. T. Truong, R. K. Das, K. A. Lee, H. Li",
    title: "Nes2Net: A Lightweight Nested Architecture for Foundation Model Driven Speech Anti-spoofing",
    venue: "TIFS", year: 2025, cat: "sec",
    tasks: ["AS"], method: { en: "Nested Architecture", zh: "嵌套网络架构" },
    featured: true, teaser: "assets/img/teasers/nes2net.png",
    stars: "Liu-Tianchi/Nes2Net", citations: 34,
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/11222612" },
      { label: "arXiv", url: "https://arxiv.org/abs/2504.05657v1" },
      { label: "Code", url: "https://github.com/Liu-Tianchi/Nes2Net" },
    ],
  },
  {
    authors: "**Tianchi Liu**, K. A. Lee, Q. Wang, H. Li",
    title: "Golden Gemini is All You Need: Finding the Sweet Spots for Speaker Verification",
    venue: "TASLP", year: 2024, cat: "sre",
    tasks: ["SR"], method: { en: "Architecture Design", zh: "网络结构设计" },
    featured: true, teaser: "assets/img/teasers/gemini.png", citations: 43,
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/abstract/document/10497864/" },
      { label: "arXiv", url: "https://arxiv.org/abs/2312.03620" },
      { label: "Models", url: "https://github.com/Liu-Tianchi/Golden-Gemini-for-Speaker-Verification" },
      { label: "WeSpeaker", url: "https://github.com/wenet-e2e/wespeaker/tree/master/examples/voxceleb/v2" },
    ],
  },
  {
    authors: "**Tianchi Liu**, K. A. Lee, Q. Wang, H. Li",
    title: "Disentangling Voice and Content with Self-Supervision for Speaker Recognition",
    venue: "NeurIPS", year: 2023, cat: "sre", award: "Best Paper Award (Third parties)",
    tasks: ["SR"], method: { en: "Disentanglement Learning", zh: "解耦表征学习" },
    featured: true, teaser: "assets/img/teasers/disentangle.png", logo: "assets/img/logos/disentangle.png", citations: 61,
    links: [
      { label: "NeurIPS", url: "https://proceedings.neurips.cc/paper_files/paper/2023/hash/9d276b0a087efdd2404f3295b26c24c1-Abstract-Conference.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2310.01128" },
    ],
  },
  {
    authors: "**Tianchi Liu**, R. K. Das, K. A. Lee, H. Li",
    title: "MFA: TDNN with multi-scale frequency-channel attention for text-independent speaker verification with short utterances",
    venue: "ICASSP", year: 2022, oral: true, cat: "sre",
    tasks: ["SR"], method: { en: "Attention", zh: "注意力机制" },
    featured: true, teaser: "assets/img/teasers/mfa.png", citations: 122,
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/abstract/document/9747021/" },
      { label: "arXiv", url: "https://arxiv.org/abs/2202.01624" },
      { label: "Code", url: "https://github.com/Liu-Tianchi/MFA-TDNN" },
    ],
  },
  {
    authors: "M. Huzaifah*, G. Lin*, **Tianchi Liu***, H. B. Sailor*, K. M. Tan*, T. K. Vangani*, Q. Wang*, J. H. M. Wong*, N. F. Chen, A. T. Aw",
    title: "MERaLiON-SpeechEncoder: Towards a Speech Foundation Model for Singapore and Beyond",
    venue: "PREPRINT", year: 2024, cat: "sllm",
    tasks: ["SLLM"], team: "MERaLiON", method: { en: "Foundation Model Pretraining", zh: "基础模型预训练" },
    featured: true, teaser: "assets/img/teasers/meralion.png", logo: "assets/img/logos/meralion.png", citations: 6,
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2412.11538" },
      { label: "Hugging Face", url: "https://huggingface.co/MERaLiON" },
    ],
  },
  /* 6th slot reserved for a future highlight */
  { placeholder: true, featured: true },

  /* ---------- Speech-LLM Pretraining & Reasoning ---------- */
  {
    authors: "Q. Wang, H. B. Sailor, **Tianchi Liu**, et al.",
    title: "Benchmarking Contextual and Paralinguistic Reasoning in Speech-LLMs: A Case Study with In-the-Wild Data",
    venue: "EMNLP", year: 2025, cat: "sllm", note: { en: "Findings", zh: "Findings" },
    tasks: ["SLLM", "DATA"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2509.16589" },
      { label: "ACL Anthology", url: "https://aclanthology.org/2025.findings-emnlp.760/" },
    ],
  },
  {
    authors: "Q. Wang, H. B. Sailor, J. H. Wong, **Tianchi Liu**, et al.",
    title: "Incorporating Contextual Paralinguistic Understanding in Large Speech-Language Models",
    venue: "ASRU", year: 2025, cat: "sllm",
    tasks: ["SLLM"],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2508.07273" }],
  },
  {
    authors: "Q. Wang, H. B. Sailor, **Tianchi Liu**, A. T. Aw",
    title: "Contextual Paralinguistic Data Creation for Multi-Modal Speech-LLM: Data Condensation and Spoken QA Generation",
    venue: "INTERSPEECH", year: 2025, cat: "sllm",
    tasks: ["SLLM", "DATA"], method: { en: "Data Condensation", zh: "数据浓缩" },
    links: [
      { label: "ISCA", url: "https://www.isca-archive.org/interspeech_2025/wang25e_interspeech.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2505.13338" },
      { label: "Dataset", url: "https://huggingface.co/datasets/MERaLiON/CPQA-Evaluation-Set" },
    ],
  },
  {
    authors: "L. Xue, ..., **Tianchi Liu**, et al.",
    title: "Audio-FLAN: A Preliminary Release",
    venue: "PREPRINT", year: 2025, cat: "sllm", note: { en: "Under Review", zh: "审稿中" },
    tasks: ["SLLM", "DATA"],
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2502.16584" },
      { label: "Dataset", url: "https://huggingface.co/datasets/HKUSTAudio/Audio-FLAN-Dataset" },
      { label: "GitHub", url: "https://github.com/lmxue/Audio-FLAN" },
    ],
  },

  /* ---------- Speaker Recognition & Target Speaker Extraction ---------- */
  {
    authors: "R. Tao, Z. Shi, Y. Jiang, **Tianchi Liu**, H. Li",
    title: "Voice Conversion Augmentation for Speaker Recognition on Defective Datasets",
    venue: "APSIPA", year: 2025, cat: "sre", award: "Best Paper Award",
    tasks: ["SR"], method: { en: "Data Augmentation", zh: "数据增强" },
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2404.00863" },
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/11249009" },
    ],
  },
  {
    authors: "Y. Ma, S. Wang, **Tianchi Liu**, H. Li",
    title: "PhiNet: Speaker Verification with Phonetic Interpretability",
    venue: "TASLP", year: 2025, cat: "sre",
    tasks: ["SR"], method: { en: "Interpretability", zh: "可解释性" },
    links: [{ label: "IEEE", url: "https://ieeexplore.ieee.org/document/11293376" }],
  },
  {
    authors: "J. Li, K. A. Lee, D. T. Truong, **Tianchi Liu**, M. W. Mak",
    title: "Xi+: Uncertainty Supervision for Robust Speaker Embedding",
    venue: "ICASSP", year: 2026, cat: "sre",
    tasks: ["SR"], method: { en: "Uncertainty Modeling", zh: "不确定性建模" },
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.05993" }],
  },
  {
    authors: "**Tianchi Liu**, R. Tao, Q. Wang, et al.",
    title: "Interpolating Speaker Identities in Embedding Space for Data Expansion",
    venue: "APSIPA", year: 2025, cat: "sre",
    tasks: ["SR"], method: { en: "Data Expansion", zh: "数据扩充" },
    links: [
      { label: "arXiv", url: "https://arxiv.org/abs/2508.19210" },
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/11249126" },
    ],
  },
  {
    authors: "Y. Ma, S. Wang, **Tianchi Liu**, H. Li",
    title: "ExPO: Explainable Phonetic Trait-Oriented Network for Speaker Verification",
    venue: "SPL", year: 2025, cat: "sre",
    tasks: ["SR"], method: { en: "Interpretability", zh: "可解释性" },
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/10845144" },
      { label: "arXiv", url: "https://arxiv.org/abs/2501.05729" },
      { label: "Code", url: "https://github.com/mmmmayi/ExPO" },
    ],
  },
  {
    authors: "K. Zhang, M. Borsdorf, **Tianchi Liu**, S. Wang, Y. Wei, H. Li",
    title: "Speaker Extraction with Verification of Present and Absent Target Speakers",
    venue: "JSJU", year: 2025, cat: "sre",
    tasks: ["TSE"],
    links: [{ label: "Paper", url: "https://link.springer.com/article/10.1007/s12204-025-2798-4" }],
  },
  {
    authors: "**Tianchi Liu**",
    title: "Advances in Robust and Practical Speaker Verification",
    venue: "THESIS", year: 2025, cat: "sre",
    tasks: ["SR"],
    links: [],
  },
  {
    authors: "Q. Wang, K. A. Lee, **Tianchi Liu**",
    title: "Incorporating Uncertainty from Speaker Embedding Estimation to Speaker Verification",
    venue: "ICASSP", year: 2023, oral: true, cat: "sre",
    tasks: ["SR"], method: { en: "Uncertainty Modeling", zh: "不确定性建模" },
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/10097019/" },
      { label: "arXiv", url: "https://arxiv.org/abs/2302.11763" },
    ],
  },
  {
    authors: "**Tianchi Liu**, R. K. Das, K. A. Lee, H. Li",
    title: "Neural acoustic-phonetic approach for speaker verification with phonetic attention mask",
    venue: "SPL", year: 2022, cat: "sre",
    tasks: ["SR"], method: { en: "Attention", zh: "注意力机制" },
    links: [{ label: "IEEE", url: "https://ieeexplore.ieee.org/abstract/document/9681187/" }],
  },
  {
    authors: "Q. Wang, K. A. Lee, **Tianchi Liu**",
    title: "Scoring of Large-Margin Embeddings for Speaker Verification: Cosine or PLDA?",
    venue: "INTERSPEECH", year: 2022, oral: true, cat: "sre",
    tasks: ["SR"],
    links: [
      { label: "ISCA", url: "https://www.isca-archive.org/interspeech_2022/wang22r_interspeech.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2204.03965" },
    ],
  },
  {
    authors: "**Tianchi Liu**, R. K. Das, M. C. Madhavi, S. Shen, H. Li",
    title: "Speaker-Utterance Dual Attention for Speaker and Utterance Verification",
    venue: "INTERSPEECH", year: 2020, cat: "sre",
    tasks: ["SR"], method: { en: "Attention", zh: "注意力机制" },
    links: [
      { label: "ISCA", url: "https://www.isca-archive.org/interspeech_2020/liu20u_interspeech.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2008.08901" },
    ],
  },
  {
    authors: "**Tianchi Liu**, M. C. Madhavi, R. K. Das, H. Li",
    title: "A Unified Framework for Speaker and Utterance Verification",
    venue: "INTERSPEECH", year: 2019, cat: "sre",
    tasks: ["SR"],
    links: [
      { label: "ISCA", url: "https://www.isca-archive.org/interspeech_2019/liu19m_interspeech.html" },
      { label: "Code", url: "https://github.com/Liu-Tianchi/SUV" },
    ],
  },

  /* ---------- Speech Deepfake Detection / Anti-Spoofing ---------- */
  {
    authors: "D. T. Truong, **Tianchi Liu**, et al.",
    title: "QAMO: Quality-aware Multi-centroid One-class Learning For Speech Deepfake Detection",
    venue: "INTERSPEECH", year: 2026, cat: "sec",
    tasks: ["AS"], method: { en: "One-class Learning", zh: "单类学习" },
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.20679" }],
  },
  {
    authors: "D. T. Truong, **Tianchi Liu**, et al.",
    title: "Addressing Gradient Misalignment in Data-Augmented Training for Robust Speech Deepfake Detection",
    venue: "ICASSP", year: 2026, cat: "sec",
    tasks: ["AS"], method: { en: "Robust Training", zh: "鲁棒训练" },
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2509.20682" }],
  },
  {
    authors: "**Tianchi Liu**, L. Zhang, R. K. Das, Y. Ma, R. Tao, H. Li",
    title: "How Do Neural Spoofing Countermeasures Detect Partially Spoofed Audio?",
    venue: "INTERSPEECH", year: 2024, oral: true, cat: "sec",
    tasks: ["AS"], method: { en: "Analysis / Interpretability", zh: "机理分析" },
    links: [
      { label: "ISCA", url: "https://www.isca-archive.org/interspeech_2024/liu24m_interspeech.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2406.02483" },
    ],
  },
  {
    authors: "Z. Pan, **Tianchi Liu**, H. B. Sailor, Q. Wang",
    title: "Attentive Merging of Hidden Embeddings from Pre-trained Speech Model for Anti-spoofing Detection",
    venue: "INTERSPEECH", year: 2024, oral: true, cat: "sec",
    tasks: ["AS"], method: { en: "Feature Fusion", zh: "特征融合" },
    links: [
      { label: "ISCA", url: "https://www.isca-archive.org/interspeech_2024/pan24c_interspeech.html" },
      { label: "arXiv", url: "https://arxiv.org/abs/2406.10283" },
      { label: "Code", url: "https://github.com/pandarialTJU/AttM_INTERSPEECH24" },
    ],
  },
  {
    authors: "**Tianchi Liu**, I. Kukanov, Z. Pan, Q. Wang, H. B. Sailor, K. A. Lee",
    title: "Towards Quantifying and Reducing Language Mismatch Effects in Cross-lingual Speech Anti-Spoofing",
    venue: "SLT", year: 2024, cat: "sec",
    tasks: ["AS"], method: { en: "Cross-lingual", zh: "跨语种" },
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/10832142" },
      { label: "arXiv", url: "https://arxiv.org/abs/2409.08346" },
    ],
  },
  {
    authors: "A. Guragain*, **Tianchi Liu***, Z. Pan, H. B. Sailor, Q. Wang",
    title: "Speech Foundation Model Ensembles for the Controlled Singing Voice Deepfake Detection (CtrSVDD) Challenge 2024",
    venue: "SLT", year: 2024, cat: "sec", note: { en: "Co-first author", zh: "共同一作" },
    tasks: ["AS"], method: { en: "Model Ensemble", zh: "模型集成" },
    links: [
      { label: "IEEE", url: "https://ieeexplore.ieee.org/document/10832226" },
      { label: "arXiv", url: "https://arxiv.org/abs/2409.02302" },
      { label: "Code", url: "https://github.com/Anmol2059/SVDD2024" },
    ],
  },
  {
    authors: "L. Zhang, ..., **Tianchi Liu**, et al.",
    title: "WeDefense: A Toolkit to Defend Against Fake Audio",
    venue: "PREPRINT", year: 2026, cat: "sec",
    tasks: ["AS"],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2601.15240" }],
  },

  /* ---------- TTS ---------- */
  {
    authors: "T. Wang, ..., **Tianchi Liu**, et al.",
    title: "Evaluating the Expressive Appropriateness of Speech in Rich Contexts",
    venue: "ACL", year: 2026, oral: true, cat: "tts",
    tasks: ["TTS", "DATA"],
    links: [{ label: "arXiv", url: "https://arxiv.org/abs/2605.09413" }],
  },

  /* ---------- ASR ---------- */
  {
    authors: "S. Dahal, A. Guragain*, **Tianchi Liu**, et al.",
    title: "Mixture of Phonetic Experts Based Low-Rank Adaptation of Conformer Models for Accented English Speech Recognition",
    venue: "INTERSPEECH", year: 2026, cat: "asr",
    tasks: ["ASR"], method: { en: "Mixture-of-Experts · LoRA", zh: "专家混合 · LoRA" },
    links: [],
  },

  /* ---------- Audio-Visual ---------- */
  {
    authors: "J. Meng, H. B. Sailor, Q. Wang, **Tianchi Liu**, et al.",
    title: "Exploring audio-visual fusion methods in foundation model-based deception detection",
    venue: "APSIPA", year: 2025, cat: "sec",
    tasks: ["DD"], method: { en: "Audio-Visual Fusion", zh: "音视频融合" },
    links: [{ label: "IEEE", url: "https://ieeexplore.ieee.org/document/11249189" }],
  },
];

/* ----------------------------------------------------------------------- */
const OPENSOURCE = [
  { name: "WeSpeaker", repo: "wenet-e2e/wespeaker",
    en: "Production-ready speaker verification toolkit.", zh: "工业级说话人确认工具包。" },
  { name: "AudioLLM", repo: "AudioLLMs/AudioLLM",
    en: "Curated resources for audio large language models.", zh: "音频大模型资源汇总。" },
  { name: "Audio-FLAN", repo: "lmxue/Audio-FLAN",
    en: "Large-scale audio instruction-tuning dataset.", zh: "大规模音频指令微调数据集。" },
  { name: "Nes2Net", repo: "Liu-Tianchi/Nes2Net",
    en: "Lightweight anti-spoofing backbone (TIFS'25).", zh: "轻量级反欺骗骨干网络（TIFS'25）。" },
];

/* ----------------------------------------------------------------------- */
const AWARDS = {
  en: [
    { icon: "🥇", text: "<b>Best Paper Award</b> (1 paper only), APSIPA ASC, 2025 (co-author)" },
    { icon: "🥈", text: "<b>Silver Award</b>, Tencent AI Application Award, Tencent, 2025" },
    { icon: "🥇", text: "<b>Best Student Paper Award</b> (1 / year), PREMIA, 2024" },
    { icon: "🥇", text: "<b>Best Student Paper Award</b> (2 / year), Nanyang Speech Technology Forum, 2024" },
    { icon: "🥉", text: "<b>3rd place</b> / 49 teams, CtrSVDD Challenge 2024 @ IEEE SLT" },
    { icon: "🥇", text: "<b>Best Paper Award</b>, Int'l Doctoral Forum (CUHK &amp; Microsoft), 2023" },
    { icon: "🥇", text: "<b>Travel Grant Award (Top Tier)</b>, COLIPS, 2023" },
    { icon: "🎖️", text: "<b>5th place</b> / 128 teams, NIST FRVT — Face Mask Effects, 2020" },
  ],
  zh: [
    { icon: "🥇", text: "<b>最佳论文奖</b>（全场唯一），APSIPA ASC, 2025（合作者）" },
    { icon: "🥈", text: "<b>腾讯 AI 应用大赛 银奖</b>，Tencent, 2025" },
    { icon: "🥇", text: "<b>最佳学生论文奖</b>（每年 1 名），PREMIA, 2024" },
    { icon: "🥇", text: "<b>最佳学生论文奖</b>（每年 2 名），Nanyang Speech Technology Forum, 2024" },
    { icon: "🥉", text: "<b>季军</b> / 49 支队伍，CtrSVDD Challenge 2024 @ IEEE SLT" },
    { icon: "🥇", text: "<b>最佳论文奖</b>，国际博士论坛（CUHK &amp; Microsoft），2023" },
    { icon: "🥇", text: "<b>顶级旅行资助奖</b>，COLIPS, 2023" },
    { icon: "🎖️", text: "<b>第 5 名</b> / 128 支队伍，NIST FRVT — 口罩效应，2020" },
  ],
};

/* reviewer entries: {n: name, y: year(s)} */
const SERVICE = {
  roles: {
    en: [
      "Local Arrangements Chair @ IEEE APSIPA ASC, 2025",
      "Scientific Committee, Frontiers in Deepfake Voice Detection and Beyond @ IEEE ASRU, 2025",
      "Registration Chair @ Int'l Conf. on Asian Language Processing (IALP), 2025",
      "Virtual Session Chair @ IEEE IALP, 2023",
      'Program Committee @ IEEE ISCSLP, 2022 <a href="https://www.asianlp.sg/conferences/iscslp2022/web/committees/" target="_blank" rel="noopener">↗</a>',
      "Volunteer @ IEEE ICASSP, 2022",
    ],
    zh: [
      "Local Arrangements Chair @ IEEE APSIPA ASC, 2025",
      "Scientific Committee, Frontiers in Deepfake Voice Detection and Beyond @ IEEE ASRU, 2025",
      "Registration Chair @ Int'l Conf. on Asian Language Processing (IALP), 2025",
      "Virtual Session Chair @ IEEE IALP, 2023",
      'Program Committee @ IEEE ISCSLP, 2022 <a href="https://www.asianlp.sg/conferences/iscslp2022/web/committees/" target="_blank" rel="noopener">↗</a>',
      "Volunteer @ IEEE ICASSP, 2022",
    ],
  },
  reviewerJournal: [
    { n: "Neural Networks", y: "'25" },
    { n: "IEEE TASLP", y: "'25" },
    { n: "IEEE TDSC", y: "'25" },
    { n: "IEEE TBIOM", y: "'25" },
    { n: "Computer Speech & Language", y: "'24–'26" },
    { n: "IEEE SPL", y: "'23–'26" },
  ],
  reviewerConf: [
    { n: "ACL", y: "'26" },
    { n: "NeurIPS", y: "'25–'26" },
    { n: "ICASSP", y: "'23–'26" },
    { n: "INTERSPEECH", y: "'23–'26" },
    { n: "IJCNN", y: "'25" },
    { n: "IEEE ASRU", y: "'25" },
    { n: "IEEE SLT", y: "'24" },
    { n: "ASVspoof5", y: "'24" },
    { n: "IEEE ISCSLP", y: "'22" },
  ],
};

/* ----------------------------------------------------------------------- */
const HOBBIES = {
  en: [
    { icon: "☕", title: "Coffee", desc: "A hand-brewed pour-over is how every good idea starts." },
    { icon: "🏀", title: "Basketball", desc: "Weekend pickup games — teamwork on and off the court." },
    { icon: "🏸", title: "Badminton", desc: "Fast rallies to reset the mind after a long day of research." },
    { icon: "🐶", title: "Dogs", desc: "A walk with a happy dog clears any mental block." },
    { icon: "🐱", title: "Cats", desc: "The best debugging companion — purring next to the keyboard." },
    { icon: "✈️", title: "Travel", desc: "Exploring new cities, cultures, and (of course) local cafés." },
  ],
  zh: [
    { icon: "☕", title: "咖啡", desc: "每个好点子，都从一杯手冲开始。" },
    { icon: "🏀", title: "篮球", desc: "周末约球——球场内外都讲究团队配合。" },
    { icon: "🏸", title: "羽毛球", desc: "用一场酣畅的对拉，给长时间科研后的大脑重启。" },
    { icon: "🐶", title: "狗狗", desc: "和狗子散个步，再难的 bug 也想通了。" },
    { icon: "🐱", title: "猫猫", desc: "最佳调试搭档——在键盘边打着呼噜。" },
    { icon: "✈️", title: "旅行", desc: "探索新的城市、文化，当然还有当地的咖啡馆。" },
  ],
};

/* ----------------------------------------------------------------------- */
/* UI strings */
const I18N = {
  nav: {
    about:    { en: "About",        zh: "关于" },
    news:     { en: "News",         zh: "动态" },
    research: { en: "Research",     zh: "研究" },
    selected: { en: "Highlights",   zh: "代表作" },
    pubs:     { en: "Publications", zh: "论文" },
    misc:     { en: "More",         zh: "更多" },
    life:     { en: "Life",         zh: "生活" },
  },
  sec: {
    news:     { en: "Latest News",            zh: "最新动态" },
    research: { en: "Research Interests",     zh: "研究方向" },
    edu:      { en: "Education",              zh: "教育经历" },
    exp:      { en: "Experience",             zh: "工作经历" },
    selected: { en: "Selected Publications",  zh: "代表性工作" },
    pubs:     { en: "All Publications",       zh: "全部论文" },
    os:       { en: "Open Source",            zh: "开源贡献" },
    awards:   { en: "Awards & Honors",        zh: "获奖荣誉" },
    service:  { en: "Academic Service",       zh: "学术服务" },
    life:     { en: "Beyond Research",        zh: "科研之外" },
  },
  misc: {
    email:        { en: "Email",            zh: "邮箱" },
    scholar:      { en: "Google Scholar",   zh: "谷歌学术" },
    reviewer:     { en: "Reviewer",         zh: "审稿人 (Reviewer)" },
    reviewerJ:    { en: "Journals",         zh: "期刊 / 汇刊" },
    reviewerC:    { en: "Conferences",      zh: "会议" },
    oral:         { en: "Oral",             zh: "Oral" },
    cited:        { en: "Citations",        zh: "被引" },
    reserved:     { en: "More to come",     zh: "敬请期待" },
    reservedSub:  { en: "A future highlight will live here.", zh: "此处预留给下一项代表作。" },
  },
  filter: {
    roleLabel: { en: "Role",  zh: "作者角色" },
    taskLabel: { en: "Topic", zh: "研究任务" },
  },
  role: {
    all:    { en: "All",              zh: "全部" },
    first:  { en: "First Author",     zh: "第一作者" },
    cofirst:{ en: "Co-first Author",  zh: "共同一作" },
    none:   { en: "No matching papers.", zh: "暂无匹配的论文。" },
  },
};
