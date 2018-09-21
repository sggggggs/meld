export default class Event {
    constructor() {
        this.handlers = new Map();
    }

    on(tag, handler) {
        if (!this.handlers.has(tag)) {
            this.handlers.set(tag, new Set());
        }

        this.handlers.get(tag).add(handler);
    }

    off(tag, handler) {
        if (!this.handlers.has(tag)) {
            return;
        }

        this.handlers.get(tag).delete(handler);
    }

    raise(tag, data) {
        if (!this.handlers.has(tag)) {
            return;
        }

        this.handlers.get(tag).forEach(handler => handler(data));
    }
}