const {Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
});

client.on("messageCreate", (message) => {
    if(message.author.bot) return;
    message.reply({
        content: "Hi from bot",
    })
});

client.login(
    "MTIwMTg4MjQwNTQzOTU1NzY1Mg.GU_yvX.EzWKBsZxv6ZukdhMNjekBmcKqIriG0M-rXcyxw"
    );