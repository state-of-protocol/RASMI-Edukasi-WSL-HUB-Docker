# Edukasi WSL Hub & Docker

> Panduan step-by-step untuk pemula Windows nak setup WSL2 + Docker dari zero — dengan bantuan AI-agent (CLI opencode, AI web seperti ChatGPT/Gemini/Claude/Copilot, atau AI offline Ollama+Gemma).

🔗 **Live site:** https://state-of-protocol.github.io/Edukasi-WSL-Hub-Docker/

---

## 📖 Apa Projek Ni

Kebanyakan guide setup WSL2/Docker di luar sana anggap pembaca dah reti teknikal. Projek ni dibina khas untuk **pemula total** — orang yang baru pertama kali buka PowerShell — dan direka supaya boleh diikuti sambil dibantu AI-agent, bukan perlu hafal command sendiri.

**Siapa patut baca ni:**
- Pengguna Windows (Intel/AMD, minimum 8GB RAM) yang nak mula belajar guna AI-agent untuk setup sistem
- Tak pernah guna terminal/command line sebelum ni
- Nak faham WSL2 & Docker dari asas, bukan sekadar copy-paste command tanpa faham

**3 mod AI-agent yang disokong:**
| Mod | Penerangan |
|---|---|
| 🖥️ CLI (opencode) | AI-agent dalam terminal, setup automatik |
| 🌐 Web AI | ChatGPT / Gemini / Claude / Copilot — guna chat untuk minta arahan |
| 📴 Offline | Ollama + Gemma (untuk spec rendah: i5-10gen/Ryzen 5000, 8GB RAM) |

---

## 🗂️ Struktur Kandungan

| # | Section | Status |
|---|---|---|
| 01 | Prasyarat & Enable WSL | 🟡 Draft |
| 02 | Istilah Asas (Glossary) | 🟡 Draft |
| 03 | WSL2 - Setup | ✅ Done |
| 04 | WSL2 - Pengurusan & Sesi | ✅ Done |
| 05 | Docker - Pemasangan | ✅ Done |
| 06 | Docker - Pengurusan Container | ✅ Done |
| 07 | Docker - Pembersihan | ✅ Done |
| 08 | Masalah Lazim (Troubleshooting) | ✅ Done |
| 09 | Q&A | ✅ Done |
| 10 | Rujukan Pantas (Cheat Sheet) | ✅ Done |

Status penuh & lebih detail: lihat [`CONTENT-PLAN.md`](./CONTENT-PLAN.md)

---

## 📁 Struktur Fail

```
Edukasi-WSL-Hub-Docker/
├── index.html              ← Homepage
├── README.md               ← Fail ini
├── SKILL.md                ← Arahan untuk AI-agent (WAJIB baca sebelum edit)
├── design.md                ← Design system (warna, font, komponen)
├── CONTENT-PLAN.md          ← Status setiap section
├── CHANGELOG.md             ← Log perubahan
├── LICENSE
├── /sections/                ← Setiap topik = 1 fail HTML
├── /assets/
│   ├── /css/style.css
│   ├── /js/nav.js
│   ├── /partials/nav.html
│   └── /img/
└── /templates/
    └── section-template.html
```

---

## 🚀 Cara Guna (untuk pembaca)

1. Buka [live site](https://state-of-protocol.github.io/Edukasi-WSL-Hub-Docker/)
2. Mula dari **Section 01 - Prasyarat** kalau langsung tak pernah setup apa-apa
3. Ikut turutan section 01 → 10, atau terus ke **Rujukan Pantas** kalau dah biasa dan cuma nak cari command
4. Setiap section ada bahagian ⚠️ Troubleshooting — kalau stuck, cari dulu di situ sebelum tanya orang lain

---

## 💻 Cara Run Secara Local (untuk kontributor)

Static site tanpa build step. Guna mana-mana local server ringkas:

```bash
# Guna Python (dah ada dalam kebanyakan sistem)
python -m http.server 8000

# ATAU guna Node.js
npx live-server
```

Buka `http://localhost:8000` di browser.

---

## 🤝 Cara Contribute

Projek ni dibina secara modular supaya senang di-edit oleh manusia **atau** AI-agent.

**Kalau nak tambah/edit section:**
1. Baca `SKILL.md` dulu — ada rules wajib (naming convention, struktur HTML, path, dsb)
2. Rujuk `design.md` untuk styling — jangan hardcode warna/font baru
3. Salin dari `templates/section-template.html`
4. Update `CONTENT-PLAN.md` dan `CHANGELOG.md` selepas siap

**Kalau guna AI-agent untuk contribute** (opencode CLI, Claude, dsb):
- Cukup bagi prompt macam: *"Tambah section 01-prasyarat.html pasal cara enable WSL dari PowerShell"*
- AI-agent akan rujuk `SKILL.md` secara automatik untuk pastikan konsisten dengan struktur sedia ada

**Kalau jumpa error/typo:**
- Buka [Issues](../../issues) dan describe masalah, atau
- Fork + pull request terus

---

## 🧭 Falsafah Projek

- **Pemula dulu, teknikal kemudian** — setiap istilah teknikal dijelaskan bila kali pertama disebut
- **Faham, bukan hafal** — setiap command ada penjelasan "kenapa" bukan sekadar "macam mana"
- **Mobile-first** — ramai pembaca baca dari Telegram/phone, bukan desktop
- **AI-agent-friendly** — struktur projek direka supaya AI-agent boleh sambung kerja tanpa perlu context berulang

---

## 📜 Lesen

Lihat [`LICENSE`](./LICENSE)

---

## 🙋 Soalan?

Rujuk [`09-qa.html`](./sections/09-qa.html) dulu — kalau tak jumpa jawapan, boleh buka Issue.
