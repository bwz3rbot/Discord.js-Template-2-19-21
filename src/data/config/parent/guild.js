/* Guild */
module.exports =
    async () => {
        console.log("CREATE TABLE [guild]");
        await global.pool.query(
            `CREATE TABLE IF NOT EXISTS guild(
                id TEXT NOT NULL PRIMARY KEY
            );`
        );
    }