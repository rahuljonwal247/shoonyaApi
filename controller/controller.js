const Retreat=require('../model/retreat')
const Booking=require('../model/booking')

const { Op } = require('sequelize');


  exports.book= async (req, res) => {
    const { user_id, user_name, user_email, user_phone, retreat_id, retreat_title, retreat_location, retreat_price, retreat_duration, payment_details, booking_date } = req.body;
  
    try {
      const existingBooking = await Booking.findOne({ where: { user_id, retreat_id } });
  
      if (existingBooking) {
        return res.status(400).json({ error: 'Retreat already booked for this user' });
      }
  
      const booking = await Booking.create({
        user_id, user_name, user_email, user_phone, retreat_id, retreat_title, retreat_location, retreat_price, retreat_duration, payment_details, booking_date,
      });
  
      res.status(201).json(booking);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create booking' });
    }
  };




exports.getAllRetreats = async (req, res) => {
  const { page = 1, limit = 10, search, filter } = req.query;
  const offset = (page - 1) * limit;
  
  const where = {};
  if (search) {
    where.title = { [Op.iLike]: `%${search}%` };
  }
  if (filter) {
    where.location = filter;
  }

  try {
    const { count, rows } = await Retreat.findAndCountAll({
      where,
      offset,
      limit,
    });
    
    res.json({
      total: count,
      pages: Math.ceil(count / limit),
      currentPage: page,
      data: rows,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch retreats' });
  }
};

