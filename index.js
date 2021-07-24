const Discord = require('discord.js');

const client = new Discord.Client();

bot.on('message', function (message) {
    if (message.content === '/mc') {
    message.delete({ timeout: 0000 })
    message.reply('veut jouer à Minecraft ! @everyone')
    }
})

bot.on('message', function (message) {
    if (message.content === '/pray') {
    message.delete({ timeout: 0000 })
    message.reply('est entrain de prier le Saint-Canard ! :pray: :pray: :pray:')
    }
})

client.login(process.env.TOKEN);