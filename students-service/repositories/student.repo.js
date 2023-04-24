const { mainConnection } = require("../databaseConnection");

module.exports.getAllStudents = () => {
    return mainConnection('education.students as student')
    .select([
        'student.firstname'
    ])
}

module.exports.insertStudent = ({firstname, lastname, birthday, gender, middlename}) => {
    return mainConnection.insert({firstname, lastname, birthday, gender, middlename: middlename ? middlename : undefined})
    .into('education.students')
}
