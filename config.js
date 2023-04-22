require("dotenv").config();
let gg = process.env.MODS;
if (!gg) {
  gg = "919895809960";   // You can Change this number //
}

// -------------------------------------------------------------- //


global.owner = gg.split(",");
global.mongodb = process.env.MONGODB || "mongodb+srv://rudhra:rudhraprh3@cluster0.wpoxqbg.mongodb.net/?retryWrites=true&w=majority";
global.sessionId = process.env.SESSION_ID || "Rudhra3";
global.prefa = process.env.PREFIX || ",";
global.tenorApiKey =
  process.env.TENOR_API_KEY || "AIzaSyCyouca1_KKy4W_MG1xsPzuku5oa8W358c";
global.packname = process.env.PACKNAME || `.Ʀ ᴜ ᴅ ʜ ʀ λ`;
global.author = process.env.AUTHOR || "Ƥ ʀɪ ɴ ᴄ ᴇ  Ʀ ᴜ ᴅ ʜ";
global.port = process.env.PORT || "8000";

module.exports = {
  mongodb: global.mongodb,
};

// ---------------------Do Not Modify this part------------------- //

global.mess = {
  jobdone: "ᴅᴏɴᴇ ✓",
  useradmin: "ꜱᴏʀʀʏ, ᴏɴʟʏ *ɢʀᴏᴜᴘ ᴀᴅᴍɪɴꜱ* ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ !",
  botadmin:
    "ꜱᴏʀʀʏ, ɪ ᴄᴀɴᴛ ᴇxᴇᴄᴜᴛᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ᴡɪᴛʜᴏᴜᴛ ʙᴇɪɴɢ ᴀɴ *ᴀᴅᴍɪɴ* ᴏꜰ ᴛʜɪꜱ ɢʀᴏᴜᴘ.",
  botowner: "ᴏɴʟʏ ᴍʏ *ᴏᴡɴᴇʀ* ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ !",
  grouponly: "ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ᴏɴʟʏ ᴍᴀᴅᴇ ꜰᴏʀ *ɢʀᴏᴜᴘꜱ* !",
  privateonly: "ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ ɪꜱ ᴏɴʟʏ ᴍᴀᴅᴇ ꜰᴏʀ *ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ* !",
  botonly: "ᴏɴʟʏ ᴛʜᴇ *ʙᴏᴛ ɪᴛꜱᴇʟꜰ* ᴄᴀɴ ᴜꜱᴇ ᴛʜɪꜱ ᴄᴏᴍᴍᴀɴᴅ !",
  waiting: "ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ ᴀ ᴍᴏᴍᴇɴᴛ...",
  nolink: "ᴘʟᴇᴀꜱᴇ ɢɪᴠᴇ ᴍᴇ ᴛʜᴇ *ʟɪɴᴋ*, !",
  error: "ᴀɴ ᴇʀʀᴏʀ ᴏᴄᴄᴜʀᴅ!",
  banned: `ʏᴏᴜ ᴀʀᴇ *ʙᴀɴɴᴇᴅ* ꜰʀᴏᴍ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ!  \n\nᴛʏᴘᴇ *${prefa}ᴏᴡɴᴇʀ* ᴏʀ *${prefa}ꜱᴜᴘᴘᴏʀᴛ* ᴛᴏ ꜱᴜʙᴍɪᴛ ᴀ ʀᴇQᴜᴇꜱᴛ ᴛᴏ ᴜɴʙᴀɴ ʏᴏᴜʀꜱᴇʟꜰ !`,
  bangc: "ᴛʜɪꜱ ɢʀᴏᴜᴘ ɪꜱ *ʙᴀɴɴᴇᴅ* ꜰʀᴏᴍ ᴜꜱɪɴɢ ᴄᴏᴍᴍᴀɴᴅꜱ!",
  nonsfw: "ᴅᴏɴᴛ ʙᴇ ᴀ ᴘᴇʀᴠᴇʀᴛ ᴛʜɪꜱ ɪꜱ ɴᴏᴛ ᴀ *ɴꜱꜰᴡ* ᴇɴᴀʙʟᴇᴅ ɢʀᴏᴜᴘ!",
};
