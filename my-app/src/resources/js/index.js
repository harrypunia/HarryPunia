const highlightDiv = el => {
  const element = document.getElementById(el);
  element.setAttribute('highlightDiv', '');
  setTimeout(() => element.removeAttribute('highlightDiv'), 1000);
};

export {
  highlightDiv
}