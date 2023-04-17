const express = require('express');
const router = express.Router();

const {check} = require('express-validator');

const placesController = require('../controllers/places-controller');
const checkAuth = require('../middleware/check-auth');

router.get('/:pid',placesController.getPlacesById);

router.get('/user/:uid',placesController.getPlacesByUserId);

router.use(checkAuth);

router.post('/',[
    check('title').notEmpty(),
    check('description').isLength({min: 5}),
    check('address').notEmpty(),
    check('creator').notEmpty()

],placesController.createPlace);

router.patch('/:pid',[
    check('title').notEmpty(),
    check('description').notEmpty()
],placesController.updatePlace);
 
router.delete('/:pid',placesController.deletePlace);

module.exports = router;