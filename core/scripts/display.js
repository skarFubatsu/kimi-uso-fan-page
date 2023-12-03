function formGrid(data) {
  let main = document.getElementsByClassName("main-char card-container")[0];
  let support = document.getElementsByClassName("support-char card-container")[0];
  let background = document.getElementsByClassName("background-char card-container")[0];
  data.forEach((item) => {
    card = `
    <div class="card">
      <a href="character.html?id=${item.id}">
        <img src="${item.image.profile}" />
      </a>
      <div class="name">
        <p>${item.name.full}</p>
      </div>
    </div>`;

    switch (item.type) {
      case "main":
        main.innerHTML += card;
        break;
      case "support":
        support.innerHTML += card;
        break;
      default:
        background.innerHTML += card;
    }
  });
}

function generateContent(data) {
  let id = new URLSearchParams(window.location.search).get("id");
  let character = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      character = data[i];
    }
  }
  document.getElementsByClassName("contents")[0].innerHTML += `<pre>${JSON.stringify(
    character,
    null,
    4
  )}</pre>`;
}
