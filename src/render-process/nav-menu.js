const { loadHTML } = require("../help");
const { selectPossibility, enableSubMenu } = require("./alive-nav-menu");

const { loadCommentsTable } = require("./comments-table");
const { loadAlbum } = require("./albums");
const { loadUsers } = require("./users");

const btnComments = "btn-comments";
const btnAlbFirst = "btn-alb-first";
const btnAlbSecond = "btn-alb-second";
const btnUsers = "btn-users";

function menuActions() {
  commentsAction();
  albumFirstAction();
  albumSecondAction();
  usersAction();
}

function aliveMenu() {
  selectPossibility(btnComments);
  selectPossibility(btnAlbFirst);
  selectPossibility(btnAlbSecond);
  selectPossibility(btnUsers);

  enableSubMenu("btn-albums", "sub-albums");
}

function commentsAction() {
  let btn = document.getElementById(btnComments);
  btn.addEventListener("click", () => {
    //load data to table
    loadCommentsTable();

    hiddenAllContent();
    let element = document.getElementById("comments-table");
    element.classList.remove("is-hidden");
  });
}

function albumFirstAction() {
  let btn = document.getElementById(btnAlbFirst);
  btn.addEventListener("click", () => {
    loadAlbum("album-first", 1);

    hiddenAllContent();
    let element = document.getElementById("album-first");
    element.classList.remove("is-hidden");
  });
}

function albumSecondAction() {
  let btn = document.getElementById(btnAlbSecond);
  btn.addEventListener("click", () => {
    loadAlbum("album-second", 2);

    hiddenAllContent();
    let element = document.getElementById("album-second");
    element.classList.remove("is-hidden");
  });
}

function usersAction() {
  let btn = document.getElementById(btnUsers);
  btn.addEventListener("click", () => {
    loadUsers();
    hiddenAllContent();
    let element = document.getElementById("users");
    element.classList.remove("is-hidden");
  });
}

function hiddenAllContent() {
  let main = [...document.getElementById("main").children];
  main.forEach(child => {
    child.classList.add("is-hidden");
  });
}

function appendMenu() {
  loadHTML("nav-menu.html", "navigation", aliveMenu, menuActions);
}

appendMenu();
