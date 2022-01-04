export function renderPost(post, options = {}) {
  const TAG =
    post.type === "news"
      ? `<div class="node-post__label">news</div>`
      : `<div class="node-post__label">note</div>`;

  const BUTTON = (JSON.parse(localStorage.getItem("favorites")) || []).includes(
    post.id
  )
    ? `<button class="node-post__btn" data-id="${post.id}">Delete from Favorite</button>`
    : `<button class="node-post__btn" data-id="${post.id}">Add to Favorite</button>`;
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
