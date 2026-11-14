
(function () {
  // Prevent the universal footer from being added twice
  if (document.getElementById('universal-portfolio-footer')) {
    return;
  }

  function renderFooter() {
    if (document.getElementById('universal-portfolio-footer')) {
      return;
    }

    var year = new Date().getFullYear();
    var footer = document.createElement('footer');

    footer.id = 'universal-portfolio-footer';

    footer.style.cssText =
      'display:block;' +
      'width:100%;' +
      'max-width:1150px;' +
      'margin:36px auto 0;' +
      'padding:18px 25px 24px;' +
      'border-top:1px solid #dbe4f0;' +
      'font:14px system-ui,Arial,sans-serif;' +
      'color:#17253b;' +
      'text-align:center;' +
      'box-sizing:border-box;';

    footer.innerHTML =
      '<p style="margin:0 0 8px;font-weight:700;">' +
        'Product Thinking in Practice' +
      '</p>' +

      '<nav aria-label="Footer navigation" ' +
        'style="display:block !important;' +
        'width:100%;' +
        'margin:0 !important;' +
        'padding:0 !important;' +
        'text-align:center !important;">' +

        '<a href="https://nnekaanadu-art.github.io/" ' +
          'style="color:#1757b6;text-decoration:none;">' +
          'Portfolio Home</a>' +

        ' &nbsp;|&nbsp; ' +

        '<a href="https://www.linkedin.com/in/NnekaAnadu" ' +
          'target="_blank" rel="noopener noreferrer" ' +
          'style="color:#1757b6;text-decoration:none;">' +
          'LinkedIn</a>' +

        ' &nbsp;|&nbsp; ' +

        '<a href="https://github.com/nnekaanadu-art" ' +
          'target="_blank" rel="noopener noreferrer" ' +
          'style="color:#1757b6;text-decoration:none;">' +
          'GitHub</a>' +

      '</nav>' +

      '<p style="margin:10px 0 0;' +
        'font-size:12px;color:#4a5870;">' +
        '© ' + year + ' Nneka Anadu. All rights reserved.' +
      '</p>';

    document.body.appendChild(footer);
  }

  // Works whether the script loads early or after the page is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFooter);
  } else {
    renderFooter();
  }
})();
