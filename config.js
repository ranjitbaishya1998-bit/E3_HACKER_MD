const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "E3_HACKER_MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0oxR0x3MkdJTmc0U0l6dnBuUjhuTkg5TE5WZlBqbjhJNFhQK1hvSmhYQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibTV3bXlPSVNvSVhjVzFQOGlLcnJ0ODdpQUZqV0RpN0JKcEtvUWJvbzV4dz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxSjJJeVZyR3I3MEJBcFNRaVo1Yk1kQWFiWWtyY240L0E0VjRaKzBNcFdvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLSVNDejZjbUpZbDJKTTlHUWlUUTI5UHQvejB3Vy9qTTVQT05ZNHNkQzN3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktOS2xXQitua3JQSVNJdVpVbHVmNmIvTUp4U2x6SnE3K2F2WnJKMlhNa2M9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRTNnIwSkp2ZU1OT29vcHgvVkw3RTRsdFB4WTNPS0JDeThQeW9MUXAybEk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0RQWFczM2JIdUdQNGdTZ3h0MjJhQmRORHk0c3l2WnliUUluRXFraURHYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidDllSmw2V280Nlp2N0xoZkdXV3MxL0QyOForUHVrK2Z1RFQ2S0hDbXhBaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRFMkhmUy8rNlBkT3lQbGNBYjFvMHdTcjlCOExlT3RiZHBBNEtOZ1ZUc3pjaTBUV205dXZIVzgwVTd5K0tQSnRzYzFsNWZjSy9sREZIUzNxbmpqSUR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAsImFkdlNlY3JldEtleSI6ImdTUGJPcUMzczdlOU9PeVZKUEJtbEo2R3hlaU9Wajc3ZktCUnc0S0Nzb1U9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTE3NjM1OTU1ODMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZGQTAzODhBM0E3OEFCNjY5RjdCQUE2MDhFMzEwODJGIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTYwOTAxODJ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkxNzYzNTk1NTgzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI5RTFFRjcxNzhGMTVBNzExQjNBNUI5RUM1RDBENzUxQiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU2MDkwMTgzfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJSWVhEMUNYNSIsIm1lIjp7ImlkIjoiOTE3NjM1OTU1ODMzOjFAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIyMzYxNjc4MzY0OTU4OTk6MUBsaWQiLCJuYW1lIjoiS2F1c2hpayBCYWlzaHlhIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLelFrSXdIRUw2ZXI4VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiIwVUlmd080VGVOc3RvTUM5ZDdMNHJnKzZVTmg1dlNWczR4c0FBcWJ0c2tJPSIsImFjY291bnRTaWduYXR1cmUiOiJ1bUhNWjVYcStWT1Q0amFiNityZHN3UU51eFA3dnJTSzEycFVNKzkrWGg4a0pLM08rREpKUXdhYjlKZDFUQ2J4SHZsSWJVdURLcmRxbGp5aVlhUkNCdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoia3p5OFJMZENUUmJjNk45ZnZ6Y0g3akNOQU9uL3BlaUNRcUpSeTNjTGdEUWR0YmtQOURYcVhYVjB2WUhSakI1bGcvb1prUGV0ajVweFVrMnl0TjFJQWc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MTc2MzU5NTU4MzM6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJkRkNIOER1RTNqYkxhREF2WGV5K0s0UHVsRFllYjBsYk9NYkFBS203YkpDIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTYwOTAxNzcsImxhc3RQcm9wSGFzaCI6IkM0ZkpOIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCQTQifQ==",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "true",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY 𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿 ♥️☺️*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/p4yxcn.png",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "E3_HACKER_MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "𝙀3_𝙃𝘼𝘾𝙆𝙀𝙍_𝙈𝘿",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "true",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923495178663",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*E3_HACKER_MD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ E3_HACKER_MD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/p4yxcn.png",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Apni Had May Raho Batmeez Insan 🫣",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
