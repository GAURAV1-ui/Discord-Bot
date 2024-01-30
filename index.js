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

client.on("interactionCreate", (interaction) => {
    interaction.reply("Pong");
})

client.login(
    "MTIwMTg4MjQwNTQzOTU1NzY1Mg.GFXMLM.bCD9FsxuwoWoSB6bphl_pGffzJO0HltVTUsx8o"
    );