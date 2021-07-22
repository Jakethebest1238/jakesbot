const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js');

module.exports = class SocialCommand extends BaseCommand {
  constructor() {
    super('social', 'information', []);
  }

  async run(client, message, args) {
    const youtubeEmbed = new Discord.MessageEmbed()
      .setTitle('Jake He')
      .setURL('https://www.youtube.com/channel/UCOijWL8wT8zNisH4zCrcuCA')
      .setThumbnail('https://pngimg.com/uploads/youtube/youtube_PNG102356.png')
      .setColor('#6d96ff')
      .addField('Check out Jake\s YouTube Channel', 'Jake makes all sort of different contents')
      .setTimestamp()
      .setFooter("Jake He", "https://lh3.googleusercontent.com/a-/AOh14GgfGqYi7g9RUSnIoNSjz9cVapZcVam40QymLxmcuQ=s96-c-rg-br100");

    const twitterEmbed = new Discord.MessageEmbed()
      .setTitle('Twitter')
      .setURL('https://twitter.com/jakethebest1238')
      .setThumbnail('https://pngimg.com/uploads/twitter/twitter_PNG95259.png')
      .setColor('#6d96ff')
      .addField('Check out Jake\s Twitter account', 'ㅤ')
      .setTimestamp()
      .setFooter("Jake He", "https://lh3.googleusercontent.com/a-/AOh14GgfGqYi7g9RUSnIoNSjz9cVapZcVam40QymLxmcuQ=s96-c-rg-br100" );
    
    const instagramEmbed = new Discord.MessageEmbed()
      .setTitle('Instagram')
      .setURL('https://www.instagram.com/jakethebest1238/')
      .setThumbnail('https://pngimg.com/uploads/instagram/instagram_PNG10.png')
      .setColor('#6d96ff')
      .addField('Check out Jake\s Instagram account', 'ㅤ')
      .setTimestamp()
      .setFooter("Jake He", "https://lh3.googleusercontent.com/a-/AOh14GgfGqYi7g9RUSnIoNSjz9cVapZcVam40QymLxmcuQ=s96-c-rg-br100");

    const twitchEmbed = new Discord.MessageEmbed()
      .setTitle('Twitch')
      .setURL('https://www.twitch.tv/jakethebest1238')
      .setThumbnail('https://pngimg.com/uploads/twitch/twitch_PNG56.png')
      .setColor('#6d96ff')
      .addField('Check out Jake\s Twitch account', 'ㅤ')
      .setTimestamp()
      .setFooter("Jake He", "https://lh3.googleusercontent.com/a-/AOh14GgfGqYi7g9RUSnIoNSjz9cVapZcVam40QymLxmcuQ=s96-c-rg-br100");

    const redditEmbed = new Discord.MessageEmbed()
      .setTitle('Reddit')
      .setURL('https://www.reddit.com/user/jakethebest1238')
      .setThumbnail('data:image/png;base64,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')
      .setColor('#6d96ff')
      .addField('Check out Jake\s Reddit account', 'ㅤ')
      .setTimestamp()
      .setFooter("Jake He", "https://lh3.googleusercontent.com/a-/AOh14GgfGqYi7g9RUSnIoNSjz9cVapZcVam40QymLxmcuQ=s96-c-rg-br100");

    const facebookEmbed = new Discord.MessageEmbed()
      .setTitle('Facebook')
      .setURL('https://www.facebook.com/JakeHe123/')
      .setThumbnail('https://pngimg.com/uploads/facebook_logos/facebook_logos_PNG19748.png')
      .setColor('#6d96ff')
      .addField('Check out Jake\s Facebook account', 'ㅤ')
      .setTimestamp()
      .setFooter("Jake He", "https://lh3.googleusercontent.com/a-/AOh14GgfGqYi7g9RUSnIoNSjz9cVapZcVam40QymLxmcuQ=s96-c-rg-br100");

    message.channel.send(youtubeEmbed).catch(err => console.log(err));
    message.channel.send(twitterEmbed).catch(err => console.log(err));
    message.channel.send(instagramEmbed).catch(err => console.log(err));
    message.channel.send(twitchEmbed).catch(err => console.log(err));
    message.channel.send(redditEmbed).catch(err => console.log(err));
    message.channel.send(facebookEmbed).catch(err => console.log(err));
  }
}