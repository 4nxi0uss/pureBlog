import Header from '../modules/Header/Header.mjs';
import Footer from '../modules/Footer/Footer.mjs';
import MainContent from '../modules/MainContent/MainContent.mjs';

class Page404 {
    bodyRef = document.createElement('div');

    constructor() {
        if (Page404.instance == null) {
            Page404.instence = this;
        }

        return Page404.instance;
    }

    render() {
        const { bodyRef } = this;

        bodyRef.id = 'root';
        bodyRef.innerHTML = '';

        /** Class instace declaration*/
        const header = new Header('Header');
        const main = new MainContent();
        const footer = new Footer('Footer');

        main.addHtmlContent('<p>404 $)$ page</p>');

        bodyRef.appendChild(header.render());
        bodyRef.appendChild(main.render());
        bodyRef.appendChild(footer.render());

        return bodyRef;
    }
}

const Page404Obj = new Page404();
Object.freeze(Page404Obj);

export default Page404Obj;
