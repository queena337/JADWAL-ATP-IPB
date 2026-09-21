 const http = require("http");
const fs = require("fs");
const path = require("path");
const types = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".png": "image/png",
  ".svg": "image/svg+xml",
};
http
  .createServer((req, res) => {
    let p = decodeURIComponent(req.url.split("?")[0]);
    if (p === "/") p = "/user.html";
    const f = path.join(process.cwd(), p);
    fs.readFile(f, (e, d) => {
      if (e) {
        res.writeHead(404);
        res.end("nf");
        return;
      }
      res.writeHead(200, {
        "Content-Type": types[path.extname(f)] || "text/plain",
      });
      res.end(d);
    });
  })
  .listen(4599, () => console.log("up on 4599"));
