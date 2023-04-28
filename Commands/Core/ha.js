module.exports = {
    name: "ha",
    alias: ["hy","ook","ok"],
    desc: "Bot hello to bot.",
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
        let textHelpMenu = `\n        *ʜᴇʏ👋* *${pushName}* \n    ɪ ᴀᴍ *${botName}* ʙᴏᴛ.\n\n*⿻*   _Server Uptime:_*${uptime()}*\n*⿻*   _Status:_ *Operational*\n╭─────────────────»\n│        *ɪꜰ ʏᴏᴜ ɴᴇᴇᴅ ʜᴇʟᴘ*\n│       *ᴛʏᴘᴇ* 💬 *${prefix}help* *${prefix}menu*\n│               *ᴛʜᴀɴᴋ ʏᴏᴜ*\n╰─────────────────»\n`;
      }
      
    let buttons = [
        {
          buttonId: `${prefix}repo`,
          buttonText: { displayText: "ꜱᴏᴜʀᴄᴇ ᴄᴏᴅᴇ" },
          type: 1,
        },
      ];
      let buttonMessage = {
        title: `${botName}`,
        body: `${pushName}`,
        renderLargerThumbnail: true,
        thumbnailUrl: 'https://youtube.com/@princerudh',
        thumbnail: { url: botImage1 },
        caption: textHelpMenu,
        sourceUrl: `Nokkatte`,
        buttons: buttons,
        footer: `${botName}`,
        headerType: 4,
      };

      await Miku.sendMessage(m.from, buttonMessage, { quoted: m });
    }
  },
};
