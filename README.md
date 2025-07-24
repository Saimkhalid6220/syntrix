# 🚀 IT Company Website (Next.js)

Welcome to our company's official website project. This repository contains the source code for our Next.js-powered IT services website. Please follow the collaboration and Git workflow guidelines carefully to ensure smooth teamwork and avoid merge conflicts.

---

## 🧑‍💻 Team Guidelines

Each developer is responsible for a specific section of the website and should **only work within their assigned component folder**.

### 🔧 Assigned Sections

| Developer | Branch Name               | Responsibility                            |
|-----------|---------------------------|-------------------------------------------|
| Dev A     | `feature/hero-navbar`     | Hero section and Navbar                   |
| Dev B     | `feature/services-about`  | Services section and About Us section     |
| Dev C     | `feature/portfolio-footer`| Portfolio, Contact section, and Footer    |

---

## 🌿 Branching Strategy

> We use a **feature-branch model** compared and merged directly to `main`.

### Step-by-Step Workflow

1. **Clone the repo** (only the first time):
   ```bash
   git clone https://github.com/<your-org>/<repo-name>.git
   cd <repo-name>
   ```

2. **Pull latest `main`**:
   ```bash
   git checkout main
   git pull origin main
   ```

3. **Create your feature branch**:
   ```bash
   git checkout -b feature/your-branch-name
   ```

4. **Do your work inside your assigned components folder only**.
   - Example:
     - `components/HeroSection`
     - `components/ServicesSection`
     - `components/Footer`

5. **Add, Commit & Push**:
   ```bash
   git add .
   git commit -m "Add responsive HeroSection component"
   git push origin feature/your-branch-name
   ```

6. **Create a Pull Request (PR)**:
   - Go to GitHub → New Pull Request
   - Base: `main`
   - Compare: `feature/your-branch-name`
   - Add reviewers
   - Give a meaningful title and description

7. **After review**, merge using **“Squash and Merge”** to keep commit history clean.

---

## ⚠️ Merge Conflict Prevention

- Do **not edit `page.tsx`, layout files, or shared files (like `globals.css`)** unless you're assigned or have permission.
- If you **must** touch a shared file:
  - Inform the team in advance
  - Pull the latest `main` before making changes

---

## 📂 Folder Structure Example

```
app/
│
├── components/
│   ├── HeroSection/
│   ├── ServicesSection/
│   ├── AboutSection/
│   ├── PortfolioSection/
│   ├── ContactSection/
│   ├── Navbar/
│   └── Footer/
│
├── pages/
│   └── index.tsx
```

> `index.tsx` already includes placeholder imports for each section.

---

## ✅ Code Style

- Use `Prettier` for consistent formatting.
- Use `npm run lint` to catch code issues.
- Keep commits atomic and messages clear.

---

## 💬 Communication

- Use your team group chat (e.g., WhatsApp/Slack/Discord) to:
  - Announce pull requests
  - Coordinate on shared files
  - Avoid overlapping work

---

## 📌 Final Note

Please follow this README carefully to ensure smooth progress and professional collaboration. If you're unsure about any part, ask the team lead before proceeding.

Happy coding! 💻✨
