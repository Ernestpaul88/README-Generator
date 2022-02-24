const fs = require("fs");

const writeToFile = (data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./dist/README.md", data, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File created!",
      });
    });
  });
};

const copyFile = (source, destination) => {
  return new Promise((resolve, reject) => {
    fs.copyFile(source, destination, (err) => {
      if (err) {
        reject(err);
        return;
      }
      resolve({
        ok: true,
        message: "File copied!",
      });
    });
  });
};

module.exports = { writeToFile, copyFile };
