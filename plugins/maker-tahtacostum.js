import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/hartacustom?apikey=64333e1c050ced435defe154&text=${response[0]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'xynoz.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['hartatahtacustom', 'htc'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(hartatahtacustom|htc)$/i
handler.limit = true

export default handler