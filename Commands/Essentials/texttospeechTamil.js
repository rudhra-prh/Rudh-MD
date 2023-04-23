const ttt = require("google-tts-api");

module.exports = {
  name: "sayta",
  alias: [
    "speaktamil",
    "saytamil",
    "ttsta",
    "tta",
    "ttstamil",
  ],
  desc: "Say somethong using bot in tamil accent.",
  usage: "saytamil <text>",
  react: "👁️‍🗨️",
  category: "Essentials",
  start: async (Miku, m, { pushName, prefix, args, text, mime }) => {
    if (!text && m.quoted) {
      message = `${m.quoted ? m.quoted.msg : ""}`;
    } else if (args[0]) {
      message = args.join(" ");
    } else {
      message = `${pushName},! தயவு செய்து எனக்கு ஒரு உரையை வழங்கவும்`;
    }

    const texttospeechurl = ttt.getAudioUrl(message, {
      lang: "ta",
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
