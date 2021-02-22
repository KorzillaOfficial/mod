const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
var prefix = ayarlar.prefix
    //herkese açık mı yöneticilere özel mi?
    exports.run = async (client, message, args) => {
        var rolid = message.mentions.roles.first()
        var kisi = message.mentions.members.first()

        if(!message.member.hasPermission("MANAGE_ROLES")) {
        return message.channel.send('Bunu Gerçekleştirmek İçin Gereken Yetkiniz Yok! ')
        }

        if(!rolid) return message.channel.send(`Alınacak Rolü Etiketlemelisin! \n **Doğru Kullanım: "${prefix}yetki-al <rol> <kullanıcı>"** `)
        if(!kisi) return message.channel.send(`Rolü Alınacak Kullanıcıyı Etiketlemelisin! \n **Doğru Kullanım: "${prefix}yetki-al <rol> <kullanıcı>"** `)

        kisi.roles.remove(rolid)
        return message.channel.send(`İstediğiniz Gibi ${kisi} Adlı Kullanıcının ${rolid} Yetkisini Aldım! `)

    }
exports.conf = {
    enabled: 'true',
    guildOnly: 'true',
    aliases: ['rolal'],
    permLevel: 0
    }
    
    exports.help = {
    name: 'rolal'
    }