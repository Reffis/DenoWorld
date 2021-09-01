import * as Discord from 'https://deno.land/x/harmony@v2.1.0/mod.ts';
import Ping from './commands/util/mod.ts';
import './config/config.ts';
import { token, prefix } from "./config/config.ts";

const client = new Discord.CommandClient({
    prefix: prefix,
    intents: Discord.Intents.All
})

client.commands.add(Ping.Ping)

client.connect(token).then(c => {
    console.log(`Connected as ${c.user?.tag}`);
})