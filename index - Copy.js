const Discord = require('discord.js');


const client = new Discord.Client();
var request = require('request');
client.once('ready', () => {
	console.log(`Ready`)
});
client.on('message', async message => {

	if (message.content.startsWith("check")) {
    var email = message.content.split(" ")
request.get({
  headers: {
    'content-type' : 'application/x-www-form-urlencoded'
    },
  url:     'https://f1-5.gq/check/?email='+email[1],
 // body:    "mes=heydude"
}, function(error, response, body){
  console.log(body);

  if(body.includes('"discord_linked":true')){
        message.channel.send(`discord linked : `+email[1])
  }if(body.includes('"tiktok_linked":true')){
        message.channel.send(`tiktok linked : `+email[1])
  }
  
});
}
}
);

client.login("")