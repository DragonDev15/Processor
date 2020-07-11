const PREFIX = process.env.PREFIX;
const userban = require('../../mod/userban');
const userkick = require('../../mod/userkick');
const idban = require('../../mod/idban');
const idkick = require('../../mod/idkick');
const mute = require('../../mod/mute');
const unmute = require('../../mod/unmute');
const binary = require('../math/binary');
const base64 = require('../math/base64');
const calculate = require('../math/calculate');

module.exports = {
    run: async(client, message, args) => {
        let helpEmbed = {
            color: `RANDOM`,
            title: 'Need some help?',
            description: `Prefix is **${PREFIX}** as in **${PREFIX}help**.`,
            fields: [
                {
                    name: ':shield: Moderation',
                    value: "Manages server members.",
                },
                {
                    name: ':1234: Math',
                    value: "Play with numbers.",
                },
            ]
        }
        let modEmbed = {
            color: `RANDOM`,
            title: 'Moderation Commands',
            description: `Prefix is **${PREFIX}** as in **${PREFIX}help**.`,
            fields: [
                {
                    name: ':hammer_pick: **__user__ban**',
                    value: `${userban.description}.\nAliases: [${userban.aliases}]`,
                },
                {
                    name: ':boot: **__user__kick**',
                    value: `${userkick.description}.\nAliases: [${userkick.aliases}]`,
                },
                {
                    name: ':mute: **mute**',
                    value: `${mute.description}.`,
                },
                {
                    name: ':hammer_pick: **__id__ban**',
                    value: `${idban.description}.\nAliases: [${idban.aliases}]`,
                },
                {
                    name: ':boot: **__id__kick**',
                    value: `${idkick.description}.\nAliases: [${idkick.aliases}]`,
                },
                {
                    name: ':speaker: **unmute**',
                    value: `${unmute.description}.`,
                },
            ],
            timestamp: new Date()
        };

        let mathEmbed = {
            color: `RANDOM`,
            title: 'Math Commands',
            description: `Prefix is **${PREFIX}** as in **${PREFIX}help**.`,
            fields: [
                {
                    name: ':computer: **calculate**',
                    value: `Evaluates an expression.\nAliases: [${calculate.aliases}]`,
                },
                {
                    name: ':1234: **binary**',
                    value: `Convert decimal to binary.\nAliases: [${binary.aliases}]`,
                },
                {
                    name: ':1234: **base64**',
                    value: `Convert decimal to base64.\nAliases: [${base64.aliases}]`,
                },
            ]
        }
        if (args == `${PREFIX}help`) {
            message.channel.send({embed: helpEmbed});    
        }
        else if (args.startsWith('mod')) {
            message.channel.send({embed: modEmbed});    
        }
        else if (args.startsWith('math')) {
            message.channel.send({embed: mathEmbed});    
        }
    }, 
    aliases: [],
    description: 'Shows the help menu'
}