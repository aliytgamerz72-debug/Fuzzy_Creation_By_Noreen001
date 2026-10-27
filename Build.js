// Runs automatically on Netlify. Makes a list of every photo in the "assets" folder.
const fs = require("fs");
const exts = [".jpg", ".jpeg", ".png", ".gif", ".webp", ".avif", ".svg"];
const files = fs.readdirSync("assets")
  .filter(f => exts.includes(f.slice(f.lastIndexOf(".")).toLowerCase()))
  .sort();
fs.writeFileSync("photos.json", JSON.stringify(files));
console.log("Found " + files.length + " photos:", files.join(", "));
