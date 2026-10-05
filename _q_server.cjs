const http = require("http");
const fs = require("fs");
const path = require("path");
const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
};
http
  .createServer((req, res) => {
    let url = decodeURIComponent(req.url.split("?")[0]);
    if (url === "/") url = "/dashboard-served.html";
    fs.readFile(path.join(__dirname, url), (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end("404");
        return;
      }
      res.writeHead(200, {
        "Content-Type": MIME[path.extname(url)] || "application/octet-stream",
      });
      res.end(data);
    });
  })
  .listen(5599, "127.0.0.1", () => console.log("UP"));
