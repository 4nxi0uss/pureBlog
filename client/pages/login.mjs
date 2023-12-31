import Footer from '../modules/Footer/Footer.mjs';
import Header from '../modules/Header/Header.mjs';
import MainContent from '../modules/MainContent/MainContent.mjs';

class Login {
    bodyRef = document.createElement('div');

    constructor() {
        if (Login.instances == null) {
            Login.instances = this;
        }
        return Login.instances;
    }

    render() {
        const { bodyRef } = this;

        bodyRef.innerHTML = '';

        const header = new Header('Header');
        const main = new MainContent();
        const footer = new Footer('Footer', 'footer for login');

        main.addHtmlContent('<p>login</p>');

        bodyRef.appendChild(header.render());
        bodyRef.appendChild(main.render());
        bodyRef.appendChild(footer.render());

        return bodyRef;
    }
}

const LoginObj = new Login();
Object.freeze(LoginObj);

export default LoginObj;
