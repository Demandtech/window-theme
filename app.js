const menuButton = document.querySelector("#menuButton");
const menuItem = document.querySelector("#menuItem");

menuButton.addEventListener("click", (event) => {
  menuItem.hidden = !menuItem.hidden;
  event.stopPropagation();
});

document.addEventListener("click", (event) => {
  if (
    !menuItem.hidden &&
    !menuItem.contains(event.target) &&
    event.target !== menuButton
  ) {
    menuItem.hidden = true;
  }
});
