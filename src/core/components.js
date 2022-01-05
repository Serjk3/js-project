export class Component {
  constructor(id) {
    this.$elem = document.querySelector(id);
    this.init();
  }
  init() {}
  onHide() {}
  onShow() {}
  hide() {
    this.$elem.classList.add("hide");
    this.onHide();
  }
  show() {
    this.$elem.classList.remove("hide");
    this.onShow();
  }
}
