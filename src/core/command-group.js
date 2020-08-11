import { registerCommandGroup } from "..";

/**
 * Required methods: 'getPrefix', 'getDescription'
 */
export class CommandGroup extends Abstract {

    constructor() {
        super('getPrefix', 'getDescription');
        registerCommandGroup(this);
        this.children = [];
    }
    
}