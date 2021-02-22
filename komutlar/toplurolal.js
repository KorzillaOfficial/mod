const Discord = require('discord.js');

exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('Bu komutu kullanabilmek için `Yönetici` iznine sahip olmalısın!')
    if(!args[0] && args[0] !== "ver" && args[0] !== "al") return message.channel.send(`Yapılacak işlemi belirtmelisin! \n**Doğru Kullanım:** ${prefix}toplu-rol ver @rol \n ${prefix}toplu-rol al @rol`)
  
    let rol = message.mentions.roles.first() || message.guild.roles.get(args[1]) || message.guild.roles.find(rol => rol.name === args.slice(1).join(' '));
  
    if(args[0] === "ver") {
      if (!rol) return message.channel.send(`Herkese verilecek olan rolü belirtmelisin! \n**Doğru Kullanım:** \`${prefix}toplu-rol ver @rol\``)
      await message.guild.members.cache.forEach(u => {
      u.roles.add(rol)
     })
     message.channel.send('Belirtilen rol herkese verildi!')
     return 
    }// VER BİTİŞ
    
    if(args[0] === "al") {
      if (!rol) return message.channel.send(`Herkesten alınacak olan rolü belirtmelisin! \n**Doğru Kullanım:** \`${prefix}toplu-rol al @rol\``)
     await message.guild.members.cache.forEach(u => {
      u.roles.remove(rol)
     })
     message.channel.send('Belirtilen rol herkesten alındı!')
     return
    }
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['trol'],
    permLevel: 3
}

exports.help = {
    name: 'trol',
    description: '',
    usage: 'trol'
} 