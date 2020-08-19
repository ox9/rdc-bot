require('dotenv').config();

export const CONFIG = {
    TESTING: process.env.TESTING,

    BOT_PREFIX: '!',
    
    HELP_COLOR: 0x42b9f5,
    ERROR_COLOR: 0xeb4934,

    MOD_ROLE_ID: process.env.TESTING ? '742575786967564298' : '333135760125591562'
}