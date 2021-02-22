const Discord = require("discord.js");

exports.run = async(client,message,args) => {
  if(!['806086104645763122'].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
  return message.channel.send('Yetkin Yok!').then(message => message.delete({timeout: 5000}));
  
          uyeid = "803667853214875728"; //-üye rol id
          tag = "ア"; //-tag
          boosterid = "803296952858050613"; //-booster rol id
          kayıtsızid = "803663619816423425"; //-kayıtsız rol id
  
      const vvatoplam = message.guild.memberCount
      const vvabot = message.guild.members.cache.filter(MUA => MUA.user.bot).size
      const vvaonline = message.guild.members.cache.filter(MUA => MUA.presence.status != "offline").size
      const vvaoffline = message.guild.members.cache.filter(MUA => MUA.presence.status === "offline").size
      const vvauye = message.guild.roles.cache.get(uyeid).members.size
      const vvatag = message.guild.members.cache.filter(MUA => MUA.user.username.includes(tag)).size
      const vvabooster = message.guild.roles.cache.get(boosterid).members.size
      const vvakayıtsız = message.guild.roles.cache.get(kayıtsızid).members.size
      const vvases = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)
      
  
      const sexymenofpk = new Discord.MessageEmbed()
      .setColor("#FF0000")
      .setFooter(`https://discord.gg/rytwxmE3kX`)
      .setTimestamp()//https://top.gg/bot/791302822918488105
      .setDescription(`\n **${message.guild.name} - Sunucu İstatistiği** \n \n  \`Toplam Üye Sayısı\`: ${vvatoplam} \n  \`Toplam Bot Sayısı\`: ${vvabot} \n  \`Çevrimiçi Üye Sayısı\`: ${vvaonline} \n  \`Çevrimdışı Üye Sayısı\`: ${vvaoffline} \n \n  \`Tag'da Bulunan Üye Sayısı\`: ${vvatag} \n  \`Booster Üye Sayısı\`: ${vvabooster} \n  \`Kayıtlı Üye Sayısı\`: ${vvauye} \n  \`Kayıtsız Üye Sayısı\`: ${vvakayıtsız} \n \n  \`Sesli Kanalda Bulunan Üye Sayısı\`: ${vvases} \n`)
      message.channel.send(sexymenofpk)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['say'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'say',
    description: 'Sunucu istatistiklerini sayar.',
    usage: 'say'
  };