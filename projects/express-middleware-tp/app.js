const express = require('express');
const { exec } = require('child_process');
const app = express();
app.use(express.json());
app.post('/run', (req, res) => {
  const cmd = req.body.cmd || '';  // SOURCE
  exec('sh -c ' + cmd, () => res.end('ok'));  // SINK CWE-78
});
module.exports = app;
