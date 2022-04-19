const express = require('express')
const router = express.Router()

const villagerController = require('../controllers').villager

router.get('/villager',villagerController.list) //going to this endpoint 'gets'/lists all villagers
router.get('/villager/:id',villagerController.getById) //gets villager by ID
router.post('/villager',villagerController.add)
router.put('/villager/:id',villagerController.update)
router.delete('/villager/:id',villagerController.delete)

module.exports = router