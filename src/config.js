import { Echo } from './test/echo';
import { Help } from './standalone/help'
import { User } from './standalone/user';
import { Guild } from './standalone/guild';

import { Close } from './ticket/close';
import { Create } from './ticket/create';

import { test } from './test/test';
import { ticket } from './ticket/ticket'

export const CONFIG = {
    TESTING: process.env.TESTING,

    BOT_PREFIX: '!',
    
    HELP_COLOR: 0x42b9f5,

    REGISTERED_CMD_GROUPS: [ test, ticket ],

    REGISTERED_CMD_MAP: { echo: new Echo(), help: new Help(), user: new User(), guild: new Guild(),
        close: new Close(), create: new Create() },
    get REGISTERED_CMDS() { return Object.values(CONFIG.REGISTERED_CMD_MAP) },

    MOD_ROLE_ID: process.env.TESTING ? '742575786967564298' : '333135760125591562'
}