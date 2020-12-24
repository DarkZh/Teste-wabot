const help = (prefix) => {
	return `> *Comandos Para Figurinhas* <
comando : *${prefix}sticker* ou *${prefix}stiker*
desc : converter imagem/gif/vídeo em adesivo
uso : responder imagem/gif/vídeo ou enviar imagem/gif/vídeo com legenda\n
comando : *${prefix}sticker nobg* ou *${prefix}stiker nobg*
desc : converter imagem em adesivo removendo o fundo
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}toimg*
desc : converter adesivo em imagem
uso : adesivo de resposta\n
comando : *${prefix}tsticker* ou *${prefix}tstiker*
desc : converter texto em adesivo
uso : *${prefix}tsticker seu texto aqui*\n
> *Memes Comandos* <
comando : *${prefix}meme*
desc : imagens aleatórias de meme [inglês]
uso : basta enviar o comando\n
Comando : *${prefix}memeindo*
desc : imagens aleatórias de meme [indo]
uso : basta enviar o comando\n
> *Outros Comandos* <
comando : *${prefix}gtts*
desc : converter texto em fala/áudio
uso : *${prefix}gtts [cc] [text]*\nexemplo : *${prefix}gtts ja On2-chan*\n
comando : *${prefix}loli*
desc : imagens aleatórias de loli
uso : basta enviar o comando\n
comando : *${prefix}nsfwloli*
desc : imagens aleatórias de nsfw loli
uso : basta enviar o comando\n
comando : *${prefix}url2img*
desc : tirar screenshots da web
uso : *${prefix}url2img [tipe] [url]*\n
comando : *${prefix}simi*
desc : sua mensagem será respondida por simi
uso : *${prefix}simi sua mensagem*\n
comando : *${prefix}ocr*
desc : pegue o text na foto
uso : responder imagem ou enviar mensagem com legenda\n
comando : *${prefix}wait*
desc : pesquisar anime com imagem [ What Anime Is This/That ]
uso : responder imagem ou enviar imagem com legenda\n
comando : *${prefix}setprefix*
desc : redefinir prefixo
uso : *${prefix}setprefix [texto|opcional]*\nexemplo : *${prefix}setprefix ?*
nota : Este comando só pode ser usado pelo proprietário do bot\n
> *Comandos Grupo* <
comando : *${prefix}linkgroup*
desc : pegue o link do grupo
uso : basta enviar o comando\n
nota : só pode ser usado quando o bot se torna admin, e quem envia o comando é admin!\n
comando : *${prefix}tagall*
desc : marca todos os membros do grupo, incluindo administradores também
uso : basta enviar o comando\n
nota : Este comando só pode ser usado se você for um administrador do grupo\n
comando : *${prefix}simih*
desc : ative o modo simi no grupo
uso : *${prefix}simih 1* para ativar o modo simi e *${prefix}simih 0* para desativar o modo simi
nota : Este comando só pode ser usado se você for um administrador do grupo\n`
}

exports.help = help
