import Header from './modules/Header/Header.mjs';
import MainContent from './modules/MainContent/MainContent.mjs';

const bodyRef = document.querySelector('body');

/** Class instace declaration*/
const h1 = new Header(bodyRef);
const b1 = new MainContent(bodyRef);

h1.addClassNames('Header');
h1.render();

b1.render();

