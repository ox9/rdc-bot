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
        msg.channel.send({
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
