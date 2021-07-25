const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {
    console.log('LE SAINT CANARD ARRIVE');
  });

const { Client, MessageEmbed } = require('discord.js');

client.on('message', message => {
  if (message.content === '??help') {
    const embed = new MessageEmbed()
      .setTitle('Commands Help')
      .setColor(241, 196, 15)
      .setDescription('??help');
    message.reply('Voici la liste des commandes : ');
  }
});

client.on('message', (message) => {
    if (message.content === '??mc') {
    message.delete({ timeout: 0000 })
    message.reply('veut jouer à Minecraft ! @everyone')
    }
})

client.on('message', (message) => {
    if (message.content === `??pray`) {
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

client.login(process.env.TOKEN);
