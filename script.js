// This is a placeholder file which shows how you can access functions defined in other files.
// It can be loaded into index.html.
// You can delete the contents of the file once you have understood how it works.
// Note that when running locally, in order to open a web page which uses modules, you must serve the directory over HTTP e.g. with https://www.npmjs.com/package/http-server
// You can't open the index.html file using a file:// URL.

import { getUserIds, getData, setData, clearData } from "./storage.js";
import { renderBookmarksUser } from "./renderBookmarks.js";

window.onload = function () {
  const users = getUserIds();
  const userSelect = document.querySelector("#user-select");
  for (let i = 0; i < users.length; i++) {
    const newOption = document.createElement("option");
    newOption.value = i;
    newOption.innerHTML = `User ${users[i]}`;
    userSelect.append(newOption);
  }
  renderBookmarksUser();

  userSelect.addEventListener("change", () => {
    renderBookmarksUser();
  });

  function getUserId() {
    return Number(userSelect.value.split(" ").slice(-1)); // get user id
  }

  const userId = getUserId();

  const addNewBookmarkForm = document.querySelector("#add-new-bookmark");
  addNewBookmarkForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const title = document.querySelector("#title").value.trim();
    const url = document.querySelector("#url").value.trim();
    const description = document.querySelector("#description").value.trim();

    if (!title || !url || !description) {
      alert("Please fill in all fields.");
      return;
    }
    let data = getData(userId);
    console.log(data);
    if (!data) {
      data = [{ title: title, url: url, description: description }];
    } else {
      data.push({ title: title, url: url, description: description });
    }
    setData(userId, data);
    renderBookmarksUser();
  });

  const deleteAllButton = document.querySelector("#delete-all-bookmarks");
  deleteAllButton.addEventListener("click", (event) => {
      event.preventDefault();
      clearData(userId);
      renderBookmarksUser();
  });
};
