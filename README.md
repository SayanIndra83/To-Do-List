# To-Do List

**A visually appealing To-Do List using HTML, CSS and Javascript**
---

## Tech

* HTML
* CSS
* JavaScript

## Live demo

Live demo: [Open live demo](https://skmdJeesan.github.io/Ochi-Design)

## Repo

Repo: [Source code on GitHub](https://github.com/skmdJeesan/Ochi-Design/tree/main)

## Quick start

```bash
git clone https://github.com/<your-username>/<repo-name>.git
cd <repo-name>
npm install
npm run dev # or npm start
```

## Notes

* Initialize Locomotive inside `useEffect` and wrap the scrollable container with `data-scroll-container`.
* Use `data-scroll-section`, `data-scroll`, `data-scroll-speed` on animated elements and call `scroll.update()` after layout changes.
* Respect `prefers-reduced-motion` and consider disabling heavy motion on mobile.

## Troubleshooting

* Locomotive not working → ensure `data-scroll-container` exists and you imported `locomotive-scroll` CSS.
* Tailwind missing classes → check `tailwind.config.js` `content` paths and restart the dev server.

---

*This project is an educational/portfolio clone — not the official Ochi site.*

## Contact
skmdjeesan@gmail.com
