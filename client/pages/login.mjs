import Footer from '../modules/Footer/Footer.mjs';
import Form from '../modules/Form/Form.mjs';
import Header from '../modules/Header/Header.mjs';
import Input from '../modules/Input/Input.mjs';
import MainContent from '../modules/MainContent/MainContent.mjs';
import Observable, { Computed } from '../modules/Observable/Observable.mjs';

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
        const log = {};
        const headerText = document.createElement('h2');
        const formWrapper = document.createElement('div');

        bodyRef.innerHTML = '';

        log.log = new Observable('John');
        log.pass = new Observable('Doe');
        new Computed(() => {
            console.log('test-computed', log.log.value, log.pass.value);
        }, [log.log, log.pass]);
        const header = new Header();
        const main = new MainContent();
        const form = new Form();
        const footer = new Footer('Footer', 'footer for login');
        const nameInput = new Input({
            id: 'name',
            type: 'text',
            name: 'name',
            isLabel: true,
            labelText: 'Login',
            func: (e) => {
                log.log.setValue(e.target.value);
            },
        });

        const passwdInput = new Input({
            id: 'passwd',
            type: 'password',
            name: 'passwd',
            isLabel: true,
            labelText: 'Password',
            func: (e) => {
                log.pass.setValue(e.target.value);
            },
        });

        const btnInput = new Input({
            type: 'button',
            value: 'Log in',
            isLabel: false,
            func: (e) => {
                e.preventDefault();
                console.log('test-321', e, log.log.value, log.pass.value);
            },
        });

        /**
         * Login form
         */

        form.appendRenderChild(nameInput.render());
        form.appendRenderChild(document.createElement('br'));
        form.appendRenderChild(passwdInput.render());
        form.appendRenderChild(document.createElement('br'));
        form.appendRenderChild(btnInput.render());

        headerText.textContent = 'Please login';
        headerText.className = 'MainContent--Header';

        formWrapper.className = 'Wrapper--Form';

        formWrapper.appendChild(headerText);
        formWrapper.appendChild(form.render());

        main.appendRenderChild(formWrapper);

        bodyRef.appendChild(header.render());
        bodyRef.appendChild(main.render());
        bodyRef.appendChild(footer.render());

        return bodyRef;
    }
}

const LoginObj = new Login();

export default LoginObj;
