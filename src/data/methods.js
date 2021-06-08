module.exports = {
    init: require('./init'),
    guild: {
        upsert: require('./query/guild/insert'),
        select: require('./query/guild/select')
    }
}