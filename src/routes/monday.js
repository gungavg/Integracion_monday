const router = require('express').Router();
const { authenticationMiddleware } = require('../middlewares/authentication');
const mondayController = require('../controllers/monday-controller');
const concatenarController= require('../controllers/concatenar-controller')

router.post('/monday/execute_action', authenticationMiddleware, mondayController.executeAction);
router.post('/monday/get_remote_list_options', authenticationMiddleware, mondayController.getRemoteListOptions);
router.post('/monday/execute_concat', authenticationMiddleware, concatenarController.executeAction);

module.exports = router;
