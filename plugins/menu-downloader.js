/*
 * Jangan Di Hapus!!
 * 
 * Creator @KingOfBear
 *
 * Youtubeku: https://youtu.be/pwLZpdfO8AU
 * 
 * Ingin tambah fitur tapi tidak bisa coding?
 * hubungi: https://wa.me/6288279268363
 * 
 */
 
import fetch from 'node-fetch'
import fs from 'fs'
import moment from 'moment-timezone'
let handler = async (m, { conn, args, command }) => {
  let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let who = m.sender
const time = moment.tz('Asia/Jakarta').format('HH')
  const ultah = new Date(`${ultahowner} 00:00:01`)
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
  let name = await conn.getName(m.sender)
  let runnya = `┏━━━ꕥ〔 Downloader 〕ꕥ━⬣
┃✾ .facebbok <url>
┃✾ .gitclone <username>/<repo> 🅛
┃✾ .ig <url>
┃✾ .igstalk <username>
┃✾ .mediafire
┃✾ .tiktokfoto <user>
┃✾ .telesticker 🅛
┃✾ .tiktok <url>
┃✾ .tiktok <url>
┃✾ .tiktokdl <url>
┃✾ .twitter 🅛
┃✾ .zippyshare
┃✾ .pinterest
┃✾ .wallpaper <query>
┃✾ .wallpaper2 <query>
┃✾ .githubsearch <pencarian> 🅛
┃✾ .ttaudio <teks> 🅛
┃✾ .play <pencarian>
┃✾ .play2 <pencarian>
┃✾ .play.1 <texto>
┃✾ .play.2 <texto>
┃✾ .ytmp3 <url> <without message> 🅛
┃✾ .yta <url> <without message> 🅛
┃✾ .ytmp4 <url> <without message> 🅛
┃✾ .ytv <url> <without message> 🅛
┃✾ .yt <url> <without message> 🅛
┗━━━━━━━━━ꕥ`
  let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let muptime = clockString(_muptime)
 await conn.sendButton(m.chat, `${wish()} ${name}`,runnya + '\n\n' + wm + '\n\n' + botdate, thumb, [['🧑OWNER','.owner']], m, {
  'document':{'url':'https://youtu.be/SANDARU-YT'},
'mimetype':global.dpdf,
'fileName':'「 ᴏᴋᴛᴀ 」',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'previewType':'pdf',
contextInfo: { externalAdReply :{ showAdAttribution: true,
                        sourceUrl: 'https://youtu.be/ChataOfc-',
                        mediaType: 2,
                        description: `S A N D A R U`,
                        title: `💌 My Owner: ${ohari} Hari ${ojam} Hour ${onet} Minutes ${detek} Second`,
                        body: `©`,          previewType: 0,
                        thumbnail: await (await fetch(thumb)).buffer(),
                        mediaUrl: 'https://youtu.be/SANDARU-YT'
                        
                      }}
})
 let vn = `https://github.com/saipulanuar/Api-Github/raw/main/audio/script.mp3`
  conn.sendFile(m.chat, vn, 'Fangz.Ganz', null, m, true, {
type: 'audioMessage',
ptt: true })
}


handler.help = ['downloader']
handler.command = /^(downloader)$/i

handler.limit = false
handler.register = true
handler.exp = 3

export default handler

function wish() {
    let wishloc = ''
  const time = moment.tz('Asia/Jakarta').format('HH')
  wishloc = ('Hi')
  if (time >= 0) {
    wishloc = ('Selamat Malam🌃')
  }
  if (time >= 4) {
    wishloc = ('Selamat Pagi🌄')
  }
  if (time >= 12) {
    wishloc = ('Selamat Siang☀️')
  }
  if (time >= 16) {
    wishloc = ('️ Selamat Malam🌇')
  }
  if (time >= 23) {
    wishloc = ('Selamat Malam🌙')
  }
  return wishloc
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
