'use strict';

const ul = document.querySelector('#target');

const items = ['First', 'Second', 'Third']
for (let o = 0; o < items.length; o++) {
  const t = document.createTextNode(`${items[o]} item`);
  const i = document.createElement('li');
  i.appendChild(t);
  ul.appendChild(i);
}

const second = document.getElementsByTagName('li')[1];

second.innerHTML = `<span class="my-item">Second item</span>`;