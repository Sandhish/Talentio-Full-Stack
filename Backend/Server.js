const express = require('express');
const cors = require('cors');
const ConnectDB = require('./Config/db');

const app = express();
app.use(cors());
app.use(express.json());

ConnectDB();

app.use('/api/user', require('./Routes/userRoutes'));

app.get('/', (req, res) => {
    res.send('Api is working!!!');
})

app.listen(3001, () => {
    console.log('Server is running on port 3001');
});