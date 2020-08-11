import { registerCommand } from "..";

/**
 * Required methods: 'getPrefix', 'getSyntax', 'getDescription', 'onInvoked'
 */
export class Command extends Abstract {
    
    constructor(parent) {
        super('getPrefix', 'getSyntax', 'getDescription', 'onInvoked');
        registerCommand(this);

        this.parent = parent;
        parent.children.push(this);
    }
}