function formGrid(data) {
  data.forEach((item) => {
    card = `
    <div class="card" id="Cx${item.id}">
      <a href="character.html?id=${item.id}" target="_blank">
        <img src="${item.image.profile}" />
      </a>
      <div class="name">
        <p>${item.name.full}</p>
      </div>
    </div>`;
    line = `
    <li>
      <a href="#Cx${item.id}">
        ${item.name.first}
      </a>
    </li>
    `;

    switch (item.type) {
      case "main":
        let main = document.getElementsByClassName("main-char card-container")[0];
        let tocMain = document.getElementsByClassName("main-char-toc")[0];
        main.innerHTML += card;
        tocMain.innerHTML += line;
        break;
      case "support":
        let support = document.getElementsByClassName("support-char card-container")[0];
        let tocSupport = document.getElementsByClassName("supporting-char-toc")[0];
        support.innerHTML += card;
        tocSupport.innerHTML += line;
        break;
      default:
        let background = document.getElementsByClassName("background-char card-container")[0];
        let tocBackground = document.getElementsByClassName("background-char-toc")[0];
        background.innerHTML += card;
        tocBackground.innerHTML += line;
    }
  });
}

const typeMap = {
  main: "Main Character",
  support: "Supporting Character",
  background: "Background Character",
};

const monthMap = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function generateContent(data) {
  let id = new URLSearchParams(window.location.search).get("id");
  let character = null;
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      character = data[i];
    }
  }
  document.title = character.name.native + " | Kimi Uso";
  document.getElementsByClassName("banner")[0].src = character.image.banner;
  document.getElementsByClassName("avatar")[0].src = character.image.avatar;
  document.getElementsByClassName("name")[0].innerHTML = character.name.full;
  let flex = document.getElementsByClassName("flex-alt")[0];
  flex.innerHTML += `<span class="role">${typeMap[character.type]}</span>`;
  character.name.alternative.forEach((nick) => {
    flex.innerHTML += `<span class="alt">${nick}</span>`;
  });
  document.getElementsByClassName("desc")[0].innerHTML += character.description;
  document.getElementsByClassName("appr")[0].innerHTML += character.appearance;
  document.getElementsByClassName("perso")[0].innerHTML += character.personality;
  let table = document.getElementsByClassName("tabular-info")[0];
  table.innerHTML += `
    <tr>
      <td>Last Name</td>
      <td>${character.name.last}</td>
    </tr>
    `;
  table.innerHTML += `
    <tr>
      <td>First Name</td>
      <td>${character.name.first}</td>
    </tr>
    `;
  if (character.name.native) {
    table.innerHTML += `
    <tr>
      <td>Native Name</td>
      <td>${character.name.native}</td>
    </tr>
    `;
  }
  if (character.gender) {
    table.innerHTML += `
    <tr>
      <td>Gender</td>
      <td>${character.gender}</td>
    </tr>
    `;
  }
  if (character.age) {
    table.innerHTML += `
    <tr>
      <td>Age</td>
      <td>${character.age}</td>
    </tr>
    `;
  }
  if (character.dateOfBirth.day) {
    table.innerHTML += `
    <tr>
      <td>Birth Date</td>
      <td>${character.dateOfBirth.day}, ${monthMap[character.dateOfBirth.month - 1]}</td>
    </tr>
    `;
  }
}
