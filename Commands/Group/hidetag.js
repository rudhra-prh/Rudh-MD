module.exports = {
  name: "hidetag",
  alias: ["htag", "tag"],
  desc: "Tag all group member without @ mention",
  category: "Group",
  usage: "htag <your message>",
  react: "📢",
  start: async (
    Miku,
    m,
    { text, prefix, isAdmin, participants, args }
  ) => {
    if (!m.isGroup) return m.reply(tlang().group);
            const groupMetadata = m.isGroup ? await Miku.groupMetadata(m.chat).catch((e) => {}) : "";
            const participants = m.isGroup ? await groupMetadata.participants : "";
            const groupAdmins = await getAdmin(Miku, m)
            const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false;
            if (!isAdmins) return m.reply(mess.useradmin);
            if (!isAdmins) m.reply(mess.useradmin);
            Miku.sendMessage(m.chat, {
                text: text ? text : "",
                mentions: participants.map((a) => a.id),
            }, {
                quoted: m,
    );
  },
};
