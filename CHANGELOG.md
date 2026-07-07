# CHANGELOG.md

> Log semua perubahan pada projek ni. Format ikut [Keep a Changelog](https://keepachangelog.com/). **AI-agent WAJIB tambah entry baru di bawah `[Unreleased]` setiap kali selesai kerja** — jangan edit entry lama, jangan padam sejarah.

---

## Format Entry (rujukan untuk AI-agent)

Setiap entry MESTI ikut format ni:

```markdown
### <Kategori>
- **[<nombor-section atau nama-fail>]** Deskripsi ringkas perubahan — oleh <nama/agent> (<tarikh YYYY-MM-DD>)
```

**Kategori yang dibenarkan** (guna heading `###`):
- `Added` — fail/section/komponen baru
- `Changed` — kemaskini content/struktur sedia ada
- `Fixed` — betulkan bug/broken link/typo
- `Removed` — fail/section digugurkan
- `Blocked` — isu ditemui yang belum selesai (rujuk juga `CONTENT-PLAN.md`)

**Contoh entry yang betul:**
```markdown
### Added
- **[01-prasyarat]** Tambah section penuh: check Windows version, enable WSL via PowerShell, restart flow — oleh Claude (2026-07-08)

### Fixed
- **[assets/js/nav.js]** Betulkan path absolute yang pecah bila site di-deploy ke subfolder GitHub Pages — oleh opencode-agent (2026-07-09)
```

**Peraturan:**
1. Entry paling baru letak di bawah `[Unreleased]`, di ATAS entry lama
2. Bila satu batch kerja "release" (contoh: semua 10 section dah selesai + screenshot lengkap), pindah `[Unreleased]` jadi versi bertarikh (contoh `[1.0.0] - 2026-08-01`) dan mula `[Unreleased]` baru yang kosong
3. Setiap entry MESTI nyatakan section/fail yang terlibat dalam `[bracket]` — supaya senang cari guna Ctrl+F
4. Jangan gabung banyak perubahan tak berkaitan dalam 1 baris — pecahkan ke entry berasingan
5. Rujukan silang: kalau perubahan ni juga update status di `CONTENT-PLAN.md`, boleh nota ringkas

---

## [Unreleased]

### Added
- **[sections/03-wsl-setup.html]** Cipta section baru (bukan migration): first-time Ubuntu setup (username/password), apt update/upgrade, verify wsl -l -v + wsl --status — oleh opencode-agent (2026-07-07)
- **[sections/04-wsl-manage.html]** Migrasi #7b dari `wsl.html`: 2 command (exit, wsl --shutdown) + penjelasan beza exit vs shutdown — oleh opencode-agent (2026-07-07)
- **[sections/06-docker-manage.html]** Migrasi #6 dari `docker-manage.html`: 3 command (sudo service docker start, docker run -d -p 8080:80 --name web-node nginx, docker ps) — oleh opencode-agent (2026-07-07)
- **[sections/05-docker-setup.html]** Migrasi #5 dari `docker-setup.html`: GPG script (8 baris) + usermod bukan-root — oleh opencode-agent (2026-07-07)
- **[sections/08-troubleshooting.html]** Migrasi #4 dari `problems.html`: 3 isu (daemon, permission, port conflict) — oleh opencode-agent (2026-07-07)
- **[sections/10-quick-reference.html]** Migrasi #3 dari `quick_reference.html`: 11 command dalam 4 kategori + environment tags (tag-powershell/tag-wsl) — oleh opencode-agent (2026-07-07)
- **[sections/09-qa.html]** Migrasi #2 dari `qa.html`: 3 Q&A pairs (Docker Engine vs Desktop, container selepas shutdown, container vs VM) — oleh opencode-agent (2026-07-07)
- **[sections/07-docker-cleanup.html]** Migrasi #1 dari `docker-cleanup.html`: 3 command (docker stop, docker rm -f, docker system prune -a --volumes -f) — oleh opencode-agent (2026-07-07)
- **[sections/01-prasyarat.html]** Cipta section penuh: check Windows version/build, enable Virtual Machine Platform & WSL (GUI + PowerShell), `wsl --install`, restart, BIOS virtualization (generic advice) — oleh opencode-agent (2026-07-07)
- **[sections/02-istilah-asas.html]** Cipta glossary section: 8 istilah (WSL, distro, kernel, container, image, daemon, port, CLI) setiap satu dengan analogi mesra pemula — oleh opencode-agent (2026-07-07)
- **[LICENSE]** Cipta MIT License dengan placeholder [Nama Pemilik] — oleh opencode-agent (2026-07-07)
- **[assets/css/style.css]** Cipta design system CSS penuh: semua token warna/typography/spacing dari design.md, komponen (navbar, hero, callout, code-block, section-card, screenshot, section-nav, toc, footer), responsive breakpoint 768px — oleh opencode-agent (2026-07-07)
- **[assets/partials/nav.html]** Cipta single source of truth nav (11 entries: Home + 01–10) — oleh opencode-agent (2026-07-07)
- **[assets/js/nav.js]** Cipta nav injection (fetch + highlight current section + mobile toggle) dan fungsi copyCode — oleh opencode-agent (2026-07-07)
- **[templates/section-template.html]** Cipta template section patuh SKILL.md §4 (11 bahagian wajib) + komponen design.md §6 — oleh opencode-agent (2026-07-07)

### Changed
- **[index.html]** Refactor total ke design system baru: semantic HTML5 (header/main/footer), hero section, section cards grid, nav injection, CSS custom properties, tanpa CDN — oleh opencode-agent (2026-07-07)
- **[README.md]** Gantikan README.md lama (DevNode-focused, 87 baris) dengan versi baru (pemula-focused, AI-agent-friendly, 131 baris) — oleh opencode-agent (2026-07-07)
- **[design.md]** Tambah §6.6–6.9: Environment Tags, Step List, Glossary Term, Screenshot Placeholder. Tambah token warna `--color-purple-bg`/`--color-purple-text` di §2 — oleh opencode-agent (2026-07-07)
- **[CONTENT-PLAN.md]** Update menyeluruh: 03–10 ✅ Done selepas migrasi; resolve known limitation 03/04 (wsl.html split selesai); update tarikh dan nota semua section — oleh opencode-agent (2026-07-07)
- **[LICENSE]** Gantikan placeholder [Nama Pemilik] dengan state-of-protocol — oleh opencode-agent (2026-07-07)

### Fixed
- **[sections/07-docker-cleanup.html]** Betulkan 2 broken links: next (problems.html → sections/08-troubleshooting.html) + footer (quick_reference.html / qa.html → sections/10 / 09) — oleh opencode-agent (2026-07-07)
- **[sections/09-qa.html]** Betulkan 3 broken links: prev (problems.html → sections/08), next (quick_reference.html → sections/10), footer (quick_reference.html → sections/10) — oleh opencode-agent (2026-07-07)
- **[sections/10-quick-reference.html]** Betulkan 2 broken links: troubleshooting (docker-setup.html → sections/05, problems.html → sections/08) — oleh opencode-agent (2026-07-07)
- **[sections/01-prasyarat.html]** Betulkan 2 broken links: troubleshooting (problems.html → sections/08) + footer (quick_reference.html / qa.html → sections/10 / 09) — oleh opencode-agent (2026-07-07)
- **[sections/02-istilah-asas.html]** Betulkan 2 broken links: troubleshooting (quick_reference.html → sections/10) + footer (quick_reference/qaa → sections/10/09) — oleh opencode-agent (2026-07-07)
- **[sections/05-docker-setup.html]** Betulkan section-nav prev (wsl.html → sections/04-wsl-manage.html) selepas 04 dimigrasi — oleh opencode-agent (2026-07-07)
- **[sections/03-wsl-setup.html]** Betulkan section-nav next (wsl.html → sections/04-wsl-manage.html) selepas 04 dimigrasi — oleh opencode-agent (2026-07-07)
- **[assets/css/style.css]** Betulkan hardcoded hex (#f3e8ff, #6b21a8, #d1fae5, #065f46) dalam .tag-powershell/.tag-wsl — guna CSS custom properties — oleh opencode-agent (2026-07-07)
- **[assets/partials/nav.html]** Betulkan urutan section: tambah entry 04 (WSL2 Pengurusan) & perbetul nombor 05–10 — oleh opencode-agent (2026-07-07)
- **[nav.html + index.html]** Update semua 7 link: docker-setup, docker-manage, wsl (×2) → sections/05, 06, 03, 04 — oleh opencode-agent (2026-07-07)

### Blocked (Resolved)
- ~~**[index.html]**~~ Struktur asal tidak guna `sections/00-index.html` — index.html sedia ada di root, telah direfactor. Isu selesai.
- ~~**[assets/partials/nav.html]**~~ Nav single source of truth telah dicipta. Isu selesai.
- ~~**[sections/03 + 04]**~~ Kedua-dua section dulu link ke wsl.html (known limitation). Kini wsl.html telah dipecah: 03 ditulis baru, 04 dimigrasi dari wsl.html. Chain 03→04→05 lengkap. Isu selesai.

### Added
- **[SKILL.md]** Cipta fail arahan penuh untuk AI-agent (struktur fail, rules, checklist, larangan) — oleh Claude (2026-07-07)
- **[README.md]** Cipta overview projek, struktur, cara guna & contribute — oleh Claude (2026-07-07)
- **[design.md]** Cipta design system penuh (warna, typography, spacing, komponen wajib) — oleh Claude (2026-07-07)
- **[CONTENT-PLAN.md]** Cipta status tracking untuk semua 10 section + fail sokongan — oleh Claude (2026-07-07)
- **[CHANGELOG.md]** Cipta fail ini — oleh Claude (2026-07-07)

---

## Sejarah Sebelum Fail Ni Wujud (Baseline)

> Perubahan sebelum sistem CHANGELOG ni diperkenalkan — direkod di sini sebagai rujukan sejarah sahaja, bukan format standard di atas.

- Dokumentasi asal dicipta merangkumi 7 halaman: index, WSL setup/manage, Docker setup/manage/cleanup, problems, Q&A, quick reference — oleh pemilik projek (± awal Julai 2026)

---

## Templat Versi Bertarikh (guna bila "release")

```markdown
## [1.0.0] - YYYY-MM-DD

### Added
- ...

### Changed
- ...

### Fixed
- ...
```