import * as Discord from "https://deno.land/x/harmony@v2.1.0/mod.ts";

class Eval extends Discord.Command {
  name = "eval";
  aliases = ["실행"];
  ownerOnly = true;
  execute(context: Discord.CommandContext) {
    try {
      context.channel.send(
        new Discord.Embed()
          .setTitle("Eval")
          .setDescription(`Result:\n\`${eval(context.rawArgs.join(" "))}\``)
          .setColor("GREEN"),
      );
    } catch (err) {
      context.channel.send(
        new Discord.Embed()
          .setTitle("Eval")
          .setDescription(`Error:\n\`${err}\``)
          .setColor("RED"),
      );
    }
  }
}

export default Eval;
