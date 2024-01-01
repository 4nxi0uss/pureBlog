import RenderElement from '../RenderElement/RenderElement.mjs';

export class Form extends RenderElement {
    /**
     * @param {*} className
     */
    constructor(className = 'Form') {
        super('Form');
        this.className = className;
    }

    render() {
        const { className, mainRenderElement } = this;

        mainRenderElement.className = className;

        return mainRenderElement;
    }
}

export default Form;
