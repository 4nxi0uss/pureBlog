export class MainContent {
    constructor(ref) {
        this.parentRef = ref;
        this.mainContentElement = document.createElement('div');
    }

    render() {
        const {
            parentRef,
            mainContentElement
        } = this;

        mainContentElement.innerText = 'test classy body';
        mainContentElement.className = 'MainContent';

        const render = parentRef.children[1].replaceWith(mainContentElement);

        return render;
    }
}

export default MainContent;

