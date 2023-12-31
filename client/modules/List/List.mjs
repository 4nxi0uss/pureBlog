import ListElement from '../ListElement/ListElement.mjs';
import { TEST_DESCRIPTION, TEST_IMG } from './List.config.mjs';
import RenderElement from '../RenderElement/RenderElement.mjs';

export class List extends RenderElement {
    constructor(ref, className = 'List') {
        super('div');
        this.parent = ref;
        this.className = className;
    }

    render() {
        const { mainRenderElement, parent, className } = this;

        mainRenderElement.className = className;

        const l1 = new ListElement('ListElement 1', TEST_IMG, TEST_DESCRIPTION)
            .setDescriptionFieldClass('ListElement--Description')
            .render();
        const l2 = new ListElement('ListElement 2', TEST_IMG, TEST_DESCRIPTION)
            .setDescriptionFieldClass('ListElement--Description')
            .render();
        const l3 = new ListElement('ListElement 3', TEST_IMG, TEST_DESCRIPTION)
            .setDescriptionFieldClass('ListElement--Description')
            .render();

        mainRenderElement.appendChild(l1);
        mainRenderElement.appendChild(l2);
        mainRenderElement.appendChild(l3);
        parent.appendChild(mainRenderElement);

        return mainRenderElement;
    }
}

export default List;
