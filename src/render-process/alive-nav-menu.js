module.exports = {
  selectPossibility(elem) {
    let menu = document.getElementById("menu");
    let btn = document.getElementById(elem);
    btn.addEventListener("click", () => {
      let lastSelect = menu.querySelector(".is-active");
      if (lastSelect && lastSelect !== btn) {
        lastSelect.classList.remove("is-active");
      }
      btn.classList.add("is-active");
      collapseUnusedSubMenus(menu);
    });
  },

  enableSubMenu(elem, sub) {
    let btn = document.getElementById(elem);
    let subMenu = document.getElementById(sub);
    btn.addEventListener("mouseenter", () => {
      subMenu.classList.remove("is-hidden");
    });
    btn.addEventListener("mouseleave", () => {
      let currentSelect = subMenu.querySelector(".is-active");
      if (!currentSelect) {
        subMenu.classList.add("is-hidden");
      }
    });
  }
};

function collapseUnusedSubMenus(scope) {
  let subs = scope.querySelectorAll("li>ul");
  subs.forEach(element => {
    if (!element.querySelector(".is-active")) {
      element.classList.add("is-hidden");
    }
  });
}
