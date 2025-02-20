import { getUserIds } from "./data/storage.js";

export function renderOptions() {
  const userSelect = document.querySelector("#user-select");
  const users = getUserIds();

  for (let i = 0; i < users.length; i++) {
    const newOption = document.createElement("option");
    newOption.value = i + 1;
    newOption.innerHTML = `User ${users[i]}`;
    userSelect.append(newOption);
  }
}
