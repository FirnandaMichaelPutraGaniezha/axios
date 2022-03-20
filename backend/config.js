const mysql = require('mysql2')

const db = mysql.createConnection({
    host: "localhost",
    password: "",
    user: "root",
    database: "praktikum3"
})

db.connect(err => {
    if (err) {
        console.log(err.massage)
    }
    else{
        console.log("koneksi berhasil")
    }
})

module.exports = db