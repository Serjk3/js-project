export function renderPost(post, options = {}) {
  const TAG =
    post.type === "news"
      ? `<div class="node-post__label">news</div>`
      : `<div class="node-post__label">note</div>`;

  const FAVORITES = JSON.parse(localStorage.getItem("favorites")) || [];
  const CANDIDATE = FAVORITES.find((temp) => temp.id === post.id);
  const BUTTON = CANDIDATE
    ? `<button class="node-post__btn" data-id="${post.id}">Delete from Favorite</button>`
    : `<button class="node-post__btn" data-id="${post.id}" data-title="${post.title}">Add to Favorite</button>`;
  return `
              <div class="node-post">
                 <div class="node-post__header">
                    <h3 class="node-post__name">${post.title}</h3>
                 ${TAG}
              </div>
              <div class="node-post__body">
                ${post.fulltext}
              </div>
              <div class="node-post__footer">
                  <span class="node-post__date">${post.date}</span>
                  ${options.withButton ? BUTTON : " "}
               </div>
            </div>`;
}
