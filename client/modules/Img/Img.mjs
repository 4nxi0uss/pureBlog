export class Img {
    imgElem = document.createElement('img');

    constructor(imgPath, altText = '', className = 'Img') {
        this.imgPath = imgPath;
        this.altText = altText;
        this.className = className;
    }

    render() {
        const { imgPath, imgElem, altText, className } = this;

        imgElem.src = imgPath;
        imgElem.alt = altText;
        imgElem.className = className;

        return imgElem;
    }
}

export default Img;
