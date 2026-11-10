
(function () {
  function addPortfolioFooter() {
    if (document.getElementById("portfolio-footer")) return;

    const footer = document.createElement("footer");
    footer.id = "portfolio-footer";

    footer.style.cssText = `
      margin-top: 48px;
      padding: 32px 20px 48px;
      border-top: 1px solid #cbd5e1;
      font-family: Arial, sans-serif;
      color: #1f2937;
    `;

    footer.innerHTML = `
      <h2 style="font-size:22px;margin:0 0 24px;">
        Created by Nneka Anadu
      </h2>
      <p style="font-size:18px;line-height:1.8;margin:0;">
        <a href="https://nnekaanadu-art.github.io/">
          View My Product Leadership Portfolio
        </a>
        |
        <a href="https://www.linkedin.com/in/NnekaAnadu"
           target="_blank"
           rel="noopener noreferrer">
          Connect on LinkedIn
        </a>
      </p>
    `;

    document.body.appendChild(footer);
  }

  if (document.readyState === "loading") {
    document.addEventListener(
      "DOMContentLoaded",
      addPortfolioFooter
    );
  } else {
    addPortfolioFooter();
  }
})();
