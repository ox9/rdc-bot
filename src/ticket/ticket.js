import { CommandGroup } from '../core/command-group.js';

class Ticket extends CommandGroup {

    get name() {
        return 'Ticket';
    }

    get prefix() {
        return 'ticket';
    }

    get description() {
        return 'Ticket command group';
    }
}

const _ticket = new Ticket();
export { _ticket as ticket };