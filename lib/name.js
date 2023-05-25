const path = require("path");
const fs = require("fs");

const packageStr = fs.readFileSync(path.resolve(__dirname, "../package.json"), {
  encoding: "utf-8",
});
const package = JSON.parse(packageStr);

// package.jsonをパースすることで，パッケージ名の文字列を返す
exports.getPackageName = () => {
  return package.name;
};
