import { CommandGroup } from '../core/command-group.js';

const ticketCategory = "742859481695912057";

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