import fetch from 'node-fetch'

//Plugin By Xynoz!!
let handler = async (m, { conn, usedPrefix }) => {
	let url = 'https://telegra.ph/file/092e96af8312a94c2e4b0.jpg'
	conn.sendButton(m.chat, '╭─「_• Pulsa •_」\n│ • Axis [083839200413]\n╰────\n\n╭─「_• Dana/Gopay •_」\n│ • Dana [082184080698]\n│ • Gopay [083839200413]\n╰────\n\n_Note : Krm Bukti Transfer Ke Owner Jika Sudah Melakukan Pembayaran!!_', wm, await(await fetch(url)).buffer(), [['Owner',`/owner`]],m)
}
handler.command = /^(pay|payment|bayar)$/i
handler.tags = ['info']
handler.help = ['payment']
handler.premium = false
handler.limit = true

export default handler
