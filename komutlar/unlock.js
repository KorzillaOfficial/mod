const Discord = require("discord.js");
exports.run = (client, message, args) => { let every = message.guild.roles.cache.find(r => r.name === "@everyone");
 message.channel.createOverwrite(every, {
    SEND_MESSAGES: true
  });

  message.channel.send("Sohbet Açıldı. Yayın Bitti. Herkez Kafasına Göre Takılsın Tabi Kurallara Uyarak");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["unlock"],
  kategori: "k-aç",
  permLevel: 3
};

exports.help = {
  name: "unlock",
  description: "kanalın sohbetini açmaya yarar.",
  usage: "unlock"
};