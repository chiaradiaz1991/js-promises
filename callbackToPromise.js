const userLeft = false;
const userWatchingCatMeme = false;

function thisIsAPromise() {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: "User Left",
        message: ":(",
      });
    } else if (userWatchingCatMeme) {
      reject({
        name: "user watching the cat meme",
        message: "webDev < Cat",
      });
    } else {
      resolve("Thumbs up!");
    }
  });
}

thisIsAPromise()
  .then((message) => console.log("success: " + message))
  .catch((error) => console.log("error: " + error.message));
