const mysql = require('mysql2')

const db = mysql.createPool({
    host: "127.0.0.1",
    user: "root",
    password: "12345",
    port: "3306",
    database: "db_hrm"
})

module.exports = (query) => {
    return new Promise((resolve, reject) => {
        db.getConnection((err, sql) => {
            if (err){
                reject(err)
            } else {
                sql.query(query, (err, results) => {
                    if(err){
                        reject(err)
                    } else {                       
                        resolve(results)
                    }

                    sql.release()
                })
            }
        })
    })
}