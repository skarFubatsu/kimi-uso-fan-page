function clearAll() {
  $("div.avatars-container")
    .children(".selected")
    .each((_, e) => {
      $(e).toggleClass("selected");
    });
  return 0;
}

function avatarSelection(element) {
  clearAll();
  $(element).addClass("selected");
  $("#avatar-choice").attr("value", $(element).attr("src"));
}

function loadAvatars(data) {
  let container = document.getElementsByClassName("avatars-container")[0];
  data.forEach((avatar) => {
    container.innerHTML += `
      <img src="${avatar}" alt="" class="avatar" onclick="avatarSelection(this)" />
    `;
  });
}

function fadeIn() {
  let items = document.getElementsByClassName("message");
  let delay = 1000;

  for (let i = 0; i < items.length; ++i) {
    setTimeout(() => {
      $(items[i]).css({ opacity: 1 });
    }, i * delay || 500);
  }
}
