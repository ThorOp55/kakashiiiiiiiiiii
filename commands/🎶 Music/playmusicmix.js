const {
  MessageEmbed
} = require(`discord.js`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const playermanager = require(`${process.cwd()}/handlers/playermanager`);
module.exports = {
  name: `playmusicmix`,
  category: `🎶 Music`,
  aliases: [`pmusicmix`, "pmm", "musicmix"],
  description: `Plays an awesome Music Mix`,
  usage: `playmusicmix`,
  parameters: {
    "type": "music",
    "activeplayer": false,
    "previoussong": false
  },
  type: "queuesong",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let link = "https://open.spotify.com/playlist/1yAHjOyPpiAGnIk0SB5VSc?si=19af51b0a7154e12";
    if (args[0]) {
      //ncs | no copyrighted music
      if (args[0].toLowerCase().startsWith("n")) link = "https://open.spotify.com/playlist/2NdDBIGHUCu977yW5iKWQY?si=9a316cc5d5244dcc";
      //pop
      if (args[0].toLowerCase().startsWith("p")) link = "https://open.spotify.com/playlist/1yAHjOyPpiAGnIk0SB5VSc?si=19af51b0a7154e12";
      //default
      if (args[0].toLowerCase().startsWith("d")) link = "https://open.spotify.com/playlist/1yAHjOyPpiAGnIk0SB5VSc?si=19af51b0a7154e12";
      //remixes from Hindi Release
      if (args[0].toLowerCase().startsWith("re")) link = "https://youtu.be/nshOeSAeYD8"
      //rock
      if (args[0].toLowerCase().startsWith("ro")) link = "https://www.youtube.com/playlist?list=PLn4GvABOzCQursVQ7qMU9CkNaKz4RgrVM";
      //oldgaming
      if (args[0].toLowerCase().startsWith("o")) link = "https://www.youtube.com/watch?v=iFOAJ12lDDU&list=PLYUn4YaogdahPQPTnBGCrytV97h8ABEav"
      //gaming
      if (args[0].toLowerCase().startsWith("g")) link = "https://www.youtube.com/watch?v=m74Fdj476kk&list=PLYUn4Yaogdaj_jX0QdcWoPcplAGtyTBlY";
      //Charts
      if (args[0].toLowerCase().startsWith("cha")) link = "https://www.youtube.com/playlist?list=PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl"
      //Chill
      if (args[0].toLowerCase().startsWith("chi")) link = "https://www.youtube.com/watch?v=fSS_R91Nimw&list=PLzKILxYC79RDspOFfHUselpBLOVEOJO_T";
      //Jazz
      if (args[0].toLowerCase().startsWith("j")) link = "https://open.spotify.com/playlist/37i9dQZF1DXbITWG1ZJKYt";
      //blues
      if (args[0].toLowerCase().startsWith("b")) link = "https://open.spotify.com/playlist/37i9dQZF1DXd9rSDyQguIk";
      //strange-fruits
      if (args[0].toLowerCase().startsWith("s")) link = "https://open.spotify.com/playlist/6xGLprv9fmlMgeAMpW0x51";
      //magic-release
      if (args[0].toLowerCase().startsWith("ma")) link = "https://www.youtube.com/watch?v=WvMc5_RbQNc&list=PLYUn4Yaogdagvwe69dczceHTNm0K_ZG3P"
      //metal
      if (args[0].toLowerCase().startsWith("me")) link = "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe";
      //heavy metal
      if (args[0].toLowerCase().startsWith("h")) link = "https://open.spotify.com/playlist/37i9dQZF1DX9qNs32fujYe";
    }
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color)
        .setAuthor(`Loading '${args[0] ? args[0] : "Default"}' Music Mix`, "https://imgur.com/xutrSuq.gif", link)
        .setTitle(eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variable1"]))
        .setDescription(eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variable2"]))
        .addField(eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variablex_3"]), eval(client.la[ls]["cmds"]["music"]["playmusicmix"]["variable3"]))
        .setFooter(es.footertext, es.footericon)
      ]
    })
    //play the SONG from YOUTUBE
    playermanager(client, message, Array(link), `song:youtube`, false, "songoftheday");
  }
};
