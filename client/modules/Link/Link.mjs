export class Link {
    linkElement = document.createElement('a');

    constructor(name, className = 'Link', linkRef) {
        this.name = name;
        this.className = className;
        this.linkRef = linkRef;
    }

    render() {
        const { linkElement, className, name, linkRef } = this;

        linkElement.className = className;
        linkElement.innerText = name;
        linkElement.href = linkRef;

        return linkElement;
    }
}

export default Link;
