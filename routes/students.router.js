const { getAllStudents } = require('../controllers/students.controller')

const studentRouter = require('express').Router()

studentRouter.get('/', getAllStudents)

module.exports.studentRouter = studentRouter