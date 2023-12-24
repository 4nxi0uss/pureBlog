import Img from '../Img/Img.mjs';

export class ListElement {
    listEle = document.createElement('div');
    paragraphEle = document.createElement('p');
    paragraphClassName = 'Description';

    constructor(className = 'ListElement', img = '', description = '') {
        this.className = className;
        this.img = img;
        this.description = description;
    }

    setDescriptionFieldClass(className = 'Description') {
        this.paragraphClassName = className;

        return this;
    }

    render() {
        const {
            className,
            img,
            description,
            listEle,
            paragraphEle,
            paragraphClassName,
        } = this;

        /**main pod*/
        listEle.className = className;

        /**img pod*/
        const img1 = new Img(img, 'sliczne logo', 'ListElement--Img').render();
        listEle.appendChild(img1);

        /**description pod*/
        paragraphEle.className = paragraphClassName;
        paragraphEle.innerHTML = description;

        listEle.appendChild(paragraphEle);

        return listEle;
    }
}

export default ListElement;
