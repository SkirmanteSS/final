const express = require('express');
const app = express()

app.get('/', (req, res) => {
res.send('Vuolia');
});

app.listen(1337, () => {
    console.log('running on port 1337')

});

