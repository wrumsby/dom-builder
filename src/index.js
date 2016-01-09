import createElement from 'create-element';
import doc from 'get-doc';

function isNode (value) {
  /*global Node */
  if (typeof Node === 'undefined') {
    return typeof value === 'object' && typeof value.nodeType === 'number';
  }

  return value instanceof Node;
}

export default function (selector, props={}, ...children) {
  const el = createElement(selector);

  Object.keys(props || {}).forEach(p => {
    switch (p) {
      case 'className':
        el.setAttribute('class', props[p]);
        break;
      default:
        el.setAttribute(p, props[p])
    }
  });

  children
    .filter(c => (typeof c === 'string' || isNode(c)))
    .map(c => (typeof c === 'string') ? doc().createTextNode(c) : c)
    .forEach(c => el.appendChild(c));

  return el;
}
