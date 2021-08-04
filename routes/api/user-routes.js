const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    addFriend,
    unaddFriend,
    deleteUser
} = require('../../controllers/user-controller');

// Sets up GET all and POST routes at /api/users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

// Sets up GET one, PUT, and DELETE routes at /api/users/:id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends/:friendId')
    .put(addFriend)
    .delete(unaddFriend);

module.exports = router;