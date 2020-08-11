import { Abstract } from './abstract';

export class CommandGroup extends Abstract {

    constructor() {
        super([], ['name', 'prefix', 'description']);
        this.children = [];
    }
}