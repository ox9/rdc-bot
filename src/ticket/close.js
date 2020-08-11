//Imports
import { Command } from '../core/command';
import { ticket, sendCustomEmbed } from '../ticket/ticket';
import { Message } from 'discord.js';

//Variables
var ticketCategory = "742859481695912057";

//Functions


//Exports
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
        return 'Closes existing ticket';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        if (msg.channel.id == ticketCategory) {
            msg.channel.delete();
        } else {
            msg.reply("Invalid channel");
        }
    }
}