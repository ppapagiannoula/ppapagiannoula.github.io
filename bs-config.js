module.exports = {
  server: {
    baseDir: "./",
    middleware: [
      function (req, res, next) {
        if (req.url.endsWith("/")) {
          req.url += "index.html";
        }
        next();
      },
      require("connect-history-api-fallback")({
        rewrites: [
          { from: /^\/about$/, to: "/about/index.html" },
          { from: /^\/contact$/, to: "/contact/index.html" }
        ],
        index: "/404.html"
      })
    ]
  }
};
