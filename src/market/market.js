import { CommandGroup } from '../core/command-group.js';
import {Message} from 'discord.js';
import { CONFIG } from '../config.js';

class Market extends CommandGroup {

    get name() {
        return 'Market';
    }

    get prefix() {
        return 'market';
    }

    get description() {
        return 'Commands that involve with #applicant and #applicants';
    }
}

export class Prompt {
    constructor(question, description='', isError=()=>false, errMessage='An error has occurred.') {
        this.question = question;
        this.description = description;
        this.isError = isError;
        this.errMessage = errMessage;
    }
}

export const promptTime = 2 * 60 * 1000;

export function and(...fs) {
    return (msg) => (fs.map(f => f(msg)).every(v => !v));
}

export function or(...fs) {
    return (msg) => {
        for (const f of fs) {
            if (f(msg)) {
                return true;
            }
        }
        return false;
    };
}

export function limitMaxSize(size) {
    return (msg) => msg.content.length >= size;
}

export function limitMinSize(size) {
    return (msg) => msg.content.length <= size;
}

/**
 * 
 * @param  {Prompt[]} prompts 
 * @param  {Message} msg
 */
export async function promptMulti(prompts, msg) {
    const answers = [];

    for (const prompt of prompts) {
        msg.channel.send({embed: {
            title: 'Prompt: ' + prompt.question,
            description: prompt.description + '\n\nSend ``cancel`` to cancel the prompt.'
        }});

        let collected;
        try {
            collected = (await msg.channel.awaitMessages(m => m.author.id === msg.author.id, { max: 1, time: promptTime, errors: ['time'] })).first();
        } catch (e) {
            throw 'time error';
        }
        if (collected.content === 'cancel') {
            msg.channel.send('Cancelled');
            throw 'cancelled';
        }
        if (prompt.isError(collected)) {
            msg.channel.send(prompt.errMessage);
            throw 'isError failed';
        }
        answers.push(collected.content);
    }

    return answers;
}

const _market = new Market();
export { _market as market };