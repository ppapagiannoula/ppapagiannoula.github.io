const validPaths = [
    '/',                
    '/about/about.html',
    '/contact/contact.html',
    '/end/end.html'
  ];

  const currentPath = window.location.pathname;
  const isValidPath = validPaths.some(path => currentPath.startsWith(path));
  if (!isValidPath) {
    window.location.href = '/404.html';
  }