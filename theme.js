#!/usr/bin/env node
const fs = require('fs');
const themes = [ "dark", "radical", "merko", "gruvbox", "tokyonight", "onedark", "cobalt", "synthwave", "highcontrast", "dracula", "prussian", "monokai", "shades-of-purple", "nightowl", "blue-green", "algolia", "great-gatsby", "solarized-dark", "bear"];
const theme = themes[Math.floor(Math.random() * themes.length)];
fs.readFile('src/README.md', 'utf8', function (err,data) {
  if (err) {
    return console.error(err);
  }
  const result = data.replace(/{{ random_theme }}/g, theme);
  fs.readFile("README.md", 'utf8', (err,data) => {
    if (err) return consle.error(err);
  });
  fs.writeFile("README.md", result, 'utf8', function (err) {
     if (err) return console.error(err);
  });
});
