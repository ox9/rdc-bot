/**
 * Required methods: 'getPrefix', 'getDescription'
 */
export class CommandGroup extends Abstract {

    constructor() {
        super('getPrefix', 'getDescription');
        registerCommand(this.getPrefix());
    }


}