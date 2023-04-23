const ttt = require("google-tts-api");

module.exports = {
  name: "sayml",
  alias: ["speakml", "saymalayalam", "ttsml", "tml"],
  desc: "Say somethong using bot in malayalam accent.",
  usage: "saymalayalam <text>",
  react: "👁️‍🗨️",
  category: "Essentials",
  start: async (Miku, m, { pushName, prefix, args, text, mime }) => {
    if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ""}`;
    } else if (args[0]) {
      message = args.join(" ");
    } else {
      message = `${pushName},! പറയാനുള്ള ഒരു വാചകം ദയവായി നൽകുക`;
    }

    const texttospeechurl = ttt.getAudioUrl(message, {
      lang: "ml",
      slow: false,
      host: "https://translate.google.com",
    });

    Miku.sendMessage(
      m.from,
      { audio: { url: texttospeechurl }, mimetype: 'audio/mp4',
        ptt: true, },
      { quoted: m }
    ).catch((e) => {
      m.reply(`An error Occurd !`);
    });
  },
};
