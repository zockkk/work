const { mainConnection } = require("../databaseConnection");

module.exports.getAllStudents = () => {
    return mainConnection('education.students as student')
    .select([
        'student.firstname'
    ])
}