import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix }) => {
let info = `
*--- SOURCE CODE ---*

https://youtu.be/qWDhEF7f5r0

* | Script By Xynoz | Mau Buy? Silahkan Hubungi Owner!*
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*Script By Xynoz | Buy? 50K No Enc*', 'status@broadcast')
}
handler.help = ['sc', 'sewasc']
handler.tags = ['info', 'main']

handler.command = /^(sc|script|sewasc)$/i

handler.owner = false
handler.mods = false
handler.premium = false
handler.group = true
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
//*