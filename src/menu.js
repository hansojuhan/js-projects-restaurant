import './styles.css';
import sushiImage1 from './img/sushi1.webp';
import sushiImage2 from './img/sushi2.webp';

export function loadMenu() {
  // Find the parent div#content
  const content = document.getElementById('content');

  // Get dinner menu
  const dinnerMenu = loadMenuPartial(
    sushiImage1,
    'Dinner',
    '<em>Tuesday - Sunday</em>',
    '<em>19.00 - 23.00</em>',
    '<td>Tuesday - Friday</td><td>26.90€</td>',
    '<td>Saturday - Sunday and Holidays</td><td>28.90€</td>',
    '<td>Children (all days)</td><td>14.90€</td>'
  );

  // Get lunch menu
  const lunchMenu = loadMenuPartial(
    sushiImage2,
    'Lunch',
    '<em>Wednesday - Sunday</em>',
    '<em>12.00 - 14.30</em>',
    '<td>Tuesday - Friday</td><td>16.90€</td>',
    '<td>Saturday - Sunday and Holidays</td><td>18.90€</td>',
    '<td>Children (all days)</td><td>9.90€</td>'
  )

  // Append
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');
  menuContainer.append(dinnerMenu, lunchMenu);
  
  content.append(menuContainer);
}

function loadMenuPartial(
  image,
  headingText,
  subheading1Text,
  subheading2Text,
  tableRow1,
  tableRow2,
  tableRow3
) {
  // Dinner menu
  const dinnerMenuContainer = document.createElement('div');

  const dinnerImage = document.createElement('img');
  dinnerImage.src = image;
  dinnerImage.id = 'menu-image';

  const dinnerHeading = document.createElement('h2');
  dinnerHeading.innerText = headingText;

  const dinnerSubheading1 = document.createElement('p');
  dinnerSubheading1.innerHTML = subheading1Text;
  const dinnerSubheading2 = document.createElement('p');
  dinnerSubheading2.innerHTML = subheading2Text;

  const dinnerTable = document.createElement('table');
  const dinnerTableBody = document.createElement('tbody');

  const dinnerTableBodyRow1 = document.createElement('tr');
  dinnerTableBodyRow1.innerHTML = tableRow1;

  const dinnerTableBodyRow2 = document.createElement('tr');
  dinnerTableBodyRow2.innerHTML = tableRow2;

  const dinnerTableBodyRow3 = document.createElement('tr');
  dinnerTableBodyRow3.innerHTML = tableRow3;

  dinnerTableBody.append(dinnerTableBodyRow1,dinnerTableBodyRow2,dinnerTableBodyRow3);
  dinnerTable.append(dinnerTableBody);

  // Append everything to content
  dinnerMenuContainer.append(
    dinnerImage,
    dinnerHeading,
    dinnerSubheading1,
    dinnerSubheading2,
    dinnerTable
  );

  return dinnerMenuContainer;
}
