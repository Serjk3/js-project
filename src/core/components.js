export class Component {
  constructor(id) {
    this.$elem = document.querySelector(id);
    this.init();
  }
  init() {}
  hide() {
    this.$elem.classList.add("hide");
  }
  show() {
    this.$elem.classList.remove("hide");
  }
}
