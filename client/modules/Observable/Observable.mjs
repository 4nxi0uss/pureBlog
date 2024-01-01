class Observable {
    /**
     *
     * @param {*} value
     */
    constructor(value) {
        this.listeners = [];
        this.value = value;
    }

    notify() {
        this.listeners.forEach((listener) => listener(this.value));
    }

    /**
     *
     * @param {*} listener
     */
    subscribe(listener) {
        this.listeners.push(listener);
    }

    getValue() {
        return this.value;
    }

    /**
     *
     * @param {*} val
     */
    setValue(val) {
        if (val !== this.value) {
            this.value = val;
            this.notify();
        }
    }
}

export class Computed extends Observable {
    /**
     * @param {*} value
     * @param {*} deps
     */
    constructor(value, deps) {
        super(value());
        const listener = () => {
            this.value = value();
            this.notify();
        };

        deps.forEach((dep) => dep.subscribe(listener));
    }

    getValue() {
        return this.value;
    }

    /**
     * @param {*} _
     */
    setValue(_) {
        throw 'Cannot set computed property';
    }
}

export default Observable;
