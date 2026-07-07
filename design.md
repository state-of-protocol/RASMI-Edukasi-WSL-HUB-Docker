# design.md — Design System

> Rujukan wajib untuk AI-agent & kontributor sebelum menulis sebarang CSS/HTML baru. Semua nilai visual (warna, font, spacing, komponen) MESTI datang dari fail ini — jangan hardcode nilai baru dalam section individu.

---

## 1. Prinsip Design

1. **Mobile-first** — majoriti pembaca buka dari Telegram/phone. Design untuk 375px dulu, baru scale up.
2. **Bacaan pemula** — kontras tinggi, saiz font besar, jarak baris lapang. Elak design padat/rapat.
3. **Konsisten, bukan kreatif** — setiap section kena nampak sama struktur. Jangan reka layout baru per section.
4. **Terminal-inspired tapi mesra** — nada visual macam terminal/code editor (sebab topik teknikal) tapi warna & tone tetap friendly, bukan gelap/intimidating macam hacker theme.

---

## 2. Warna (CSS Custom Properties)

Letak dalam `:root` di `assets/css/style.css` — **semua fail HTML rujuk variable ni, jangan hex code terus dalam inline style.**

```css
:root {
  /* Brand / Primary */
  --color-primary: #2563eb;        /* Biru — link, button utama, heading aksen */
  --color-primary-dark: #1d4ed8;   /* Hover state */
  --color-primary-light: #dbeafe;  /* Background subtle (contoh: active nav) */

  /* Background */
  --color-bg: #ffffff;
  --color-bg-alt: #f8fafc;         /* Section alternate / card background */
  --color-bg-code: #1e293b;        /* Background code block (dark) */

  /* Text */
  --color-text: #1e293b;           /* Body text utama */
  --color-text-muted: #64748b;     /* Caption, meta info, footer */
  --color-text-code: #e2e8f0;      /* Text dalam code block */

  /* Callout Semantics */
  --color-warning-bg: #fef3c7;
  --color-warning-border: #f59e0b;
  --color-warning-text: #92400e;

  --color-tip-bg: #dbeafe;
  --color-tip-border: #3b82f6;
  --color-tip-text: #1e40af;

  --color-success-bg: #d1fae5;
  --color-success-border: #10b981;
  --color-success-text: #065f46;

  --color-danger-bg: #fee2e2;
  --color-danger-border: #ef4444;
  --color-danger-text: #991b1b;

  /* Environment Tags */
  --color-purple-bg: #f3e8ff;
  --color-purple-text: #6b21a8;

  /* Border / Divider */
  --color-border: #e2e8f0;
}
```

---

## 3. Typography

```css
:root {
  --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-code: 'JetBrains Mono', 'Fira Code', Consolas, monospace;

  --text-xs: 0.75rem;   /* 12px — caption, meta */
  --text-sm: 0.875rem;  /* 14px — nav, footer */
  --text-base: 1rem;    /* 16px — body text (minimum untuk mobile) */
  --text-lg: 1.125rem;  /* 18px — lead paragraph */
  --text-xl: 1.5rem;    /* 24px — h3 */
  --text-2xl: 1.875rem; /* 30px — h2 */
  --text-3xl: 2.25rem;  /* 36px — h1 */

  --leading-body: 1.7;    /* line-height untuk paragraf — lapang untuk pemula */
  --leading-heading: 1.3;
}
```

**Rules:**
- Body text minimum `16px` (`--text-base`) — jangan kecilkan untuk mobile
- Heading hierarki mesti berurutan: `h1` (tajuk section) → `h2` (subtopik) → `h3` (langkah). Jangan skip level.
- Code/command sentiasa guna `--font-code`, jangan sekali-kali guna font body untuk command

---

## 4. Spacing Scale

```css
:root {
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;
}
```

Guna scale ni untuk semua padding/margin/gap. Jangan guna nilai px arbitrari (contoh `padding: 13px`) — selalu round ke scale terdekat.

---

## 5. Layout & Grid

```css
:root {
  --content-max-width: 720px;   /* Bacaan optimum, bukan full-width pada desktop */
  --sidebar-width: 260px;       /* Kalau ada nav sidebar pada desktop */
  --radius-base: 8px;           /* Border-radius standard untuk card/button/code block */
  --radius-sm: 4px;
}
```

- Content body dihadkan `max-width: var(--content-max-width)` dan `margin: 0 auto` — elak baris teks terlalu panjang
- Breakpoint: mobile default (< 768px) → nav collapse jadi hamburger/dropdown; desktop (≥ 768px) → nav boleh sidebar tetap

---

## 6. Komponen Wajib

### 6.1 Callout Box

Struktur HTML standard (guna class, bukan inline style):

```html
<div class="callout callout--warning">
  <span class="callout__icon">⚠️</span>
  <div class="callout__content">
    <strong>Amaran:</strong> Jangan restart laptop semasa proses ini berjalan.
  </div>
</div>

<div class="callout callout--tip">
  <span class="callout__icon">💡</span>
  <div class="callout__content"><strong>Tip:</strong> Guna Ctrl+Shift+V untuk paste tanpa format.</div>
</div>

<div class="callout callout--success">
  <span class="callout__icon">✅</span>
  <div class="callout__content"><strong>Checkpoint:</strong> Kalau nampak output ni, setup berjaya.</div>
</div>
```

CSS base:
```css
.callout {
  display: flex;
  gap: var(--space-3);
  padding: var(--space-4);
  border-radius: var(--radius-base);
  border-left: 4px solid;
  margin: var(--space-6) 0;
}
.callout--warning { background: var(--color-warning-bg); border-color: var(--color-warning-border); color: var(--color-warning-text); }
.callout--tip     { background: var(--color-tip-bg); border-color: var(--color-tip-border); color: var(--color-tip-text); }
.callout--success { background: var(--color-success-bg); border-color: var(--color-success-border); color: var(--color-success-text); }
.callout--danger  { background: var(--color-danger-bg); border-color: var(--color-danger-border); color: var(--color-danger-text); }
```

### 6.2 Code Block dengan Copy Button

```html
<div class="code-block">
  <button class="code-block__copy" onclick="copyCode(this)" aria-label="Salin kod">📋 Copy</button>
  <pre><code>wsl --install</code></pre>
</div>
```

```css
.code-block {
  position: relative;
  background: var(--color-bg-code);
  color: var(--color-text-code);
  border-radius: var(--radius-base);
  padding: var(--space-4);
  font-family: var(--font-code);
  overflow-x: auto;
  margin: var(--space-4) 0;
}
.code-block__copy {
  position: absolute;
  top: var(--space-2);
  right: var(--space-2);
  font-size: var(--text-xs);
  background: rgba(255,255,255,0.1);
  border: none;
  border-radius: var(--radius-sm);
  padding: var(--space-1) var(--space-2);
  cursor: pointer;
  color: var(--color-text-code);
}
```

`copyCode()` function letak dalam `assets/js/nav.js` atau fail JS berasingan `assets/js/copy.js`, guna `navigator.clipboard.writeText()`.

### 6.3 Navigation Bar (inject via nav.js)

- Fixed/sticky top pada mobile, sidebar pada desktop (≥768px)
- Wajib ada: Logo/nama projek, link ke `index.html`, dropdown/list semua 10 section, indicator section semasa (highlight guna `--color-primary-light`)
- Source tunggal: `assets/partials/nav.html` — jangan copy-paste manual ke tiap fail

### 6.4 Prev/Next Footer Nav

```html
<nav class="section-nav">
  <a href="/Edukasi-WSL-Hub-Docker/sections/01-prasyarat.html" class="section-nav__prev">← Prasyarat</a>
  <a href="/Edukasi-WSL-Hub-Docker/sections/03-wsl-setup.html" class="section-nav__next">WSL2 Setup →</a>
</nav>
```

### 6.5 Screenshot Placeholder

```html
<figure class="screenshot">
  <img src="/Edukasi-WSL-Hub-Docker/assets/img/01-prasyarat/step-1-enable-feature.png"
       alt="Skrin Windows Features dengan checkbox WSL ditanda">
  <figcaption>Langkah 1: Tanda checkbox 'Windows Subsystem for Linux'</figcaption>
</figure>
```

`alt` text WAJIB deskriptif (bukan "screenshot1.png") — penting untuk accessibility.

### 6.6 Environment Tags

Tag kecil untuk label persekitaran command (PowerShell vs WSL Ubuntu). Guna dalam code block atau arahan langkah.

```html
<span class="tag-powershell">PowerShell</span>
<span class="tag-wsl">WSL Ubuntu</span>
```

```css
.tag-powershell {
  background: var(--color-purple-bg);
  color: var(--color-purple-text);
}
.tag-wsl {
  background: var(--color-success-bg);
  color: var(--color-success-text);
}
```

Guna `--color-purple-bg`/`--color-purple-text` untuk PowerShell, dan `--color-success-bg`/`--color-success-text` untuk WSL/Ubuntu.

### 6.7 Step List (Numbered Steps)

Untuk langkah-langkah yang perlu diikuti secara berurutan. Guna struktur BEM dan CSS counter auto-numbering.

```html
<div class="step-list">
  <div class="step">
    <h3>Buka PowerShell sebagai Administrator</h3>
    <p>Klik kanan ...</p>
  </div>
  <div class="step">
    <h3>Jalankan command ini</h3>
    <div class="code-block">...</div>
  </div>
</div>
```

CSS menggunakan `counter-reset` / `counter-increment` pada `.step-list` / `.step`. Nombor dibekalkan automatik oleh CSS — tidak perlu tulis manual.

### 6.8 Glossary Term

Untuk istilah yang perlu diberi penekanan visual ringan dalam glossary section.

```html
<dfn class="glossary-term">WSL</dfn>
```

Guna `color: var(--color-primary)` dan `font-weight: 600`.

### 6.9 Screenshot Placeholder (Gambar Belum Ada)

Untuk placeholder imej yang belum diisi. Guna struktur ini — jangan guna text kosong.

```html
<div class="screenshot-placeholder">
  <!-- TODO: Tambah screenshot langkah ini -->
  <p>🖼️ Screenshot: [deskripsi ringkas]</p>
</div>
```

---

## 7. Ikon & Emoji (Convention)

Guna emoji sebagai ikon ringan (elak dependency icon library):

| Emoji | Guna untuk |
|---|---|
| ⚠️ | Warning/amaran |
| 💡 | Tip |
| ✅ | Checkpoint/success |
| ❌ | Salah/jangan buat |
| 🖥️ | Mod CLI |
| 🌐 | Mod Web AI |
| 📴 | Mod Offline AI |
| 📋 | Copy button |
| 🔧 | Troubleshooting |

Konsisten guna emoji yang sama untuk konsep yang sama merentasi semua section.

---

## 8. Responsive Rules

- Breakpoint tunggal: `768px` (mobile vs desktop) — elak multiple breakpoint yang buat CSS kompleks
- Di bawah 768px: nav jadi collapse/dropdown, content full-width dengan padding `var(--space-4)` kiri-kanan, font size tak turun bawah `--text-base`
- Code block: `overflow-x: auto` supaya command panjang scroll horizontal, bukan wrap (elak command jadi confusing bila wrap)
- Imej: `max-width: 100%; height: auto;` — jangan fixed width

---

## 9. Checklist Design Sebelum Section "Done"

- [ ] Semua warna guna CSS variable dari Seksyen 2 (tiada hex code hardcoded)
- [ ] Semua spacing guna scale dari Seksyen 4
- [ ] Callout box guna struktur class dari Seksyen 6.1 (bukan inline style)
- [ ] Code block ada copy button
- [ ] Semua imej ada `alt` text deskriptif
- [ ] Test pada viewport 375px — tiada horizontal overflow pada body text
- [ ] Heading hierarki betul (h1→h2→h3, tiada skip)

---

## 10. Larangan (Jangan Buat)

- ❌ Jangan tulis hex color terus dalam HTML/CSS section — sentiasa guna variable
- ❌ Jangan reka komponen baru (contoh jenis callout baru) tanpa tambah dulu ke fail ni
- ❌ Jangan guna icon library luar (Font Awesome, dsb) — cukup emoji, elak dependency
- ❌ Jangan buat font-size di bawah `--text-base` untuk body text
- ❌ Jangan fixed px width untuk imej/container — guna relative/max-width