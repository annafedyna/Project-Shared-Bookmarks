import { getData, setData } from "./storage.js";
import { renderBookmarksUser } from "./renderBookmarks.js";

export function addNewBookmark(userId) {
  const bookmarksContainer = document.querySelector("#bookmarks-container");
  const title_input = document.querySelector("#title");
  const url_input = document.querySelector("#url");
  const description_input = document.querySelector("#description");

  const title = title_input.value.trim();
  const url = url_input.value.trim();
  const description = description_input.value.trim();

  title_input.value = "";
  url_input.value = "";
  description_input.value = "";

  if (!title || !url || !description) {
    alert("Please fill in all fields.");
    return;
  }
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
