import { getData } from "./data/storage.js";
import { calculatedaysAgo } from "./utils/calculateDaysAgo.js";
import { reversedChronologicalOrder } from "./utils/reversedChronologicalOrder.js";

export function renderBookmarksUser(userId) {
  let userData = getData(userId);
  const addNewBookmarkForm = document.querySelector("#add-new-bookmark");
  const bookmarksContainer = document.querySelector("#bookmarks-container");
  bookmarksContainer.innerHTML = ``;
  if (userData) {
    userData = reversedChronologicalOrder(userData);
    for (const bookmark of userData) {
      const newBookmark = document.createElement("div");

      const newBookmarkTitle = document.createElement("a");
      newBookmarkTitle.href = bookmark.url;
      newBookmarkTitle.textContent = bookmark.title;
      newBookmarkTitle.target = "_blank";

      const description = document.createElement("p");
      description.textContent = bookmark.description;

      const daysAgo = document.createElement("p");
      daysAgo.textContent = `Posted: ${calculatedaysAgo(bookmark.date)}`;

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
