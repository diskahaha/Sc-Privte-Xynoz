/*
Script By Xynoz 📮
No Enc? Chat wa.me/6283839200413
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'

/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    // d.getTimeZoneOffset()
    // Offset -420 is 18.00
    // Offset    0 is  0.00
    // Offset  420 is  7.00
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
      

/*============== INFO OWNER ==============*/
global.sig = 'https://F'
global.sgh = '-' 
global.sgc = 'https://chat.whatsapp.com/EjczE2AmL7qHnpPbs8d74b'
global.swa = 'wa.me/6282114579635'

/*============== PAYMENT ==============*/
global.pdana = '082114579635'
global.povo = '082114579635'
global.pgopay = '082114579635'
global.ppulsa = '082114579635'
global.ppulsa2 = '082114579635'
global.psaweria = '-'

/*============== NOMOR ==============*/
global.nomorbot = '6282114579635'
global.nomorown = '6282114579635'
global.namebot = '𝕭𝖔𝖙 ∅༢࿔ྀ'
global.nameown = '𝕭𝖔𝖙 • [A]ndii ∅༢࿔ྀ'


/*============== STAFF ==============*/
global.owner = [
  ['6282114579635', '𝕭𝖔𝖙 • [A]ndii ∅༢࿔ྀ', 'true']
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.mods = [] // Want some help?
global.prems = [] // Premium user bukan disini nambahinnya, ketik .addprem @user 10


/*============== API ==============*/
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
adiisus: 'https://adiixyzapi.herokuapp.com',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'cristian9407',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'Xynoz',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'wEDTUsWj',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Eyar749L',
  'https://hardianto.xyz': 'hardianto',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll'
}

/*============== WATERMARK ==============*/
global.wm = '𝕭𝖔𝖙 | ʙу 𝕭𝖔𝖙 • [A]ndii ∅༢࿔ྀ' //Main Watermark
global.wm2 = '𝕭𝖔𝖙 • [A]ndii ∅༢࿔ྀ'
global.wm3 = '𝕭𝖔𝖙 | ʙу 𝕭𝖔𝖙 • [A]ndii ∅༢࿔ྀ'
global.botdate = `⻝ 𝗗𝗮𝘁𝗲: ${week} ${date}\n⻝ 𝗧𝗶𝗺𝗲: ${wktuwib}`
global.bottime = `⻝ 𝗧 𝗜 𝗠 𝗘 : ${wktuwib}`
global.titlebot = `𝕭𝖔𝖙 • [A]ndii ∅༢࿔ྀ | By ${global.nameown}`
global.author = '𝕭𝖔𝖙 ∅༢࿔ྀ' 


/*============== LOGO ==============*/
global.thumb = 'https://telegra.ph/file/c73f47b440241b66cb9d3.jpg' //Main Thumbnail
global.imagebot = 'https://telegra.ph/file/805a37b1e9a963e7d7ecf.jpg'
global.giflogo = 'https://telegra.ph/file/c73f47b440241b66cb9d3.jpg'
global.thumbs = ['https://telegra.ph/file/c73f47b440241b66cb9d3.jpg']
global.fla = 'https://telegra.ph/file/c73f47b440241b66cb9d3.jpg'

/*============== TEXT ==============*/
global.wait = '```𝙇𝙤𝙖𝙙𝙞𝙣𝙜...```'
global.eror = '```𝙉𝙤𝙩 𝙁𝙤𝙪𝙣𝙙 𝟰𝟬𝟰 𝙀𝙧𝙤𝙧```'

/*=========== TYPE DOCUMENT ===========*/
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'

global.thumbdoc = 'https://telegra.ph/file/a94ebededebcbc792a12a.jpg'

/*=========== FAKE SIZE ===========*/
global.fsizedoc = '99999999999999' // default 10TB
global.fpagedoc = '999'

/*=========== HIASAN ===========*/
// DEFAULT MENU
global.dmenut = '❏═┅═━–〈' //top
global.dmenub = '┊•' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer

// COMMAND MENU
global.cmenut = '––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊☃︎ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '' //after
global.pmenus = '☃︎' //pembatas menu selector

global.htki = '––––––『' //hiasan title kiri
global.htka = '』––––––' //hiasan title kanan
global.lopr = 'Ⓟ'
global.lolm = 'Ⓛ'
global.htjava = '❃' //hiasan Doang :v

/*============== STICKER WM ==============*/
global.stickpack = '「▰▰▱▱▱▱」'
global.stickauth = `ʙʏ 𝕭𝖔𝖙 • [A]ndii ∅༢࿔ྀ`

global.multiplier = 38 // The higher, The harder levelup

/*============== EMOJI ==============*/
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      level: '📊',
      limit: '🎫',
      health: '❤️',
      exp: '✨',
      money: '💹',
      bank: '🏦',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🛍️',
      mythic: '🎁',
      legendary: '🗃️',
      superior: '💼',
      pet: '🔖',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      pickaxe: '⛏️',
      fishingrod: '🎣',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐴',
      cat: '🐱',
      dog: '🐶',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '🪙',
      emerald: '❇️',
      upgrader: '🧰'
      
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//------ JANGAN DIUBAH -----
let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
