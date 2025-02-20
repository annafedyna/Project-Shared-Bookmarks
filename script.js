import { clearData } from "./storage.js";
import { renderBookmarksUser } from "./renderBookmarks.js";
import { renderOptions } from "./renderOptions.js";
import { getUserId } from "./getUserId.js";
import { addNewBookmark } from "./addNewBookmark.js";

window.onload = function () {
  const userSelect = document.querySelector("#user-select");
  let userId;
  renderOptions();

  userSelect.addEventListener("change", (event) => {
    event.preventDefault();
    const selectUserMessage = document.querySelector("#select-user-message");
    const bookmarksContainer = document.querySelector("#bookmarks-container");
    userId = getUserId();

    if (userId) {
      renderBookmarksUser(userId);
      selectUserMessage.style.display = "none";
    } else {
      bookmarksContainer.innerHTML = ``;
      selectUserMessage.style.display = "block";
    }
  });

  const addNewBookmarkForm = document.querySelector("#add-new-bookmark");
  addNewBookmarkForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (userId) {
      addNewBookmark(userId);
    } else {
      alert("Choose an user to add new bookmark!");
    }
  });

  const deleteAllButton = document.querySelector("#delete-all-bookmarks");
  deleteAllButton.addEventListener("click", (event) => {
    event.preventDefault();
    if (userId) {
      clearData(userId);
      renderBookmarksUser(userId);
    } else {
      alert("Not able to delete! You have not chosen an user !");
    }
  });
};
