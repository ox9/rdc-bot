import { Command } from '../core/command';
import { ticket, sendCustomEmbed, ticketCategory } from '../ticket/ticket';
import { Message } from 'discord.js';

export class Close extends Command {

    constructor() {
        super(ticket);
    }

    get name() {
        return 'Close';
    }

    get prefix() {
        return 'close';
    }

    get syntax() {
        return '<none>';
    }
    
    get description() {
        return 'Closes the existing ticket';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        if (msg.channel.name === msg.author.id || msg.member.hasPermission('MANAGE_CHANNELS')) {
            msg.channel.delete();
        } else {
            msg.reply("Invalid channel");
        }
    }
}