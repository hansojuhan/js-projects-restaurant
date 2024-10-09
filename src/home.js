import image1 from "./img/resto.webp"; 
import image2 from "./img/resto2.webp"; 
import image3 from "./img/resto3.webp"; 
import './styles.css';

// Find the main body
const body = document.querySelector('body');
// Find the parent div#content
const content = document.getElementById('content');

export function loadNavbar() {
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
  homeMenulinkButton.id = 'home-link';
  homeMenulinkButton.classList.add('menu-link');
  homeMenuLink.append(homeMenulinkButton);
  menuList.append(homeMenuLink);

  // Menu link
  let menuMenuLink = document.createElement('li');
  let menuMenulinkButton = document.createElement('a');
  menuMenulinkButton.innerText = 'Menu';
  menuMenulinkButton.id = 'menu-link';
  menuMenulinkButton.classList.add('menu-link');
  menuMenuLink.append(menuMenulinkButton);
  menuList.append(menuMenuLink);

  // About link
  let aboutMenuLink = document.createElement('li');
  let aboutMenulinkButton = document.createElement('a');
  aboutMenulinkButton.innerText = 'About';
  aboutMenulinkButton.id = 'about-link';
  aboutMenulinkButton.classList.add('menu-link');
  aboutMenuLink.append(aboutMenulinkButton);
  menuList.append(aboutMenuLink);

  nav.append(menuList);
  header.append(nav);

  // Insert into body, header, before content
  body.insertBefore(header, content);
}

// Generates all the markup inside div#content
export function loadFirstSection() {
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

// Generates all the markup inside div#content
export function loadSecondSection() {
  // Container div for first section
  const secondSection = document.createElement('div');
  secondSection.classList.add('section-container');

  // Create text to the right in a div
  const textContent = document.createElement('div');
  textContent.id = 'main-description';

  const h2 = document.createElement('h2');
  h2.innerText = 'ZEN SUSHI Journey';
  textContent.append(h2);

  const p = document.createElement('p');
  p.innerText = 'Discover New Flavors, New All You Can Eat Experience'
  textContent.append(p);

  const p2 = document.createElement('p');
  p2.innerText = 'Sushi Zen is a sensory voyage, where traditional Japanese cuisine meets the bold vibrancy of South American flavors. A completely redefined Sushi Experience, where originality, exclusive atmosphere, and attention to detail become the hallmark of distinction.'
  textContent.append(p2);
  
  const p3 = document.createElement('p');
  p3.innerText = 'The ambiance is refined, elegant, and sophisticated, yet warm and intimate. It’s designed to recreate the tranquility and serenity of a Japanese garden, with soft-toned vertical gardens offering a calming retreat.'
  textContent.append(p3);
  
  const p4 = document.createElement('p');
  p4.innerText = "The All You Can Eat menu is crafted to amaze: alongside classic sashimi, rolls, and nigiri, you'll find delightful excursions into South American cuisine with tacos, tropical tartare, signature rolls, tempura, and other unique dishes."
  textContent.append(p4);   

  const p5 = document.createElement('p');
  p5.innerText = "Sushi Zen offers a true culinary experience, ensuring an unlimited explosion of innovative and captivating flavors."
  textContent.append(p5);  

  secondSection.append(textContent);

  // Image part
  const imageDiv = document.createElement('div');
  imageDiv.id = 'secondary-image';

  const imageContent1 = document.createElement('img');
  imageContent1.src = image2;
  imageDiv.append(imageContent1);

  const imageContent2 = document.createElement('img');
  imageContent2.src = image3;
  imageDiv.append(imageContent2);

  secondSection.append(imageDiv);

  // Append section div to content div
  content.append(secondSection);
}

export function loadFooter() {
  const footer = document.createElement('footer');

  const title = document.createElement('h2');
  title.innerText = 'ZEN SUSHI';

  const address = document.createElement('p');
  address.innerText = 'Sushi road 23, 12345, Zen City';

  const phone = document.createElement('p');
  phone.innerText = 'Phone: 123 456 789';

  const email = document.createElement('p');
  email.innerText = 'info@sushizen.com';

  footer.append(title, address, phone, email);

  body.append(footer);
}

