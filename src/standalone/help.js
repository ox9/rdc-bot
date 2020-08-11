import { Command } from '../core/command';
import { Message } from 'discord.js';
import { CONFIG } from '../config';

/**
 * @author 
 */
export class Help extends Command {

    constructor() {
        super();
    }

    get name() {
        return 'Help';
    }

    get prefix() {
        return 'help';
    }

    get syntax() {
        return '<command group prefix | optional> <command prefix | optional>';
    }
    
    get description() {
        return 'Gives the user information about commands';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        if (msg.trimed === '') {
            msg.channel.send('TODO: Add this');
            return;
        }

        for (const cmd of CONFIG.REGISTERED_CMDS) {
            if (cmd.isInvoked(msg.trimed) !== false) {
                msg.channel.send({embed: cmd.info});
                return;
            }
        }

        for (const cmdGroup of CONFIG.REGISTERED_CMD_GROUPS) {
            if (msg.trimed === cmdGroup.prefix) {
                msg.channel.send({embed: cmdGroup.info});
                return;
            }
        }

        msg.channel.send(`Did you misspell something? Use ${CONFIG.BOT_PREFIX}${this.prefix} ${this.prefix} to see how this command works.`);
    }
}