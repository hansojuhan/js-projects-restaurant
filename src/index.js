import { loadNavbar, loadFirstSection, loadSecondSection, loadFooter } from "./home";
import { loadMenu } from "./menu";

// Find the parent div#content
const content = document.getElementById('content');



// loadMenu();


// // loadFirstSection();
// // loadSecondSection();

/**
 * Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.
 */
window.onload = function() {

  // Load main page when opening
  loadNavbar();
  loadFirstSection();
  loadSecondSection();
  loadFooter();

  // Event listener for home
  const homeButton = document.getElementById('home-link');
  homeButton.addEventListener(
    'click',
    () => {
      content.innerHTML = '';
      loadFirstSection();
      loadSecondSection();
    }
  );

  // Event listener for menu
  const menuButton = document.getElementById('menu-link');
  menuButton.addEventListener(
    'click',
    () => {
      content.innerHTML = '';
      loadMenu();
    }
  );

}
