const studentRepo = require("../repositories/students.tasck.repo")
const groupRepo = require("../repositories/gruops.tasck.repo")
const departamentRepo = require("../repositories/departament.task.repo")

module.exports.getInfoStudents = (idGroup) => {
    return studentRepo.getStudentsByGroup(idGroup).then(students => {
        return students
    })
}

module.exports.getInfoGroup = (idDepartment) => {
    return groupRepo.getGroupsByDep(idDepartment).then(gruops => {
        return gruops
    })
}

module.exports.getInfoDep = () => {
    return departamentRepo.getDepartament().then(dep => {
        return dep
    })
}

module.exports.getGroupsReportData = async (idDepartment) => {
    // Dep info
    const departamentInfo = await departamentRepo.getDepartament(idDepartment)
    const groups = await groupRepo.getGroupsByDep(departamentInfo.id)
    const groupsRes = []
    for (let group of groups){
        const students = await studentRepo.getStudentsByGroup(group.id)
        groupsRes.push({
            "group": group,
            "students": students
        })
    }
    return {
        departament: departamentInfo,
        groups: groupsRes
    }
}