const welcome = (number, groupname) => {
    return `*Olá @${number}. Sejá bem-vindo(a) ao grupo${groupname}, leia as regras na descrição, espero que se divirta :)*`
}
exports.welcome = welcome

const bye = (number) => {
    return `Adeus @${number}.`
}
exports.bye = bye