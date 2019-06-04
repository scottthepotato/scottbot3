require("http").createServer(async (req,res) => { res.statusCode = 200; res.write("ok"); res.end(); }).listen(3000, () => console.log("Now listening on port 3000"));
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

///commands
client.on('message', msg => {
  if (msg.content === 's!ping') {
    msg.channel.send('pong');
  }
});

client.on('message', msg => {
  if (msg.content === 's!serverinfo') {
    msg.channel.send(`Server name: ${msg.guild.name}\nTotal members: ${msg.guild.memberCount}\nDate of creation: ${msg.guild.createdAt}\nServer region: ${msg.guild.region}`);
  }
});

client.on('message', msg => {
  if (msg.content === 's!hoes') {
    msg.react(':madman:519696223972622336');
  }
});

client.on('message', msg => {
  if (msg.content === 's!inbedtest') {
    const exampleEmbed = new Discord.RichEmbed()
	.setColor('#0099ff')
	.setTitle('Little Owl Games')
	.setURL('https://discord.js.org/')
	.setAuthor('Scott Hicks', 'https://i.imgur.com/wSTFkRM.png', 'https://discord.js.org')
	.setDescription('Some description here')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addField('Title', 'Some value here')
	.addBlankField()
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.addField('Inline field title', 'Some value here', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Some footer text here', 'https://i.imgur.com/wSTFkRM.png');
    msg.channel.send(exampleEmbed);
  }
});

client.on('message', msg => {
  if (msg.content === 's!toncum') {
    msg.channel.send('lmao im just finna ping this nigga @sammyglop#5481');
  }
});


client.on('message', msg => {
  if (msg.content === 's!botinfo') {
    
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot information")
    .setColor("#42f44e")
    .addField("Bot name: ScottBot, Made by @scottthepotato#6633");
    
    msg.reply(botembed);
    
  }
});

///moderation code
/*
if (member.hasPermission('KICK_MEMBERS')) {
	console.log('This member can kick');
}
client.on('message', message => {
  // Ignore messages that aren't from a guild
  if (!message.guild) return;
  // If the message content starts with "!kick"
  if (message.content.startsWith('s!kick')) {
    // Assuming we mention someone in the message, this will return the user
    // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      
    const user = message.mentions.users.first();
    // If we have a user mentioned
    if (user) {
      // Now we get the member from the user
      const member = message.guild.member(user);
      // If the member is in the guild
      if (member) {
        
        member.kick('Optional reason that will display in the audit logs').then(() => {
          // We let the message author know we were able to kick the person
          message.reply(`Successfully kicked ${user.tag}`);
        }).catch(err => {
          // An error happened
          // This is generally due to the bot not being able to kick the member,
          // either due to missing permissions or role hierarchy
          message.reply('I was unable to kick the member');
          // Log the error
          console.error(err);
        });
      } else {
        // The mentioned user isn't in this guild
        message.reply('That user isn\'t in this guild!');
      }
    // Otherwise, if no user was mentioned
    } else {
      message.reply('You didn\'t mention the user to kick!');
      }
    }
  });
  */


///roles



///login key
client.login('NTg1MzA3MjA4MTAzNzU1Nzg3.XPXkUQ.4jMsnhxELJYqGomlJ2MunjGbq1c');
