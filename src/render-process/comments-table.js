const { loadHTML, fetchContent } = require("../help");

module.exports = {
  async loadCommentsTable() {
    let content = document.getElementById("comments-table-content");
    let rowTemplate = document.getElementById("comments-table-row-tmp");

    const data = await fetchContent(
      "https://jsonplaceholder.typicode.com/comments"
    );
    let fragment = new DocumentFragment();

    data.forEach(comment => {
      let cloneRow = document.importNode(rowTemplate.content, true);
      let tds = cloneRow.querySelectorAll("td");

      tds[0].textContent = comment.id;
      tds[1].textContent = comment.name;
      tds[2].textContent = comment.email;
      tds[3].textContent = comment.body;

      fragment.appendChild(cloneRow);
    });

    content.innerHTML = "";
    content.appendChild(fragment);
  }
};

function appendTable() {
  loadHTML("comments-table.html", "main");
}

appendTable();
