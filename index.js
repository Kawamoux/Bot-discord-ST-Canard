const Discord = require('discord.js');

const client = new Discord.Client();

client.user.setActivity("J'attends toujours la VF de Ratatoing...");

client.on('message', (message) => {
    if (message.content === '??help') {
    message.delete({ timeout: 0000 })
    message.channel.send(new Discord.MessageEmbed()
    .setTitle('Tout sur le Bot ! :duck:')
    .setColor('#FFD700')
    .addField('Commandes :', '??help : Pour tout savoir\n??pray : Pour prier le Saint-Canard\n??mc : Pour jouer à Minecraft\n??coink : Pour savoir le bruit que fait le cannard')
    .setFooter('Fait par Kawamo', 'https://cdn.discordapp.com/avatars/311857934831321089/166c0fd2239fb7db1d7c8f91b2e81ca8.webp?size=80'))
    }
})

client.on('message', (message) => {
    if (message.content === '??mc') {
    message.delete({ timeout: 0000 })
    message.reply('veut jouer à Minecraft ! @here')
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
