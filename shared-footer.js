
(function () {
  // Prevent the universal footer from being added twice
  if (document.getElementById('universal-portfolio-footer')) {
    return;
  }

  var year = new Date().getFullYear();
  var footer = document.createElement('footer');

  footer.id = 'universal-portfolio-footer';

  footer.style.cssText =
    'max-width:1150px;' +
    'margin:0 auto;' +
    'padding:14px 25px 18px;' +
    'border-top:1px solid #dbe4f0;' +
    'font:14px system-ui,Arial,sans-serif;' +
    'color:#17253b;' +
    'text-align:center;';

  footer.innerHTML =
    '<p style="margin:0 0 6px;font-weight:700;">' +
      'Product Thinking in Practice' +
    '</p>' +

    '<nav aria-label="Footer navigation" style="margin:0;">' +
      '<a href="https://nnekaanadu-art.github.io/" ' +
        'style="color:#1757b6;text-decoration:none;">' +
        'Portfolio Home</a>' +
      ' | ' +
      '<a href="https://www.linkedin.com/in/NnekaAnadu" ' +
        'target="_blank" rel="noopener noreferrer" ' +
        'style="color:#1757b6;text-decoration:none;">' +
        'LinkedIn</a>' +
      ' | ' +
      '<a href="https://github.com/nnekaanadu-art" ' +
        'target="_blank" rel="noopener noreferrer" ' +
        'style="color:#1757b6;text-decoration:none;">' +
        'GitHub</a>' +
    '</nav>' +

    '<p style="margin:8px 0 0;font-size:12px;color:#4a5870;">' +
      '© ' + year + ' Nneka Anadu. All rights reserved.' +
    '</p>';

  document.body.appendChild(footer);
})();
