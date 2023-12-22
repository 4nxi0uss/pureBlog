export class Link {

    constructor(name, className='Link', linkRef, parent) {
        this.name = name;
        this.className = className;
        this.linkRef = linkRef;
        this.parent = parent;
        this.linkElement = document.createElement('a');
    }

    render() {
        const {
            linkElement,
            className,
            name,
            linkRef,
            parent
        } = this;

        linkElement.className = className;
        linkElement.innerText = name;
        linkElement.href = linkRef;

        return parent.appendChild(linkElement);
    }
}

export default Link
