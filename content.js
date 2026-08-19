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
  // Set to null to show a plain shape instead.
  photo: "/photo.jpg", // headshot — first pill
  work: "/work.jpg", // project screenshot — second pill
};
