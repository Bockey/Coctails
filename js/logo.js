function logoLink() {
  const logoToHome = document.querySelector(".logo");
  logoToHome.addEventListener("click", function () {
    location.href = "index.html";
  });
}
