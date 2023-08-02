const express = require("express");
const { findVacancy, createTicket } = require('../controllers/ticketController');

const ticket = express.Router();

ticket.get("/findVacancy", findVacancy);
ticket.post('/createTicket', createTicket);

module.exports = ticket;