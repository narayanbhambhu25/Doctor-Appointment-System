const express = require("express");
const { loginController, registerController, authController,applyDoctorController,getAllNotificationController,deleteAllNotificationController, getAllDocotrsController, bookAppointmentController, bookingAvailabilityController, userAppointmentsController } = require('../controllers/userCtrl');
const authMiddleware = require("../middlewares/authMiddleware");

//router object

const router = express.Router()   // all the functionblity of Router will enclude in variavle router

//routes

//LOGIN || POST
router.post('/login' ,loginController);

//REGISTER || POST 
router.post('/register',registerController);

//Auth || POST
router.post("/getUserData", authMiddleware, authController);

//Apply Doctor || POST
router.post("/apply-doctor", authMiddleware, applyDoctorController);

//Notoification Doctor || POST
router.post("/get-all-notification", authMiddleware, getAllNotificationController);

//Notoification Doctor || POST
router.post("/delete-all-notification", authMiddleware, deleteAllNotificationController);

//GET ALL DOC
router.get("/getAllDoctors", authMiddleware, getAllDocotrsController);

// BOOK APPOINTMENT
router.post('/book-appointment',authMiddleware,bookAppointmentController);

//BOOKING AVAILABLITY
router.post('/booking-availbility',authMiddleware,bookingAvailabilityController);

// Appointment List
router.get('/user-appointments',authMiddleware,userAppointmentsController);

module.exports = router;