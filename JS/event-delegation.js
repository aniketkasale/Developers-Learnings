document.getElementById('parent').addEventListener('click', function (e) {
  console.log('parent-target', e.target);

  console.log('parent-currentTarget', e.currentTarget);
});

// document.getElementById('btn').addEventListener('click', function (e) {
//   console.log('btn-target', e.target);
//   console.log('btn-currentTarget', e.currentTarget);
//   // e.stopPropagation();
// });

console.log('hello')