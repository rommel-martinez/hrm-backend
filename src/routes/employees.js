const express = require('express')
const router = express.Router()
const conn = require('../database/connection')
var moment = require('moment');
const connection = require('../database/connection');

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

router.post(`/update`, async (req, res) => {
    const { Id,
            First_Name, 
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
            Last_Changed_By
            } = req.body

    try {
        const query = `UPDATE employees ` +
                      `SET ` +
                        `First_Name = '${First_Name}', ` +
                        `Last_Name = '${Last_Name}', ` + 
                        `Nick_Name = '${Nick_Name}', ` + 
                        `Gender = '${Gender}', ` +
                        `Marital_Status = '${Marital_Status}', ` + 
                        `Email = '${Email}', ` + 
                        `Mobile = '${Mobile}', ` +
                        `Photo = '${Photo}', ` +
                        `DOB = '${DOB}', ` +
                        `Address = '${Address}', ` +
                        `City = '${City}', ` +
                        `Province = '${Province}', ` +
                        `Country = '${Country}', ` +
                        `Post_Code = '${Post_Code}', ` +
                        `Status = '${Status}', ` +
                        `Active = '${Active}', ` +
                        `Last_Changed_By = '${Last_Changed_By}', ` +
                      `WHERE Id = ${Id}`

        const result = connection(query);

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

router.post(`/delete`, async (req, res) => {
    const { id } = req.query

    try {
        const query = `DELETE FROM employee WHERE id = ${id}`

        const result = connection(query)

        if(result){
            res.status(200).send(result)
        } else {
            res.status(500).send({
                status: result,
                message: result.message
            })
        }

    } catch (error) {
        return false
    }
})

module.exports = router 