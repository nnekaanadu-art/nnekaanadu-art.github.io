(function () {
  var year = new Date().getFullYear();
  var footer = document.createElement('footer');
  footer.style.cssText =
    'max-width:1150px;margin:0 auto;padding:8px 25px 16px;' +
    'font:14px system-ui,Arial,sans-serif;color:#17253b;';
  footer.innerHTML =
    '<p style="margin:0 0 4px;font-weight:700;">Created by Nneka Anadu</p>' +
    '<p style="margin:0;">' +
      '<a href="https://nnekaanadu-art.github.io/" style="color:#1757b6;">View My AI Learning Portfolio</a>' +
      ' | ' +
      '<a href="https://www.linkedin.com/in/NnekaAnadu" target="_blank" rel="noopener noreferrer" style="color:#1757b6;">Connect on LinkedIn</a>' +
    '</p>' +
    '<p style="margin:8px 0 0;font-size:12px;color:#4a5870;">© ' + year + ' Nneka Anadu. All rights reserved.</p>';
  document.body.appendChild(footer);
})();
