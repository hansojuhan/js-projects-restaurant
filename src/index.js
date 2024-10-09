import image1 from "./img/resto.webp"; 
import './styles.css';

function loadNavbar() {
  const header = document.createElement('header');

  const nav = document.createElement('nav');
  
  const title = document.createElement('h1');
  title.innerText = 'ZEN SUSHI';
  title.id = 'title';
  nav.append(title);

  const menuList = document.createElement('ul');

  // Home link
  let homeMenuLink = document.createElement('li');
  let homeMenulinkButton = document.createElement('a');
  homeMenulinkButton.innerText = 'Home';
  homeMenulinkButton.id = 'menu-link';
  homeMenuLink.append(homeMenulinkButton);
  menuList.append(homeMenuLink);

  // Menu link
  let menuMenuLink = document.createElement('li');
  let menuMenulinkButton = document.createElement('a');
  menuMenulinkButton.innerText = 'Menu';
  menuMenulinkButton.id = 'menu-link';
  menuMenuLink.append(menuMenulinkButton);
  menuList.append(menuMenuLink);

  // About link
  let aboutMenuLink = document.createElement('li');
  let aboutMenulinkButton = document.createElement('a');
  aboutMenulinkButton.innerText = 'About';
  aboutMenulinkButton.id = 'menu-link';
  aboutMenuLink.append(aboutMenulinkButton);
  menuList.append(aboutMenuLink);

  nav.append(menuList);
  header.append(nav);

  // Insert into body, header, before content
  body.insertBefore(header, content);
}

// Generates all the markup inside div#content
function loadContent() {
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
  h1.innerText = 'ZEN SUSHI';
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

// Find the main body
const body = document.querySelector('body');
// Find the parent div#content
const content = document.getElementById('content');

loadNavbar();
loadContent();
