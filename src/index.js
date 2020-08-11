import { Client } from 'discord.js';
import { CONFIG } from './config';

const client = new Client();

require('dotenv').config();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (!msg.content.startsWith(CONFIG.BOT_PREFIX)) { return; }

	for (const cmd of CONFIG.REGISTERED_CMDS) {
		const retval = cmd.isInvoked(msg.content.substring(1));
		console.log(retval);
		if (retval !== false) {
			msg.trimed = retval;
			cmd.onInvoked(msg);
		}
	}
});

client.login(process.env.TOKEN);

