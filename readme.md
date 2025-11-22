# DevFest Networking Card Generator

A lightweight, fully client-side web app that lets DevFest attendees instantly generate a personal networking card with:

- **Name, role, bio, skills**
- **GitHub / LinkedIn / Website links**
- **Email**
- **Auto-generated QR code for easy sharing**
- **Print / Save as PDF support**

No backend, no data storage — everything runs in the browser. Perfect for quick networking during hackathons, meetups, and DevFest events.

---

## 🚀 Demo

**Live app:**

[https://<your-username>.github.io/devfest-networking-card/](https://<your-username>.github.io/devfest-networking-card/)

*(Replace `<your-username>` with your actual GitHub username.)*

---

## ✨ Features

- Real-time preview — updates instantly as you type
- Auto-generated QR code with all your details embedded
- Responsive layout for mobile + desktop
- Print-ready layout with automatic PDF formatting
- Zero dependencies except small QRCode.js library
- Works offline (after first load)
- 100% free to host using GitHub Pages

---

## 📦 Project Structure

```
.
├── index.html      # UI layout, form, preview card
├── styles.css      # UI styling and theme
└── script.js       # Logic for preview + QR code generation
```

---

## 🛠️ Setup

You can run this without installing anything — it’s just HTML/CSS/JS.

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/devfest-networking-card.git
   cd devfest-networking-card
   ```

2. **Open the app**
   Simply open:
   ```
   index.html
   ```
   in your browser.

---

## 🌐 Deployment (Free on GitHub Pages)

1. **Push the repository to GitHub:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Go to:**
   - Settings → Pages
   - Under Build and Deployment:
     - Source: Deploy from a branch
     - Branch: `main`
     - Folder: `/` (root)

3. **Save → GitHub will generate a link like:**
   ```
   https://<your-username>.github.io/devfest-networking-card/
   ```

Done! 🎉

---

## 📱 How to Use

1. Fill in your:
   - **Name**
   - **Role**
   - **Bio**
   - **Skills** (comma separated)
   - **GitHub / LinkedIn / Website links**
   - **Email**

2. Watch the live card preview update instantly.
3. Scan the QR code to verify it contains your info.
4. Click **Print / Save as PDF** to generate a printable card.

---

## 🧩 Technology Used

- **HTML5**
- **CSS3**
- **JavaScript (Vanilla)**
- **QRCode.js (CDN)**

No backend, no frameworks, no build tools.

---

## 🛡️ Privacy

This project has no servers and no storage. All data stays in your browser and disappears when you refresh unless your browser auto-fills.

---

## 🧑‍💻 Contributing

Feel free to fork the repo and add new features:

- Export as PNG
- Shareable URLs
- Dark/light themes
- NFC card support
- Social-media share cards

Pull requests are welcome!

---

## 📄 License

MIT License — free for everyone to use, modify, and share.