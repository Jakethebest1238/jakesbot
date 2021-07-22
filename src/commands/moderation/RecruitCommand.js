const BaseCommand = require('../../utils/structures/BaseCommand');

module.exports = class RecruitCommand extends BaseCommand {
  constructor() {
    super('recruit', 'moderation', []);
  }

  async run(client, message, args) {
    if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("You do not have permission to use this command")
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(`I require \`MANAGE_ROLES\` Permissions.`);

    
  }
}
