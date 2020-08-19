import { Command } from '../core/command';
import { market, Prompt, promptMulti, promptTime, limitMaxSize, or, limitMinSize } from './market';
import { Message } from 'discord.js';
import { CONFIG } from '../config';

export class Hiring extends Command {

    constructor() {
        super(market);
        this.applicantChannel = CONFIG.TESTING ? '742912648282243235' : '368731648163971075';
    }

    get name() {
        return 'Hiring';
    }

    get prefix() {
        return 'hiring';
    }

    get syntax() {
        return '<none>';
    }
    
    get description() {
        return 'Sends a form in #hiring';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        promptMulti([
            new Prompt('Who are you looking for?', 'Max character size: 256. Keep it short. Example: "In need of builders"', or(limitMaxSize(256), limitMinSize(2)), 'Your answer was too long or short.'),
            new Prompt('Indepth description', 'Max character size: 2048', or(limitMaxSize(2048), limitMinSize(10)), 'Your answer was too long or short.'),
            new Prompt('Payment provided', 'Max character size: 256', or(limitMaxSize(256), limitMinSize(2)), 'Your answer was too long or short.'),
        ], msg).then(answers => {
            msg.guild.channels.cache.get(this.applicantChannel).send({
                embed: {
                    title: answers[0],
                    description: answers[1],
                    fields: [
                        {
                            name: 'Payment provided',
                            value: answers[2]
                        },
                        {
                            name: 'Indepth description',
                            value: msg.author.tag
                        }
                    ],
                    author: {
                        name: msg.author.username,
                        icon_url: msg.author.avatarURL(),
                    },
                }}).then(m => m.channel.send('<@&590628254893998086>'));
                
        }).catch(e => {
            console.log(e);
            if (e === 'time error') {
                msg.channel.send({embed: {
                    title: 'Prompt automatically cancelled',
                    color: CONFIG.ERROR_COLOR,
                    description: `You have exceeded the ${promptTime/(60000)} minute time limit.`
                }});
            }
        });
    }
}