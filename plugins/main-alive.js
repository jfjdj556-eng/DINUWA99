const { cmd, commands } = require('../zaidi');
const { sleep } = require('../lib/functions');
const os = require("os");
const config = require('../config');

// 🎭 Funny Replies Array
const funnyReplies = [
    "_අයියේ මම ඉන්නවා!_ *ටෙන්ෂන් වෙන්න එපා, දැන් වැඩේ එක පටන් ගමු! 🎉*",
    "🤖 _Robot එක ඉන්නවා!_ *මම මැරුණා කියලා හිතුනා ද? 😂&",
    "🔥 _අයියේ මම ඉන්නවා!_ *දැන් කියපන් මොකද කරන්නෙ? 💪*",
    "⚡ *🤖 _Robot එක ඉන්නවා!_ *මම මැරුණා කියලා හිතුනා ද? 😂*",
    "👑 *👑 _DINUWA MD ඉන්නවා!_ *දැන් මම හිතනවා, ඔයත් ඉන්නවද? 😂*",
    "🚀 *_Boss ඉන්නවා!_ *WhatsApp එක dominate කරන්න ready!* 😎",
    "    💀 _ඉන්නවා!_ *හැබැයි නින්ද යනවා... 😴*",
    "🐱 _ම ඉන්නවා!_ *ඔයා මගේ 9 ජීවිත වලින් 8ක් බේරගෙන තියෙන්නෙ! 😹*",
    "🤣 _මම ඉන්නවා!_ *මම සදහටම නිදාගත්තා කියලා හිතුනා ද? නෑ යකෝ!*",
    "🎯 _ම ඉන්නවා!_ *Target practice කරන්න ready! 😎*",
    "🍕 _ම ඉන්නවා!_ *Pizza එකත් කෑවා! දැන් ඔයාව මොකක්ද ඕන?*",
    "💥 _ඉන්නවා!_ *Dynamite එක වගේ! තව message එකක් ආවොත් පිපිරෙනවා! 😂*"
];

cmd({
    pattern: "alive",
    alias: ["status", "live"],
    desc: "Check uptime and system status",
    category: "main",
    react: "👑",
    filename: __filename
}, async (conn, mek, m, { from, sender, reply }) => {
    try {
        await conn.sendMessage(from, {
            react: { text: "👑", key: m.key }
        });

        // 🎲 Random funny reply
        const randomFunny = funnyReplies[Math.floor(Math.random() * funnyReplies.length)];

        const totalCmds = commands.length;
        const uptime = () => {
            let sec = process.uptime();
            let h = Math.floor(sec / 3600);
            let m = Math.floor((sec % 3600) / 60);
            let s = Math.floor(sec % 60);
            return `${h}h ${m}m ${s}s`;
        };

        // 🎨 Status with funny reply
        const status = `╭═══ 👑 ALIVE ═══⊷
┃❃╭──────────────
┃❃│ ${randomFunny}
┃❃│ ──────────────
┃❃│ 🤖 Bot: 𓆩𝐙𝐀𝐈𝐃𝐈-𝐌𝐃𓆪
┃❃│ 📊 Mode: ${config.WORK_TYPE || 'public'}
┃❃│ 🔣 Prefix: ${config.PREFIX || '.'}
┃❃│ 📦 Commands: ${totalCmds}
┃❃│ ⏳ Uptime: ${uptime()}
┃❃│ ✅ Status: 🟢 Active
┃❃╰───────────────
╰═════════════════⊷

> © ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅɪɴᴜᴡᴀ ᴍᴅ`;

        await conn.sendMessage(from, {
            text: status,
            contextInfo: {
                mentionedJid: [sender],
                forwardingScore: 999,
                isForwarded: true
            }
        }, { quoted: mek });

        await conn.sendMessage(from, {
            react: { text: "✅", key: m.key }
        });

    } catch (e) {
        console.error("Error in alive command:", e);
        await conn.sendMessage(from, {
            react: { text: "❌", key: m.key }
        });
        reply(`❌ Error: ${e.message}`);
    }
});