import RenderElement from '../RenderElement/RenderElement.mjs';

export class MainContent extends RenderElement {
    constructor() {
        super('section');
    }

    render() {
        const { mainRenderElement } = this;

        mainRenderElement.className = 'MainContent';

        return mainRenderElement;
    }
}

export default MainContent;
