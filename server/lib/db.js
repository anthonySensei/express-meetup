const mongoose = require('mongoose');

module.exports.connect = async (dns) =>
    mongoose.connect(dns, { useNewUrlParser: true, useUnifiedTopology: true });
