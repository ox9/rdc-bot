import { Command } from '../core/command';
import { market, Prompt, promptMulti, promptTime, limitMaxSize, or, limitMinSize } from '../market/market';
import { Message } from 'discord.js';
import { CONFIG } from '../config';

export class Applicant extends Command {

    constructor() {
        super(market);
        this.applicantChannel = CONFIG.TESTING ? '742912546050146316' : '590641217164017672';
    }

    get name() {
        return 'Applicant';
    }

    get prefix() {
        return 'applicant';
    }

    get syntax() {
        return '<none>';
    }
    
    get description() {
        return 'Sends a form in #applicant';
    }

    /**
     * 
     * @param {Message} msg 
     */
    onInvoked(msg) {
        promptMulti([
            new Prompt('What can you do?', 'Max character size: 256. Keep it short. Example: "Builder for hire"', or(limitMaxSize(256), limitMinSize(2)), 'Your answer was too long or short.'),
            new Prompt('Indepth description', 'Max character size: 2048', or(limitMaxSize(2048), limitMinSize(10)), 'Your answer was too long or short.'),
            new Prompt('Payment needed', 'Max character size: 256', or(limitMaxSize(256), limitMinSize(2)), 'Your answer was too long or short.'),
        ], msg).then(answers => {
            msg.guild.channels.cache.get(this.applicantChannel).send({
                embed: {
                    title: answers[0],
                    description: answers[1],
                    fields: [
                        {
                            name: 'Payment needed',
                            value: answers[2]
                        },
                        {
                            name: 'Requested by',
                            value: msg.author.tag
                        }
                    ],
                    author: {
                        name: msg.author.username,
                        icon_url: msg.author.avatarURL(),
                    },
                }}).then(m => m.channel.send('<@&496441086126981121>'));
                
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