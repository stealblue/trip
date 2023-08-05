const { Sequelize } = require('sequelize');
const { ticket, user, board } = require('../models/mysql');

exports.findVacancy = async (req, res) => {
  try {
    const { category, type, startPlace, endPlace, startDate, endDate } = req.query;
    const formatStartDate = dateFormatting(startDate.toString());
    const formatEndDate = dateFormatting(endDate.toString());
    const tickets = await ticket.findAll({
      where: {
        category,
        type,
        startplace: startPlace,
        startDate: formatStartDate,
        endplace: endPlace,
        endDate: formatEndDate
      }
    });

    // if (tickets.length === 0) {
    //   return res.json(null);
    // }
    return res.json({ tickets });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
}

exports.createTicket = async (req, res) => {
  try {
    const { category, uno, type, price, startPlace, startDate, endPlace, endDate, seats } = req.body;
    // console.log(`${category} / ${uno} / ${type} / ${price} / ${startPlace} / ${startDate} / ${endPlace} / ${endDate} / ${seats}`)
    const formatStartDate = dateFormatting(startDate.toString());
    const formatEndDate = dateFormatting(endDate.toString());
    const jsonSeats = JSON.parse(seats);
    await Promise.all(jsonSeats.map(async (seat) => {
      const tickets = await ticket.create({
        category,
        price,
        type,
        uno,
        startDate: formatStartDate,
        startplace: startPlace,
        endDate: formatEndDate,
        endplace: endPlace,
        seat: seat.name,
        createAt: Sequelize.fn("NOW")
      })
    }));
    return res.json({ message: 'SUCESS' });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
};

exports.listTickets = async (req, res) => {
  console.log('createTicket 백 api');
  try {
    // let { page } = req.query;
    const limit = 10;
    let offset = 0 + Number((req.query.page ? req.query.page : 1) - 1) * limit; // sql select 쿼리문의 order by offset 부분
    let checkNum = (req.query.page ? req.query.page : 1); // 페이지 네비게이션 부분에 페이징을 위한 변수 초기화
    checkNum = Math.floor(checkNum / 10) * 10; // 10자리에서 내림을 해서 10개씩 끊어주려고 위해 재할당
    // if (typeof page === 'undefined') page = 1;
    const tickets = await ticket.findAndCountAll({
      limit,
      offset: offset,
      order: [['no', 'DESC']],
      include: {
        model: user,
        as: 'uno_user'
      }
    });

    return res.json({ tickets });
  } catch (error) {
    console.error(error);
    return res.status(400).json(error);
  }
}

const dateFormatting = (originDate) => {
  console.log('originDate : ', typeof originDate);

  const year = parseInt(originDate.slice(0, 4));
  const month = parseInt(originDate.slice(4, 6)) - 1;
  const day = parseInt(originDate.slice(6, 8));
  const hour = parseInt(originDate.slice(8, 10));
  const min = parseInt(originDate.slice(10, 12));
  const sec = parseInt(originDate.slice(12, 14));
  const wantDate = new Date(year, month, day, hour, min, sec);
  return wantDate;
}


