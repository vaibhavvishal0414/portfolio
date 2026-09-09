# Vaibhav Vishal — Portfolio Hero

A one-screen Next.js site. Everything you'd want to change lives in **`content.js`**.

---

## Part 1 — Get it online (no coding needed, ~15 minutes)

You need two free accounts: **GitHub** and **Vercel**. Sign up for Vercel *with* your GitHub account so they're already connected.

### Step 1 — Put the code on GitHub

1. Unzip the folder I sent you. You should see `app`, `public`, `content.js`, `package.json`, and this file.
2. Go to [github.com/new](https://github.com/new). Name the repository `portfolio`, keep it **Public** (or Private — both work), and **do not** tick "Add a README". Click **Create repository**.
3. On the next screen click the link **"uploading an existing file"**.
4. Open the unzipped folder on your computer, select **everything inside it** (not the folder itself — the files and folders *inside*), and drag them onto the GitHub page.
   - If you see a `node_modules` folder, **don't upload it**. It's huge and not needed.
5. Scroll down, click **Commit changes**.

### Step 2 — Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new).
2. Find your `portfolio` repository in the list and click **Import**.
3. Change nothing. Vercel recognises Next.js on its own. Click **Deploy**.
4. Wait about a minute. You'll get a live URL like `portfolio-xyz.vercel.app`. **This already works — you can send it to recruiters right now.**

### Step 3 — Point your own domain at it

1. In Vercel, open your project → **Settings** → **Domains**.
2. Type `vaibhavvishal.in` and click **Add**. Choose the option that also adds `www`.
3. Vercel now shows you a **domain card** with the exact DNS records to create. Log in wherever you bought the domain (GoDaddy, Namecheap, Hostinger, BigRock…), find **DNS settings / Manage DNS**, and add exactly what that card says. It'll look like:

   | Type  | Name | Value                                     |
   | ----- | ---- | ----------------------------------------- |
   | A     | @    | the IP on your domain card                |
   | CNAME | www  | the `…vercel-dns….com` host on your card  |

   ⚠️ **Copy the values from your own domain card, not from a blog post.** Vercel assigns different IPs and CNAME targets to different projects, and old guides list outdated ones. Also delete any existing A record for `@` that points somewhere else, or it'll conflict.
4. Save. Vercel shows "Valid Configuration" once it propagates — usually 10–30 minutes, occasionally a few hours.

---

## Part 2 — Changing things later

Open **`content.js`** on GitHub (click the file → the pencil ✏️ icon), edit the text between the quotes, click **Commit changes**. Vercel redeploys automatically in about a minute. That's the whole workflow.

What's in there:

| What                   | Where                                                     |
| ---------------------- | --------------------------------------------------------- |
| Your name and role     | `name`, `role`                                             |
| The big headline       | `headline` — one line per row, `accent` = the orange word |
| The paragraph          | `intro`                                                    |
| Email / LinkedIn       | `email`, `linkedin`                                        |
| The work cards         | `projects` — one object per project (see below)            |

**Adding or editing a project:** each entry in the `projects` array becomes a card in
the Work section. Give it a `href` and the card becomes clickable; leave `href` out and
it shows "In progress" instead — so there are never dead links. `cover` is an image path
in `/public`; set it to `null` for a plain gradient. `metric` shows the badge on the image.

**Adding a new case study page:** copy `app/work/clinic-core/` to
`app/work/your-slug/`, edit the text inside, then add `href: "/work/your-slug"` to that
project in `content.js`.

**Testimonials:** the `testimonials` array in `content.js`. Only put real quotes there —
one genuine line from a colleague is worth more than five invented ones, and a recruiter
who checks a fabricated reference ends the conversation. Ask a PM or engineer you worked
with for two sentences and paste them in; the layout adapts to however many you have.

**Key metrics:** the `stats` array. Each has a `to` (the number it counts up to) plus an
optional `prefix`/`suffix`. They animate when scrolled into view.

**Swapping the images or the CV:** on GitHub go into the `public` folder, click the file you want to replace, delete it, then use **Add file → Upload files** with your new one using the **same filename**:

- `photo.jpg` — your headshot (wide crop, roughly 2:1, face centred)
- `work.jpg` — the project screenshot
- `resume.pdf` — your CV

The headline text auto-resizes to fill the screen, so you can rewrite it to anything and it won't break the layout.

---

## Optional — previewing on your own machine first

Only if you want to. Install [Node.js](https://nodejs.org), then in a terminal inside the project folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000.

---

## What's what

```
app/
  layout.js     fonts + page title/description
  page.js       the page structure
  headline.js   the big type + the auto-fit logic
  cursor.js     the little dot that follows your mouse
  globals.css   all the styling (colours are at the very top)
content.js      ← your text and links
public/         images + resume
```

Colours are the four lines at the top of `globals.css` — `--bg`, `--fg`, `--muted`, `--accent`.
