const studentRepo = require('../repositories/student.repo')

module.exports.getAllStudents = () => {
    return studentRepo.getAllStudents().then(students => {
        return students
    })
}