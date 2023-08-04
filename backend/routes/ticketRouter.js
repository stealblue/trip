const express = require("express");
const { findVacancy, createTicket, test } = require('../controllers/ticketController');

const ticket = express.Router();

ticket.get("/findVacancy", findVacancy);
ticket.post('/createTicket', createTicket);

module.exports = ticket;