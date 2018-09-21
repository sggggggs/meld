export default class Template {
    constructor(node) {
        this._node = node;
    }
    
    replace(regexp, rep) {
        let replaced = this._node.cloneNode(true);
        replaced.innerHTML = replaced.innerHTML.replace(regexp, rep)
        return new Template(replaced);
    }
    
    node() {
        return document.importNode(this._node.content, true);
    }
}