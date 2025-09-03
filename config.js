const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0p3SG1sbE5xak9hanBZMzNuekJhZ24vV1c4Rk5KbjJWRTBNSVBHV3RIND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibEwvT3I3OGNHbE9HdTltQXpJQlAvN1gxak1heG5Hd1I2K2psYm9xcE1Ucz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0Q1F1SUZKcWpEVlMzVmJaTXpOcjQrbkhicWpIRHFKY0JCTjcxMVpKaDBrPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJOVjEvQ0FvQm9qWDMzMFI1aExtSWwwVVdkS2JzRW91SjFIVG55QzI2WDNFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJBVWNUQys5eFhYMFpvUWxJdTdndHI1d293MzdKQ0sydnJEc0J5TWFWM009In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InRQQ0FoTm1JSituYkY2aHloUDluVTFqOG9Cc0JjQ052M0FOeHdBZnpGRHM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0xUY0lPV3d5WTdYa0xDQ04rNmx1VHlxQm04QmQ0M3NIa0UyV0hObU1Waz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiKzhoOTF6QndwRGZnWmhIUEFtdFlWbWRHSXBoL2dqalBkbDhMOGc1emVoYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ilp0b0o2RjdLVGlIc2VkZ0g5TTBZQWFrK0d4a1pRS3BjS1dCT25JS3pGOW9LbnduaGxEL2crWWxHMlFaV1BhaGpqei8vTGdOODJBUVVWT1k1cXNsdUN3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTksImFkdlNlY3JldEtleSI6IkZJYnA5RllDcVlQMlpWOXl4UFp2M2oxYXFrcUE4R0U5b29HY1ZqcjNWTEU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVESVRIMTIzIiwibWUiOnsiaWQiOiI5MjM0NjQ5NjAyNTk6MTZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi4qS5wrMg8J2Qk8qczaHNnMmazJog8JOGqSAgzaIgQlJPS0VOw5cg8JOGqiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDNoiBcIiBIRVJPPyIsImxpZCI6IjIzNTYwNTI2MjkwOTYyMzoxNkBsaWQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09xazlKOEVFTWp0bXNVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkgxSXV0ZUFyU2pXSEVSTUJ5K0ZHcHkvTDN0QU9YOHcvTDRwSHBNOEtjQmM9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkNURUVrOXovbUtncW00cDBpSlZYZVI1S0d6ZnR4bWthdzVEcC9Zb0c5b2Q1Ykt3SEFCTE9Gd1N6QVJ3bERURG04VkFPaytNcThaSmdETWltOW5FY0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ6QTlJNG1KeWYxVE5jYW5XQThTbWU3Rms2aXBxQndBU005VXhPT2c2SnhZQXl0U21VZmx1L0RiMmM4UmprMTJ0UGJmaUVVd1RGRlFaVkZjdzBnRFBBdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzQ2NDk2MDI1OToxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSOVNMclhnSzBvMWh4RVRBY3ZoUnFjdnk5N1FEbC9NUHkrS1I2VFBDbkFYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQWdJQWc9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU3NTYyMzYsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFNVnIifQ==",
  START_IMG: process.env.START_IMG || "",
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS EDITH-MD*",
  WELCOME: process.env.WELCOME || "false",
  ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
  PREFIX: process.env.PREFIX || ".",
  MENTION_REPLY: process.env.MENTION_REPLY || "false",
  MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  BOT_NAME: process.env.BOT_NAME || "EDITH-MD",
  STICKER_NAME: process.env.STICKER_NAME || "EDITH-MD",
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
  CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
  DELETE_LINKS: process.env.DELETE_LINKS || "false",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "923253617422",
  OWNER_NAME: process.env.OWNER_NAME || "Bandaheali",
  DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Bandaheali*",
  ALIVE_IMG: process.env.ALIVE_IMG || "https://cdn.inprnt.com/thumbs/5d/0b/5d0b7faa113233d7c2a49cd8dbb80ea5@2x.jpg",
  LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *EDITH-MD*⚡",
  READ_MESSAGE: process.env.READ_MESSAGE || "false",
  AUTO_REACT: process.env.AUTO_REACT || "false",
  ANTI_BAD: process.env.ANTI_BAD || "false",
  MODE: process.env.MODE || "public",
 BOTMODE: process.env.BOTMODE || "button",
  ANTI_LINK: process.env.ANTI_LINK || "true",
  ANTI_MEDIA: process.env.ANTI_MEDIA || "false",
  AUTO_VOICE: process.env.AUTO_VOICE || "false",
  AUTO_STICKER: process.env.AUTO_STICKER || "false",
  AUTO_REPLY: process.env.AUTO_REPLY || "false",
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
  AUTO_TYPING: process.env.AUTO_TYPING || "false",
  READ_CMD: process.env.READ_CMD || "false",
  DEV: process.env.DEV || "923253617422",
  ANTI_VV: process.env.ANTI_VV || "false",
  ANTI_CALL: process.env.ANTI_CALL || "false",
  REJECT_MSG: process.env.REJECT_MSG || "*_SOORY MY BOSS IS BUSY PLEASE DONT CALL ME_*",
  ANTI_DELETE: process.env.ANTI_DELETE || "true",
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox",
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
};
