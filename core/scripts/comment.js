const DEFAULT_AVATAR = "assets/images/characters/yuriko/profile.jpeg";

function parseMessage(user) {
  if (user instanceof FormData) {
    user = {
      name: user.get("name"),
      avatar: user.get("avatar"),
      comment: user.get("comment"),
    };
  }

  if (!user.avatar) {
    user.avatar = DEFAULT_AVATAR;
  }
  return `
  <div class="message">
    <img src="${user.avatar}" alt="" class="avatar" />
    <div class="message-bubble">
      <h2 class="name">${user.name}</h2>
      <hr class="nbr" />
      <p class="comment">${user.comment}</p>
    </div>
  </div>
  `;
}

function extractForm() {
  let data = new FormData(document.getElementsByClassName("comment-form")[0]);
  let container = document.getElementsByClassName("messages")[0];
  container.innerHTML = parseMessage(data) + container.innerHTML;
  $(".comment-form")
    .find(":radio, :checkbox")
    .removeAttr("checked")
    .end()
    .find("textarea, :text, select")
    .val("");
  $("div.messages")
    .children(".message")
    .each((_, e) => {
      $(e).css({ opacity: 0 });
    });
  clearAll();
  fadeIn();
  return false;
}

function loadComments(data) {
  let container = document.getElementsByClassName("messages")[0];
  data.forEach((message) => {
    container.innerHTML += parseMessage(message);
  });
  fadeIn();
}
