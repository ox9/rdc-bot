import { Client } from 'discord.js';
import { CONFIG } from './config';
import { REGISTER } from './register';

console.log(CONFIG);

const client = new Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);

	client.user.setActivity(REGISTER.REGISTERED_CMD_MAP.help.reference, {type: 'LISTENING'});
});

client.on('message', msg => {
	if (!msg.content.startsWith(CONFIG.BOT_PREFIX)) { return; }

	for (const cmd of REGISTER.REGISTERED_CMDS) {
		const retval = cmd.isInvoked(msg.content.substring(1));
		if (retval !== false) {
			msg.trimed = retval;
			cmd.onInvoked(msg);
		}
	}
});

client.login(process.env.TOKEN);

