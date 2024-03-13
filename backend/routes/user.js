const userController = require('../controllers/userControllers')
const middlewareController = require('../controllers/middlewareControllers')

const router = require('express').Router()

// GET ALL USERS
router.get('/', middlewareController.verifyToken, userController.getAllUsers)

// DELETE USER
router.delete('/:id', middlewareController.verifyTokenAndAdminAuth, userController.deleteUser)

module.exports = router
