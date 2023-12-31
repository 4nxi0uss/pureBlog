import Img from '../Img/Img.mjs';
import RenderElement from '../RenderElement/RenderElement.mjs';

export class ListElement extends RenderElement {
    paragraphEle = document.createElement('p');
    btnEle = document.createElement('button');
    paragraphClassName = 'Description';
    isTextExtended = true;

    constructor(className = 'ListElement', img = '', description = '') {
        super('div');
        this.className = className;
        this.img = img;
        this.description = description;
    }

    setDescriptionFieldClass(className = 'Description') {
        this.paragraphClassName = className;

        return this;
    }

    setTextToggleBtn() {
        this.paragraphEle.classList.toggle('ListElement--Description__hidden');
        this.isTextExtended = !this.isTextExtended;

        this.toggleTextInBtn(this.isTextExtended);

        return this;
    }

    toggleTextInBtn(condition = true) {
        this.btnEle.textContent = condition ? 'show more' : 'show less';
    }

    bindSetTextToggleBtn = this.setTextToggleBtn.bind(this);

    render() {
        const {
            className,
            img,
            description,
            mainRenderElement,
            paragraphEle,
            paragraphClassName,
            bindSetTextToggleBtn,
            btnEle,
        } = this;

        /**main pod*/
        mainRenderElement.className = className;

        /**img pod*/
        const img1 = new Img(img, 'sliczne logo', 'ListElement--Img').render();
        mainRenderElement.appendChild(img1);

        /**description pod*/
        paragraphEle.className = `${paragraphClassName} ${
            paragraphClassName + '__hidden'
        }`;
        paragraphEle.innerHTML = description;

        mainRenderElement.appendChild(paragraphEle);

        /** button sub pod*/
        btnEle.onclick = bindSetTextToggleBtn;
        btnEle.className = `Button ${paragraphClassName}Button`;
        this.toggleTextInBtn();

        mainRenderElement.appendChild(btnEle);

        return mainRenderElement;
    }
}

export default ListElement;
