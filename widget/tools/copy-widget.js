const fs = require("fs-extra");
const path = require("path");

(async function build() {
  const dirPublic = path.join(__dirname, "..", "..", "public");
  await fs.copyFile(
    path.join("dist", "index.js"),
    path.join(dirPublic, "js", "widget-slide", "index.js")
  );
  await fs.copyFile(
    path.join("dist", "index.css"),
    path.join(dirPublic, "css", "widget-slide", "index.css")
  );
})();
