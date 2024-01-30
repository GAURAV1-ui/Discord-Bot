const { REST, Routes } = require("discord.js");

const commands = [
    {
        name : 'ping',
        description: 'Replies with ping!',
    },
];

const rest = new REST({ version: "10" }).setToken(
    "MTIwMTg4MjQwNTQzOTU1NzY1Mg.GFXMLM.bCD9FsxuwoWoSB6bphl_pGffzJO0HltVTUsx8o"
    );

(async () => {
    try {
        console.log("Started refreshing application (/) commands.");

        await rest.put(Routes.applicationCommand("1201882405439557652"), {
             body : commands,
            });

            console.log("Successfully reloaded applications (/) commands");
    } catch (error) {
        console.error(error);
    }
    })();