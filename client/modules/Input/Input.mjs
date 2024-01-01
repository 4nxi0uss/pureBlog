import RenderElement from '../RenderElement/RenderElement.mjs';

export class Input extends RenderElement {
    inputRef = document.createElement('input');

    /**
     * @param {Object} param0
     * @param {string} param0.id
     * @param {string} param0.type
     * @param {string} param0.name
     * @param {string} param0.value
     * @param {boolean} [param0.isLabel=true]
     * @param {boolean} [param0.isBreake=true]
     * @param {string} param0.labelText
     * @param {string} param0.func
     */
    constructor({
        id,
        type,
        name,
        value,
        isLabel = true,
        isBreake = true,
        labelText,
        func,
    }) {
        super('label');
        this.id = id;
        this.type = type;
        this.name = name;
        this.value = value;
        this.isLabel = isLabel;
        this.isBreake = isBreake;
        this.labelText = labelText;
        this.func = func;
    }

    render() {
        const {
            mainRenderElement: labelEle,
            inputRef,
            id,
            type,
            name,
            value,
            isLabel,
            labelText,
            func,
            isBreake,
        } = this;

        labelEle.for = id;
        labelEle.textContent = labelText;
        labelEle.className = `Form--Label__${id}`;

        if (type) {
            inputRef.type = type;
            inputRef.className = `Form--Input__${type}`;
        }

        if (id) {
            inputRef.id = id;
        }

        if (name) {
            inputRef.name = name;
        }

        if (value) {
            inputRef.defaultValue = value;
        }

        if (isBreake) {
            labelEle.appendChild(document.createElement('br'));
        }

        if (func && isLabel) {
            inputRef.onkeyup = func;
        }

        labelEle.appendChild(inputRef);

        if (isLabel) {
            return labelEle;
        }

        inputRef.onclick = func;

        return inputRef;
    }
}

export default Input;
