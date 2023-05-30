let handler = async (m, { conn, text, usedPrefix, command }) => {
  
var caption = `Hi, Silahkan hubungi owner terlebih dahulu`
conn.relayMessage(m.chat, 
{ liveLocationMessage: {
  degreesLatitude: 35.685506276233525,
  degreesLongitude: 139.75270667105852,
  accuracyInMeters: 0,
degreesClockwiseFromMagneticNorth: 2,
caption: caption,
sequenceNumber: 2,
timeOffset: 3,
contextInfo: m,
}}, {})
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot|belibot)$/i

module.exports = handler