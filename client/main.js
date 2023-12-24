import Header from './modules/Header/Header.mjs';
import MainContent from './modules/MainContent/MainContent.mjs';

const bodyRef = document.querySelector('body');

/** Class instace declaration*/
const h1 = new Header('Header');
const mc1 = new MainContent();

bodyRef.children[0].replaceWith(h1.render());
bodyRef.children[1].replaceWith(mc1.render());
