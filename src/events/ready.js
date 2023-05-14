const { ActivityType } = require("discord.js");

module.exports = {
    name: 'ready',
    once: true,
    async execute(client) {

        client.user.setPresence({ activities: [{ name: `v4 Beta `, type: ActivityType.Playing }], status: 'dnd', });
        console.log('Bot is ready to use!');

    },
};