# SKILL.md — Arahan untuk AI-Agent

> Fail ini adalah **rujukan wajib** untuk mana-mana AI-agent (opencode CLI, Claude, Gemini, ChatGPT, Copilot, dsb) sebelum membuat sebarang perubahan pada projek ini. Baca fail ini + `design.md` + `CONTENT-PLAN.md` sebelum mula kerja.

---

## 1. Konteks Projek

- **Nama projek:** Edukasi WSL Hub & Docker
- **Audience:** Pemula Windows yang tak pernah guna terminal/WSL/Docker, belajar setup guna bantuan AI-agent (CLI opencode, AI web, atau AI offline Ollama+Gemma)
- **Bahasa:** Bahasa Melayu santai, nada mesra, elak jargon tanpa penjelasan
- **Platform:** Static site, host di GitHub Pages
- **Bentuk akhir:** Setiap section = 1 fail HTML dalam `/sections/`, digabung jadi satu laman navigasi

---

## 2. Struktur Fail (WAJIB IKUT)

```
Edukasi-WSL-Hub-Docker/
├── index.html              ← Homepage, letak di ROOT (bukan dalam /sections/)
├── README.md
├── SKILL.md
├── design.md
├── CONTENT-PLAN.md
├── CHANGELOG.md
├── LICENSE
├── /sections/
│   ├── 01-prasyarat.html
│   ├── 02-istilah-asas.html
│   ├── 03-wsl-setup.html
│   ├── 04-wsl-manage.html
│   ├── 05-docker-setup.html
│   ├── 06-docker-manage.html
│   ├── 07-docker-cleanup.html
│   ├── 08-troubleshooting.html
│   ├── 09-qa.html
│   └── 10-quick-reference.html
├── /assets/
│   ├── /css/style.css
│   ├── /js/nav.js
│   ├── /partials/nav.html
│   └── /img/<NN-nama-section>/step-N-deskripsi.png
└── /templates/
    └── section-template.html
```

**Peraturan naming:**
- Fail section: `NN-nama-ringkas.html` (2 digit, huruf kecil, dash bukan underscore)
- Gambar: `assets/img/<nombor-sepadan-section>/step-<N>-<deskripsi-ringkas>.png`
- Jangan sesekali letak fail HTML section terus di root — semua kecuali `index.html` masuk `/sections/`

---

## 3. Rules Sebelum Edit / Tambah Section

1. **Baca `CONTENT-PLAN.md` dulu** — semak status section (todo/draft/done) supaya tak overwrite kerja yang dah siap tanpa sedar.
2. **Baca `design.md`** — semua warna, font, spacing, komponen (callout box, code block, button) MESTI rujuk token yang ditetapkan di situ. Jangan hardcode warna/font baru dalam HTML/CSS individu.
3. **Salin dari `templates/section-template.html`** sebagai starting point — jangan tulis struktur HTML dari kosong supaya semua section konsisten.
4. **Path MESTI relative mengikut depth fail.** Jangan guna absolute path dengan nama repo (mudah pecah bila repo rename / local test). Ikut jadual ini:

   | Fail | Depth | CSS | JS | Pautan section lain |
   |---|---|---|---|---|
   | `index.html` | 0 (root) | `assets/css/style.css` | `assets/js/nav.js` | `sections/01-prasyarat.html` |
   | `sections/*.html` | 1 | `../assets/css/style.css` | `../assets/js/nav.js` | `01-prasyarat.html` (same dir) |
   | `assets/partials/nav.html` | partial | T/A | T/A | `01-prasyarat.html` (JS akan prepend `sections/` bila at root) |

   **nav.js** compute depth dari `window.location.pathname` dan:
   - Guna `prefix = ''` untuk root, `prefix = '../'` untuk sections/
   - Fetch nav.html dengan prefix yang betul
   - Nav link ke section: prepend `sections/` bila at root depth
5. **Nav/header/footer TIDAK ditulis manual dalam setiap fail.** Guna mekanisme inject:
   - Letak `<div id="nav-placeholder"></div>` di setiap section
   - `nav.js` fetch `/assets/partials/nav.html` dan inject ke situ
   - Kalau tambah section baru, HANYA edit `assets/partials/nav.html` — bukan 10 fail HTML

---

## 4. Struktur Wajib Setiap Fail Section

Setiap `.html` dalam `/sections/` MESTI ada bahagian berikut secara berurutan:

1. `<head>` — title, meta charset, link CSS, viewport meta (mobile-first, sebab audience baca dari Telegram/phone)
2. **Nav placeholder** (inject via nav.js)
3. **Header section** — tajuk + 1 ayat ringkas "apa awak akan belajar dalam section ni"
4. **Table of Contents** (kalau section > 3 subtopik)
5. **Content body** — guna heading hierarki (`h2` untuk subtopik, `h3` untuk langkah)
6. **Callout boxes** ikut keperluan:
   - ⚠️ Warning (bahaya/boleh rosakkan sistem)
   - 💡 Tip (shortcut/nice-to-know)
   - ✅ Checkpoint (macam mana tahu langkah tu berjaya)
7. **Code block** — guna `<pre><code>` + copy button (component dari design.md), jangan screenshot code sebagai gambar
8. **Screenshot placeholder** — guna `<img>` dengan alt text jelas, walaupun gambar belum ada letak placeholder + comment `<!-- TODO: screenshot step X -->`
9. **Troubleshooting mini** (kalau relevan) — link terus ke `08-troubleshooting.html#anchor-berkaitan`
10. **Nav prev/next** — link ke section sebelum/selepas
11. **Footer** (inject via nav.js) — link balik ke `10-quick-reference.html`

---

## 5. Tone & Bahasa

- Bahasa Melayu santai (macam cakap dengan kawan), BUKAN formal/textbook
- Setiap istilah teknikal kali pertama disebut dalam section, bracket penjelasan ringkas: contoh "kernel (bahagian teras sistem operasi)"
- Elak ayat panjang berjela — pecahkan kepada numbered steps
- Setiap arahan command WAJIB ada penjelasan "apa command ni buat" sebelum atau selepas code block — jangan letak command tanpa konteks
- Anggap pembaca tak pernah buka Command Prompt/PowerShell sebelum ni

---

## 6. Checklist Sebelum Tandakan Section "Done"

AI-agent MESTI verify semua ini sebelum update status di `CONTENT-PLAN.md` kepada "done":

- [ ] Semua link dalam/luar section berfungsi (tiada 404)
- [ ] Semua path CSS/JS relative mengikut depth (root: `assets/...`, sections: `../assets/...`)
- [ ] Ada minimum 1 callout box jenis ✅ Checkpoint supaya pemula tahu diorang on track
- [ ] Ada troubleshooting link kalau ada langkah yang biasa gagal
- [ ] HTML valid (tiada tag tak tutup, nested salah)
- [ ] Responsive — content tak overflow pada viewport 375px (mobile)
- [ ] Nav prev/next betul (tak circular/broken)
- [ ] Update `CONTENT-PLAN.md` status
- [ ] Tambah entry baru dalam `CHANGELOG.md`

---

## 7. Update Wajib Bila Tambah Section Baru

Bila AI-agent create section baru, kena update SEMUA fail ini (bukan section HTML sahaja):

1. `assets/partials/nav.html` — tambah link baru
2. `CONTENT-PLAN.md` — tambah row baru dengan status
3. `CHANGELOG.md` — log perubahan (tarikh, apa ditambah, oleh siapa/agent mana)
4. `index.html` — kalau homepage ada senarai/card semua section, tambah card baru

---

## 8. Contoh Prompt yang AI-Agent Patut Boleh Handle

> "Tambah section 01-prasyarat.html pasal cara enable WSL dari PowerShell dan check version Windows"

Bila terima prompt macam ni, AI-agent patut:
1. Rujuk fail ini + design.md
2. Guna template
3. Isi content ikut struktur Seksyen 4 di atas
4. Jalankan checklist Seksyen 6
5. Update fail-fail di Seksyen 7
6. Report balik kepada user apa yang siap + apa yang masih perlu (contoh: screenshot belum masuk)

---

## 9. Larangan (Jangan Buat)

- ❌ Jangan hardcode warna/font di luar `design.md` punya token
- ❌ Jangan copy-paste nav/header manual ke setiap fail
- ❌ Jangan guna absolute path dengan nama repo hardcoded (contoh: `/Edukasi-WSL-Hub-Docker/...`) — guna relative path ikut depth
- ❌ Jangan letak fail section di root (mesti dalam `/sections/`)
- ❌ Jangan overwrite section yang status "done" di CONTENT-PLAN.md tanpa confirm dengan user dulu
- ❌ Jangan tulis command tanpa penjelasan konteks untuk pemula