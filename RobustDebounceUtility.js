// Implement a `debounce` utility.

function debounce(func, wait, immediate = false) {
  let timeout;
  // TODO: Logic to clear timeout and handle 'this' context
  return function (...args) {
    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    if (callNow) {
      func.apply(this, args);
    }

    timeout = setTimeout(() => {
      timeout = null;

      if (!immediate) {
        func.apply(this, args);
      }
    }, wait);
  };
}

// Usage in UI:
const onSearch = debounce(
  (e) => console.log("Searching for:", e.target.value),
  300,
);
// document.getElementById('search').addEventListener('input', onSearch);
