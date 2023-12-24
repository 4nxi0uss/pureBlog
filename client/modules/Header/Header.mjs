import Link from '../Link/Link.mjs';
import Img from '../Img/Img.mjs';

export class Header {
    headerElement = document.createElement('header');

    constructor(className = 'Header') {
        this.className = className;
    }

    addHtmlContent(content = '<div><p>header</p></div>') {
        const { headerElement } = this;

        headerElement.innerHTML = content;

        return headerElement;
    }

    addElementContent(element = document.createElement('div')) {
        const { headerElement } = this;

        headerElement.appendChild(element);

        return headerElement;
    }

    appendHeaderChild(data) {
        const { headerElement } = this;

        headerElement.appendChild(data);

        return headerElement;
    }

    render() {
        const { headerElement, className } = this;
        const headerWrapper = document.createElement('div');
        const linkWrapper = document.createElement('div');

        headerElement.className = className;

        headerWrapper.className = 'Header Wrapper';
        headerWrapper.innerHTML = '<p id="a1">PureBlog</p>';

        const img1 = new Img('../../assets/logo.png', 'sliczne logo');

        headerWrapper.appendChild(img1.render());

        linkWrapper.appendChild(new Link('page 1', 'Link', '#a1').render());
        linkWrapper.appendChild(new Link('page 2', 'Link', '#a2').render());
        linkWrapper.appendChild(new Link('page 3', 'Link', '#a3').render());

        headerWrapper.appendChild(linkWrapper);

        this.appendHeaderChild(headerWrapper);

        return headerElement;
    }
}

export default Header;
