const { getBuffer } = require("../../lib/myfunc");

module.exports = {
  name: "cosplay",
  alias: ["crosplay", "cos", "cplay"],
  desc: "To get a random Cosplay image",
  category: "Weeb",
  usage: `cosplay`,
  react: "🖼️",
  start: async (Miku, m, { prefix }) => {
    var cosplayImage = await getBuffer(`https://fantox-cosplay-api.onrender.com/`);
    /*var cosplayButton = [
      {
        buttonId: `${prefix}cosplay`,
        buttonText: { displayText: `>>` },
        type: 1,
      },
    ];*/
    let bmffg = {
      image: cosplayImage,
      caption: `ᴍᴀᴅᴇ ʙʏ ${botName}/\n`,
      /*footer: `*${botName}*`,
      buttons: cosplayButton,
      headerType: 4,*/
    };
    await Miku.sendMessage(m.from, bmffg, { quoted: m }).catch((err) => {
      return "Error!";
    });
  },
};
