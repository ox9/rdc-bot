export class Abstract {

    /**
     * @param {array} requiredMethods 
     */
    constructor(requiredMethods, requiredProperties) {
        if (new.target === Abstract) {
            throw new TypeError('Do not directly instantiate this class. Use "extends".');
        }

        if (requiredMethods === undefined) {
            requiredMethods = [];
        }
        if (requiredProperties === undefined) {
            requiredProperties = [];
        }

        const missingMethods = requiredMethods.filter(v => typeof this[v] !== 'function');
        const missingProperties = requiredProperties.filter(v => this[v] === undefined);

        let errorMessage = '';

        if (missingMethods.length > 0 && requiredMethods.length !== 0) {
            errorMessage = `Missing methods: ${missingMethods}. `;
        }
        if (missingProperties.length > 0 && requiredProperties.length !== 0) {
            errorMessage += `Missing properties: ${missingProperties}.`;
        }

        if (errorMessage.length !== 0) {
            throw new TypeError(errorMessage);
        }
    }
}