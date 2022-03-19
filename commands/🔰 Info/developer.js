const {
  MessageEmbed
} = require("discord.js")
const config = require(`${process.cwd()}/botconfig/config.json`)
var ee = require(`${process.cwd()}/botconfig/embed.json`)
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton,
  MessageActionRow
} = require('discord.js')
const {
  handlemsg
} = require(`${process.cwd()}/handlers/functions`)
module.exports = {
  name: "developer",
  category: "🔰 Info",
  aliases: ["dev", "thorop"],
  description: "Shows Information about the Developer",
  usage: "developer",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_support_dc = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.dc).setURL("https://discord.gg/j8hXTVxwaj")
    let button_invite = new MessageButton().setStyle('LINK').setLabel(client.la[ls].cmds.info.developer.buttons.botlist).setURL(`https://discord.gg/j8hXTVxwaj`)
    const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(es.color)
        .setFooter(es.footertext + "Thor", es.footericon)
        .setTimestamp()
        .setThumbnail("https://cdn.discordapp.com/avatars/442355791412854784/df7b527a701d9a1ab6d73213576fe295.webp?size=1024")
        .setTitle(client.la[ls].cmds.info.developer.title)
        .setURL("https://thorop")
        .setDescription(client.la[ls].cmds.info.developer.description)
      ],
      components: allbuttons
    }).catch(error => console.log(error));

  }
}
