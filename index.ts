import * as Discord from "https://deno.land/x/harmony@v2.1.0/mod.ts";
import Util from "./commands/util/mod.ts";
import Owner from "./commands/owner/mod.ts";
import "./config/config.ts";
import { owner_id, prefix, token } from "./config/config.ts";

const client = new Discord.CommandClient({
  prefix: prefix,
  intents: Discord.Intents.All,
  owners: [owner_id],
});

client.commands.add(Util.Ping);
client.commands.add(Owner.Eval);

client.connect(token).then((c) => {
  console.log(`Connected as ${c.user?.tag}`);
});
