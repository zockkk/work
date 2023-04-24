const { getAllStudents, getAllInfo, insertStudents } = require('../controllers/students.controller')

const studentRouter = require('express').Router()
const studgroupRouterTasck = require('express').Router()

studentRouter.get('/', getAllStudents)
studgroupRouterTasck.get('/', getAllInfo)
studentRouter.post('/insertStudent', insertStudents)


module.exports.studentRouter = studentRouter
module.exports.studgroupRouterTasck = studgroupRouterTasck


