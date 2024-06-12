const connection = require('../database/connection')
const moment = require('moment')

const Create = async (req, res) => {
    const { Employee_Id, Username, Password, Reset_Validity, Status, Active, Last_Changed_By } = req.body

    try {
        const query = `INSERT INTO logins ` +
                        `(Employee_Id, 
                          Username, 
                          Password, 
                          Reset_Validity, 
                          Status, 
                          Active, 
                          Encoded_By, 
                          Encoded_Date) ` +
                      `VALUES ` +
                        `('${Employee_Id}', 
                          '${Username}', 
                          '${Password}', 
                          ${Reset_Validity}, 
                          '${Status}', 
                          ${Active}, 
                          '${Last_Changed_By}', 
                          '${moment().format('YYYY-MM-DD HH:mm:ss')}')`

        console.log(query)
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

const GetItem = async (req, res) => {
    const { id } = req.query

    try {
        const query = `SELECT * FROM logins WHERE Id = ${id}`

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
        return []
    }
}

const GetAll = async (req, res) => {
    const { fields } = req.query

    try {
        const query = `SELECT ${fields} FROM logins WHERE Active = true`

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
        return []
    }
}

const Update = async (req, res) => {
    const { Id, Employee_Id, Username, Password, Reset_Validity, Status, Active, Last_Changed_By } = req.body

    try {
        const validity = Status.toLowerCase() == "reset" ? `'${Reset_Validity}'` : null
        const query = `UPDATE logins ` +
                      `SET ` +
                        `Employee_Id = '${Employee_Id}', ` + 
                        `Username = '${Username}', ` + 
                        `Password = '${Password}', ` + 
                        `Reset_Validity = ${validity}, ` + 
                        `Status = '${Status}', ` + 
                        `Active = ${Active}, ` + 
                        `Last_Changed_By = '${Last_Changed_By}', ` + 
                        `Last_Changed_Date = '${moment().format('YYYY-MM-DD HH:mm:ss')}'` +
                      `WHERE Id = ${Id}`

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

const Delete = async (req, res) => {
    const { id } = req.query

    try {
        const query = `UPDATE logins SET Active = false WHERE Id = ${id}`

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

module.exports = {
    Create,
    GetItem,
    GetAll,
    Update,
    Delete
}

