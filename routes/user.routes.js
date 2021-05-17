const { Router } = require('express');
const { userGet,
        addUser,
        deleteUser,
        updateUser,
        getUsers } = require('../controllers/user.controllers');

const router = Router();

router.get('/users', userGet);
router.post('/addUsers', addUser);
router.delete('/deleteUsers:id', deleteUser);
router.put('/updateUser:id', updateUser);
router.get('/getUser', getUsers);


module.exports = router;