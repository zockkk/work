const { getAllStudents, getAllInfo } = require('../controllers/students.controller')

const studentRouter = require('express').Router()
const studgroupRouterTasck = require('express').Router()

studentRouter.get('/', getAllStudents)
studgroupRouterTasck.get('/', getAllInfo)


module.exports.studentRouter = studentRouter
module.exports.studgroupRouterTasck = studgroupRouterTasck

