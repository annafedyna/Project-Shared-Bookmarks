import { getData } from "./storage.js";

export function renderBookmarksUser() {
  const userSelect = document.querySelector("#user-select");
  function getUserId() {
    return Number(userSelect.value.split(" ").slice(-1)); // get user id
  }

  const userId = getUserId();
  const userData = getData(userId); // get user data

    // render
    if (userData) {
        const bookmarksContainer = document.querySelector(
          "#bookmarks-container"
        );
        const selectUserMessage = document.querySelector(
          "#select-user-message"
        );
        selectUserMessage.style.display = "none";
        for (const bookmark of userData) {
          const newBookmark = document.createElement("div");

          const newBookmarkTitle = document.createElement("a");
          newBookmarkTitle.href = bookmark.url;
          newBookmarkTitle.textContent = bookmark.title;
          newBookmarkTitle.target = "_blank";

          const descriptionPara = document.createElement("p");
          descriptionPara.textContent = bookmark.description;

          newBookmark.appendChild(newBookmarkTitle);
          newBookmark.appendChild(descriptionPara);

          bookmarksContainer.appendChild(newBookmark);
        }
    }else {}
}
