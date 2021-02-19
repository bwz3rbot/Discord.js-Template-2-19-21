/* Is Member Admin? */
module.exports =
    (member) => member.hasPermission('ADMINISTRATOR');