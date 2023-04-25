let { TelegraPh } = require("../../lib/uploader");
const fs = require("fs");
const util = require("util");

module.exports = {
  name: "url",
  alias: ["makeurl"],
  desc: "To make a url from image/video/gif",
  category: "Utilities",
  usage: "sticker <reply to image>",
  react: "🔗",
  start: async (Miku, m, { quoted, mime }) => {
    let media = await Miku.downloadAndSaveMediaMessage(quoted);
    if (/image/.test(mime)) {
      let anu = await TelegraPh(media);
      m.reply(`ɢᴇɴᴇʀᴀᴛᴇᴅ ᴠɪᴅᴇᴏ ᴜʀʟ: \n\n${util.format(anu)}\n`);
    } else if (/video/.test(mime)) {
      if (media.size > 5 * 1024 * 1024) {
        m.reply(`*Your video size is too big!*\n\n*Max video size:* 5MB`);
      }
      let anu = await TelegraPh(media);
      m.reply(`ɢᴇɴᴇʀᴀᴛᴇᴅ ᴠɪᴅᴇᴏ ᴜʀʟ: \n\n${util.format(anu)}\n`);
    } else {
      m.reply(`Plese provide an image to generate a link!`);
    }
    await fs.unlinkSync(media);
  },
};
