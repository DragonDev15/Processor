const { MessageEmbed } = require('discord.js');
const BaseCommand = require('../../utils/structures/BaseCommand');
const duration = require('humanize-duration');

module.exports = class Avatar extends BaseCommand {
    constructor() {
        super('botinfo', 'info', ['bot']);
    }

    run(client, message, args) {

        let fetchEmbed = new MessageEmbed()
            let uptime = duration(process.uptime() * 1000, { units: ["d", "h", "m"], round: true });
            let version = require('../../../package.json').version;
                let embed = new MessageEmbed()
                    .setColor(`RANDOM`)
                    .setTitle(`My Stats`)
                    .addField(`Name`, client.user.username, true)
                    .addField(`Uptime`, uptime, true)
                    .addField(`Version`, `${version}`, true)
                    .addField(`Library`, `[discord.js](https://discord.js.org)`, true)
                    .addField(`Website`, `[Website](https://processorbot.xyz/)`, true)
                    .addField(`Discord`, `[Invite](https://discord.gg/UNmdd8V)`, true)
                    .addField(`GitHub`, `[Repository](https://github.com/Glitched519/Processor)`, true)
                    .addField(`CPU Cores`, require('os').cpus().length, true)
                    .addField(`Memory Usage`, `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024) + 'MB'}/${Math.round(require('os').totalmem() / 1000000000) + 'GB'}`, true)
                return message.channel.send(embed);
    }
}