import { Abstract } from './abstract';

export class Command extends Abstract {
    
    constructor(parent) {
        super(['onInvoked'], ['name', 'prefix', 'syntax', 'description']);

        this.parent = parent;
        parent.children.push(this);
    }

    /**
     * @param {string} text 
     * 
     * @returns false if not invoked, a trimed string without the prefix if it is
     */
    isInvoked(text) {
        if (this.parent != null) {
            text = Command.prototype.isInvoked.call(this.parent, text);
            if (text === false) {
                return false;
            }
        }

        text = text.trimLeft()
        if (text.startsWith(this.prefix)) {
            return text.substring(this.prefix.length).trimLeft();
        }
        return false;
    }
}