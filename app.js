require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const {personaRoute} = require('./routes/personas');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

personaRoute(app);

app.get('*', function (req, res) {
    res.send('404 Page not found')
})

app.listen(port, () => {
    console.log(`Sever Online ${port}`)
})

module.exports = {
    app
}