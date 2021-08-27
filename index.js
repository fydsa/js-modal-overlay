const button = document.querySelector("button");

button.addEventListener("click", showModalHandler);

let modal;
let backdrop;

function showModalHandler() {
  if (modal) {
    return;
  }

  modal = document.createElement("div");
  modal.className = "modal";

  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header";

  const modalBody = document.createElement("div");
  modalBody.className = "modal-body";

  const modalFooter = document.createElement("div");
  modalFooter.className = "modal-footer";

  const modalTitle = document.createElement("div");
  modalTitle.textContent = "Modal Title";
  modalTitle.className = "modal-title";

  const modalContent = document.createElement("p");
  modalContent.textContent = "Here is the simple modal overlay made with js!";

  const modalActionYes = document.createElement("button");
  const modalActionCancel = document.createElement("button");
  const modalClose = document.createElement("button");

  modalActionYes.textContent = "Okay";
  modalActionCancel.textContent = "Cancel";
  modalClose.textContent = "Close";

  modalActionYes.addEventListener("click", modalCloseHandler);
  modalActionCancel.addEventListener("click", modalCloseHandler);
  modalClose.addEventListener("click", modalCloseHandler);

  modalActionYes.className = "button button-okay";
  modalActionCancel.className = "button button-cancel";
  modalClose.className = "button-close";

  modalHeader.append(modalTitle);
  modalHeader.append(modalClose);
  modalBody.append(modalContent);
  modalFooter.append(modalActionCancel);
  modalFooter.append(modalActionYes);

  modal.append(modalHeader);
  modal.append(modalBody);
  modal.append(modalFooter);

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
