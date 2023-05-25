const path = require("path");
const fs = require("fs");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

// コマンドライン引数を処理
const { argv } = yargs(hideBin(process.argv))
  .option("name", {
    describe: "CLI名を表示します",
  })
  .option("file", {
    describe: ".mdのパスを指定します",
  });
console.log(argv);
console.log(argv.file);
console.log();

// コマンドライン引数に応じた処理
if (argv.name) {
  const packageStr = fs.readFileSync(path.resolve(__dirname, "package.json"), {
    encoding: "utf-8",
  });
  const package = JSON.parse(packageStr);
  console.log(package.name);
} else if (argv.file) {
  const mdStr = fs.readFileSync(path.resolve(__dirname, argv.file), {
    encoding: "utf-8",
  });
  console.log(mdStr);
} else {
  console.log("ERR! No option provided!");
}
