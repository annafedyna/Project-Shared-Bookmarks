import { getData, setData } from "./data/storage.js";
import { renderBookmarksUser } from "./renderBookmarks.js";

export function addNewBookmark(userId, title, url, description) {
  const bookmarksContainer = document.querySelector("#bookmarks-container");

  const todayDate = new Date();
  let data = getData(userId);

  if (!data) {
    data = [
      { title: title, url: url, description: description, date: todayDate },
    ];
  } else {
    data.push({
      title: title,
      url: url,
      description: description,
      date: todayDate,
    });
  }
  setData(userId, data);
  bookmarksContainer.innerHTML = "";
  renderBookmarksUser(userId);
}
