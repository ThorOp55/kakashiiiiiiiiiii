const {
  MessageEmbed,
  MessageActionRow
} = require("discord.js");
const config = require(`${process.cwd()}/botconfig/config.json`);
var ee = require(`${process.cwd()}/botconfig/embed.json`);
const emoji = require(`${process.cwd()}/botconfig/emojis.json`);
const {
  MessageButton
} = require('discord.js')
module.exports = {
  name: "support",
  category: "🔰 Info",
  usage: "invite",
  description: "Sends you the Support Server Link",
  type: "bot",
  run: async (client, message, args, cmduser, text, prefix, player, es, ls) => {
    let button_support_dc = new MessageButton().setStyle('LINK').setLabel('Support Server').setURL("https://discord.gg/milrato")
    let button_invite = new MessageButton().setStyle('LINK').setLabel('Invite this Bot').setURL(`https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands`)
    //array of all buttons
    const allbuttons = [new MessageActionRow().addComponents([button_public_invite, button_support_dc, button_invite])]
    message.reply({
      embeds: [new MessageEmbed()
        .setColor(ee.color)
        .setTitle(client.la[ls].cmds.info.support.title)
        .setDescription(eval(client.la[ls]["cmds"]["info"]["support"]["variable1"]))
        .setFooter('Clan Bot | powered by ThorOp', 'https://cdn.discordapp.com/attachments/887065559794057277/918244381864124436/ff55fa9a762773cb871c308a6715a748.jpg')
        .setURL("https://discord.com/api/oauth2/authorize?client_id=784364932149280778&permissions=8&scope=bot%20applications.commands")
      ],
      components: allbuttons
    });
  }
}
