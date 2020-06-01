setTimeout(() => {
  console.log(2);
}, 10);


new Promise(function (resolve) {
  console.log(3);
  resolve();
  console.log(4);
}).then(function () {
  console.log(5);
});

console.log(6);

requestIdleCallback(() => console.log(7));


requestAnimationFrame(() => console.log(8));