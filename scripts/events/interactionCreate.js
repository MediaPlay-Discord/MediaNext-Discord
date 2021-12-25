const Discord = require(`discord.js`);
const fs = require('fs');

exports.run = async(client, interaction, clients, prefix) => {
if (!interaction.isButton()) return;
//help
    const row = new Discord.MessageActionRow();
 const b5 = 	new Discord.MessageButton()
					.setCustomId('helpcuscmd')
					.setLabel('custom command')
					.setStyle('PRIMARY');
          const b1 =	new Discord.MessageButton()
					.setCustomId('helppub')
					.setLabel('public')
					.setStyle('PRIMARY');
			
       const b2 = new Discord.MessageButton()
					.setCustomId('helpowner')
					.setLabel('Owner only')
					.setStyle('PRIMARY');
      const b3 =	new Discord.MessageButton()
					.setCustomId('helpstaff')
					.setLabel('staff')
					.setStyle('PRIMARY');
			
       const b4 = 	new Discord.MessageButton()
					.setCustomId('helpverifiedmem')
					.setLabel('verified member')
					.setStyle('PRIMARY');
		row.addComponents(b1);
    		row.addComponents(b2);
            	row.addComponents(b3);
              	row.addComponents(b4);
                row.addComponents(b5);
// public
if (interaction.customId === 'helppub') {
let embed = new Discord.MessageEmbed()
.setTitle(`MediaNext's command`)
.setDescription(`slots by: public use / free use`)
.setColor(`#33ccff`)
.setTimestamp();
  
fs.readdirSync(__dirname + `/../commands`, (async fil => {

fil.forEach(async file => {
  let files = require(__dirname + `/../commands/${file}`);
  files.slots().then(async returns => {
    console.log(returns);
    if(returns == 1) {
      files.name().then(name => {
        files.desc().then(desc => {
embed.addField(`${name}`,`${desc}`,true);
console.log(`---`);
console.log(embed);
        })
        console.log(`---2`);
console.log(embed);
      })
      console.log(`---3`);
console.log(embed);
    }
    console.log(`---4`);
console.log(embed);
  })
console.log(`---5`);
console.log(embed);
});
console.log(`---6`);
console.log(embed);
}));

                // public embed



		await interaction.update({embeds :[embed], components: [row]});
	}

//owner

   
  if (interaction.customId === 'helpowner') {
  embed = new Discord.MessageEmbed()
.setTitle(`MediaNext's command`)
.setDescription(`slots by: bot developer team / private command`)
.setColor(`#33ccff`)
.setTimestamp();
                // owner embed
fs.readdirSync(__dirname + `/../commands`, (async fil => {

fil.forEach(async file => {
  let files = require(__dirname + `/../commands/${file}`);
  files.slots().then(async returns => {
    console.log(returns);
    if(returns == 2) {
      files.name().then(name => {
        files.desc().then(async desc => {
embed.addField(`${name}`,`${desc}`,true);

        })
       
      })
     
    }
  })

});
}));

		await interaction.update({embeds :[embed], components: [row]});
	}


// staff


  if (interaction.customId === 'helpstaff') {
     embed = new Discord.MessageEmbed()
.setTitle(`MediaNext's command`)
.setDescription(`slots by: staff command / high level role`)
.setColor(`#33ccff`)
.setTimestamp();
  
fs.readdirSync(__dirname + `/../commands`, (async (err,fil) => {
    console.log('complete');
fil.forEach(async file => {
  sleep(1000);
      console.log('complete2');
  let files = require(__dirname + `/../commands/${file}`);
  files.slots().then(async returns => {
      sleep(1000);
    console.log(returns);
    if(returns == 4) {
      files.name().then(name => {
          sleep(1000);
        files.desc().then(async desc => {
          embed.addField(`${name}`,`${desc}`,true);
            sleep(1000);
fs.write("input.json", JSON.stringify(embed), function(err) {
    sleep(1000);
    if (err) throw err;
    console.log('complete3');
    }
);
        })
     

      })

    }

  })

});
}));
let data = JSON.parse(fs.readFileSync('input.json', 'utf8'));
data.fields.forEach(e => embed.addField(`${e.name}`,`${e.value}`,true));

   await interaction.update({embeds :[embed], components: [row]}); 

      // staff embed
fs.readdir(__dirname + `/../commands`, (async (err,fil) => {
    console.log('complete');
fil.forEach(async file => {
  sleep(1000);
      console.log('complete2');
  let files = require(__dirname + `/../commands/${file}`);
  files.slots().then(async returns => {
      sleep(1000);
    console.log(returns);
    if(returns == 4) {
      files.name().then(name => {
          sleep(1000);
        files.desc().then(async desc => {
          embed.addField(`${name}`,`${desc}`,true);
            sleep(1000);
            let temp1 = {
              "name":"kick",
              "value":"kick a member",
              "inline":true
            }
            let json1 = {
  type: 'rich',
  title: "MediaNext's command",
  description: 'slots by: staff command / high level role',
  url: null,
  color: 3394815,
  timestamp: 1630775279664,
  fields: [],
  thumbnail: null,
  image: null,
  video: null,
  author: null,
  provider: null,
  footer: null
}
json1.fields.push(temp1);
fs.write("input.json", JSON.stringify(json1), function(err) {
    sleep(1000);
    if (err) throw err;
    console.log('complete3');
    }
);
        })
     

      })

    }

  })

});
}));

		
	}


// verified member

    if (interaction.customId === 'helpverifiedmem') {
      let embed = new Discord.MessageEmbed()
      .setTitle(`MediaNext's command`)
.setDescription(`slots by: verifed member command / protected command`)
.setColor(`#33ccff`)
.setTimestamp();
   fs.readdirSync(__dirname + `/../commands`, (async fil => {

fil.forEach(async file => {
  let files = require(__dirname + `/../commands/${file}`);
  files.slots().then(async returns => {
    console.log(returns);
    if(returns == 3) {
      files.name().then(name => {
        files.desc().then(desc => {
embed.addField(`${name}`,`${desc}`,true);
console.log(`---`);
console.log(embed);
        })
        console.log(`---2`);
console.log(embed);
      })
      console.log(`---3`);
console.log(embed);
    }
    console.log(`---4`);
console.log(embed);
  })
console.log(`---5`);
console.log(embed);
});
console.log(`---6`);
console.log(embed);
}));
                // verified embed




		await interaction.update({embeds :[embed], components: [row]});
	}



      if (interaction.customId === 'helpcuscmd') {
    let embed = new Discord.MessageEmbed()
                // verified embed



.setTitle(`MediaNext's command`)
.setDescription(`slots by: custom command / premium command, visit the follow page to view all the command:`)
.setColor(`#33ccff`)
.setTimestamp();

const collection = clients.db("Leveling").collection('customcommand');
      collection.find({}).toArray(async function(err, docs) {
        const row2 = new Discord.MessageActionRow();
 const a1 = 	new Discord.MessageButton()
					.setCustomId('helpcuscmdback')
					.setLabel('back')
					.setStyle('PRIMARY');
 const a2 = 	new Discord.MessageButton()
					.setCustomId('helpcuscmdnext')
					.setLabel('next page')
					.setStyle('PRIMARY');
           const a3 = 	new Discord.MessageButton()
					.setCustomId('helpcuscmdexit')
					.setLabel('exit custom command')
					.setStyle('PRIMARY');
                row2.addComponents(a1);
                row2.addComponents(a2);
                row2.addComponents(a3);
   docs.forEach(raw => embed.addField('```' + raw.name + '```',raw.description,true));
await interaction.update({embeds :[embed], components: [row2]});
  })

	}
  		
}
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
