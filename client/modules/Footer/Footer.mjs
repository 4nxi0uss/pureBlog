import RenderElement from '../RenderElement/RenderElement.mjs';

export class Footer extends RenderElement {
    constructor(
        className,
        text = 'asdfasdf asdf asdf asdf safd asdfasdfas dfasdf asdf asdf '
    ) {
        super('footer');
        this.text = text;
        this.calassName = className;
    }

    render() {
        const { mainRenderElement, calassName } = this;

        mainRenderElement.className = calassName;
        mainRenderElement.textContent = this.text;
        return mainRenderElement;
    }
}

export default Footer;
