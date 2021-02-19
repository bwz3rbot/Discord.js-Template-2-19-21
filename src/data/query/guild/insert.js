module.exports =
    async (id) => {
        await global.pool.query(
            `INSERT INTO guild
            (id)
            VALUES
            ($1)
            ON CONFLICT id
            DO NOTHING;`, [id]
        );
    }