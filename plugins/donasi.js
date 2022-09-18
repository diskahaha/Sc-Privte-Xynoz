import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://chat.whatsapp.com/EjczE2AmL7qHnpPbs8d74b'
	conn.sendButton(m.chat, '〔 Dᴏɴᴛ ғᴏʀɢᴇᴛ Dᴏɴᴀᴛɪᴏɴ 〕╭─「_• Pulsa •_」\n│ • Telkom [082114579635]\n╰────\n\n╭─「_• Dana/Gopay •_」\n│ • Dana [-]\n│ • Gopay [-]\n╰────\n\n_◛˖ Ingin Donasi? Chat nomor owner_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(donasi|dns)$/i
handler.tags = ['info']
handler.help = ['donasi']
handler.premium = false
handler.limit = false

export default handler

// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!
