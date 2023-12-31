export class RenderElement {
    constructor(selector) {
        this.mainRenderElement = document.createElement(selector);
    }

    /**
     * @method
     * @param {string} [content='<div><p>render element</p></div>']
     * @returns {HTMLElement}
     */
    addHtmlContent(content = '<div><p>render element</p></div>') {
        const { mainRenderElement } = this;

        mainRenderElement.innerHTML = content;

        return mainRenderElement;
    }

    /**
     * @method
     * @param {HTMLElement} [element=document.createElement('div')]
     * @returns {HTMLElement}
     */
    addElementContent(element = document.createElement('div')) {
        const { mainRenderElement } = this;

        mainRenderElement.appendChild(element);

        return mainRenderElement;
    }

    /**
     * @method
     * @param {HTMLElement} data
     * @returns {HTMLElement}
     */
    appendRenderChild(data) {
        const { mainRenderElement } = this;

        mainRenderElement.appendChild(data);

        return mainRenderElement;
    }

    /**
     * @method
     * @returns {HTMLElement}
     */
    render() {
        const { mainRenderElement } = this;

        return mainRenderElement;
    }
}

export default RenderElement;
