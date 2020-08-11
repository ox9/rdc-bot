import { CommandGroup } from '../core/command-group.js';

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
    var embed = new discord.MessageEmbed()
      .addField(title, message)
      .setColor(color)
  
    channel.send(embed);
}


const _ticket = new Ticket();

export { _ticket as ticket, sendCustomEmbed };