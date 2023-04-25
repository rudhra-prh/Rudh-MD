module.exports = {
  name: "setgcname",
  alias: ["setnamegp", "changegpname", "gpname", "changegroupname"],
  desc: "Change the group name",
  category: "Group",
  usage: `setgcname <New group name>`,
  react: "🪧",
  start: async (
    Miku,
    m,
    { text, prefix, isBotAdmin, isAdmin, pushName, metadata, args, mime }
  ) => {
    if (!isAdmin && !isBotAdmin)
      return m.reply(`*Bot* and *${pushName}* both must be *Admin* in order to use this Command!`);

    if (!args[0])
      return m.reply(`Please provide a new group name !`);

    var newGCName = args.join(" ");
    var oldGCName = metadata.subject;

    try {
      ppgc = await Miku.profilePictureUrl(m.from, "image");
    } catch {
      ppgc = "https://wallpapercave.com/wp/wp10524580.jpg";
    }

    await Miku.groupUpdateSubject(m.from, newGCName)
      .then((res) =>
        Miku.sendMessage(
          m.from,
          {
            image: { url: ppgc, mimetype: "image/jpeg" },
            caption: `*『 Group Name Changed 』*\n\n_*⿻* Old Name:_\n*${oldGCName}*\n\n_*⿻* New Name:_\n*${args.join(
              " "
            )}*\n`,
          },
          { quoted: m }
        )
      )
      .catch((err) => replay(jsonformat(err)));
  },
};
