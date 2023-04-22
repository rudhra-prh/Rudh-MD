module.exports = {
    name: "support",
    alias: ["supportgc"],
    desc: "Sends support group link.",
    cool:3,
    react: "🤝",
    category: "Core",
    start: async(Miku, m,{pushName}) => {
        m.reply(`ᴄʜᴇᴄᴋ ʏᴏᴜʀ ᴅᴍ.  *${pushName}* \n\nɪ ʜᴀᴠᴇ ꜱᴇɴᴛ ʏᴏᴜ ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ʟɪɴᴋ ᴘᴇʀꜱᴏɴᴀʟʟʏ.`)
        let botpic = botImage1
        let txt = `        ⦿ *ꜱᴜᴘᴘᴏʀᴛ ɢʀᴏᴜᴘ ʟɪɴᴋ* ⦿ \n\n*Link:* ${suppL}\n\nɴᴏᴛᴇ:* ᴘʟᴇᴀꜱᴇ ᴅᴏɴ'ᴛ ꜱᴘᴀᴍ ɪɴ ᴛʜᴇ ɢʀᴏᴜᴘ, ᴀɴᴅ ᴅᴏɴ'ᴛ ᴍᴇꜱꜱᴀɢᴇ *ᴀᴅᴍɪɴꜱ ᴅɪʀᴇᴄᴛʟʏ* ᴡɪᴛʜᴏᴜᴛ ᴘᴇʀᴍɪꜱꜱɪᴏɴ. ᴀꜱᴋ ꜰᴏʀ ʜᴇʟᴘ ɪɴ *ɢʀᴏᴜᴘ*.\n\nᴛʜᴀɴᴋꜱ ꜰᴏʀ ᴜꜱɪɴɢ ʀᴜᴅʜʀᴀ`
        await Miku.sendMessage(m.sender,{image:{url:botpic}, caption:txt},{quoted:m})
    }
}
