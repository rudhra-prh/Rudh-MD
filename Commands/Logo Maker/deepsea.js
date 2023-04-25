const maker = require('mumaker')

module.exports = {
    name: "deepsea",
    alias: ["deepseastyle"],
    desc: "Make text logo.",
    react: "🛡️",
    category: "Logo Maker",
    start: async(Miku, m,{pushName,prefix,text}) => {
        if(!text) return m.reply(`Example: *${prefix}deepsea Atlas Bot*`);
        maker.textpro("https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html", [
    `${text}`,]).then((data) => Miku.sendMessage(m.from, { image: { url: data }, caption: `ᴍᴀᴅᴇ ʙʏ ${botName}` }, { quoted: m }))
    .catch((err) => m.reply('An Error occued !'));
    }
}
