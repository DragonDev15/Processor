module.exports = {
    run: async(client, message, args) => {
        let reason = args.slice(18);
        let memberId = args.split(" ")[0];

        if(!message.member.hasPermission('KICK_MEMBERS')) {
            return message.channel.send(":x: **You don't have permission to kick a member.**")
            .then(msg => {
                msg.delete({timeout: 4000});
            });
        }
        else {
            
            let member = message.guild.members.cache.get(memberId);
            if (member) {
                try {
                    await member.kick(reason);
                    if(!reason) reason = "No reason provided";
                    if (!memberId) return message.channel.send(":x: **Member not found.**")
                    .then(msg => {
                        msg.delete({timeout: 4000});
                    });
                    let kickEmbed = {
                        title: ":boot: Member Kicked :boot: ",
                        description: "**Member ID: **" + memberId + "\n**Reason: **" + reason,
                        color: "#fc6203",
                        timestamp: new Date()
                    }
                    message.channel.send({embed: kickEmbed});
                }
                catch(err) {
                    return message.reply(":x: **I cannot kick this user! Do they have a higher role? Do I have kick permissions?**")
                    .then(msg => {
                        msg.delete({timeout: 4000});
                    });
                }
            }
        }
    }, 
    aliases: ['hackkick', 'ikick', 'kickid', 'idkick'],
    description: 'Kicks a user via __ID__'
}