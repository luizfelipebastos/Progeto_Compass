const fecharPopupButton = document.querySelector(".fechar-popup");
const popup = document.querySelector(".popup");

fecharPopupButton.addEventListener("click", () => {
  popup.style.display = "none";
});
