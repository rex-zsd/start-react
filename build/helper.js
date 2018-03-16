const path = require('path');
const fs = require('fs');

const basePath = './src/routes/';

const pages = fs.readdirSync(basePath).reduce((prev, curr) => {
  const pagePath = path.resolve(basePath, curr);
  if (fs.statSync(pagePath).isDirectory()) {
    prev.push(curr);
  }
  return prev;
}, []);

module.exports = pages;
