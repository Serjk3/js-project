import { Component } from "../core/components.js";

export class HeaderComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    if (localStorage.getItem("visited") !== null) {
      this.hide();
      const nodeSection = document.querySelector("#node");
      nodeSection.classList.remove("hide");
    }
    const startBTN = this.$elem.querySelector(".js-header-start");
    startBTN.addEventListener("click", buttonHandler.bind(this));
  }
}

function buttonHandler() {
  localStorage.setItem("visited", "true");
  this.hide();
  const nodeSection = document.querySelector("#node");
  nodeSection.classList.remove("hide");
}
