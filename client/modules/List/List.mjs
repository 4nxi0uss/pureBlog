import ListElement from '../ListElement/ListElement.mjs';
import { TEST_DESCRIPTION, TEST_IMG } from './List.config.mjs';

export class List {
    listEle = document.createElement('div');

    constructor(ref, className = 'List') {
        this.parent = ref;
        this.className = className;
    }

    render() {
        const { listEle, parent, className } = this;

        listEle.className = className;

        const l1 = new ListElement('ListElement 1', TEST_IMG, TEST_DESCRIPTION)
            .setDescriptionFieldClass('ListElement--Description')
            .render();
        const l2 = new ListElement('ListElement 2', TEST_IMG, TEST_DESCRIPTION)
            .setDescriptionFieldClass('ListElement--Description')
            .render();
        const l3 = new ListElement('ListElement 3', TEST_IMG, TEST_DESCRIPTION)
            .setDescriptionFieldClass('ListElement--Description')
            .render();

        listEle.appendChild(l1);
        listEle.appendChild(l2);
        listEle.appendChild(l3);
        parent.appendChild(listEle);

        return listEle;
    }
}

export default List;
