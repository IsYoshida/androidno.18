const ownerNumber = ["557491143362@s.whatsapp.net"] 
// mude somente o numero e não tire o @s.whatsapp.net

const OriginalOwner = '557491143362' 
// mude para seu numero

const gimagenotregister = true
// quando não há comando registrado o bot procura no google image

const sgooglenotregister = true
// quando não há comando registrado o bot procura uma pesquisa no google

const msgwelcomeimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nDigite ${prefix}menu no chat privado para ver os comandos.`
}
//Texto de boas vindas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const byemsgimg = (numero, groupname) => {
    return `Adeus ${numero}`
}
//Texto de despedidas na imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const menumsgimg = (numero, groupname) => {
    return `Seja bem-vindo ${numero}\n\nAo menu da Android N° 18`
}
//Texto no menu da imagem quando welcome esta ativado
//Obs: não coloque o texto longo para a imagem não sumir

const apikeyimgbb = '8f4ba956a5d1a5ad9d0e9cd577e2327f'
// sua key do imgbb para ativar o antiporn e mais alguns comando que necessita de baixar imagem

const cr = 'Android N° 18\n' 
// texto do simbolo de verificado

const prefix = '!' 
// prefixo

const blockedmsg = ''
// mensagem quando alguem bloqueado solicita um comando

const blockedcmdmsg = '*🚫Este comando esta bloqueado contate o propitetário do bot para saber o motivo🚫*'
// mensagem quando alguem solicita um comando bloqueado 

// MENSAGENS DE BAN

const banmsgtype = '*Adeus 👋🏻*'
// mensagem de ban no anti tipos de mensagem

const adminmsgtype = '*Você é um admin, não vou te remover por isso, mas saiba que não acho isso legal.*'
// mensagem de quando adm manda tipos de mensagens proibidas

const banmsgporn = 'Enviando porn aqui mesmo sabendo que não pode... Adeus!'
// mensagem de ban no antiporn

const adminmsgporn = '*Você é um admin e deveria ter mais respeito quanto a isso, espero que isso não se repita!*'
// mensagem de quando adm manda porn com antiporn ativado

const banmsglink = 'Link aqui não. Adeus 👋🏻...'
// mensagem de ban no antilink

const adminmsglink = 'Isso é um link... Ah é, verdade, você é um admin e só por isso não irei te remover do grupo.'
// mensagem de quando adm manda link

const adminmsgpalavra = 'Essa palavra está na minha lista de palavras proíbidas.'
// mensagem de quando adm manda uma palavra proibida pelo bot

const banmsgpalavra = 'Essa palavra está na minha lista de palavras proíbidas. Adeus! 👋🏻'
// mensagem de ban quando manda uma palavra proibida pelo bot

const qnttravahardroleta = 0
// quantidade de travas que mandam no roleta russa hard
// Obs: O valor é multiplicado por 12 ent tenha cuidado

// MENSAGENS DE BOM DIA BOA TARDE E BOA NOITE

const linkimgday = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzipqWNS5S9rmcAGoahGLen47K7Q-dcDhAOw&usqp=CAU'
const textmsgday = 'Bom dia ☕ ><'
// link e mensagem de bom dia

const linkimgeve = 'https://i.pinimg.com/originals/6b/df/29/6bdf2959c159aac610de39a06b5589c8.jpg'
const textmsgeve = `Boa tarde ☀️ ><`
// link e mensagem de boa tarde

const linkimgnig = 'https://i.pinimg.com/originals/d3/ac/69/d3ac692dab4fc3a68adb8df93cc05615.jpg'
const textmsgnig = '️Boa noite ☕ ><'
// link e mensagem de boa noite 

// MENSAGENS DE ERRO

const msgerr = 'Deu erro, tente novamente :/'
// mensagem de erro

const notregister = `*Comando não registrado, escreva ${prefix}menu para ver a lista de comandos*`

// MENSAGENS DE AUTOREPLY

const botlindo = '><'
const linkbotlindo = 'https://i.pinimg.com/originals/03/da/69/03da699929be5066f998e4c5a3a8270b.jpg'
const botfeio = 'Tu parece um sirgueijo, um caranguejo amassado 😡'
const cadebot = 'Me chamou onii-chan 👉👈?'
const botfdp = 'Te foder rapaz, te deitar na porrada quando tiver dormindo'
const botgostoso = '><'
const botfofo = 'owo'
const botbaianor = 'Convidei sua placa-mãe pra minha rede seu corno'
const botcorno = 'Falou o jogador de Fogo Livre'
const botputa = 'Senhora sua mãe 😡'
const botgay = 'Gay é você, seu espremedor de linguiça'
const botviado = 'Viado é você, seu pindola de mercadinho'
const numbotfeio = 'Falou o dragão'
const robô = 'Não sei de onde que você tirou isso'
const android18 = '😊'
const linkandroid18 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSb_SLOKVUiq9kYxn3sHkJmGYHI7E--WtqU3w&usqp=CAU'
// KEYS

// MENSAGENS DE EXCLUSIVIDADE
let mess = {
    wait: '⌛ Aguarde um pouco... ⌛',
    success: '✔️ Sucesso! ✔️',
    error: {
        stick: '❌ Falha, ocorreu um erro ao converter a imagem em sticker ❌',
        Iv: '❌ Link inválido ❌'
    },
    only: {
        group: '❌ Este comando só pode ser usado em grupos! ❌',
        ownerG: '❌ Este comando só pode ser usado pelo proprietário do grupo! ❌',
        ownerB: '❌ Este comando só pode ser usado pelo número proprietário! ❌',
        admin: '❌ VOCÊ NÃO É UM ADMINISTRADOR, ENTÃO NÃO VOU OBEDECER ESSE COMANDO ❌',
        Badmin: '❌ Este comando só pode ser usado quando o bot se torna administrador! ❌'
    }
}

// CONTATO DO CRIADOR

const vcard = 'BEGIN:VCARD\n' 
+ 'VERSION:3.0\n' 
+ 'FN:🌙 Haru\n' 
+ 'ORG:Haru;\n' 
+ 'TEL;type=CELL;type=VOICE;waid=557491143362:+55 74 9114-3362\n' 
+ 'END:VCARD'
//vcard do propietário, mude os numeros de acordo com o formato que
//ele corresponde


// Nem ouse mexer aqui se n quiser que de erro
exports.menumsgimg = menumsgimg
exports.gimagenotregister = gimagenotregister
exports.sgooglenotregister = sgooglenotregister
exports.byemsgimg = byemsgimg
exports.msgwelcomeimg = msgwelcomeimg
exports.notregister = notregister
exports.qnttravahardroleta = qnttravahardroleta
exports.blockedcmdmsg = blockedcmdmsg
exports.blockedmsg = blockedmsg
exports.banmsgpalavra = banmsgpalavra
exports.adminmsgpalavra = adminmsgpalavra
exports.apikeyimgbb = apikeyimgbb
exports.linkbotlindo = linkbotlindo
exports.botlindo = botlindo
exports.botfeio = botfeio
exports.cadebot = cadebot
exports.botfdp = botfdp
exports.botgostoso = botgostoso
exports.botfofo = botfofo
exports.botbaianor = botbaianor
exports.botcorno = botcorno
exports.botputa = botputa
exports.botgay = botgay
exports.botviado = botviado
exports.numbotfeio = numbotfeio
exports.robô = robô
exports.linkandroid18 = android18
exports.android18 = android18
exports.linkimgday = linkimgday
exports.textmsgday = textmsgday
exports.textmsgnig = textmsgnig
exports.linkimgnig = linkimgnig
exports.textmsgeve = textmsgeve
exports.linkimgeve = linkimgeve
exports.adminmsgtype = adminmsgtype
exports.adminmsgporn = adminmsgporn
exports.adminmsglink = adminmsglink
exports.banmsglink = banmsglink
exports.banmsgporn = banmsgporn
exports.banmsgtype = banmsgtype
exports.msgerr = msgerr
exports.mess = mess
exports.prefix = prefix
exports.cr = cr
exports.vcard = vcard
exports.OriginalOwner = OriginalOwner
exports.ownerNumber = ownerNumber