require('dotenv').config();
const database = require('./data/methods');
const Discord = require('discord.js');
const client = new Discord.Client();
client.on('rateLimit',
    async (message) => {
        console.log("You are being rate limited!");
        console.log(message);

    });

// client.on('debug', (debug) => {
//     console.log("DEBUG EVENT!");
//     console.log(debug);
// });

client.on('disconnect', (message) => {
    console.log('DISCONNECT EVENT!');
    console.log(message);
});
client.on('error', (err) => {
    console.log('ERROR EVENT!');
    console.log(err);
});

client.once('ready',
    async () => {
        console.log('Ready');
        client.on('message',
            async (message) => {
                if (message.author.id ===
                    client.user.id ||
                    message.author.bot) {
                    return;
                }
                if (message.channel.type != 'dm') {
                    await require('./bot/listener')(message);
                }

            });
    });


(async () => {
    await database.init();
    try {
        await client.login(process.env.TOKEN);
    } catch (err) {
        if (err) {
            console.log(err);
            process.exit();
        }
    }
})();

module.exports = client;