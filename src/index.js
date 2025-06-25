const express = require('express');
const path = require('path');
const app = express();
const indexRouter = require('./routers/indexRouter.js');
app.use(express.static('public'));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.use('/api', indexRouter);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
