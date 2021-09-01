import * as Discord from 'https://deno.land/x/harmony@v2.1.0/mod.ts';

class Ping extends Discord.Command {
    name = 'ping';
    aliases = ['핑'];
    execute(context: Discord.CommandContext) {
        const embed = new Discord.Embed()
            .setTitle('Ping 🏓')
            .setDescription(`**Pong!** \`${context.client.gateway.ping}\``)
            .setColor('RED');
        context.message.reply(embed); 
    }
}

export default Ping;