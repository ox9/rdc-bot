import { Abstract } from './abstract';

export class Command extends Abstract {
    
    constructor(parent) {
        super(['onInvoked'], ['prefix', 'syntax', 'description']);

        parent.children.push(this);
    }

    isInvoked(msg) {
        
    }
}