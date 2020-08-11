import { Client } from 'discord.js';
const client = new Client();

require('dotenv').config();

registeredCmdGroups = [];
registeredCmds = [];

export function registerCommandGroup(...cmdGroups) {
	registeredCmdGroups.push(...cmdGroups);
}

export function registerCommand(...cmds) {
	registeredCmds.push(...cmds);
}

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (msg.content === 'ping') {
		
	}
});

client.login(process.env.TOKEN);