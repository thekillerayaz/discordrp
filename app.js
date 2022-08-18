const cliendId = '1009435351271620658';
const DiscordRPC = require('discord-rpc');
const RPC = new DiscordRPC.Client({ transport: 'ipc' });

DiscordRPC.register(cliendId);

async function setActivity() {
    if (!RPC) return;
    RPC.setActivity({
        details: `Rahatsız Etmeyin`,
        state: `😈`,
        startTimestamp: Date.now(),
        largeImageKey: `https://i.hizliresim.com/3s73jlx.gif`,
        largeImageText: `😈`,
        smallImageKey: `https://i.hizliresim.com/cqgch8i.gif`,
        smallImageText: `😈`,
        instance: false,
        buttons: [
            {
                label: `discord`,
                url: `https://discord.gg/wpaYFzRh`
            },
            {
                label: `botlist`,
                url: `https://discord.gg/yGYFRYJB`
            }
        ]
    });
};

RPC.on('ready', async () => {
    setActivity();

    setInterval(() => {
        setActivity();
    }, 15 * Infinity)
});

console.log('hazır')

RPC.login({ clientId: '1009435351271620658' })