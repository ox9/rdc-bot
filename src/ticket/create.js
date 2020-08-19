import { Command } from "../core/command";
import { ticket, sendCustomEmbed, ticketCategory } from "../ticket/ticket";
import { Message } from "discord.js";
import { CONFIG } from "../config";

export class Create extends Command {
	constructor() {
		super(ticket);
	}
	
	get name() {
		return "Create";
	}
	
	get prefix() {
		return "create";
	}
	
	get syntax() {
		return "<none>";
	}
	
	get description() {
		return "Creates a new ticket";
	}
	
	/**
	*
	* @param {Message} msg
	*/
	onInvoked(msg) {
		const user = msg.author;
		const guild = msg.guild;
		
		const channel = guild.channels.cache.find((c) => c.name == `${user.id}`);
		
		if (!channel) {
			guild.channels
			.create(`${user.id}`, {
				type: "text",
				permissionOverwrites: [
					{
						id: msg.guild.id,
						type: 'role',
						deny: ["VIEW_CHANNEL"],
					},
					{
						id: user.id,
						type: 'member',
						allow: ["VIEW_CHANNEL"],
					},
					{
						id: CONFIG.MOD_ROLE_ID,
						type: 'role',
						allow: ["VIEW_CHANNEL"],
					}
				],
			})
			.then(channel => {
				channel.setParent(ticketCategory);
				
				sendCustomEmbed(
					`Your ticket is ready, ${user.username}.`,
					`Run \`\`${REGISTER.REGISTERED_CMD_MAP.close.reference}\`\` to close this ticket.`,
					"#26aafc",
					channel
					);
				});
			} else {
				msg.reply("You already have a ticket open!");
			}
		}
	}
	