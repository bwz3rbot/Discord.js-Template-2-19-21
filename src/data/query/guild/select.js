/* Select [guild] */
module.exports =
    async (id) => {
        return global.pool.query(
            `SELECT * FROM guild
            WHERE
            id = $1;`, [id]
        );
    }