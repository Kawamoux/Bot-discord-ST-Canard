const Discord = require('discord.js');

const client = new Discord.Client();


client.on('message', (message) => {
    if (message.content === '??help') {
    message.delete({ timeout: 0000 })
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Tout sur le Bot ! :duck:')
    .setColor('#FFD700')
    .addField(`Commandes :
    `, '??help : Pour tout savoir\n??pray : Pour prier le Saint-Canard\n??mc : Pour jouer à Minecraft\n??coink : Pour savoir le bruit que fait le cannard'))
    }
})

client.on('message', (message) => {
    if (message.content === '??mc') {
    message.delete({ timeout: 0000 })
    message.reply('veut jouer à Minecraft ! @everyone')
    }
})

client.on('message', (message) => {
    if (message.content === '??pray') {
    message.delete({ timeout: 0000 })
    message.reply('est entrain de prier le Saint-Canard !  :pray: :compass: :duck:')
    }
})

client.on('message', (message) => {
    if (message.content === '??coink') {
    message.delete({ timeout: 0000})  
    message.channel.send('Le canard fait Coink Coink ! :duck:')  
    }
})

client.on('ready', () => {
    console.log('LE SAINT CANARD ARRIVE');
  });

client.login(process.env.TOKEN);
