import { Component } from "../core/components.js";
import { API_SERVICE } from "../services/app.service.js";
import { renderPost } from "../templates/post.template.js";

export class FavoritesComponents extends Component {
  constructor(id) {
    super(id);
  }
  init() {
    this.$elem.addEventListener("click", linkClickHandler.bind(this));
  }
  onShow() {
    const FAVORITE = JSON.parse(localStorage.getItem("favorites"));
    const HTML = renderList(FAVORITE);
    this.$elem.insertAdjacentHTML("afterbegin", HTML);
  }
  onHide() {
    this.$elem.innerHTML = "";
  }
}

async function linkClickHandler(event) {
  event.preventDefault();
  if (event.target.classList.contains("js-link")) {
    const POSTID = event.target.dataset.id;
    this.$elem.innerHTML = "";
    const POST = await API_SERVICE.fetchPostById(POSTID);
    this.$elem.insertAdjacentHTML(
      "afterbegin",
      renderPost(POST, {
        withButton: false,
      })
    );
  }
}

function renderList(list = []) {
  if (list.length) {
    return `<ul class="center">
               <li>
               ${list
                 .map(
                   (i) =>
                     `<a href="#" class="js-link" data-id="${i.id}">${i.title}</a>`
                 )
                 .join(" ")}
              </li>
            </ul>`;
  } else {
    return `<p class="center">There is nothin here yet</p>`;
  }
}
