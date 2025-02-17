const userSelect = document.querySelector("#user-select");

export function getUserId() {
  return Number(userSelect.value.split(" ").slice(-1));
}
