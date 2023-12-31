import Header from '../modules/Header/Header.mjs';
import MainContent from '../modules/MainContent/MainContent.mjs';
import Footer from '../modules/Footer/Footer.mjs';
import List from '../modules/List/List.mjs';

class Home {
    bodyRef = document.createElement('div');

    constructor() {
        if (Home.instance == null) {
            Home.instence = this;
        }

        return Home.instance;
    }

    render() {
        const { bodyRef } = this;

        bodyRef.id = 'root';
        bodyRef.innerHTML = '';

        /** Class instace declaration*/
        const header = new Header('Header');
        const mainContent = new MainContent();
        const footer = new Footer('Footer');

        mainContent.appendRenderChild(new List('List List--Wrapper').render());

        bodyRef.appendChild(header.render());
        bodyRef.appendChild(mainContent.render());
        bodyRef.appendChild(footer.render());

        return bodyRef;
    }
}

const HomeObj = new Home();
Object.freeze(HomeObj);

export default HomeObj;
