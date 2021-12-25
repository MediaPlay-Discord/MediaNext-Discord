let Discord = require('discord.js');
let ms = require('ms');
let db = require('quick.db');
exports.run = async(client, message, args, clients) => {
  const timeout = 60000;
	const cooldown = await db.fetch(`levelingsystem_${message.guild.id}_${message.author.id}`);
  let collection = clients.db("Leveling").collection("data");
  if (cooldown !== null && timeout - (Date.now() - cooldown) > 0) {
		return;
	} else {
//code here that runs if there is no cooldown
collection.find({ ping: message.author.id, level: Number, xp: Number }).toArray(function(err, docs) {
    docs.forEach(function (row) {
            level = row.level;
           xp = row.xp;

           	const xpadd = 0.5;
		let xprequire = 25;
    for(var i = 0; i < parseInt(level); i++) {
xprequire = xprequire + 5
    }
        collection.updateOne({ping:message.author.id.toString()}, { $set: {xp:  xp + xpadd, ping:message.author.id.toString()} }, function(err, result) {
            
           
          });
          if (xp > xprequire) {
			let nlevel = level + 1;
            collection.updateOne({ping:message.author.id.toString() }, { $set: {xp: 0,level:nlevel, ping:message.author.id.toString()} }, function(err, result) {
              });
              if(nlevel == 5) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 700014258712215662));
                return;
              }
               if(nlevel == 10) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 700015142842400779));
                return;
              }
               if(nlevel == 20) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 734425186614509568));
                return;
              }
               if(nlevel == 30) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 700015920566894632));
                return;
              }
               if(nlevel == 40) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 700016404354695229));
                return;
              }
               if(nlevel == 60) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 700016678234357790));
                return;
              }
               if(nlevel == 80) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 700017562095976540));
                return;
              }
               if(nlevel == 100) {
                message.member.roles.add(message.guild.roles.cache.find(r => r.id == 774168382433132545));
                return;
              }
              
              return;

	}
    });
    if(docs.length === 0) { 
           
      
       collection.insertMany([{level:1 , xp:0, ping: message.author.id.toString() }], function(err, result) {
  
 
  });
    
           }
  });
  

// code put after no cooldown code, to set the cooldown
		db.set(`levelingsystem_${message.guild.id}_${message.author.id}`, Date.now());
}
  
		return;
  };
