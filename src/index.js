import image1 from "./resto.webp"; 

// Generates all the markup inside div#content
function generateMarkupOnPageLoad() {
  // Find the parent div#content
  const content = document.getElementById('content');

  const div = document.createElement('div');

  const img1 = document.createElement('img');
  img1.src = image1;
  div.append(img1);

  const div2 = document.createElement('div');

  const h1 = document.createElement('h1');
  h1.innerText = 'SUSHI ZEN';
  div2.append(h1);

  const a = document.createElement('a');
  a.href = '#';
  a.innerText = 'Book a table';
  div2.append(a);

  const a2 = document.createElement('a');
  a2.href = '#';
  a2.innerText = 'Check menu';;
  div2.append(a2);

  div.append(div2);

  content.append(div);

  alert("generated!");
}

generateMarkupOnPageLoad();
