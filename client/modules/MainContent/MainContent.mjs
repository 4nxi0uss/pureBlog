import List from '../List/List.mjs';

export class MainContent {
    constructor() {
        this.mainContentElement = document.createElement('div');
    }

    render() {
        const { mainContentElement } = this;

        mainContentElement.className = 'MainContent';

        new List(mainContentElement, 'List List--Wrapper').render();

        return mainContentElement;
    }
}

export default MainContent;
