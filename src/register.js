import { Echo } from './test/echo';
import { Help } from './standalone/help'
import { User } from './standalone/user';
import { Guild } from './standalone/guild';

import { Close } from './ticket/close';
import { Create } from './ticket/create';

import { Applicant } from './market/applicant'
import { Hiring } from './market/hiring';

import { test } from './test/test';
import { ticket } from './ticket/ticket'
import { market } from './market/market'

export const REGISTER = {
    REGISTERED_CMD_GROUPS: [ test, ticket, market ],

    REGISTERED_CMD_MAP: { echo: new Echo(), help: new Help(), user: new User(), guild: new Guild(),
        close: new Close(), create: new Create(), applicant: new Applicant(), hiring: new Hiring() },
    get REGISTERED_CMDS() { return Object.values(REGISTER.REGISTERED_CMD_MAP) }
}