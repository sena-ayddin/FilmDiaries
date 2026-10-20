# 🎬 FilmDiaries

**FilmDiaries** is a modern web application designed for film and TV series enthusiasts. Users can explore trending content, browse recommendations by genre, access customized member options, and get in touch via an interactive contact and support hub.

This project was built as part of the **COM5005 Web Programming** course project by **Group 16**.

---

## 🌐 Live Site
https://sena-ayddin.github.io/FilmDiaries/index.html

---

## 📌 Project Overview

- **Course:** COM5005 - Web Programming
- **Group:** Group 16
- **Year:** 2026
- **Status:** Active Development

---

## ✨ Features

- **Dynamic Sticky Navigation Bar:** 
  - Integrated brand logo with custom typography.
  - Quick-access search bar with embedded Material Symbols.
  - Interactive **Profile Dropdown Menu** (My Profile, My List, Watch History, Settings) that opens on click and closes cleanly when clicking outside.
- **Hero & Featured Showcase:**
  - Highlighting spotlight content (e.g., *10 Things I Hate About You*) with blend-mode styling and purchase/membership options.
- **Content Sliders / Horizontal Carousels:**
  - Custom scrollable shelves for continue-watching ("We are still right where you left us..."), personalized recommendations ("Just for you"), genre suggestions, and top-rated titles.
- **Interactive FAQ & Contact Form:**
  - Collapsible `<details>`/`<summary>` accordion FAQ sections categorized by topic.
  - Client-side validated contact form with dynamic status/feedback messages via vanilla JavaScript.
- **Dedicated "About Us" Page:**
  - Project vision, backstory, and responsive interactive team cards linking to team members' LinkedIn and portfolio profiles.

---

## 👥 Meet The Team (Group 16)

| Member                 | Role         | Profile / Portfolio 
| :---                   | :---         | :--- 
| **Buket Pehlivanoğlu** | Team Captain | [LinkedIn Profile](https://www.linkedin.com/in/buket-pehlivanoğlu-2a706532a) 
| **Sena Yavuzer**       | Team Member  | [LinkedIn Profile](https://www.linkedin.com/in/sena-yavuzer-aa0a2033a) 
| **İdil Kılıç**         | Team Member  | [LinkedIn Profile](https://www.linkedin.com/in/idil-kılıç-15a54732a) 
| **Sena Aydın**         | Team Member  | [Portfolio](https://sena-ayddin.github.io/Portfolio/index.html#projects) 
| **Azad Altuntop**      | Team Member  | [Not Linked Yet...]

---

## 🛠️ Tech Stack & Resources

- **Markup & Styling:**
  - HTML5 (Semantic tags: `<nav>`, `<main>`, `<section>`, `<details>`, `<footer>`)
  - CSS3 (Flexbox, CSS Grid, Custom scrollbars, Smooth transitions, Absolute/Relative positioning)
- **Scripting:**
  - Vanilla JavaScript (ES6+ DOM manipulation, event listeners, form validation)
- **Typography & Icons:**
  - [Google Fonts](https://fonts.google.com/): *Lexend*, *Michroma*, *Anton*, *Antonio*
  - [Google Material Symbols Outlined](https://fonts.google.com/icons)

---

## 📂 Project Structure

FilmDiaries/
│
├── index.html                 # Main landing & browsing page
├── about_us.html              # Information about the platform & team members
├── contact_us.html            # FAQ section and contact submission form
├── movies.html                # Movies catalog (in development)
├── series.html                # TV series catalog (in development)
│
├── css/
│   ├── style.css              # Global styles, navbar, hero, cards, and footer
│   ├── style_about_us.css     # Styles specific to the About Us page & team cards
│   └── style_contact_us.css   # Styles specific to FAQ accordions & contact form
│
├── js/
│   ├── index.js               # Global UI logic (Profile popup toggle & outside-click handler)
│   └── contact.js             # Form submission and validation logic
│
└── images/                    # Local image assets, posters, backgrounds, and previews

```

## 📄 License

This project is created for educational purposes under the **COM5005 Web Programming** course. All original rights reserved by **Group 16 © 2026**.