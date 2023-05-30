let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
*Group ChinoBotz:*
https://chat.whatsapp.com/IEgCJYuhmKkGm2KjglHDsp
*Website ChinoBotz:*
https://chinobotz.my.id
*Group YogzzDevX:*
https://chat.whatsapp.com/LYC14O9y4PoF3ondOF7aoU
*Website YogzzDevX:*
https://s.id/YogzzDevX`
m.reply(esce)
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler