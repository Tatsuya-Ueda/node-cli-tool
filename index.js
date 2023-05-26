const path = require("path");
const { marked } = require("marked");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const { getPackageName } = require("./lib/name");
const { readMarkdownFileSync, writeHtmlFileSync } = require("./lib/file");

// コマンドライン引数のオプションの設定を行う
const { argv } = yargs(hideBin(process.argv))
  .option("name", {
    describe: "CLI名を表示します",
  })
  .option("file", {
    describe: ".mdのパスを指定します",
  })
  .option("out", {
    describe: "出力するHTMLファイルの名前を指定します",
    default: "article.html",
  });

// 以下，メイン処理

// --name で実行された場合
if (argv.name) {
  const name = getPackageName();
  console.log(name);
  process.exit(0);
}

// --file=filename で実行された場合
const markdownStr = readMarkdownFileSync(path.resolve(__dirname, argv.file));
const html = marked(markdownStr);
// console.log(markdownStr);
writeHtmlFileSync(path.resolve(__dirname, argv.out), html);
