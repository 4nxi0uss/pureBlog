import RenderElement from '../RenderElement/RenderElement.mjs';

export class Img extends RenderElement {
    constructor(imgPath, altText = '', className = 'Img') {
        super('img');
        this.imgPath = imgPath;
        this.altText = altText;
        this.className = className;
    }

    render() {
        const { imgPath, mainRenderElement, altText, className } = this;

        mainRenderElement.src = imgPath;
        mainRenderElement.alt = altText;
        mainRenderElement.className = className;

        return mainRenderElement;
    }
}

export default Img;
