import { Component } from "../core/components.js";
import { API_SERVICE } from "../services/app.service.js";
import { TransformService } from "../services/transform.service.js";
import { renderPost } from "../templates/post.template.js";

export class PostsComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    this.$elem.addEventListener("click", buttonHandler.bind(this));
  }

  async onShow() {
    //Определим когда именно мы открываем вкладку
    const fbData = await API_SERVICE.fetchPost();
    const POSTS = TransformService.fbObjectToArray(fbData);
    const HTML = POSTS.map((post) => renderPost(post, { withButton: true }));
    this.$elem.insertAdjacentHTML("afterbegin", HTML.join(" "));
  }

  onHide() {
    this.$elem.innerHTML = "";
  }
}

function buttonHandler(event) {
  const $elem = event.target;
  const id = $elem.dataset.id;
  const title = $elem.dataset.title;
  if (id) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const CANDIDATE = favorites.find((p) => p.id === id);
    if (CANDIDATE) {
      $elem.textContent = "Add to Favorite";
      favorites = favorites.filter((p) => p.id !== id);
    } else {
      $elem.textContent = "Delete From Favorite";
      favorites.push({ id, title });
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }
}
