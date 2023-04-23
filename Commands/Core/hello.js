module.exports = {
    name: "hi",
    alias: ["hello","alive","info"],
    desc: "Say hello to bot.",
    react: "👋",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        const pad = (s) => (s < 10 ? "0" : "") + s;
        const formatTime = (seconds) => {
        const hours = Math.floor(seconds / (60 * 60));
        const minutes = Math.floor((seconds % (60 * 60)) / 60);
        const secs = Math.floor(seconds % 60);
        return time = `${pad(hours)}:${pad(minutes)}:${pad(secs)}`;
        };
        const uptime = () => formatTime(process.uptime());
        await Miku.sendMessage(m.from,{image:{url:botImage1},
        caption:`\n        *ʜᴇʏ👋* *${pushName}* \n    ɪ ᴀᴍ *${botName}* ʙᴏᴛ.\n\n*⿻*   _Server Uptime:_*${uptime()}*\n*⿻*   _Status:_ *Operational*\n╭─────────────────»\n│        *ɪꜰ ʏᴏᴜ ɴᴇᴇᴅ ʜᴇʟᴘ*\n│       *ᴛʏᴘᴇ* 💬 *${prefix}help* *${prefix}menu*\n│               *ᴛʜᴀɴᴋ ʏᴏᴜ*\n╰─────────────────»\n`,
        footer: `ʀᴜᴅʜʀᴀ ᴍᴅ}`,
        {quoted:m})
    }
}
