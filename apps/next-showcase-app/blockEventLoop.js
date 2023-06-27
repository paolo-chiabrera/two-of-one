const crypto = require("crypto");

const getRandomString = () => {
  const stringSize = 20;
  const randomString = crypto.randomBytes(stringSize).toString();
  return randomString;
};

const blockEventLoop = () => {
  let hash = crypto.createHash("sha256");
  const numberOfHashUpdates = 10e6;

  for (let iter = 0; iter < numberOfHashUpdates; iter++) {
    hash.update(getRandomString());
  }
};

module.exports = blockEventLoop;
