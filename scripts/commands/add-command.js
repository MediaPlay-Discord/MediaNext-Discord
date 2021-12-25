const Discord = require('discord.js');
exports.run = async(client, message, args, clients) => {
if(message.guild.id == 809722018953166858) return;
    const collection = clients.db("Leveling").collection('customcommand');
      var reply = args.slice(1).join(' ');
    if(message.author.id === process.env.OWNERID) {
      
      if(!args[0]) return message.reply(`use the command in this Format:
      m!add-command + command name + command reply`);
      if(!reply) return message.reply(`use the command in this Format:
      m!add-command + command name + command reply`);
   collection.find({"name":args[0]}).toArray(function(err, docs) {
    if(docs.length == 1) return message.reply(`command already in the database!`);
    if(docs.length == 0) {
       collection.insertMany([{"name":args[0],"reply":reply,"description":"none"}], function(err, result) {
    message.channel.send(`successfully add the command to database`);
  });
    }
  })
  return;
    }
    	if (!message.member.permissions.has('MANAGE_GUILD'))
			return message.reply(
				"You can't use that command!"
			);
      if(!args[0]) return message.reply(`use the command in this Format:
      m!add-command + command name + command reply`);
      if(!reply) return message.reply(`use the command in this Format:
      m!add-command + command name + command reply`);
   collection.find({"name":args[0]}).toArray(function(err, docs) {
    if(docs.length == 1) return message.reply(`command already in the database!`);
    if(docs.length == 0) {
       collection.insertMany([{"name":args[0],"reply":reply,"description":"none"}], function(err, result) {
    message.channel.send(`successfully add the command to database`);
  });
    }
  })
};
exports.slots = async() => {
// 1 = public
// 2 = developer only
// 3 = verifed member
// 4 = staff
// null = custom command(it doesn't have id);
return 4;
}
exports.name = async() => {
  return "add-command";
}
exports.desc = async() => {
  return "add custom to the mediaNext's database";
}