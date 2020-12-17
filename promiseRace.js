const thisIsPromise1 = new Promise((resolve, reject) => {
  resolve("This is promise 1");
});

const thisIsPromise2 = new Promise((resolve, reject) => {
  resolve("This is promise 2");
});

const thisIsPromise3 = new Promise((resolve, reject) => {
  resolve("This is promise 3");
});

Promise.race([thisIsPromise1, thisIsPromise2, thisIsPromise3]).then((message) => // return the first value only
  console.log(message)
);
