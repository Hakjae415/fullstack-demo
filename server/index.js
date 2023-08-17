const express = require('express');
const app = express();
const PORT = 8080

// app.listen(PORT, () => {
//     console.log(`Listening on PORT ${PORT}`)
// })
app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(PORT, (err) => {
    !err ? console.log(`Listening on PORT ${PORT}`) : console.log("Something went wrong")
})