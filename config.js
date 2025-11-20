const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
  SESSION_ID: process.env.SESSION_ID || "EDITH-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUgyR3pZcUxmaVRiYjkyeWd3aEQxYzl1SEpQYVBDQWJmd3VNa2lKSXcwUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSXh5dHlGRHRUTXJBeDJFUDd2ZFJWNWpRSXN3SU5YUFdxVStaZnFldWNtaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjRkkxbk8rVG5CMzRJOUZGSmV4ZldWT2ZHWlFqQUx5SGxzZlI1d2VieEhFPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiR3BSV2pwdDVQTk5hYmtOWng4OFc3aFUwK3Ribmd2MUJwM3F5MnRnWEFVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVCU3VvdlRJUEhiem15aDVnNG8zaWMvSU9jV241bDFsaHhRWUtrMHlWbGs9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjMyclZNaWRHakVHdHZ2QWl6Y3lUQjE2aTdJUFQxQkIvM2tlTmJRcmxSejA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0xZQVJzUjgrVitveWE1akxSemVMWnJyUWI5R2VCbTBYcUVvUXNpYnhuTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRkUzQ3VvNWg1elAxT2JDTCtFekFoSGtTcVZ5UC9YL2hmR0NaaUF0N1gxST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InoxSmNacHFML2N1SjYzZ3BVVmgyTXdUaEtYTkcrL1VxV2xsZ0V4TTlJUFdNcmtZMXVqMTAyT1FGSEhTczRVZTF2a21iNWNTeHg1V1pobzNQZ05mK2lRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjcsImFkdlNlY3JldEtleSI6Inc4eVlzNlowOTFPZE5UWEZxV2kweXVsSzhMK1JhNlBabjNxaE1wQnNQLzQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMjMzNzcwODMzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkE1RTg0MjgxQzg4QjcxODFEQTFDOUMzMjAwMzEyMkQyIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NjM2MjAxMjl9LHsia2V5Ijp7InJlbW90ZUppZCI6IjkyMzIzMzc3MDgzM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJBNTJDMDQ5NzE5RTRDQTI5RTFBQzc3MDUwOTA4MUVCQyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzYzNjIwMTMwfV0sIm5leHRQcmVLZXlJZCI6ODEzLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6ODEzLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6IkVESVRITUQxIiwibWUiOnsiaWQiOiI5MjMyMzM3NzA4MzM6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLZvtin2qnYs9iq2KfZhiIsImxpZCI6IjE1NDk2MzEyNDcyNzg1NjoyQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVNWbnRrQkVKYnErc2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidUZxeGkxOUpNVFpiRnJHZW1lU2UyM3lFWTBZbW9QWHNubE42ZDRyYk5Haz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiQnZPZDV1b2IweVViYU41cFQwQkx2RlJxdDk2U0ZkUXFJZklxcGFoY1p4OE1od25qQWx4TWtoREMrYWR2NWszMXorU0RLaTFiSXI0MzdUNVRjNXJUQlE9PSIsImRldmljZVNpZ25hdHVyZSI6ImQ1UXYxRGVhdVhQb0tmdFVPUmRXMjBZUFM4NTBzSTdMRlN6OU8yTVdVb1RWcEx6ZC9RN2xZODJTZmFhUmU1bXNGWjhyTnZhclhvaEpnL2toejJDdGp3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMjMzNzcwODMzOjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYmhhc1l0ZlNURTJXeGF4bnBua250dDhoR05HSnFEMTdKNVRlbmVLMnpScCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0EwSUJRZ1MifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYzNjIwMTIzLCJsYXN0UHJvcEhhc2giOiJQV2s1QiIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSlRQIn0=",
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
