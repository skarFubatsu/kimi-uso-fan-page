function slideIn() {
  let items = document.getElementsByClassName("genre");
  let delay = 2000;

  for (let i = 0; i < items.length; ++i) {
    setTimeout(() => {
      items[i].classList.add("slide-genre");
    }, (i + 2) * delay);
  }
}
