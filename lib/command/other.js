cmd.on('example3',['speed','response'],['other'],async(req, res) => {
timestamp = functions.Speed();
latensi = functions.Speed(); - timestamp
return client.sendText(req.from, "Speed Response is "+latensi.toFixed(4)+" Second", req);
});

cmd.on('btnrespon',['carapenggunaan'],['info'],async(msg, res) => {
  txt = `*HELLO I AM ZED WHATSAPP BOT MY CREATOR IS IMASH NIDUSHA*

*THANCK FOR USEING THIS BOT😒࿔⃝༒⃝❤️᭄*

*OWNER NUMBER* - wa.me/94771323434

*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ
`
buttons = [{buttonId:".z2", buttonText:{displayText:"Back To Menu"},type:1}]
let buttonsMessage = {
  contentText:txt,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg})
});

cmd.on("ownerr",["ownerbot","owner"],["other"],async(msg,res) => {
  client.sendMessageFromContent(msg.from, {contactsArrayMessage: {
    "displayName": "Owner "+botinfo.botname,
    "contacts": [
    {
     "displayName": botinfo.ownername,
     "vcard": "BEGIN:VCARD\nVERSION:3.0\nN:Sy;"+botinfo.ownername+";;;\nFN:"+botinfo.ownername+"\nitem1.TEL;waid="+botinfo.ownerNumber[0]+":"+botinfo.ownerNumber[0]+"\nitem1.X-ABLabel:Owner Bot\nitem2.URL:"+botinfo.website+"\nitem2.X-ABLabel:Website\nEND:VCARD"
    }
    ],
    }}, {quoted:msg})
    });

cmd.on('esenka',['snk'],["other"],async(msg, res) => {
  txxt = `*HELLO I AM ZED WHATSAPP BOT MY CREATOR IS IMASH NIDUSHA*

*THANCK FOR USEING THIS BOT😒࿔⃝༒⃝❤️᭄*

*OWNER NUMBER* - wa.me/94771323434

*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ

CREATOR , @${botinfo.ownerNumber[0]}.`
  client.reply(msg, txxt, {contextInfo:{mentionedJid:functions.parseMention(txxt)}})
});

cmd.on("donate",["donasi","donate"],["other"],async(msg, res) => {
  dmsg = `_*DONATE FOR BOT ${botinfo.botname}*_

*- For Owner* 
DIALOG : 0771323434
අතේ සල්ලි තියේ නම් කීයක් හරි එව්වත් අවුලක් නෑ බන්🥺💖
`
return await client.sendText(msg.from, dmsg, msg);
});

cmd.on("lapor",["report","laporkan"],["other"],async(msg, {query,client}) => {
  let tet = `*Laporan!*\n\n• Pengirim : @${msg.sender.jid.split("@")[0]}\n• Pesan : ${query}`
  await client.sendMessage(botinfo.ownerNumber[0]+`@s.whatsapp.net`, tet, "conversation", {contextInfo:{mentionedJid:functions.parseMention(tet)}});
  return client.sendText(msg.from, "Laporan Sudah Terkirim Ke Owner Ya Kak!", msg);
  },{query:"Mau Lapor Apa Kak?",param:functions.needed("query")});

cmd.on("tag",["mention","tag"],["other"],async(msg, {query, client}) => {
	return await client.sendMessage(msg.from, query+" tagged!", "conversation",{contextInfo:{mentionedJid: functions.parseMention("@"+query)},quoted:msg});
	},{query:"Masukan Nomor!\nEx : .mention @0",param:functions.needed("number")});

cmd.on('runtime',['runtime'],['other'],(msg,{client,prefix}) => {
let data = functions.count(process.uptime())
return client.sendText(msg.from,functions.parseResult(data,{title: 'Runtime Bot'}))
});

cmd.on('info',['info'],['other'],(msg,{client,prefix}) => {
let data = functions.count(process.uptime())
let total = 0
for (let a of cmd._events){
for (let b of a.command) total++
}
inmsg = `*අඩේ හායි ${msg.sender.name} බොක්ක*

CREATED BY තනියෙම තමා බන් 🥺👉🏻👈🏻
Bot Name : ZED BOT V7
Library : Baileys
Language : JavaScript
Total Command : ${total}
Total User : ${Object.keys(userDb).length}
Runtime : ${data.day} Day ${data.hours} Hours ${data.minutes} Minutes ${data.seconds} Second

Group : https://chat.whatsapp.com/HEP90W2NX9Y4YISOzCu7AQ

Special thanks to :
• wa.me/94711117547 (K2-99)
• wa.me/94771323434 (ZED)`
let buttons = [{buttonId:".owner",buttonText:{displayText:"OWNER"},type:"RESPONSE"},{buttonId:".donasi",buttonText:{displayText:"DONATE"},type:"RESPONSE"}];
let btn = {
  contentText:inmsg,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage:btn});
});

cmd.on('delete',['del','delete'],['other'],async(msg,{client}) => {
if (!msg.quotedMsg.key.fromMe) return client.reply(msg,'harus dari bot')
client.deleteMessage(msg.from,msg.quotedMsg.key)
return client.reply(msg,'sukses')
},{quoted:true});

cmd.on("getrepl",["getreply","q"],["other"],async(msg,client) => {
await(await msg.quotedMsg.reloadMsg()).quotedMsg.resendMsg(msg.from)
},{param:functions.needed("reply chat")});
