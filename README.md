# 🚀 Professional Developer Portfolio

A modern, responsive, and high-performance developer portfolio built with **React**, **Vite**, **Tailwind CSS**, and **React Router**, following all the specifications from the assignment requirements.

---

## 🌟 Key Features

1. **Responsive Navbar:** Sticky frosted-glass navbar with active section scroll-spy, smooth scrolling, and mobile drawer.
2. **Hero Section:** Professional designation badge, tagline, bio, professional avatar with glow accents.
3. **Resume Download Button:** Prominent CTA in the hero section that downloads/views `resume.pdf`.
4. **Social Links:** Interactive buttons linking to GitHub, LinkedIn, Twitter, and Facebook.
5. **About Me:** Comprehensive introduction covering **Programming Journey**, **Work Enjoyed**, **Hobbies & Interests**, and **Personality**.
6. **Graphical Skills Section:** Categorized into **Frontend**, **Backend**, and **Tools & DevOps**, with visual percentage meters and icon badges.
7. **Educational Qualification:** Highlights degree above HSC (B.Sc. in CSE) with CGPA, courses, and honors.
8. **Experience:** Professional developer roles with detailed responsibility cards.
9. **Featured Projects (3+ Projects):**
   - Project cards with name, image, tags, and **"View More / Details"** button.
   - Dedicated **Project Details Page (`/project/:id`)** featuring:
     - Main technology stack
     - Overview description
     - Live Project Preview link
     - GitHub Repository link (Client)
     - Challenges faced during development
     - Potential improvements & future plans
10. **Direct Contact Section:**
    - Email address (with one-click copy)
    - Phone number
    - Direct WhatsApp click-to-chat button
    - Interactive message form with validation & instant feedback
11. **Elegant Footer:** Quick links, social icons, and smooth Back-to-Top button.
12. **Full Device Responsiveness:** Fully optimized for Mobile, Tablet, Laptop, and Desktop.

---

## 🛠️ How to Customize Your Information

All personal data, links, projects, and skills are centralized in:
📂 **[`src/data/portfolioData.js`](src/data/portfolioData.js)**

To update your portfolio:
1. Open [`src/data/portfolioData.js`](src/data/portfolioData.js).
2. Change `personal.name`, `personal.designation`, `personal.avatarUrl`.
3. Add your real project URLs in `projects` array (`liveUrl`, `clientGithub`, `title`, `image`).
4. Replace `public/resume.pdf` with your actual resume PDF.
5. Update `contact.email`, `contact.phone`, and `contact.whatsapp`.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start local development server
npm run dev

# Build production bundle
npm run build
```

---

## 🌐 Free 1-Click Hosting Guide (To Get Your Live Link)

### Option 1: Vercel (Recommended & Easiest)
1. Push your project to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of professional portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com) and log in with GitHub.
3. Click **"Add New Project"** and import your repository.
4. Framework Preset will auto-detect as **Vite**.
5. Click **"Deploy"**. In 30 seconds, you'll receive your live working link (e.g. `https://your-portfolio.vercel.app`)!

### Option 2: Netlify
1. Go to [Netlify](https://www.netlify.com).
2. Drag and drop the `dist/` folder after running `npm run build`, OR connect your GitHub repository.
3. Instant live deployment with HTTPS.

