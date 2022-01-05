import { Component } from "../core/components.js";

export class NavigationComponents extends Component {
  constructor(id) {
    super(id);
    this.tabs = [];
  }

  init() {
    this.$elem.addEventListener("click", tabClickHandler.bind(this));
  }
  registerTabs(tabs) {
    this.tabs = tabs;
  }
}

function tabClickHandler(event) {
  event.preventDefault();
  //Добавление класса активности к текущему табу.
  if (event.target.classList.contains("tab")) {
    Array.from(this.$elem.querySelectorAll(".tab")).forEach((elem) => {
      elem.classList.remove("active");
    });
    event.target.classList.add("active");
  }
  const ACTIVE_TAB = this.tabs.find((temp) => {
    return temp.name === event.target.dataset.name;
  });
  this.tabs.forEach((elem) => {
    return elem.component.hide();
  });
  ACTIVE_TAB.component.show();
}
