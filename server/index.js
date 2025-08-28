const express = require('express');
require('dotenv').config();
const sequelize = require('./db');
const models = require('./models/models');
const cors = require('cors');
const { json } = require('body-parser');
const router = require('./routes/index');

const PORT = process.env.PORT || 1121;

const app = express();
app.use(cors());
app.use(json());
app.use('/api', router);




const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync()
;        app.listen(PORT, () => console.log(`server has started on port ${PORT}`));
    } catch (e) {
        console.log(e);
    }
}

start();
