import Link from '../Link/Link.mjs';
import Img from '../Img/Img.mjs';

export class Header {

	constructor(ref) {
		this.ref = ref;
		this.headerElement = document.createElement('header');
	}

	addClassNames(className = 'Header') {
		const { headerElement } = this

		headerElement.className = className;
	}

	addHtmlContent(content = '<div><p>header</p></div>') {
		const { headerElement } = this

		headerElement.innerHTML = content;
	}

	addElementContent(element = document.createElement('div')) {
		const { headerElement } = this

		console.log('test-4', element);
		headerElement.appendChild(element);
	}

	appendHeaderChild(data) {
		const { headerElement } = this

		headerElement.appendChild(data);

		return this;
	}

	render() {
		const { ref, headerElement } = this;
		const headerWrapper = document.createElement('div');
		const linkWrapper = document.createElement('div');

		headerWrapper.className = 'Header Wrapper';
		headerWrapper.innerHTML = '<p id="a1">Zaliczenie</p>';

		const img1 = new Img('../../Assets/logo.png', 'sliczne logo');

		headerWrapper.appendChild(img1.render());

		new Link('page 1', 'Link', '#a1', linkWrapper).render();
		new Link('page 2', 'Link', '#a2', linkWrapper).render();
		new Link('page 3', 'Link', '#a3', linkWrapper).render();

		headerWrapper.appendChild(linkWrapper);

		this.appendHeaderChild(headerWrapper);

		const render = ref.children[0].replaceWith(headerElement);

		return render;
	}
}

export default Header
