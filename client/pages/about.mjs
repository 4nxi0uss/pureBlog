import Header from '../modules/Header/Header.mjs';
import Footer from '../modules/Footer/Footer.mjs';
import MainContent from '../modules/MainContent/MainContent.mjs';

class About {
    bodyRef = document.createElement('div');

    constructor() {
        if (About.instance == null) {
            About.instance = this;
        }
        return About.instance;
    }

    render() {
        const { bodyRef } = this;

        bodyRef.innerHTML = '';

        /** Class instace declaration*/
        const header = new Header('Header');
        const main = new MainContent();
        const footer = new Footer('Footer', 'adsasdf asdf asd1234567');

        main.addHtmlContent('<p>About</p>');

        bodyRef.appendChild(header.render());
        bodyRef.appendChild(main.render());
        bodyRef.appendChild(footer.render());

        return bodyRef;
    }
}

const AboutObj = new About();
Object.freeze(AboutObj);

export default AboutObj;
