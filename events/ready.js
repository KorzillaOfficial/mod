const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
module.exports = async client => {
  client.user.setPresence({ activity: { type: "WATCHING", name: `Korzilla ❤ Registery`}, status: 'dnd' })
};