import { Abstract } from './abstract';

export class CommandGroup extends Abstract {

    constructor() {
        super([], ['name', 'prefix', 'description']);
        this.children = [];
    }

    get info() {
        console.log(this.children.toString());
        return {
            color: 0x42b9f5,
            title: `Command Group "${this.name}"`,
            description: this.description,
            fields: [
                {
                    name: 'Prefix',
                    value: this.prefix,
                    inline: false
                },
                {
                    name: 'Children',
                    value: this.children.map(v => v.prefix).join(', '),
                    inline: false
                }
            ]
        };
    }

    get reference() {
        return `${CONFIG.BOT_PREFIX}${this.prefix}`;
    }
}