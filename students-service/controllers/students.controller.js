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

module.exports.insertStudents = async (req, res) => {
    const data = req.body
    if (!data){
        res.status(400).json({
            error: "Нет тела запроса"
        })
        return
    }
    if (!data.firstname && typeof data.firstname !== "string"){
        res.status(400).json({
            error: "Не верно указано имя"
        })
        return
    }
    if (!data.lastname && typeof data.lastname !== "string"){
        res.status(400).json({
            error: "Не верно указана фамилия"
        })
        return
    }
    if (!data.birthday && typeof data.birthday !== "string"){
        res.status(400).json({
            error: "Не верно указана дата рождения"
        })
        return
    }
    if (!data.gender && typeof data.gender !== "string"){
        res.status(400).json({
            error: "Не верно указан пол"
        })
        return
    }
    try {
        await studentService.insertStudent(data)
        res.status(200).end()
    } catch(error){
        res.status(500).json({
            error: "Произошла ошибка: " + error
        })
    }
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
