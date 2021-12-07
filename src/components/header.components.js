import { Component } from "../core/components.js";

export class HeaderComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    const startBTN = this.$elem.querySelector(".js-header-start");
    startBTN.addEventListener("click", buttonHandler.bind(this));
  }
}

function buttonHandler() {
  this.hide();
  const nodeSection = document.querySelector("#node");
  nodeSection.classList.remove("hide");
}
