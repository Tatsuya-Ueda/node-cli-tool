const path = require("path");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { getPackageName } = require("./lib/name");
const { readMarkdownFileSync } = require("./lib/file");

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
  const name = getPackageName();
  console.log(name);
  process.exit(0);
}

const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
console.log(markdownStr);
