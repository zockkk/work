const { mainConnection } = require("../databaseConnection");

module.exports.getStudentsByGroup = async (idGroup) => {
    return mainConnection('education.students as student')
    .select([
        'student.firstname',
        'student.middlename',
        'student.lastname'
    ])
    .where('student.id', idGroup)
}