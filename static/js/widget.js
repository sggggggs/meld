import Event from "./event.js";

export default class Widget extends Event {
    constructor() {
        super();
    }

    createNode() {
        this._node = document.createElement("div");
    }

    getTempContainer() {
        let w = document.body.querySelector("#w");
        if (!w) {
            w = document.createElement("div");
            w.id = "w";
            w.style.display = "none";
            document.body.appendChild(w);
        }
        return w;
    }

    insertNode() {
        let t = this.getTempContainer();
        let c = t.children;
        t.appendChild(this._node);
        this._node = c[c.length - 1];
    }

    node() {
        return this._node;
    }
}