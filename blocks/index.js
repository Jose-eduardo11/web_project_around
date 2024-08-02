let popupedit_button = document.getElementsByClassName("data__edit");
let popup = document.getElementsByClassName("popup");

function edit_profile() {
  popup.classList.add("popup_opened");
}
function close_profile() {
  popup.classList.remove("popup_opened");
}

edit_button.addEventListener("click", edit_profile);
