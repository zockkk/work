const { mainConnection } = require("../databaseConnection");

module.exports.getDepartament = (idDepartment) => {
    return mainConnection('pers.Departments as dep')
    .select([
        'dep.id as id', 'dep.name_department as name'
    ])
    .where('dep.id', idDepartment)
    .first()
}