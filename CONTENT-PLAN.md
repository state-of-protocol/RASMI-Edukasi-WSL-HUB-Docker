# CONTENT-PLAN.md — Status & Rujukan Kandungan

> Fail ini adalah **single source of truth** untuk status setiap section. AI-agent WAJIB baca fail ini dulu sebelum edit mana-mana section, dan WAJIB update selepas siap kerja. Jangan tandakan "done" sebelum checklist di `SKILL.md` Seksyen 6 lulus sepenuhnya.

---

## Status Legend

| Status | Maksud |
|---|---|
| ⬜ Todo | Belum mula |
| 🟡 Draft | Content asas ada, belum lengkap/belum lulus checklist |
| 🔵 Review | Siap ditulis, tunggu semakan manusia |
| ✅ Done | Lulus checklist penuh, live |
| 🔴 Blocked | Ada isu perlu diselesaikan dulu (nyatakan di kolum "Nota") |

---

## Senarai Section

| # | Fail | Tajuk | Status | Screenshot | Last Updated | Nota |
|---|---|---|---|---|---|---|
| 01 | `01-prasyarat.html` | Prasyarat & Enable WSL | 🟡 Draft | 🟡 Placeholder | 2026-07-07 | Siap: check Windows version/build, enable features (GUI + PowerShell), `wsl --install`, restart, BIOS virtualization (generic). Perlu: screenshot sebenar untuk step; verify accuracy BIOS section. |
| 02 | `02-istilah-asas.html` | Istilah Asas (Glossary) | 🟡 Draft | ❌ | 2026-07-07 | Siap: WSL, distro, kernel, container, image, daemon, port, CLI — setiap istilah ada analogi. Perlu: screenshot tak relevan (glossary). |
| 03 | `03-wsl-setup.html` | WSL2 - Setup | ✅ Done | ❌ | 2026-07-07 | Ditulis baru: first-time Ubuntu setup (username/password), apt update/upgrade, verify wsl -l -v / wsl --status. Tiada duplicate dengan 01. |
| 04 | `04-wsl-manage.html` | WSL2 - Pengurusan & Sesi | ✅ Done | ❌ | 2026-07-07 | Migrasi dari `wsl.html` asal (2 command: exit + wsl --shutdown). Tambah penjelasan beza exit vs shutdown. |
| 05 | `05-docker-setup.html` | Docker - Pemasangan | ✅ Done | ❌ | 2026-07-07 | Migrasi dari `docker-setup.html` asal: GPG script + repositori Docker, kebenaran bukan-root (usermod). |
| 06 | `06-docker-manage.html` | Docker - Urus Container | ✅ Done | ❌ | 2026-07-07 | Migrasi dari `docker-manage.html` asal: 3 command (service docker start, docker run nginx, docker ps). |
| 07 | `07-docker-cleanup.html` | Docker - Pembersihan | ✅ Done | ❌ | 2026-07-07 | Migrasi dari `docker-cleanup.html` asal: 3 command (docker stop, docker rm -f, docker system prune). |
| 08 | `08-troubleshooting.html` | Masalah Lazim | ✅ Done | ❌ | 2026-07-07 | Migrasi dari `problems.html` asal: 3 isu (daemon, permission, port conflict). |
| 09 | `09-qa.html` | Q&A | ✅ Done | ❌ | 2026-07-07 | Migrasi dari `qa.html` asal: 3 Q&A pairs (Docker Engine vs Desktop, container selepas shutdown, VM vs container). |
| 10 | `10-quick-reference.html` | Rujukan Pantas | ✅ Done | ❌ | 2026-07-07 | Migrasi dari `quick_reference.html` asal: 11 command dalam 4 kategori + environment tags. |

---

## Prioriti Kerja Seterusnya (untuk AI-agent rujuk bila tiada arahan spesifik)

1. 🥇 **01-prasyarat.html** — entry point pemula, tanpa ni pembaca terus stuck di section 03
2. 🥈 **02-istilah-asas.html** — sokongan untuk semua section lain
3. 🥉 Tambah screenshot untuk section 03–10 (semua content dah siap, tinggal visual)
4. Update **08-troubleshooting.html** dengan error setup awal selepas 01 siap

> Kalau user/prompt tak nyatakan section mana, AI-agent boleh cadangkan mula dari prioriti list ni.

---

## Fail Sokongan — Status

| Fail | Status | Nota |
|---|---|---|---|
| `README.md` | ✅ Done | Digantikan dengan versi baru (pemula-focused, 131 baris) — 2026-07-07 |
| `SKILL.md` | ✅ Done | |
| `design.md` | ✅ Done | Ditambah §6.6–6.9 (Environment Tags, Step List, Glossary Term, Screenshot Placeholder) — 2026-07-07 |
| `CONTENT-PLAN.md` | ✅ Done | Fail ini |
| `CHANGELOG.md` | ✅ Done | |
| `index.html` | ✅ Done | Refactor ke design system baru (semantic HTML5, CSS custom properties, nav injection) — 2026-07-07 |
| `assets/css/style.css` | ✅ Done | Cipta design system CSS penuh (all tokens + komponen) — 2026-07-07 |
| `assets/partials/nav.html` | ✅ Done | Cipta single source of truth nav (11 entries: Home + 01–10) — 2026-07-07 |
| `assets/js/nav.js` | ✅ Done | Cipta nav injection + copyCode + mobile toggle — 2026-07-07 |
| `templates/section-template.html` | ✅ Done | Cipta template patuh SKILL.md §4 & design.md §6 — 2026-07-07 |
| `LICENSE` | ✅ Done | MIT License, owner: state-of-protocol — 2026-07-07 |
| Section 01–02 | 🟡 Draft | Seterusnya: 01-prasyarat.html & 02-istilah-asas.html — perlu final check & screenshot |
| Section 03–10 | ✅ Done | Semua 8 section telah dimigrasi/ditulis, prev/next chain lengkap, tiada broken link ke fail lama |
| — | ✅ Resolved | ~~03 & 04 kedua-duanya link ke wsl.html~~ — wsl.html telah dipecah kepada `sections/03-wsl-setup.html` + `sections/04-wsl-manage.html`. Link 03→04→05 chain lengkap. |

---

## Peraturan Update Fail Ini (untuk AI-agent)

1. **Sebelum mula kerja:** Semak kolum "Status" — jangan sentuh section berstatus 🔴 Blocked tanpa selesaikan isu di kolum "Nota" dulu.
2. **Selepas siap kerja:** Update kolum Status, Last Updated (format `YYYY-MM-DD`), dan Nota.
3. **Jangan padam row** — kalau section digugurkan, tukar status jadi `⬜ Todo` dengan nota "digugurkan — sebab: ..." supaya sejarah keputusan kekal.
4. **Setiap perubahan status juga MESTI dicatat di `CHANGELOG.md`** dengan tarikh & ringkasan.
5. **Kalau AI-agent jumpa isu semasa kerja** (contoh: link patah, struktur tak konsisten) tapi tak selesaikan sekarang — tambah row baru di bawah "Fail Sokongan" atau nota di section berkaitan dengan status 🔴 Blocked, supaya sesi/agent seterusnya nampak.

---

## Definition of Done (rujukan pantas — penuh di `SKILL.md` §6)

Section hanya boleh ditanda ✅ Done bila:
- [ ] Semua link berfungsi
- [ ] Path CSS/JS absolute dari root
- [ ] Ada minimum 1 callout ✅ Checkpoint
- [ ] Troubleshooting link (jika relevan)
- [ ] HTML valid & responsive (375px tested)
- [ ] Nav prev/next betul
- [ ] Screenshot placeholder ada (walaupun imej sebenar belum masuk — tandakan di kolum Screenshot jadi 🟡 Placeholder, bukan ✅)