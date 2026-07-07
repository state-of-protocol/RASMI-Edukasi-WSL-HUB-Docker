(function () {
  var depth = window.location.pathname.includes('/sections/') ? 1 : 0;
  var prefix = depth === 0 ? '' : '../';

  function loadNav() {
    var placeholder = document.getElementById('nav-placeholder');
    if (!placeholder) return;

    fetch(prefix + 'assets/partials/nav.html')
      .then(function (res) { return res.text(); })
      .then(function (html) {
        if (depth === 0) {
          html = html.replace(/href="(\d\d-)/g, 'href="sections/$1');
        }
        placeholder.innerHTML = html;
        highlightCurrentSection();
        setupMobileToggle();
      })
      .catch(function () {
        placeholder.innerHTML = '<p class="nav-error">Nav gagal dimuat.</p>';
      });
  }

  function highlightCurrentSection() {
    var currentFile = window.location.pathname.split('/').pop();
    var links = document.querySelectorAll('#nav-links a');
    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href && href.endsWith(currentFile)) {
        link.classList.add('active');
      }
    });
  }

  function setupMobileToggle() {
    var toggle = document.getElementById('nav-toggle');
    var links = document.getElementById('nav-links');
    if (!toggle || !links) return;

    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });

    links.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        links.classList.remove('open');
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNav);
  } else {
    loadNav();
  }
})();

function copyCode(button) {
  var container = button.parentElement;
  var codeEl = container.querySelector('code') || container.querySelector('pre code');
  if (!codeEl) codeEl = container.querySelector('pre');
  var text = codeEl ? codeEl.innerText : '';
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(function () {
      var orig = button.innerHTML;
      button.innerHTML = '✅ Copied!';
      setTimeout(function () { button.innerHTML = orig; }, 2000);
    });
  }
}