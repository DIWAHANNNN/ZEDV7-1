
cmd.on('menu-cmd', ['menu','help','command','z'], [], async (msg, {
    prefix,
    client,
    query,
    usedPrefix
}) => {
    let {
        list,
        body,
        upper,
        down,
        line,
        head
    } = botinfo.unicode
    let type = query && query.toLowerCase()
    let lama = []
    if (!cmd._tags[type]) {
    let sections = []
    let list_now = 0
    let list_nitip = {}
    for (let b in cmd._tags){
    let tit = list_now == 0 ? `${upper}${list} ${list}${line.repeat(13)}${list} ${list_now+1} ${list}${line.repeat(13)}${list}`:`${body}${list} ${list}${line.repeat(13)}${list} ${list_now+1} ${list}${line.repeat(13)}${list}`
    sections.push({
    "title": tit,
    "rows": [{
            "title": `${b[0].toUpperCase()+b.slice(1).toLowerCase()} Menu`,
            "rowId":prefix[0]+`menu${b}`,
            "description": 'ZBOT V7 MENU '+ b[0].toUpperCase()+b.slice(1).toLowerCase()
          }
        ]
      })
    list_nitip[b] = prefix[0]+`menu${b}`
    list_now++
    }
    return client.sendMessageFromContent(msg.from,{
  "listMessage": {
    "title": `*𝗛𝗘𝗟𝗟𝗢 𝗕𝗥𝗢𝗧𝗛𝗘𝗥 ${msg.sender.name}!*`,
    "description": `ZED BOT V7 ප්‍රධාන මෙනුව`,
    "footerText": `HELLO I AM ZED WHATSAPP BOT V7 VERSION(MY CREATOR IS IMASH NIDUSHA)`,
    "buttonText": "SELLECT",
    "listType": "SINGLE_SELECT",
    sections
  }
})
    }
    for (let a of cmd._tags[type]) {
    if (!a.enable) continue
    let prek = a.usedPrefix ? prefix[0] : ''
    let param = a.param? a.param : ''
    lama = lama.concat(a.command.map(value => prek + value+ ` ${param}`))
    }
    
    let hasil = `${head}${line.repeat(4)}${list} *${type[0].toUpperCase()+type.slice(1).toLowerCase()} Menu*\n`
    for (let b of lama) {
        hasil += list + ` ${b.toLowerCase()}\n`
    }
    
    hasil = hasil.trim()+`\n${head}${line.repeat(2)}${list}`

    buttons = [{
        buttonId: `.info`,
        buttonText: {
        displayText: 'OWNER'
        },
        type: 1
    },{
        buttonId: prefix[0]+`snk`,
        buttonText: {
        displayText: 'BOT INFO'
        },
        type: 1
    }]
   let locationMessage = {jpegThumbnail:logo.buffer}
   used_logo = (used_logo+1)%3
   let buttonsMessage = {
        contentText: hasil,
        footerText: botinfo.footerText + " | " + Object.keys(userDb).length + " User Registered",
        buttons,
        headerType: 1
    }
return client.sendMessageFromContent(msg.from,{buttonsMessage})
})
