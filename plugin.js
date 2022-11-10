let $ = function (selector) {
  return document.querySelector(selector);
};

let $$ = function (selector) {
  return document.querySelectorAll(selector);
};

let createElement = function (tegName, className, content) {
  const newElement = document.createElement(tegName);
  if (className) {
    newElement.setAttribute("class", className);
  }
  if (content) {
    newElement.innerHTML = content;
  }
  return newElement;
};
