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