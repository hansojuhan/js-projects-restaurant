import image1 from "./img/resto.webp"; 
import './styles.css';

// Generates all the markup inside div#content
function loadContent() {
  // Find the parent div#content
  const content = document.getElementById('content');

  // Container div for first section
  const firstSection = document.createElement('div');
  firstSection.classList.add('section-container');

  // Image part
  const imageDiv = document.createElement('div');
  imageDiv.id = 'main-image';
  const imageContent = document.createElement('img');
  imageContent.src = image1;

  imageDiv.append(imageContent);
  firstSection.append(imageDiv);

  // Create text to the right in a div
  const textContent = document.createElement('div');
  textContent.id = 'main-text';

  const h1 = document.createElement('h1');
  h1.innerText = 'SUSHI ZEN';
  textContent.append(h1);

  const a = document.createElement('a');
  a.href = '#';
  a.innerText = 'Book a table';
  a.classList.add('button-primary');
  textContent.append(a);

  const a2 = document.createElement('a');
  a2.href = '#';
  a2.innerText = 'Check menu';;
  a2.classList.add('button-primary');
  textContent.append(a2);

  // Append to first section div
  firstSection.append(textContent);

  // Append section div to content div
  content.append(firstSection);
}

loadContent();
