const button = document.getElementsByClassName("button");

button.addEventListener("click", showModalHandler);

let modal;

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalContent = document.createElement("p");
  modalContent.textContent = "Here is the simple modal overlay made with js!";

  const modalClose = document.createElement("button");

  modalClose.textContent = "Close";
  modalClose.className = "btn btn--alt";

  modalClose.addEventListener("click", modalCloseHandler);

  modal.append(modalContent);
  modal.append(modalClose);

  document.body.append(modal);

  backdrop = document.createElement("div");

  backdrop.className = "backdrop";

  backdrop.addEventListener("click", modalCloseHandler);

  document.body.append(backdrop);
}

function modalCloseHandler() {
  modal.remove();
  modal = null;

  backdrop.remove();
  backdrop = null;
}
