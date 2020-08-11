import { Client } from 'discord.js';
import { Echo } from './test/echo'
import { CONFIG } from './config';

const client = new Client();

require('dotenv').config();

const registeredCmdGroups = [];
const registeredCmds = [
	new Echo()
];

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (!msg.content.startsWith(CONFIG.BOT_PREFIX)) { return; }

	for (const cmd of registeredCmds) {
		const retval = cmd.isInvoked(msg.content.substring(1));
		console.log(retval);
		if (retval !== false) {
			msg.trimed = retval;
			cmd.onInvoked(msg);
		}
	}
});

client.login(process.env.TOKEN);

