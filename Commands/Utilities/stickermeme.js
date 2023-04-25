const { Sticker, StickerTypes } = require('wa-sticker-formatter')
let { TelegraPh } = require("../../lib/uploader");
const fs = require("fs");

module.exports = {
    name: "stickerme",
    alias: ["takeme"],
    desc: "To make sticker me",
    category: "Utilities",
    usage: "takeme <reply to image>",
    react: "🃏",
    start: async (Miku, m, { text, prefix,quoted,pushName,mime,body }) => {
        if (/image/.test(mime)) {
            m.reply(`Chotto Matte...`)
            media = await Miku.downloadAndSaveMediaMessage(quoted)
            mem = await TelegraPh(media)
            meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`

            let stickerMess = new Sticker(meme, {
                pack: pushName,
                author: packname,
                type: StickerTypes.FULL,
                categories: ['🤩', '🎉'],
                id: '12345',
                quality: 70,
                background: 'transparent'
            });
        
            const stickerBuffer2 = await stickerMess.toBuffer()
            await Miku.sendMessage(m.from, {sticker:stickerBuffer2}, { quoted: m })
            fs.unlinkSync(media);
            }
            else{
                m.reply(`Please mention an *image* and type *${prefix}takeme* to create sticker me.`);
            }
        }
    }
            
