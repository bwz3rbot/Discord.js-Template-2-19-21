/* Update [guild] */
module.exports = {
    log_channel: async (channel, guild) => {
        return global.pool.query(
            `UPDATE guild
            SET
            log_ch_id = $1
            WHERE
            id = $2;`, [channel, guild]
        );
    },
    rep_channel: async (channel, guild) => {
        console.log('setting rep channel');
        return global.pool.query(
            `UPDATE guild
            SET
            rep_channel = $1
            WHERE
            id = $2;`, [channel, guild]
        );
    },
    search_channel: async (channel, guild) => {
        return global.pool.query(
            `UPDATE guild
            SET
            search_ch_id = $1
            WHERE
            id = $2;`, [channel, guild]
        );
    },
    panel: async (panel, guild) => {
        return global.pool.query(
            `UPDATE guild
            SET
            search_panel_id = $1
            WHERE
            id = $2;`, [panel, guild]
        );
    },
}