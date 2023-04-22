const axios = require("axios");

module.exports = {
  name: "trivia",
  alias: ["question"],
  desc: "To get some question answers.",
  usage: "question easy/medium/hard",
  react: "❔",
  category: "Essentials",
  start: async (Miku, m, { pushName, prefix, args, text }) => {
    if (!args[0])
      return m.reply(
        `Please use this command like this: ${prefix}question easy/medium/hard`
      );
    const query = args.join(" ");
    await axios
      .get(
        `https://opentdb.com/api.php?amount=1&difficulty=${query}&type=multiple`
      )
      .then((response) => {
        const text = `            ❮  *Question Answers*  ❯\n\n❏  *Category:* ${response.data.results[0].category}\n❏  *Difficulty:* ${response.data.results[0].difficulty}\n\n❏  *Question:* ${response.data.results[0].question}\n\n❏  *Answer:* ${response.data.results[0].correct_answer}\n `;

        Miku.sendMessage(
          m.from,
          { image: { url: botImage3 }, caption: text },
          { quoted: m }
        );
      })
      .catch((err) => {
        m.reply(
          `Please use this command like this: ${prefix}question easy/medium/hard`
        );
      });
  },
};
