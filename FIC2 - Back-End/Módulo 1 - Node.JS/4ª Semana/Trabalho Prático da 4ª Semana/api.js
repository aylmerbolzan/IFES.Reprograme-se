const axios = require('axios');

exports.api = axios.create({
  baseURL: 'http://localhost:3000'
});
