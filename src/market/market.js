import { CommandGroup } from '../core/command-group.js';

class Market extends CommandGroup {

    get name() {
        return 'Market';
    }

    get prefix() {
        return 'market';
    }

    get description() {
        return 'Commands that involve with #applicant and #applicants';
    }
}

const _test = new Test();
export { _test as test };