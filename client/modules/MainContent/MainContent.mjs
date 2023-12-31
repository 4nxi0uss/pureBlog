import RenderElement from '../RenderElement/RenderElement.mjs';
import List from '../List/List.mjs';

export class MainContent extends RenderElement {
    constructor() {
        super('section');
    }

    render() {
        const { mainRenderElement } = this;

        mainRenderElement.className = 'MainContent';

        new List(mainRenderElement, 'List List--Wrapper').render();

        return mainRenderElement;
    }
}

export default MainContent;
