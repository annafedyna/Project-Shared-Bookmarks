import { getData } from "./storage.js";
import { calculatedaysAgo } from "./calculateDaysAgo.js";

export function renderBookmarksUser(userId) {
  const userData = getData(userId);
  const addNewBookmarkForm = document.querySelector("#add-new-bookmark");
  const bookmarksContainer = document.querySelector("#bookmarks-container");

  if (userData) {
    for (const bookmark of userData) {
      const newBookmark = document.createElement("div");

      const newBookmarkTitle = document.createElement("a");
      newBookmarkTitle.href = bookmark.url;
      newBookmarkTitle.textContent = bookmark.title;
      newBookmarkTitle.target = "_blank";

      const description = document.createElement("p");
      description.textContent = bookmark.description;


      const daysAgo = document.createElement("p");
      daysAgo.textContent = calculatedaysAgo(bookmark.date);

      newBookmark.appendChild(newBookmarkTitle);
      newBookmark.appendChild(description);
      newBookmark.appendChild(daysAgo);

      bookmarksContainer.appendChild(newBookmark);
    }
  } else {
    bookmarksContainer.innerHTML =
      "It looks like this user hasn't added any bookmarks yet. Start by adding one to keep track of your favorite books!";
    addNewBookmarkForm.reset();
  }
}
