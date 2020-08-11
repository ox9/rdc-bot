import { CommandGroup } from '../core/command-group.js';

class Test extends CommandGroup {

    get name() {
        return 'Test';
    }

    get prefix() {
        return 'test';
    }

    get description() {
        return 'description';
    }
}

const _test = new Test();
export { _test as test };