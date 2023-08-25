//your JS code here. If required.
// Function that returns a promise which resolves after 1 second.
function delayedHello() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Hello, world!");
    }, 1000);
  });
}

// Using the promise to update the text of the HTML element.
delayedHello().then((result) => {
  const outputDiv = document.getElementById("output");
  outputDiv.textContent = result;
});
