/**
 * Required methods: 'getPrefix', 'getSyntax', 'getDescription', 'onInvoked'
 */
export class Command extends Abstract {
    
    constructor() {
        super('getPrefix', 'getSyntax', 'getDescription', 'onInvoked');
    }
}