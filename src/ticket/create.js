//Imports
import { Command } from '../core/command';
import { ticket } from '../ticket/ticket';
import { Message } from 'discord.js';

//Variables
var ticketCategory = "742859481695912057";

//Functions
function sendCustomEmbed(title, message, color, channel) {
    var embed = new discord.MessageEmbed()
      .addField(title, message)
      .setColor(color)
  
    channel.send(embed);
}

//Exports
export class Create extends Command {

    constructor() {
        super(ticket);
    }

    get name() {
        return 'Create';
    }

    get prefix() {
        return 'create';
    }

    get syntax() {
        return '<none>';
    }
    
    get description() {
        return 'Creates a new ticket';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        const author = msg.author;
        const id = author.id;
        
        var chan = guild.channels.cache.find(c => c.name == `${user.id}`);

        if (!chan) {
            guild.channels.create(`${user.id}`, {
                type: 'text',
                permissionOverwrites: [
                  {
                    id: message.guild.id,
                    deny: ['VIEW_CHANNEL'],
                  },
                  {
                    id: user.id,
                    allow: ['VIEW_CHANNEL'],
                  },
                ],
              })
              .then(channel => {
                channel.setParent(ticketCategory);

                sendCustomEmbed(`Your ticket is ready, ${user.username}.`,  `Do -close to close this ticket.`, "#26aafc", channel);
              });
        } else {
            msg.reply("you already have a ticket open!");
        }
    }
}