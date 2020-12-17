const thisIsPromise1 = new Promise((resolve, reject) => {
  resolve("This is promise 1");
});

const thisIsPromise2 = new Promise((resolve, reject) => {
  resolve("This is promise 2");
});

const thisIsPromise3 = new Promise((resolve, reject) => {
  resolve("This is promise 3");
});

Promise.all([thisIsPromise1, thisIsPromise2, thisIsPromise3]).then((message) =>
  console.log(message)
);
