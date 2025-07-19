const mongoose = require('mongoose');

const RouteRequestSchema = new mongoose.Schema({
  origin: String,
  optimizedRoute: [String],
  timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model('RouteRequest', RouteRequestSchema);