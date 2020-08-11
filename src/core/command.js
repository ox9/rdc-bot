import { Abstract } from './abstract';
import { MessageEmbed } from 'discord.js';

export class Command extends Abstract {
    
    constructor(parent) {
        super(['onInvoked'], ['name', 'prefix', 'syntax', 'description']);

        this.parent = parent;
        if (parent !== null) {
            parent.children.push(this);
        }
    }

    /**
     * @param {string} text 
     * 
     * @returns false if not invoked, a trimed string without the prefix if it is
     */
    isInvoked(text) {
        if (this.parent != null) {
            text = Command.prototype.isInvoked.call(this.parent, text);
            if (text === false) {
                return false;
            }
        }

        text = text.trimLeft()
        if (text.startsWith(this.prefix)) {
            return text.substring(this.prefix.length).trimLeft();
        }
        return false;
    }

    get info() {
        return {
            color: 0x42b9f5,
            title: `Command "${this.name}"`,
            description: this.description,
            fields: [
                {
                    name: 'Command Group',
                    value: this.parent === null ? 'None' : this.parent.name,
                    inline: false
                },
                {
                    name: 'Prefix',
                    value: this.prefix,
                    inline: false
                },
                {
                    name: 'Syntax',
                    value: this.syntax,
                    inline: false
                }
            ]
        };
    }
}