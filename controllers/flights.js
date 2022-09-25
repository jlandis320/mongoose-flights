import { Flight } from "../models/flight.js"

function newFlight(req, res) {
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index')
  })
  .catch(err => {
    console.log(err)
    res.redirect('/flights/index')
  })
}

export {
  newFlight as new,
  index
}
