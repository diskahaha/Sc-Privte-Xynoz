import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, {conn}) => {
const vcard = `BEGIN:VCARD
VERSION:3.0
N:;;;
FN: ${global.author}
item.ORG: Budayakan Salam!
item1.TEL;waid=${global.nomorown}:79609055704@s.whatsapp.net
item1.X-ABLabel: 📮 Xynoz Real!
item2.YOUTUBE;type=INTERNET: ≫ 𝙾𝚙𝚎𝚗 𝚂𝚎𝚠𝚊𝚋𝚘𝚝|𝙹𝚊𝚍𝚒𝚋𝚘𝚝|𝙹𝚊𝚜𝚊𝚛𝚞𝚗
item2.X-ABLabel:YOUTUBE
item3.ADR:;;🗺️ Indonesia, Sumatera Utara, Medan;;;;
item3.X-ABADR:ac
item3.X-ABLabel: Alamat
item4.URL: ≫ 𝚈𝚃 : 𝚇𝚢𝚗𝚘𝚣
item4.X-ABLabel: Groups Bot
END:VCARD`
const sentMsg  = await conn.sendMessage(
    m.chat,
    { 
        contacts: { 
            displayName: 'OWNER BOT', 
            contacts: [{ vcard }]  
        }
    }
)
let image = 'thumb'
}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|creator)$/i

export default handler

//Plugin By Xynoz Slebew-
// 📮 Made In Xynoz 
// Subscribe YouTube Xynoz!
// Tq To Jangan Di Hpus!!