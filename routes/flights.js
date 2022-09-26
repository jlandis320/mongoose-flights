import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

// POST /movies
router.post('/', flightsCtrl.create)

// DELETE /flights/:id
router.delete("/:id", flightsCtrl.delete)

// GET /flights/:id
router.get("/:id", flightsCtrl.show)

// localhost:3000/movies/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

router.put("/:id", flightsCtrl.update)

export {
  router
}