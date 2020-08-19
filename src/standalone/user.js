import { Command } from '../core/command';
import { Message } from 'discord.js';
import { CONFIG } from '../config';

export class User extends Command {

    constructor() {
        super();
    }

    get name() {
        return 'User';
    }

    get prefix() {
        return 'user';
    }

    get syntax() {
        return '<user | optional>';
    }
    
    get description() {
        return 'Gives information about a user';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        let member = msg.mentions.members.first();

        if (member == undefined) {
            if (msg.trimed !== '') {
                const firstNumbers = msg.trimed.match(/\d+/g)[0];
                const numberMember = msg.guild.members.cache.get(firstNumbers);
                if (numberMember === undefined) {
                    msg.channel.send('Invalid user or user is not in guild.');
                    return;
                } else {
                    member = numberMember;
                }
            } else {
                member = msg.member;
            }
        }
        const embed = {
            color: CONFIG.HELP_COLOR,
            title: `User "${member.user.username}#${member.user.discriminator}"`,
            thumbnail: {
                url: member.user.avatarURL(),
            },
            fields: [
                { name: 'User ID', value: member.id },
                { name: 'Roles ', value: member.roles.cache.array() },
                { name: 'Join date', value: member.joinedAt },
                { name: 'Registration Date', value: member.user.createdAt },
            ]
        };

        msg.channel.send({embed});
    }
}