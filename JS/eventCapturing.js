// Get the elements
const parent = document.getElementById('parent');
const child = document.getElementById('child');

// Add event listener in the capturing phase
parent.addEventListener('click', function() {
  console.log('Parent clicked (capturing)');
}, true);  // 'true' for event capturing

child.addEventListener('click', function() {
  console.log('Child clicked (capturing)');
}, true);  // 'true' for event capturing
