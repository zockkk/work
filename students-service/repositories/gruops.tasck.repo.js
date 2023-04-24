const { mainConnection } = require("../databaseConnection");

module.exports.getGroupsByDep = async (idDepartment) => {
    return mainConnection('education.study_groups as group')
        .select([
            'group.id as id',
            'group.nickname'
        ]).where('group.id_faculty', idDepartment)
}