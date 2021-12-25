const Discord = require('discord.js');
const weather = require(`weather-js`);
exports.run = async(client, message, args, clients) => {
 weather.find({ search: args.join(' '), degreeType: 'C' }, function (err, result) { 
        if (err) console.log('Weather CMD error: ' + err);
        if (result === undefined || result.length === 0) {
message.reply(`no result founds`);
            return;
        }

        var current = result[0].current;
        var location = result[0].location;

        let embed = new Discord.MessageEmbed()
            .setAuthor(`${current.skytext} weather in ${current.observationpoint}`, current.imageUrl)
            .setColor(0xffffff)
            .addField('Timezone', `UTC${location.timezone}`, true)
            .addField('Degree Type', location.degreetype, true)
            .addField('Temperature', `${current.temperature} Degrees`, true)
            .addField('Feels Like', `${current.feelslike} Degrees`, true)
            .addField('Winds', current.winddisplay, true)
            .addField('Humidity', `${current.humidity}%`, true);
        message.channel.send({ embeds: [embed] });
        return message.react("👌");
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
  return "weather";
}
exports.desc = async() => {
  return "ouch...";
}