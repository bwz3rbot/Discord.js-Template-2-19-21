/* Build Args */
const buildArgs2 =
    (args) => {
        const argarray = [];
        args.forEach(arg => {
            let a = arg;
            if (arg.includes(":")) {
                const a = arg.split(':');
                argarray.push([a[0], a[1]]);
            } else {
                argarray.push([a]);
            }
        });
        return argarray;
    }

const buildArgs =
    (args) => {
        const argarray = [];
        let i = 0;
        for (i; i < args.length; i++) {
            argarray.push([args[i]]);
        }
        return argarray;
    }
const prefix = process.env.PREFIX;
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
                args: []
            }
        }

        const directive = str.slice(0, 1)[0].slice(prefix.length);
        const a = str.slice(1, str.length);
        const args = buildArgs(a);
        return {
            directive,
            args
        }
    }
