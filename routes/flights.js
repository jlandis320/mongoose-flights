import { Router } from 'express'
const router = Router()
import * as flightsCtrl from '../controllers/flights.js'

// GET /flights
router.get('/', flightsCtrl.index)

// GET /flights/new
router.get('/new', flightsCtrl.new)

// POST /
router.post('/', flightsCtrl.create)

// GET /flights/:id
router.get("/:id", flightsCtrl.show)

// localhost:3000/movies/:id/edit
router.get("/:id/edit", flightsCtrl.edit)

router.put("/:id", flightsCtrl.update)

router.post("/:id/tickets", flightsCtrl.createTicket)

router.post("/:id/meals", flightsCtrl.addToMeals)

// DELETE /flights/:id
router.delete("/:id", flightsCtrl.delete)


export {
  router
}