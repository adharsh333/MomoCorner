const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  items: [{ name: String, quantity: Number, price: Number }],
  customer: {
    name: String,
    email: String,
    phone: String,
  },
  total: { type: Number, required: true },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Order', orderSchema);
