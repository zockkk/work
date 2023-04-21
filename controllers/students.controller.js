const studentService = require('../services/student.service')
const educationServiceTasck = require('../services/education.tasck.service')


module.exports.getAllStudents = (req, res) => {
    studentService.getAllStudents().then(students =>{
        res.json({students})
    })
}

module.exports.getAllInfo = async (req,res) => {
    let idDepartment = req.query.idDepartment
    if (!idDepartment){
        res.status(400).json({
            error: "Не указан идентификатор департамента"
        })
        return
    }
    idDepartment = parseInt(idDepartment)
    const reportData = await educationServiceTasck.getGroupsReportData(idDepartment)
    res.json(reportData)
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
