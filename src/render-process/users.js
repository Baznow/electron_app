const { loadHTML, fetchContent } = require("../help");

module.exports = {
  async loadUsers() {
    let content = document.getElementById("user-content");
    let userTemplate = document.getElementById("user-tmp");

    const data = await fetchContent(
      "https://jsonplaceholder.typicode.com/users"
    );
    let fragment = new DocumentFragment();

    data.forEach(user => {
      let cloneUser = document.importNode(userTemplate.content, true);
      let userNameStrong = cloneUser.querySelector("strong");
      let userSmalls = cloneUser.querySelector("small");
      let addressText = cloneUser.querySelector("i");
      let address = user.address;
      let formedAddress = [
        address.city,
        address.street,
        address.suit,
        address.zipcode
      ].join(" ");
      userNameStrong.textContent = user.name;
      userSmalls.textContent = user.username;
      addressText.textContent = formedAddress;
      fragment.appendChild(cloneUser);
    });

    content.innerHTML = "";
    content.appendChild(fragment);
  }
};

function appendUsers() {
  loadHTML("users.html", "main");
}

appendUsers();
