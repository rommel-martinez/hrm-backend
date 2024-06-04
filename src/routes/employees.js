const express = require('express')
const router = express.Router()
const conn = require('../database/connection')
var moment = require('moment');

router.post(`/create`, async (req, res) => {
    const { First_Name, 
            Last_Name, 
            Nick_Name, 
            Gender,
            Marital_Status, 
            Email, 
            Mobile,
            Photo,
            DOB,
            Address,
            City,
            Province,
            Country,
            Post_Code,
            Status,
            Active,
            Encoded_By
    } = req.body

    try {
        const query = `INSERT INTO Employees ` +
                        `(First_Name, ` +
                        `Last_Name, ` +
                        `Nick_Name,  ` +
                        `Gender, ` +
                        `Marital_Status, ` +
                        `Email, ` +
                        `Mobile, ` +
                        `Photo, ` +
                        `DOB, ` +
                        `Address, ` +
                        `City, ` +
                        `Province, ` +
                        `Country, ` +
                        `Post_Code, ` +
                        `Status, ` +
                        `Active, ` +
                        `Encoded_By, ` +
                        `Encoded_Date)` +
                    `VALUES ` +
                        `('${First_Name}', ` +
                         `'${Last_Name}', ` +
                         `'${Nick_Name}', ` +
                         `'${Gender}', ` +
                         `'${Marital_Status}', ` +
                         `'${Email}', ` +
                         `'${Mobile}', ` +
                         `'${Photo}', ` +
                         `'${DOB}', ` +
                         `'${Address}', ` +
                         `'${City}', ` +
                         `'${Province}', ` +
                         `'${Country}', ` +
                         `'${Post_Code}', ` +
                         `'${Status}', ` +
                         `${Active}, ` +
                         `'${Encoded_By}',` +
                         `'${moment().format("YYYY-MM-DD HH:mm:ss")}')`

        const result = await conn(query)

        if(result){
            res.status(200).send(result)
        } else {
            res.status(500).send({
                Status: result,
                message: result.message
            })
        }

    } catch (error) {
        return false
    }
})

router.get(`/getemployee`, async (req, res) => {
    const {fields} = req.query

    try {
        const query = `SELECT ` + 
                        `${fields} ` + 
                        `FROM employees`

        const result = await conn(query)

        if(result){
            res.status(200).send(result)
        } else {
            res.status(500).send({
                status: result,
                message: result.message
            })
        }

    } catch (error) {
        return []
    }
})


module.exports = router