document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".copyright-year")
    .forEach(el => {
      const year = new Date().getFullYear();
      const siteTitle = el.dataset.siteTitle;

      el.textContent = `© ${year} ${siteTitle}` + ' | Published with <a hef="https://try.carrd.com/j31pslcx">Carrd</a>';
    });
});
