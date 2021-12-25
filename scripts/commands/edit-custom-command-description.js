const Discord = require('discord.js');
exports.run = async(client, message, args, clients) => {
if(message.guild.id == 809722018953166858) return;
    const collection = clients.db("Leveling").collection('customcommand');
      var reply = args.slice(1).join(' ');
    if(message.author.id === process.env.OWNERID) {
      
            if(!args[0]) return message.reply(`use the command in this Format:
      m!edit-custom-command-description + command name + description`);
      if(!reply) return message.reply(`use the command in this Format:
      m!edit-custom-command-description + command name + description`);
   collection.find({"name":args[0]}).toArray(function(err, docs) {
    if(docs.length == 0) return message.reply(`no command found in the database!`);
    if(docs.length == 1) {
       collection.updateOne({"name":args[0]},{$set:{"description":reply}}, function(err, result) {
    message.channel.send(`successfully edit the command from the database`);
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
      m!edit-custom-command-description + command name + description`);
      if(!reply) return message.reply(`use the command in this Format:
      m!edit-custom-command-description + command name + description`);
   collection.find({"name":args[0]}).toArray(function(err, docs) {
    if(docs.length == 0) return message.reply(`no command found in the database!`);
    if(docs.length == 1) {
       collection.updateOne({"name":args[0]},{$set:{"description":reply}}, function(err, result) {
    message.channel.send(`successfully edit the command from the database`);
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
  return "edit-custom-command-description";
}
exports.desc = async() => {
  return "edit the custom command description";
}