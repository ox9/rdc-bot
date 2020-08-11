export class Abstract {

    /**
     * @param {array} requiredMethods 
     */
    constructor(requiredMethods) {
        if (new.target === Abstract) {
            throw new TypeError('Do not directly instantiate this class. Use "extends".');
        }

        const missingMethods = requiredMethods.filter(v => typeof this[method] !== 'function');

        if (missingMethods.length > 0 && requiredMethods.length !== 0) {
            throw new TypeError(`Missing methods: ${missingMethods}.`);
        }
    }
}