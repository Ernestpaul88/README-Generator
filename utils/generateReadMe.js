const fs = require("fs");

// TODO: Create a function to write README file
const writeToFile = (fileName, data) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(`./dist/${fileName}.md`, data, (err) => {
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

module.exports = writeToFile;
