const express = require('express')
const app = express()

const cors = require('cors')
app.use(cors())

const PORT = 4000

const pegawai = require('./pegawai')
app.use('/pegawai', pegawai)

app.listen(4000, () =>{
    console.log("server run on port " + PORT)
})