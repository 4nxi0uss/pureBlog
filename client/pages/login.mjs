import Footer from '../modules/Footer/Footer.mjs';
import Header from '../modules/Header/Header.mjs';

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
        const footer = new Footer('Footer', 'footer for login');

        bodyRef.appendChild(header.render());
        bodyRef.appendChild(footer.render());

        return bodyRef;
    }
}

const LoginObj = new Login();
Object.freeze(LoginObj);

export default LoginObj;
