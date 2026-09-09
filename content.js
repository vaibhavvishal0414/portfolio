// ─────────────────────────────────────────────────────────────
//  EDIT EVERYTHING HERE. This is the only file you need to touch.
//  Change the text between the quotes, save, done.
// ─────────────────────────────────────────────────────────────

export const content = {
  // Top-left label
  name: "Vaibhav Vishal",
  role: "Product Designer",

  // Top-right label
  tagRight: "Portfolio — 2026",

  // The big headline — one object per line.
  //   text   = the words on that line
  //   accent = which word in that line turns orange
  //   pill   = "photo" | "work" | none   (the rounded image at the end of the line)
  //   indent = true pushes the line to the right
  headline: [
    { text: "I DESIGN", pill: "photo" },
    { text: "PRODUCTS PEOPLE" },
    { text: "ACTUALLY USE", accent: "ACTUALLY", indent: true, pill: "work" },
  ],

  // Paragraph under the headline
  intro:
    "4+ years designing enterprise platforms, CRM and POS systems, and accessibility-first apps — work that has to hold up in a boardroom and still feel effortless for the person actually using it.",

  // Links. Change these to your own.
  email: "vaibhav.vishal2024@gmail.com",
  linkedin: "https://www.linkedin.com/in/vaibhavvishal4798/",

  // Your CV lives in the /public folder as resume.pdf — replace that file to update it.
  resume: "/resume.pdf",

  // Images live in the /public folder. Replace the files, keep the names.
  photo: "/photo.jpg", // headshot — first pill
  work: "/work.jpg", // project screenshot — second pill
};

// ─────────────────────────────────────────────────────────────
//  PROJECTS — the Work section on the home page.
//  `href` makes a card clickable. Leave it out and the card
//  shows "In progress" instead — no dead links.
// ─────────────────────────────────────────────────────────────

export const projects = [
  {
    slug: "clinic-core",
    href: "/work/clinic-core",
    title: "Clinic Core",
    subtitle: "A unified POS for clinical billing",
    context: "Emoha Elder Care",
    year: "2024–25",
    tags: ["0 to 1", "Mobile", "Payments"],
    cover: "/work/pos-cover.jpg",
    summary:
      "Frontline staff were billing across disconnected tools and reconciling cash by hand. I designed one guided, state-driven flow — invoice, payment and receipt in a single system.",
    metric: { value: "40%", label: "faster invoicing" },
  },
];

// ─────────────────────────────────────────────────────────────
//  KEY METRICS — the numbers count up when they scroll into view.
//  `to` is the number it counts to; prefix/suffix wrap it.
//  Keep these honest — every one should trace to real work.
// ─────────────────────────────────────────────────────────────

export const stats = [
  { to: 4, suffix: "+", label: "Years designing products" },
  { to: 300, suffix: "+", label: "Staff using tools I've shipped" },
  { to: 40, suffix: "%", label: "Faster invoicing on Clinic Core" },
  { to: 18, suffix: "–22%", label: "Lift in inbound leads on web work" },
];

// ─────────────────────────────────────────────────────────────
//  TESTIMONIALS
//
//  ⚠️  ONLY PUT REAL QUOTES HERE. One genuine quote from a
//  colleague beats five invented ones — and a recruiter who
//  checks a fabricated reference will end the conversation.
//
//  Ask a PM, engineer or manager you worked with for two lines
//  about what you were like to work with, then paste it in.
//  Add as many objects as you have; the layout adapts.
// ─────────────────────────────────────────────────────────────

export const testimonials = [
  {
    quote:
      "Creating invoices now takes seconds. I no longer switch between tools or worry about missing payments.",
    name: "Vishal Mishra",
    role: "COCO",
    context: "on Clinic Core",
  },
];

// ─────────────────────────────────────────────────────────────
//  FOOTER
// ─────────────────────────────────────────────────────────────

export const footer = {
  // The big line above the links
  cta: "Currently open to product design roles.",
  location: "Gurugram, India",
  nav: [
    { label: "Work", href: "/#work" },
    { label: "Clinic Core", href: "/work/clinic-core" },
    { label: "Resume", href: "/resume.pdf" },
  ],
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/in/vaibhavvishal4798/" },
    { label: "Email", href: "mailto:vaibhav.vishal2024@gmail.com" },
  ],
};
