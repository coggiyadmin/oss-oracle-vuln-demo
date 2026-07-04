const express = require('express');
function esc(s) {
  return String(s).replace(/[&<>"']/g, c =>
    ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c] ?? c));
}
const app = express();
app.get('/echo', (req, res) => { res.send('<p>' + esc(req.query.msg) + '</p>'); });
module.exports = app;
