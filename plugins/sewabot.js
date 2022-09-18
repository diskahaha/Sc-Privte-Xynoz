let handler = async (m, { conn, usedPrefix: _p, __dirname, args }) => {
let url = 'https://telegra.ph/file/092e96af8312a94c2e4b0.jpg'
let text = `⟨───[ Sewa Bot & Premium]───⟩

┌〔 Harga Sewa 〕
│
├ 10 ʜᴀʀɪ 5ᴋ / ɢʀᴏᴜᴘ
├ 20 ʜᴀʀɪ 10ᴋ / ɢʀᴏᴜᴘ
├ 30 ʜᴀʀɪ 15ᴋ / ɢʀᴏᴜᴘ
├ 40 ʜᴀʀɪ 20ᴋ / ɢʀᴏᴜᴘ
├ 50 ʜᴀʀɪ 25ᴋ / ɢʀᴏᴜᴘ
├ 60 ʜᴀʀɪ 30ᴋ / ɢʀᴏᴜᴘ 
│
└────𝕭𝖔𝖙 ∅༢࿔ྀ ₪

┌〔 Harga Premium 〕
│
├ 10 ʜᴀʀɪ 7ᴋ 
├ 20 ʜᴀʀɪ 14ᴋ 
├ 30 ʜᴀʀɪ 20ᴋ 
├ 40 ʜᴀʀɪ 27ᴋ 
├ 50 ʜᴀʀɪ 35ᴋ 
├ 60 ʜᴀʀɪ 48ᴋ 
│
└────𝕭𝖔𝖙 ∅༢࿔ྀ ₪

┌〔 ꜰɪᴛᴜʀ 599+ 〕
│
├ ᴡᴇʟᴄᴏᴍᴇ
├ ᴋɪᴄᴋ
├ ᴀɴᴛɪʟɪɴᴋ
├ ꜱᴛɪᴋᴇʀ
├ ꜱᴏᴜɴᴅ
├ ᴀɴɪᴍᴇ
├ ᴅʟʟ
│-
└────𝕭𝖔𝖙 ∅༢࿔ྀ ₪
`
const templateButtons = [
    {index: 1, urlButton: {displayText: 'Klick untuk berlangganan', url: 'https://wa.me/p/6282114579635'}},
    {index: 4, quickReplyButton: {displayText: 'Owner', id: '.owner'}},
]
let tm = {
text: text,
footer: global.wm,
templateButtons: templateButtons,
image: url
}
conn.sendMessage(m.chat, tm, m)
}
handler.command = /^(sewabot|sewa|belibot)$/i

export default handler
