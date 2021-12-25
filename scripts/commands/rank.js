const Discord = require('discord.js');
exports.run = async(client, message, args, clients) => {
  let collection = clients.db("Leveling").collection("data");
let member = message.mentions.members.first() || message.member;
   user = member.user;
collection.find({ ping: member.id, level: Number, xp: Number }).toArray(function(err, docs) {
  if(docs === []) return message.reply(`no user found!`);
    docs.forEach(function (row) {
            var levels = row.level;
           var xps = row.xp;
           
			let xprequire = 25;
    for(var i = 0; i < parseInt(levels); i++) {
xprequire = xprequire + 5
    }
        let embed = new Discord.MessageEmbed()
 .setTitle(`${user.tag}`)
 .addField(`level:`, `${levels}`, true)
 .addField(`xp:`, `${xps}` + `/ ${xprequire}`, true)
 message.channel.send({embeds: [embed]});
       
    });
})
		return;
};
exports.slots = async() => {
// 1 = public
// 2 = developer only
// 3 = verifed member
// 4 = staff
// null = custom command(it doesn't have id);
return 1;
}
exports.name = async() => {
  return "rank";
}
exports.desc = async() => {
  return "check your level!";
}