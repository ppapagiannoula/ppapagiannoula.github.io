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
          { from: /^\/about$/, to: "/about/about.html" },
          { from: /^\/contact$/, to: "/contact/contact.html" },
          { from: /^\/end$/, to: "/end/end.html" },
        ],
        index: "/404.html"
      })
    ]
  }
};
