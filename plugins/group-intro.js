let handler = async (m, { conn }) => {


let krtu = `
┌–––––––––––––––––✥
│「▰▰▰▱▱▱▱▱▱▱」
└┬❖ 「 Kartu Intro 」
┌┤❀  ɴᴀᴍᴀ :
┊│❀  ᴋᴏᴛᴀ : 
┊│❀  ᴡᴀʀɴᴀ ʙʜ ʏᴀɴɢ ᴅɪ ᴘᴀᴋᴀɪ :
│└────────────┈
`
conn.fakeReply(m.chat, krtu, '0@s.whatsapp.net', wm)
}
handler.command = /^(intro)$/i
handler.group = true

export default handler
