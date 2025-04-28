'use strict';

const body = document.querySelector('body');
const form = document.createElement('form');
form.action = "https://api.tvmaze.com/search/shows";


const input1 = document.createElement('input');
input1.id = `query`;
input1.name = `q`;
input1.type = `text`;
form.appendChild(input1);

const input2 = document.createElement('input');
input2.type = `submit`;
input2.value = `Search`;
form.appendChild(input2);
body.appendChild(form);
console.log(form)


form.addEventListener(`submit`, async function(evt){
  evt.preventDefault();
  const sub = document.querySelector('input[name=q]').value;
  try{
    const response = await fetch(`https://api.tvmaze.com/search/shows?q=${sub}`);
    const jsonData = await response.json();
    console.log(jsonData);
    console.log(jsonData[0]['show']['name']);
    const print = document.querySelector('#results');
    print.innerHTML = ``;
    for (let i = 0; i < jsonData.length; i++) {
      const print = document.querySelector('#results');
      const article = document.createElement('article');
      const h2text = document.createTextNode(`${jsonData[i]['show']['name']}`);
      const h2 = document.createElement('h2');
      h2.appendChild(h2text);
      article.appendChild(h2);
      const atext = document.createTextNode(`${jsonData[i]['show']['url']}`);
      const a = document.createElement('a');
      a.appendChild(atext);
      a.href = `${jsonData[i]['show']['url']}`;
      a.target=`_blank`;
      article.appendChild(a);
      const img = document.createElement('img');
      img.src = `${jsonData[i]['show']['image']['medium']}`;
      img.alt = `${jsonData[i]['show']['name']}`;
      article.appendChild(img);
      const div = document.createElement('div');
      div.innerHTML = `${jsonData[i]['show']['summary']}`;
      article.appendChild(div);

      print.appendChild(article);

    }
  }
  catch (error) {
        console.log(error.message);
    }


});

