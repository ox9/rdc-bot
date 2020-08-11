import { Abstract } from './abstract';

export class CommandGroup extends Abstract {

    constructor() {
        super([], ['prefix', 'description']);
        this.children = [];
    }

}