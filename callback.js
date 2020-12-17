const userLeft = false;
const userWatchingCatMeme = false;

function thisIsACallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({
      name: "User Left",
      message: ":(",
    });
  } else if (userWatchingCatMeme) {
    errorCallback({
      name: "user watching the cat meme",
      message: "webDev < Cat",
    });
  } else {
    callback("Thumbs up!");
  }
}

thisIsACallback(
  (message) => {
    // first callback
    console.log("success: " + message);
  },
  (error) => {
    console.log("error: " + error.message); // second callback
  }
);
