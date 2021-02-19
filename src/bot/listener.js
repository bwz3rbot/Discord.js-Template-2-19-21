/* Listener */
module.exports =
    async (message) => {
        /* 
        https://vindicatorbot.com/commands/
        */
        const command = require('../util/parse')(message.content);
        if (command) {
            /* Admin Commands */
            if (require('../util/isAdmin')(message.member)) {
                switch (command.directive) {}
            }

            /* All User Commands */
            switch (command.directive) {
                /* Grant Currency */
                case ('help'):
                    await require('../service/help')(message);
                    break;
            }

        }

    }