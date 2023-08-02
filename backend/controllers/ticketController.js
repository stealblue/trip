const { ticket, user } = require('../models/mysql');

exports.findVacancy = async (req, res) => {
  try {
    const { category, type, startPlace, endPlace, startDate, endDate } = req.query;
    const tickets = await ticket.findAll({
      where: {
        category,
        type,
        startPlace,
        startDate,
        endPlace,
        endDate
      }
    });
    return res.json(tickets);
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
}

exports.createTicket = async (req, res) => {
  try {
    const { category, uno, type, price, startPlace, startDate, endPlace, endDate, seats } = req.body;
    seats.map(async (seat) => {
      const tickets = await ticket.create({
        category,
        price,
        type,
        uno,
        startDate,
        startPlace,
        endDate,
        endPlace,
        seat
      })
    });
    return res.json({ message: 'SUCESS' });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
}


