const studentRepo = require('../repositories/student.repo')

module.exports.getAllStudents = () => {
    return studentRepo.getAllStudents().then(students => {
        return students
    }).catch(error => {throw new Error(error)})
}

module.exports.insertStudent = async ({firstname, lastname, birthday, gender, middlename}) => {
    return studentRepo.insertStudent({firstname, lastname, birthday, gender, middlename})
} 