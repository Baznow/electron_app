const { loadHTML, fetchContent } = require("../help");

module.exports = {
  async loadAlbum(albomId, albomNum) {
    let content = document.getElementById(albomId);
    let photoTemplate = document.getElementById("photo-tmp");

    const data = await fetchContent(
      "https://jsonplaceholder.typicode.com/photos?albumId=" + albomNum
    );
    let fragment = new DocumentFragment();

    data.forEach(photo => {
      let clonePhoto = document.importNode(photoTemplate.content, true);
      let img = clonePhoto.querySelector("img");

      img.src = photo.url;

      fragment.appendChild(clonePhoto);
    });

    content.innerHTML = "";
    content.appendChild(fragment);
  }
};

function appendAlbums() {
  loadHTML("album-first.html", "main");
  loadHTML("album-second.html", "main");
}

appendAlbums();
