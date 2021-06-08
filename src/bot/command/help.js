const embed = require('../../util/embed');
const commands = [{
    // Help
    name: 'help',
    description: 'This list of commands!'
}];
module.exports =
    async (message) => {
        let description = ``;
        for (const command of commands) {
            description = description.concat(
                `|\`${process.env.PREFIX}${command.name}\`| ${command.description}\n`);
        }
        await message.channel.send(await embed({
            title: `Commands List:`,
            description: description
        }));
    }