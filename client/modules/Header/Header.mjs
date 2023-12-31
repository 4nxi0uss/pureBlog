import Link from '../Link/Link.mjs';
import Img from '../Img/Img.mjs';
import RenderElement from '../RenderElement/RenderElement.mjs';

export class Header extends RenderElement {
    headerWrapper = document.createElement('div');
    logoWrapper = document.createElement('div');
    titleEle = document.createElement('p');
    linkWrapper = document.createElement('nav');

    constructor(className = 'Header') {
        super('header');
        this.className = className;
    }

    render() {
        const {
            mainRenderElement,
            className,
            headerWrapper,
            linkWrapper,
            titleEle,
            logoWrapper,
        } = this;
        logoWrapper.className = 'Header-LogoWrapper';

        titleEle.className = 'Header-Title';
        titleEle.textContent = 'PureBlog';

        mainRenderElement.className = className;

        headerWrapper.className = 'Header-Wrapper';
        logoWrapper.appendChild(titleEle);

        const img1 = new Img(
            '../../assets/logo.png',
            'sliczne logo',
            'Img Header-Logo'
        );

        logoWrapper.appendChild(img1.render());
        headerWrapper.appendChild(logoWrapper);

        linkWrapper.className = 'Header-Navigation';
        linkWrapper.appendChild(new Link('Home', 'Link', '/').render());
        linkWrapper.appendChild(new Link('About', 'Link', '/about').render());
        linkWrapper.appendChild(new Link('Log In', 'Link', '/login').render());

        headerWrapper.appendChild(linkWrapper);

        this.appendRenderChild(headerWrapper);

        return mainRenderElement;
    }
}

export default Header;
