const getphone = require('../../utils/getphone');
const fetch = require('node-fetch');
const emojis = require('../../emojis.json');
const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class Phone extends BaseCommand {
    constructor() {
        super('phone', 'info', []);
    }

    run(client, message, args) {
        message.channel.send(`**Please wait... If it takes too long, check your spelling and try again.${emojis.loading}**\nNot sure what phone to search? Try OnePlus 8.`);
        fetch(`http://localhost:8888/gsmarena/search/phone/${args.join('%20')}`)
            .then(res => res.json())
            .then(json => {
                for (let i = 0; i < json.length; i++) {
                    if (json[i].name.toLowerCase() == args.join(' ').toLowerCase()) {
                        fetch(`http://localhost:8888/gsmarena/phone/${json[0].url}`)
                            .then(res2 => res2.json())
                            .then(json2 => {
                                let phoneEmbed = {
                                    title: `${json[i].name}`,
                                    url: `https://www.gsmarena.com/${json[i].url}`,
                                    thumbnail: {
                                        url: json[i].img
                                    },
                                    color: `RANDOM`,
                                    fields: [{
                                        name: "Status",
                                        value: json2.spec_detail[1].specs[1].value,
                                    },
                                    {
                                        name: "Dimensions",
                                        value: json2.spec_detail[2].specs[0].value,
                                    },
                                    {
                                        name: "Display Type",
                                        value: json2.spec_detail[3].specs[0].value,
                                        inline: true
                                    },
                                    {
                                        name: "Screen Size",
                                        value: json2.spec_detail[3].specs[1].value,
                                        inline: true
                                    },
                                    {
                                        name: "Screen Resolution",
                                        value: json2.spec_detail[3].specs[2].value,
                                        inline: true
                                    },
                                    {
                                        name: "Operating System",
                                        value: json2.spec_detail[4].specs[0].value,
                                        inline: true
                                    },
                                    {
                                        name: "Battery",
                                        value: json2.spec_detail[11].specs[0].value,
                                        inline: true
                                    },
                                    {
                                        name: "Memory",
                                        value: json2.spec_detail[5].specs[1].value,
                                        inline: true
                                    },
                                    {
                                        name: "Chipset",
                                        value: json2.spec_detail[4].specs[1].value,
                                    },
                                    {
                                        name: "Photo",
                                        value: `${json2.spec_detail[6].specs[0].name}: ${json2.spec_detail[6].specs[0].value}`,
                                    },
                                    {
                                        name: "Video",
                                        value: json2.spec_detail[6].specs[2].value,
                                    },
                                    {
                                        name: "Colours",
                                        value: json2.spec_detail[12].specs[0].value,
                                        inline: true
                                    },
                                    {
                                        name: "Models",
                                        value: json2.spec_detail[12].specs[1].value,
                                        inline: true
                                    },
                                    {
                                        name: "Network Tech",
                                        value: json2.spec_detail[0].specs[0].value,
                                        inline: true
                                    },
                                    ],
                                    timestamp: new Date()
                                }
                                message.channel.send({
                                    embed: phoneEmbed
                                });
                            })
                    }
                }
            });
    }
}