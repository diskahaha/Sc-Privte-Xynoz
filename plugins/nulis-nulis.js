import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://api.lolhuman.xyz/api/nulis?apikey=64333e1c050ced435defe154&text=${response[0]}&apikey=Xynoz`
  conn.sendFile(m.chat, res, 'xynz.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['nulis'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(n|nulis)$/i
handler.limit = true

export default handler