const Discord = require('discord.js');
const translate = require
('@vitalets/google-translate-api');
exports.run = async(client, message, args, clients) => {
 var input = args.join('');
    if(!input) return message.reply('m!translate + input');
    translate(input.toString(), {to: 'en'}).then(res => {
    console.log(res.text);
 const Embed = new Discord.MessageEmbed()
 .setTitle('results')
 .setDescription(`by ${message.author}`)
 .addField('input', `${input}`, false)
 .addField('output', `${res.text}`, true)
 .addField('lang code', `${res.from.language.iso}`, true)
.setTimestamp();
message.channel.send({embeds:[Embed]});

}).catch(err => {
    console.error(err);
});
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
  return "translate";
}
exports.desc = async() => {
  return "translate, for fun only.";
}