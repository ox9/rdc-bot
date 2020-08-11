<<<<<<< HEAD
import { Command } from "../core/command";
import { Message } from "discord.js";

export class Guild extends Command {
    constructor() {
        super();
    }
    
    get name() {
        return "Guild";
    }
    
    get prefix() {
        return "guild";
    }

    get syntax() {
        return "<none>";
    }
    
    get description() {
        return "Gives information about the guild";
    }
    
    /**
    *
    * @param {Message} msg
    */
    onInvoked(msg) {
        const guild = msg.guild;
        message.channel.send({
            embed: {
                color: "#26aafc",
                title: guild.name,
                description: guild.name,
                fields: [
                    { name: "Server ID", value: guild.id },
                    { name: "Member Count", value: guild.memberCount },
                    { name: "Description", value: guild.description },
                    { name: "Creation Date", value: guild.createdAt },
                    { name: "Owner", value: guild.owner },
                ],
            },
        });
    }
}
=======
const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.js');

client.once('ready', () => {
	console.log('Ready!');
});

client.login(token);

client.on('message', message => {
	if (message.content === `${prefix}server-info`) {
		const varguild = message.guild;
		const serverEmbed = new Discord.MessageEmbed()
			.setColor('#26aafc')
			.setTitle(`${varguild.name}`)
			.setDescription('Info about', `${varguild.name}`)
			.setThumbnail('')
			.addFields(
				{ name: 'Server ID', value: `${varguild.id}` },
				{ name: 'Member Count', value: `${varguild.memberCount}` },
				{ name: 'Description', value: `${varguild.description}` },
				{ name: 'Creation Date', value: `${varguild.createdAt}` },
			)
			.setFooter('Owner:', `${varguild.owner}`);
		message.channel.send(serverEmbed);
	}
});
>>>>>>> c4e2679ff08219673199abe0853e265fad3c6d23
