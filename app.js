const express = require('express');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false })) // for parsing application/x-www-form-urlencoded

app.use('/api/', require('./routes/api'))
const PORT = 3000

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})
