const studentService = require('../services/student.service')

module.exports.getAllStudents = (req, res) => {
    studentService.getAllStudents().then(students =>{
        res.json({students})
    })
}



// 
function testFunction() {
    let list = []
    console.log(typeof list === 'object');
    if (1 && 2 || 3 != '3' || 2 !== 5 ) {

    }
    let y = "" // 0 null false undefined
    if (y !== undefined && y === 0) console.log('false');
}
