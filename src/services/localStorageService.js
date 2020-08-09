function getFromLocalStorage(key) {
  return localStorage.getItem(key);
}

function parseFromLocalStorage(key) {
  let value = localStorage.getItem(key)

  if (!value) return null

  return JSON.parse(localStorage.getItem(key))
}

function addToLocalStorage(key, obj) {
  if (typeof obj === "object") localStorage.setItem(key, JSON.stringify(obj));
  else localStorage.setItem(key, obj);
}

function removeFromLocalStorage(key) {
  localStorage.removeItem(key);
}

export default {
  getFromLocalStorage,
  parseFromLocalStorage,
  addToLocalStorage,
  removeFromLocalStorage
}