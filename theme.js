#!/usr/bin/env node
const fs = require('fs');
const themes = [ "default", "default_repocard", "dark", "radical", "merko", "gruvbox", "tokyonight", "onedark", "cobalt", "synthwave", "highcontrast", "dracula", "prussian", "monokai", "vue", "shades-of-purple", "nightowl", "buefy", "blue-green", "algolia", "great-gatsby" ];
const theme = themes[Math.floor(Math.random() * themes.length)];
fs.readFile('src/README.md', 'utf8', function (err,data) {
  if (err) {
    return console.error(err);
  }
  const result = data.replace(/{{ random_theme }}/g, theme);

  fs.writeFile("README.md", result, 'utf8', function (err) {
     if (err) return console.error(err);
  });
});
