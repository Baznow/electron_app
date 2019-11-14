const fs = require("fs");

module.exports = {
  loadHTML(file, elemId, ...listeners) {
    fs.readFile("./src/sections/" + file, "UTF-8", (err, data) => {
      document.getElementById(elemId).insertAdjacentHTML("beforeend", data);
      listeners.forEach(listener => {
        listener();
      });
    });
  },

  async fetchContent(url) {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  }
};
