import { Client } from 'discord.js';
import { CONFIG } from './config';
import { REGISTER } from './register';
import fs from 'fs';

console.log(CONFIG);

let shortcuts;
fs.readFile("./config/shortcuts.json", (err, data) => { 
	if (err) throw err; 

    shortcuts = JSON.parse(data); 
}); 

const client = new Client();

client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
	if (!msg.content.startsWith(CONFIG.BOT_PREFIX)) { return; }

	const cutTxt = msg.content.substring(1);

	for (const shortcut of shortcuts) {
		if (cutTxt === shortcut.cue || Array.isArray(shortcut.cue) && shortcut.cue.includes(cutTxt)) {
			msg.channel.send({
				embed: {
					description: shortcut.answer
				}
			});
			return;
		}
	}

	for (const cmd of REGISTER.REGISTERED_CMDS) {
		const retval = cmd.isInvoked(cutTxt);
		if (retval !== false) {
			msg.trimed = retval;
			cmd.onInvoked(msg);
		}
	}
});

client.login(process.env.TOKEN);

