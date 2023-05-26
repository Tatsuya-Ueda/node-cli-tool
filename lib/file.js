const fs = require("fs");

// .mdファイルを読み込む(raw)
exports.readMarkdownFileSync = (path) => {
  const markdownStr = fs.readFileSync(path, { encoding: "utf-8" });
  return markdownStr;
};

exports.writeHtmlFileSync = (path, html) => {
  fs.writeFileSync(path, html, { encoding: "utf-8" });
};
