const axios = require("axios");

module.exports = {
  name: "insta",
  alias: ["instagram", "insta", "ig", "igvid2", "igdl"],
  desc: "To download an instagram video",
  category: "Media",
  usage: `insta <video link>`,
  react: "📥",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `ᴘʟᴇᴀꜱᴇ ᴘʀᴏᴠɪᴅᴇ ᴀ ɪɴꜱᴛᴀɢʀᴀᴍ ᴠɪᴅᴇᴏ ʟɪɴᴋ !` },
        { quoted: m }
      );
    if (!args[0].includes("instagram.com"))
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a valid Instagram Video link !` },
        { quoted: m }
      );
    

      var queryURL = args.join(" ");
      m.reply("*_ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ..._*")
      let res = await axios.get("https://fantox001-scrappy-api.vercel.app/instadl?url=" + queryURL)
      const scrappedURL = res.data.videoUrl
      
      return Miku.sendMessage(m.from, { video: { url: scrappedURL }, caption: `_ᴅᴏᴡɴʟᴏᴀᴅᴇᴅ ʙʏ ʀᴜᴅʜʀᴀ_ \n`},{ quoted: m } );
  },
};
