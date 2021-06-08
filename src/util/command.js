/* Build Args */
const build_args =
    (args) => {
        const argarray = new Map();
        args.forEach((arg) => {
            console.log("arg: ", arg);
            if (arg.includes(":")) {
                const a = arg.split(':');
                argarray.set(a[0], a[1]);
            } 
        });
        return argarray;
    }
const prefix = process.env.PREFIX || `+`;
module.exports =
    (message) => {
        message = message.trim();
        const pref = message.slice(0, prefix.length);
        if (pref != prefix) {
            return false;
        }
        const str = message.split(/ /g);
        if (str.length === 1) { // If no args, return command
            return {
                directive: str.slice(0, 1)[0].slice(prefix.length),
                args: new Map()
            }
        }

        const directive = str.slice(0, 1)[0].slice(prefix.length);
        const a = str.slice(1, str.length);
        const args = build_args(a);
        return {
            directive,
            args
        }
    }