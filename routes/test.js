var express = require('express');
var router = express.Router();

var test_controller = require('../controllers/testController');

// GET request for creating Test. NOTE This must come before route for id (i.e. display test).
router.get('/test/create', test_controller.test_create_get);

// POST request for creating Test.
router.post('/test/create', test_controller.test_create_post);

// GET request to delete Test.
router.get('/test/:id/delete', test_controller.test_delete_get);

// POST request to delete Test.
router.post('/test/:id/delete', test_controller.test_delete_post);

// GET request to update Test.
router.get('/test/:id/update', test_controller.test_update_get);

// POST request to update Test.
router.post('/test/:id/update', test_controller.test_update_post);

// GET request for one Test.
router.get('/test/:id', test_controller.test_detail);

// GET request for list of all Tests.
router.get('/tests', test_controller.test_list);

module.exports = router;
