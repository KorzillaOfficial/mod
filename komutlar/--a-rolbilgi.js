const Discord = require("discord.js");

exports.run = async (client, message, args) => {    //herkese açık mı yöneticilere özel mi?
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send()
            }
            
let vvaRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
if (!vvaRole) return message.channel.send(new Discord.MessageEmbed()
.setDescription(`Geçerli bir rol belirtmeli/Rol ID'si girmelisin.`))

  
let muaArray = new Array();
let reawÜyeler = vvaRole.members.forEach(MUA => {muaArray.push(`<@!${MUA.id}> `);})


message.channel.send(new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTimestamp()
    .setFooter(`Vıttırı Vızzık ADAMツ#0939`)
    .setDescription(`${vvaRole} - Rolünün Bilgisi \n \n » \`Rol İsmi\`: ${vvaRole} \n » \`Rol ID'si\`: ${vvaRole.id} \n » \`Roldeki Kişi Sayısı\`: ${vvaRole.members.size} \n \n » \`Roldeki kişiler\`: \n ${vvaRole.members.size <= 15 ? muaArray.join("\n") : `Listelenemedi! ( Fakat **${vvaRole.members.size}** Kişi Bu Role Sahip! )`} `))
    }
exports.conf = {
enabled: 'true',
guildOnly: 'true',
aliases: ['rolbilgi'],
permLevel: 0
}

exports.help = {
name: 'rolbilgi'
}