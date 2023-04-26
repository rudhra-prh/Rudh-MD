const { Anime } = require("@shineiichijo/marika");
const client = new Anime();

module.exports = {
  name: "anime",
  alias: ["animesearch"],
  desc: "To get an anime search result",
  category: "Search",
  usage: `anime <search term>`,
  react: "👲",
  start: async (Miku, m, { text, prefix, args }) => {
    if (!args[0])
      return Miku.sendMessage(
        m.from,
        { text: `Please provide a anime name to search !` },
        { quoted: m }
      );

    var AnimesearchTerm = args.join(" ");
    let anime = await client.searchAnime(AnimesearchTerm);

    let result = anime.data[0];
    let details = `       *⦿  Anime Search Engine  ⦿*\n\n\n*⿻ Anime Title:* ${result.title}\n`;
    details += `\n*⿻ Format:* ${result.type}\n`;
    details += `*⿻ Status:* ${result.status
      .toUpperCase()
      .replace(/\_/g, " ")}\n`;
    details += `*⿻ Total episodes:* ${result.episodes}\n`;
    details += `*⿻ Duration:* ${result.duration}\n`;
    details += `*⿻ Genres:*\n`;
    for (let i = 0; i < result.genres.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.genres[i].name}\n`;
    }
    details += `\n*⿻ Based on:* ${result.source.toUpperCase()}\n`;
    details += `*⿻  Studios:*\n`;
    for (let i = 0; i < result.studios.length; i++) {
      details += `\t\t\t\t\t\t\t\t${result.studios[i].name}\n`;
    }
    details += `*⿻ Producers:*\n`;
    for (let i = 0; i < result.producers.length; i++) {
      details += `\t\t\t\t\t\t\t\t\t\t${result.producers[i].name}\n`;
    }
    details += `\n*⿻ Popularity:* ${result.popularity}\n`;
    details += `*⿻ Favorites:* ${result.favorites}\n`;
    details += `*⿻ Rating:* ${result.rating}\n`;
    details += `*⿻ Rank:* ${result.rank}\n\n`;
    details += `\n*⿻ URL:* ${result.url}\n\n`;

    await Miku.sendMessage(
      m.from,
      { image: { url: result.images.jpg.large_image_url }, caption: details },
      { quoted: m }
    );
  },
};
