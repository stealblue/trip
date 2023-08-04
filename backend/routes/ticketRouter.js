const express = require("express");
const { findVacancy, createTicket, listTickets } = require('../controllers/ticketController');

const ticket = express.Router();

ticket.get('/listTickets', listTickets);
ticket.get("/findVacancy", findVacancy);
ticket.post('/createTicket', createTicket);

module.exports = ticket;