const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = true //auto kick spammer (true to on, false to off)
global.autoswview = true //auto status/story view
global.antiswview = false //auto status/story view


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['94752533734'] //ur owner number
global.ownernomer = "94752533734" //ur owner number2
global.ownername = "MR.DILA" //ur owner name
global.ytname = "https://youtube.com/@dilmina269?si=-G0JH64egHswDkCw" //ur yt chanel name
global.socialm = "GitHub: dilalakiya" //ur github or insta name
global.location = "India, Mizoram, Aizawl" //ur location

//new
global.botname = "SIMI-MD"
global.ownernumber = '94752533734'
global.ownername = 'MR.DILA'
global.ownerNumber = ["94752533734@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@dilmina269"
global.websitex = "https://youtube.com/@dilmina269"
global.wagc = "https://chat.whatsapp.com/E3KGUSb1RXH4lfUPm1HtDs"
global.themeemoji = '😎'
global.wm = "DILA."
global.botscript = 'https://github.com/UDMODZ' //script link
global.packname = "Sticker By"
global.author = "DILA\n\n"
global.creator = "94752533734@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./SIMIMedia/theme/similogo.png") //ur thumb pic
global.log0 = fs.readFileSync("./SIMIMedia/theme/similogo.png") //ur logo pic
global.err4r = fs.readFileSync("./SIMIMedia/theme/similogo.png") //ur error pic
global.thumb = fs.readFileSync("./SIMIMedia/theme/similogo.png") //ur thumb pic
global.defaultpp = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'Here you go!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
