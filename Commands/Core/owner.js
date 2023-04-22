const { mku } = require("../../Database/dataschema.js");

module.exports = {
  name: "owner",
  desc: "To view the list of current Mods",
  alias: ["modlist", "mods", "mod"],
  category: "Core",
  usage: "owner",
  react: "🧑‍💻",
  start: async (Miku, m, { text, prefix }) => {
    try {
      var modlist = await mku.find({ addedMods: "true" });
      var modlistString = "";
      var ownerList = global.owner;
      modlist.forEach((mod) => {
        modlistString += `\n@${mod.id.split("@")[0]}\n`;
      });
      var mention = await modlist.map((mod) => mod.id);
      let xy = modlist.map((mod) => mod.id);
      let yz = ownerList.map((owner) => owner + "@s.whatsapp.net");
      let xyz = xy.concat(yz);

      ment = [ownerList.map((owner) => owner + "@s.whatsapp.net"), mention];
      let textM = `             ⦿----❮ *OWNER* ❯----⦿\n\n`;

      if (ownerList.length == 0) {
        textM = "*No Mods Added !*";
      }

      for (var i = 0; i < ownerList.length; i++) {
        textM += `\n*〄* @${ownerList[i]}\n`;
      }

      if (modlistString != "") {
        for (var i = 0; i < modlist.length; i++) {
          textM += `\n*〄* @${modlist[i].id.split("@")[0]}\n`;
        }
      }

      if (modlistString != "" || ownerList.length != 0) {
        textM += `\n\n⚠️ *ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ᴛʜᴇᴍ ᴛᴏ ᴀᴠᴏɪᴅ ʙʟᴏᴄᴋɪɴɢ !*\n ꜰᴏʀ ᴀɴʏ ʜᴇʟᴘ, ᴛʏᴘᴇ *${prefix}support* ᴀɴᴅ ᴀꜱᴋ ɪɴ ɢʀᴏᴜᴘ.\n\n  *ᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ${botName}.*\n`;
      }

      return Miku.sendMessage(
        m.from,
        { image: { url: botImage1 },
        gifPlayback: true,
        caption: textM, 
        mentions: xyz },
        { quoted: m }
      );
    } catch (err) {
      console.log(err);
      return Miku.sendMessage(
        m.from,
        { text: `An internal error occurred while fetching the mod list.` },
        { quoted: m }
      );
    }
  },
};
