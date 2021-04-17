document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".open-modal").addEventListener("click", function () {
    document.querySelector(".btn-menu").classList.toggle("active");
    document.querySelector(".modal-bottom-bg").classList.toggle("active");
  });

  document.querySelector(".btn-menu").addEventListener("click", function () {
    this.classList.toggle("active");
    document.querySelector(".modal-bottom-bg").classList.toggle("active");
  });
});
