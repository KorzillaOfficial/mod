const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .addField('Sen Napıyorsun', 'Bu komutu yetkin olmadan kullanamazsın.')
    return message.author.send(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.cache.forEach(u => {
u.send(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gönderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurla'],
  permLevel: 4
};

exports.help = {
  name: 'dm',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};