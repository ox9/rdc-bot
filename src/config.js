import { Echo } from './test/echo';
import { Help } from './standalone/help'
import { User } from './standalone/user';

import { test } from './test/test';

export const CONFIG = {
    BOT_PREFIX: '!',
    
    HELP_COLOR: 0x42b9f5,

    REGISTERED_CMD_GROUPS: [ test ],
    REGISTERED_CMDS: [ new Echo(), new Help(), new User() ],
}