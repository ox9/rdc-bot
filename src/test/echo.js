import { Command } from '../core/command';
import { test } from '../test/test';
import { Message } from 'discord.js';

export class Echo extends Command {

    constructor() {
        super(test);
    }

    get name() {
        return 'Echo';
    }

    get prefix() {
        return 'echo';
    }

    get syntax() {
        return '<text: message | optional>';
    }
    
    get description() {
        return 'Repeats what the user said';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        if (msg.trimed === "") {
            msg.trimed = "Echoed!";
        }
		msg.channel.send(msg.trimed);
    }
}