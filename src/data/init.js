/* Init All Database Tables */
module.exports =
    async (skip) => {
        // Bind the pool to global variable
        process.env.PGHOST === 'localhost' ?
            require('./config/localpool') :
            require('./config/pool');

        // Init the tables
        if (!skip) {
            await require('./config/parent/guild')();
        }
    }