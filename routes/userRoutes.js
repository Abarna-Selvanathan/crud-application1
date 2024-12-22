const express = require('express');
const { registerUser, loginUser, getUserProfile, getUserProfiles, updateUser, deleteUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);       
router.get('/:id', getUserProfile); 
router.get('/', getUserProfiles); 
router.put('/:id', updateUser);  
router.delete('/:id', deleteUser)

module.exports = router;
