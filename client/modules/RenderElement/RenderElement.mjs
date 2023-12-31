export class RenderElement {
    constructor(selector) {
        this.mainRenderElement = document.createElement(selector);
    }

    addHtmlContent(content = '<div><p>render element</p></div>') {
        const { mainRenderElement } = this;

        mainRenderElement.innerHTML = content;

        return mainRenderElement;
    }

    addElementContent(element = document.createElement('div')) {
        const { mainRenderElement } = this;

        mainRenderElement.appendChild(element);

        return mainRenderElement;
    }

    appendRenderChild(data) {
        const { mainRenderElement } = this;

        mainRenderElement.appendChild(data);

        return mainRenderElement;
    }

    render() {
        const { mainRenderElement } = this;

        return mainRenderElement;
    }
}

export default RenderElement;
