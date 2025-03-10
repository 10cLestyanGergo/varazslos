import express from 'express'
import * as varazsloControls from '../controllers/varazsloControllers.js'

const router =express.Router()

router.get('/varazslo',varazsloControls.getAllVarazslo)
router.get('/varazslo/:id',varazsloControls.getVarazsloById)
router.post('/varazslo',varazsloControls.createVarazslo)
router.put('/varazslo/:id',varazsloControls.updateVarazslo)
router.delete('/varazslo/:id',varazsloControls.deleteVarazslo)

export default router