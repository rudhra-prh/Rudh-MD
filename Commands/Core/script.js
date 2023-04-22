const axios = require('axios')
const fs = require('fs')

module.exports = {
    name: "script",
    alias: ["git","repo","sc","sourcecode"],
    desc: "Say hello to bot.",
    react: "📑",
    category: "Core",
    start: async(Miku, m,{pushName,prefix}) => {
        let repoInfo = await axios.get('https://api.github.com/repos/princerudh/rudhra-md')
        let repo = repoInfo.data
        let txt = `         *${botName}'ꜱ ꜱᴄʀɪᴘᴛ*   \n\n *⿻*  *Total Forks:* ${repo.forks_count}\n *⿻*  *Total Stars:* ${repo.stargazers_count}\n *⿻*  *License:* ${repo.license.name}\n *⿻*  *Repo Size:* ${(repo.size/1024).toFixed(2)} MB\n *⿻*  *Last Updated:* ${repo.updated_at}\n\n*🔗 Repo Link:* ${repo.html_url}\n`
        await Miku.sendMessage(m.from, {image: { url: botImage1 }, caption: textscript,}, { quoted: m });
    }
}
