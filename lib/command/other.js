cmd.on('example3',['speed','response'],['other'],async(req, res) => {
timestamp = functions.Speed();
latensi = functions.Speed(); - timestamp
return client.sendText(req.from, "Speed Response is "+latensi.toFixed(4)+" Second", req);
});

cmd.on('btnrespon',['carapenggunaan'],['info'],async(msg, res) => {
  txt = `*HELLO I AM ZED WHATSAPP BOT MY CREATOR IS DIWAN KAWISHKA*

*THANCK FOR USEING THIS BOT😒࿔⃝༒⃝❤️᭄*

*OWNER NUMBER* - wa.me/9786705379

*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/J62y5LEOhwC1LZ6aZZPAwk
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

cmd.on('Imash',['alive'],[],async(msg, res) => {
  txt = `*HELLO I AM ALIVE*

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
████▌▄▌▄▐▐▌█████
████▌▄▌▄▐▐▌▀████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀

*I AM ZED WHATSAPP BOT MY CREATOR IS DIWAN KAWISHKA*
*THANCK FOR USEING THIS BOT😒࿔⃝༒⃝❤️᭄*
*OWNER NUMBER* - wa.me/94786705379
*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/J62y5LEOhwC1LZ6aZZPAwk
`

buttons = [{buttonId:".menu", buttonText:{displayText:"TAP TO MENU"},type:1}]
let buttonsMessage = {
  contentText:txt,
  footerText:botinfo.footerText,
  buttons,
  headerType:1
}
return client.sendMessageFromContent(msg.from, {buttonsMessage},{quoted:msg})
});

cmd.on('Igmash',['allmenu'],[],async(msg, res) => {
  txt = `*MENU*

▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
████▌▄▌▄▐▐▌█████
████▌▄▌▄▐▐▌▀████
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
⦁𝗦𝗘𝗔𝗥𝗖𝗛 𝗠𝗘𝗡𝗨⦁

.𝘆𝘁𝘀𝗲𝗮𝗿𝗰𝗵
.𝗽𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁
.𝗮𝗹𝗽𝗵𝗮𝗰𝗼𝗱𝗲𝗿𝘀
.𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿𝗰𝗮𝘃𝗲
.𝗴𝗶𝗺𝗮𝗴𝗲
.𝗴𝗼𝗼𝗴𝗹𝗲𝗶𝗺𝗮𝗴𝗲
.𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗺𝗮𝗴𝗲
.𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿
.𝗴𝗮𝗺𝗯𝗵𝗮𝗿𝗵𝗱
.𝗽𝗶𝘅𝗶𝘃
.𝘃𝗲𝗰𝘁𝗼𝗿
.𝘃𝗲𝗰𝘁𝗼𝗿𝘀𝘁𝗼𝗰𝗸
.𝗽𝗽𝗰𝗽
.𝗽𝗽𝗰𝗼𝘂𝗽𝗹𝗲

⦁𝗗𝗢𝗪𝗡𝗟𝗢𝗗𝗘𝗥 𝗠𝗘𝗡𝗨⦁

.𝘆𝘁𝗺𝗽3
.𝘃𝗶𝗱𝗲𝗼
.𝘆𝘁𝗺𝗽4
.𝘀𝗼𝗻𝗴
.𝘆𝘁
.𝗽𝗹𝗮𝘆
.𝘁𝗶𝗸𝘁𝗼𝗸
.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸𝗱𝗹
.𝗳𝗯
.𝗳𝗮𝗰𝗲𝗯𝗼𝗼𝗸
.𝗶𝗴𝘃𝗶𝗱𝗲𝗼
.𝗶𝗻𝘀𝘁𝗮𝗴𝗿𝗮𝗺
.𝘆𝘁𝘀𝗲𝗮𝗿𝗰𝗵

⦁𝗙𝗨𝗡 𝗠𝗘𝗡𝗨⦁

.𝗱𝗮𝗿𝗲
.𝘁𝗿𝘂𝘁𝗵
.𝗯𝗶𝘀𝗮𝗸𝗮𝗵
.𝗵𝗼𝘄𝗴𝗮𝘆
.𝗸𝗮𝗽𝗮𝗻𝗮𝗸𝗮𝗵
.𝗵𝗼𝘄𝗯𝘂𝗰𝗶𝗻
.𝗵𝗼𝘄𝘀𝘁𝗿𝗲𝘀𝘀
.𝘁𝗶𝗰𝘁𝗮𝗰𝘁𝗼𝗲
.𝘁𝘁𝘁

𝗚𝗘𝗡𝗘𝗥𝗔𝗧𝗢𝗥 𝗠𝗘𝗡𝗨

.𝘀𝘄𝗮𝗶𝗳𝘂
.𝘄𝗮𝗻𝗴𝘆
.𝗽𝗿𝗲𝗴𝗻𝗮𝗻𝘁
.𝘀𝗶𝗺𝗽
.𝘀𝗵𝗲𝗿𝗸
.𝗴𝗲𝗺𝗲𝘁𝗲𝗿𝗻
.𝗻𝗲𝗻𝗲𝗻
.𝗸𝗼𝗯𝗼𝗶

𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨

.𝗮𝗱𝗱
.𝗸𝗶𝗸
.𝗱𝗲𝗺𝗼𝘁𝗲
.𝗽𝗿𝗼𝗺𝗼𝘁𝗲
.𝘀𝗲𝘁𝗻𝗮𝗺𝗲𝗴𝗿𝗼𝘂𝗽
.𝘀𝗲𝘁𝗱𝗲𝘀𝗴𝗿𝗼𝘂𝗽
.𝗹𝗲𝗮𝘃𝗲
.𝗰𝗿𝗲𝗮𝘁𝗲-𝗴𝗿𝗼𝘂𝗽 
.𝗴𝗿𝗼𝘂𝗽-𝗹𝗶𝗻𝗸
.𝗴𝗿𝗼𝘂𝗽-𝗿𝗲𝘃𝗼𝗸𝗲
.𝗴𝗿𝗼𝘂𝗽-𝗷𝗼𝗶𝗻
.𝗴𝗿𝗼𝘂𝗽-𝗰𝗹𝗼𝘀𝗲
.𝗴𝗿𝗼𝘂𝗽-𝗼𝗽𝗲𝗻
.𝗴𝗿𝗼𝘂𝗽-𝗹𝗼𝗰𝗸𝗲𝗱
.𝗴𝗿𝗼𝘂𝗽-𝘂𝗻𝗹𝗼𝗰𝗸
.𝘀𝗲𝘁-𝗽𝗿𝗼𝗳𝗶𝗹𝗲
.𝗵𝗶𝗱𝗲𝘁𝗮𝗴
.𝗲𝘃𝗲𝗿𝘆𝗼𝗻𝗲
.𝘄𝗲𝗹𝗸𝗼𝗺
.𝘄𝗲𝗹𝗰𝗼𝗺𝗲
.𝘄𝗲𝗹𝗰𝗼𝗺
.𝘀𝗲𝘁𝘄𝗲𝗹𝗰𝗼𝗺𝗲
.𝘀𝗲𝘁𝘄𝗲𝗹𝗸𝗼𝗺
.𝘀𝗲𝘁𝘄𝗲𝗹𝗰𝗼𝗺

𝗢𝗪𝗡𝗘𝗥 𝗠𝗘𝗡𝗨

.𝗰𝗿𝗲𝗮𝘁𝗲-𝗴𝗿𝗼𝘂𝗽
.𝗴𝗿𝗼𝘂𝗽-𝗷𝗼𝗶𝗻
.𝗺𝘂𝗹𝘁𝗶𝗽𝗹𝗲𝗰𝗹𝗶𝗻𝘁
.$
.𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁
.𝗯𝗿𝗼𝗮𝗱𝗰𝗮𝘀𝘁𝗴𝗰
.𝗯𝗰𝗴𝗰
.𝗰𝗹𝗲𝗮𝗿𝗮𝗹𝗹
.𝘀𝗲𝘁𝘂𝗶
.𝗯𝗹𝗼𝗰𝗸𝗹𝗶𝘀𝘁

𝗨𝗦𝗘𝗟𝗘𝗦𝗦 𝗠𝗘𝗡𝗨

.𝘄𝗲𝗹𝗸𝗼𝗺
.𝘄𝗲𝗹𝗰𝗼𝗺𝗲
.𝘄𝗲𝗹𝗰𝗼𝗺
.𝘀𝗲𝘁𝘄𝗲𝗹𝗰𝗼𝗺𝗲
.𝘀𝗲𝘁𝘄𝗲𝗹𝗸𝗼𝗺
.𝘀𝗲𝘁𝘄𝗲𝗹𝗰𝗼𝗺

𝗜𝗠𝗔𝗚𝗘 𝗠𝗘𝗡𝗨

.𝗽𝗶𝗻𝘁𝗲𝗿𝗲𝘀𝘁
.𝗮𝗹𝗽𝗵𝗮𝗰𝗼𝗱𝗲𝗿𝘀
.𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿𝗰𝗮𝘃𝗲
.𝗴𝗶𝗺𝗮𝗴𝗲
.𝗴𝗼𝗼𝗴𝗹𝗲𝗶𝗺𝗮𝗴𝗲
.𝘀𝗲𝗮𝗿𝗰𝗵𝗶𝗺𝗮𝗴𝗲
.𝘄𝗮𝗹𝗹𝗽𝗮𝗽𝗲𝗿
.𝗴𝗮𝗺𝗯𝗮𝗿𝗵𝗱
.𝗽𝗶𝘅𝗶𝘃
.𝘃𝗲𝗰𝘁𝗼𝗿
.𝘃𝗲𝗰𝘁𝗼𝗿𝘀𝘁𝗼𝗰𝗸
.𝗺𝗶𝗹𝗳
.𝘄𝗮𝗶𝗳𝘂
.𝗵𝘂𝘀𝗯𝘂
.𝗰𝗼𝘀𝗽𝗹𝗮𝘆
.𝗽𝗽𝗰𝗽
.𝗽𝗽𝗰𝗼𝘂𝗽𝗹𝗲

𝗥𝗔𝗡𝗗𝗢𝗠 𝗠𝗘𝗡𝗨

.𝗺𝗶𝗹𝗳
.𝘄𝗮𝗶𝗳𝘂
.𝗵𝘂𝘀𝗯𝘂
.𝗰𝗼𝘀𝗽𝗹𝗮𝘆
.𝗸𝗮𝘁𝗮𝗴𝗮𝗹𝗮𝘂
.𝗾𝘂𝗼𝘁𝗲𝘀
.𝗺𝗼𝘁𝗶𝘃𝗮𝘀𝗶
.𝗺𝗲𝗺𝗲
.𝗳𝗺𝘆𝗹𝗶𝗳𝗲
.𝗳𝗺𝗹

𝗜𝗡𝗙𝗢 𝗠𝗘𝗡𝗨

.𝗰𝗼𝘃𝗶𝗱𝗶𝗻𝗱𝗼
.𝗶𝗻𝗳𝗼𝗴𝗲𝗺𝗽𝗮
.𝘀𝗰
.𝘀𝗰𝗿𝗶𝗽𝘁
.𝗰𝗮𝗿𝗮𝗽𝗲𝗻𝗴𝗴𝘂𝗻𝗮𝗮𝗻
.𝗴𝗼𝗼𝗴𝗹𝗲
.𝗴𝘀𝗲𝗮𝗿𝗰𝗵
.𝘀𝘀𝗲𝗮𝗿𝗰𝗵
.𝘀𝘁𝗶𝗸𝘀𝗲𝗮𝗿𝗰𝗵
.𝗵𝗮𝗽𝗽𝘆𝗺𝗼𝗱
.𝘁𝘁𝘀𝗲𝗮𝗿𝗰𝗵

𝗜𝗦𝗟𝗔𝗠𝗜𝗖 𝗠𝗘𝗡𝗨

.𝗮𝘀𝗮𝗺𝗮𝘂𝗹𝗵𝘂𝘀𝗻𝗮
.𝗱𝗼𝗮𝘀𝗲𝗵𝗮𝗿𝗶𝗮𝗻
.𝗾𝘂𝗿𝗮𝗻
.𝗿𝗮𝗻𝗱𝗼𝗺𝗾𝘂𝗿𝗻

𝗠𝗔𝗞𝗘𝗥 𝗠𝗘𝗡𝗨

.𝘀𝘁𝗶𝗰𝗸𝗲𝗿
.𝘀𝘁𝗶𝗰𝗸𝗲𝗿
.𝘁𝗼𝗶𝗺𝗴
.𝘀𝗸𝘆𝘁𝗲𝘅𝘁
.𝗴𝗹𝗶𝘁𝗰𝗵
.𝗻𝘂𝗹𝗶𝘀

𝗡𝗘𝗪𝗦 𝗠𝗘𝗡𝗨

.𝗮𝗻𝘁𝗮𝗿𝗮𝗻𝗲𝘄𝘀
.𝗯𝗯𝗰𝗻𝗲𝘄𝘀
.𝗰𝗻𝗯𝗰𝗻𝗲𝘄𝘀
.𝗰𝗻𝗻𝗻𝗲𝘄𝘀
.𝗱𝗮𝗶𝗹𝘆𝗻𝗲𝘄𝘀
.𝗱𝗲𝘁𝗶𝗸𝗻𝗲𝘄𝘀
.𝗳𝗮𝗷𝗮𝗿𝗻𝗲𝘄𝘀
.𝗶𝗻𝗱𝗼𝘇𝗼𝗻𝗲𝗻𝗲𝘄𝘀
.𝗸𝗼𝗺𝗽𝗮𝘀𝗻𝗲𝘄𝘀
.𝗸𝗼𝗻𝘁𝗮𝗻𝗻𝗲𝘄𝘀

𝗢𝗧𝗛𝗘𝗥 𝗠𝗘𝗡𝗨

.𝘀𝗽𝗲𝗲𝗱
.𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲
.𝗼𝘄𝗻𝗲𝗿𝗯𝗼𝘁
.𝘀𝗻𝗸
.𝗱𝗼𝗻𝗮𝘀𝗶
.𝗱𝗼𝗻𝗮𝘁𝗲
.𝗿𝗲𝗽𝗼𝗿𝘁
.𝗹𝗮𝗽𝗼𝗿𝗸𝗮𝗻
.𝗺𝗲𝗻𝘁𝗶𝗼𝗻
.𝘁𝗮𝗴
.𝗿𝘂𝗻𝘁𝗶𝗺𝗲
.𝗶𝗳𝗼
.𝗱𝗲𝗹
.𝗱𝗲𝗹𝗲𝘁𝗲
.𝗴𝗲𝘁𝗿𝗲𝗽𝗹𝘆
.𝗾

𝗥𝗔𝗡𝗗𝗢𝗠 𝗧𝗔𝗚

.𝗳𝘂𝗿𝗿𝘆
.𝗴𝗮𝘆
.𝘀𝘁𝗿𝗲𝘀𝘀
.𝗷𝗮𝗱𝗶𝗮𝗻
.𝗴𝗲𝗻𝘁𝗲𝗻𝗴
.𝗰𝗮𝗻𝘁𝗶𝗸
.𝗽𝗱𝗸𝘁
.𝗷𝗲𝗹𝗲𝗸
.𝗯𝘂𝗿𝗶𝗸
.𝘀𝗵𝗼𝗹𝗲𝗵
.𝗳𝗮𝗻𝗮𝘁𝗶𝗸
.𝗸𝘂𝗿𝘂𝘀
.𝗴𝗲𝗺𝘂𝗸

𝗦𝗧𝗔𝗟𝗞 𝗠𝗘𝗡𝗨

.𝗴𝗶𝘁𝗵𝘂𝗯𝘀𝘁𝗮𝗹𝗸
.𝗶𝗴𝘀𝘁𝗮𝗹𝗸
.𝘁𝗶𝗸𝘁𝗼𝗸𝘀𝘁𝗮𝗹𝗸

𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨

.𝗶𝗻𝘀𝗽𝗲𝗰𝘁
.𝗶𝗻𝘀𝗽𝗲𝗰𝘁𝗴𝗰
.𝘀𝗵𝗼𝘁𝗿𝘂𝗿𝗹
.𝘁𝗶𝗻𝘆𝘂𝗿𝗹
.𝘁𝗿𝗮𝗻𝘀𝗹𝗮𝘁𝗲
.𝗴𝗲𝗻𝗽𝗮𝘀𝘀𝘄𝗼𝗿𝗱
.𝗽𝘄𝗴𝗲𝗻𝗮𝗿𝗮𝘁𝗼𝗿
.𝘀𝘀
.𝘀𝘀𝘄𝗲𝗯


𝗣𝗢𝗪𝗘𝗥𝗗 𝗕𝗬 𝗭𝗘𝗗 𝗕𝗢𝗧𝗩7
𝗖𝗥𝗘𝗔𝗧𝗘𝗗 𝗕𝗬 𝗜𝗠𝗔𝗦𝗛 𝗡𝗜𝗗𝗨𝗦𝗛𝗔
wa.me/94786705379
ENJOY THE FAST MOMENTS
`
buttons = [{buttonId:".donate", buttonText:{displayText:"DONATE TO OWNER"},type:1}]
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
  txxt = `*HELLO I AM ZED WHATSAPP BOT MY CREATOR IS DIWAN KAWISHKA*

*THANCK FOR USEING THIS BOT😒࿔⃝༒⃝❤️᭄*

*OWNER NUMBER* - wa.me/94786705379

*GITHUB* - COMING SOON

*WHTSAPP GROUP* - https://chat.whatsapp.com/J62y5LEOhwC1LZ6aZZPAwk

CREATOR , @${botinfo.ownerNumber[0]}.`
  client.reply(msg, txxt, {contextInfo:{mentionedJid:functions.parseMention(txxt)}})
});

cmd.on("donate",["donasi","donate"],["other"],async(msg, res) => {
  dmsg = `_*DONATE FOR BOT ${botinfo.botname}*_

*- For Owner* 
https://chat.whatsapp.com/J62y5LEOhwC1LZ6aZZPAwk
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

CREATED BY DIWAN KAWISHKA
Bot Name : KENTON BOT
Library : Baileys
Language : JavaScript
Total Command : ${total}
Total User : ${Object.keys(userDb).length}
Runtime : ${data.day} Day ${data.hours} Hours ${data.minutes} Minutes ${data.seconds} Second

Group : https://chat.whatsapp.com/J62y5LEOhwC1LZ6aZZPAwk

Special thanks to :
• wa.me/94786705379 (KENTON OWNER)`
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
