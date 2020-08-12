import { CommandGroup } from '../core/command-group.js';
import { CONFIG } from '../config.js';

const ticketCategory = process.env.TESTING ? "742859481695912057" : "742910776620089425";

class Ticket extends CommandGroup {

    get name() {
        return 'Ticket';
    }

    get prefix() {
        return 'ticket';
    }

    get description() {
        return 'Ticket command group';
    }
}

function sendCustomEmbed(title, message, color, channel) {  
    channel.send({ embed: {
        fields: [
            {
                name: title, 
                value: message,
                inline: false,
            }
        ],
        color: color
    } });
}

const _ticket = new Ticket();

export { _ticket as ticket, sendCustomEmbed, ticketCategory };