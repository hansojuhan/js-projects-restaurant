import { loadNavbar, loadFirstSection, loadSecondSection, loadFooter } from "./home";

import { loadMenu } from "./menu";

loadNavbar();

loadMenu();


// loadFirstSection();
// loadSecondSection();
loadFooter();

/**
 * Write the tab-switching logic inside of index.js. You should have event listeners for each button in the header navbar that wipes out the current contents of div#content and then runs the correct ‘tab module’ to populate it with the new contents again.
 */

