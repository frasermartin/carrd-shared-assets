
document.addEventListener("DOMContentLoaded", () => {
  const year = new Date().getFullYear();

  document.querySelectorAll(".copyright-year").forEach(el => {
    const siteTitle = el.dataset.siteTitle || document.title;

    el.textContent = `© ${year} ${siteTitle} | Published with `;

    const link = document.createElement("a");
    link.href = "https://try.carrd.com/j31pslcx";
    link.textContent = "Carrd";

    el.appendChild(link);
  });
});
