const connection = require('../database/connection');
var moment = require('moment');

const createEmployee = async (req, res) => {
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

        const result = await connection(query)

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
}

const getEmployee = async (req, res) => {
    const { id } = req.query

    try {
        const query = `SELECT * FROM employees WHERE Id = ${id}`

        const result = await connection(query)

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
}

const getAllEmployee = async (req, res) => {
    const {fields} = req.query

    try {
        const query = `SELECT ` + 
                        `${fields} ` + 
                        `FROM employees WHERE Active = true`

        const result = await connection(query)

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
}

const updateEmployee = async (req, res) => {
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
                        `Active = ${Active}, ` +
                        `Last_Changed_By = '${Last_Changed_By}', ` +
                        `Last_Changed_Date = '${moment().format("YYYY-MM-DD HH:mm:ss")}' ` +
                      `WHERE Id = ${Id}`

        const result = await connection(query);

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
}

const deleteEmployee = async (req, res) => {
    const { id } = req.query

    try {
        const query = `UPDATE employees SET Active = false WHERE id = ${id}`

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
}

module.exports = {
    createEmployee,
    getEmployee,
    getAllEmployee,
    updateEmployee,
    deleteEmployee
}