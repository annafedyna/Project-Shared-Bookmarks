import { clearData } from "./data/storage.js";
import { renderBookmarksUser } from "./renderBookmarks.js";
import { renderOptions } from "./renderOptions.js";
import { getUserId } from "./utils/getUserId.js";
import { addNewBookmark } from "./addNewBookmark.js";
import { urlValidator } from "./utils/urlValidator.js";

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
    const title_input = document.querySelector("#title");
    const url_input = document.querySelector("#url");
    const description_input = document.querySelector("#description");

    const title = title_input.value.trim();
    const url = url_input.value.trim();
    const description = description_input.value.trim();

    if (!userId) {
      alert("Choose an user to add new bookmark !");
    } else if (!title || !url || !description) {
      alert("Fill in all fields!");
    } else if (!urlValidator(url)) {
      alert("URL not valid!");
    } else {
      addNewBookmark(userId, title, url, description);
      title_input.value = "";
      url_input.value = "";
      description_input.value = "";
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
