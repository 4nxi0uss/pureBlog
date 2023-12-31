import RenderElement from '../RenderElement/RenderElement.mjs';
import RouterObj from '../Router/Router.mjs';

export class Link extends RenderElement {
    constructor(name, className = 'Link', linkRef) {
        super('a');
        this.name = name;
        this.className = className;
        this.linkRef = linkRef;
    }

    render() {
        const { mainRenderElement, className, name, linkRef } = this;

        mainRenderElement.className = className;
        mainRenderElement.innerText = name;
        mainRenderElement.href = linkRef;
        mainRenderElement.onclick = RouterObj.routerClickBind;

        return mainRenderElement;
    }
}

export default Link;
