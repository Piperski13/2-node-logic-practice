const fs = require("fs");

fs.readFile("./test-file.txt", "utf-8", (err) => {
  console.log("It finished loading I/O");

  setTimeout(() => {
    console.log("Timeout 0.5 seconds");
  }, 300);
  setTimeout(() => {
    console.log("TImeout 0 seconds");
  }, 0);
  setImmediate(() => {
    console.log("Set immediate");
  });
});
fs.readFile("./test-file.txt", "utf-8", (err) => {
  console.log("It finished loading I/O second");
});
fs.readFile("./test-file.txt", "utf-8", (err) => {
  console.log("It finished loading I/O third");
});
fs.readFile("./test-file.txt", "utf-8", (err) => {
  console.log("It finished loading I/O  fourth");
});
console.log("Top lvl code!");