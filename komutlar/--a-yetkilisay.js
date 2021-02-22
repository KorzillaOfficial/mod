const Discord = require("discord.js");
    exports.run = async (client, message, args) => {  
        if(!message.member.hasPermission("ADMINISTRATOR")) {
            return message.channel.send()
            }

            godsid = "803247095129309232";
            kingid = "803247095129309228";
            monarchid = "803247095129309227";
            emperorid = "803247095129309229";
            dukeid = "803247095120396327";
            markuessid = "803247095120396326";
            vicontid = "803247095120396325";
            baronid = "803247095112400945";
            lordid = "803247095120396318";
            sirid = "803247095112400944";
            nemesisid = "808942206572167178";


  //- 1.         
  var VVA1 = "**Gods Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk1 = "**Gods Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 2.
  var VVA2 = "**King Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk2 = "**King Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 3.
  var VVA3 = "**Monarch Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk3 = "**Monarch Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 4.
  var VVA4 = "**Emperor Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk4 = "**Emperor Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 5.
  var VVA5 = "**Duke Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk5 = "**Duke Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 6.
  var VVA6 = "**Markuess Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk6 = "**Markuess Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 7.
  var VVA7 = "**Vicont Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk7 = "**Vicont Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 8.
  var VVA8 = "**Baron Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk8 = "**Baron Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 9.
  var VVA9 = "**Lord Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk9 = "**Lord Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 10.
  var VVA10 = "**Sir Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk10 = "**Sir Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";

  //- 11.
  var VVA11 = "**Nemesis Of Korzilla Rolü - Seslide ki Yetkilileri:** \n";
  var sexymenofpk11 = "**Nemesis Of Korzilla Rolü - Seslide Bulunmayan Yetkilileri:** \n";
  //- 1.
  message.guild.roles.cache.get(godsid).members.map(MUA => {
    VVA1 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk1 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 2.
  message.guild.roles.cache.get(kingid).members.map(MUA => {
    VVA2 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk2 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 3.
  message.guild.roles.cache.get(monarchid).members.map(MUA => {
    VVA3 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk3 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 4.
  message.guild.roles.cache.get(emperorid).members.map(MUA => {
    VVA4 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk4 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 5.
  message.guild.roles.cache.get(dukeid).members.map(MUA => {
    VVA5 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk5 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 6.
  message.guild.roles.cache.get(markuessid).members.map(MUA => {
    VVA6 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk6 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 7.
  message.guild.roles.cache.get(vicontid).members.map(MUA => {
    VVA7 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk7 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 8.
  message.guild.roles.cache.get(baronid).members.map(MUA => {
    VVA8 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk8 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 9.
  message.guild.roles.cache.get(lordid).members.map(MUA => {
    VVA9 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk9 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 10.
  message.guild.roles.cache.get(sirid).members.map(MUA => {
    VVA10 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk10 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  //- 11.
  message.guild.roles.cache.get(nemesisid).members.map(MUA => {
    VVA11 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk11 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

  const adamk = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTimestamp()
    .setFooter(`Vıttırı Vızzık ADAMツ#0939`)
    .setDescription(` ${VVA1}  ${sexymenofpk1}  \n \n  ${VVA2}  ${sexymenofpk2}  \n \n  ${VVA3}  ${sexymenofpk3}  \n \n  ${VVA4}  ${sexymenofpk4}  \n \n  ${VVA5}  ${sexymenofpk5}  \n \n  ${VVA6}  ${sexymenofpk6}  \n \n  ${VVA7}  ${sexymenofpk7}  \n \n  ${VVA8}  ${sexymenofpk8}  \n \n  ${VVA9}  ${sexymenofpk9}  \n \n  ${VVA10}  ${sexymenofpk10}  \n \n  ${VVA11}  ${sexymenofpk11}  `)
  message.channel.send(adamk)
}
exports.conf = {
  enabled: 'true',
  guildOnly: 'true',
  aliases: ['sesyetkili'],
  permLevel: 0
  }
  
  exports.help = {
  name: 'sesyetkili'
  }