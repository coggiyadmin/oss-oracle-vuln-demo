const express = require('express');
const app = express();
app.get('/echo', (req, res) => {
  res.send('<p>' + req.query.msg + '</p>'); // SINK CWE-79
});
module.exports = app;
