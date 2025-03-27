const validPaths = ["/", "/about", "/contact", "/end"];

const currentPath = window.location.pathname;

if (!validPaths.includes(currentPath) && currentPath !== "/404.html") {
  window.location.href = "/404.html";
}
