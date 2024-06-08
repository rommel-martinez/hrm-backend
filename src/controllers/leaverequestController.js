const connection = require('../database/connection')
const moment = require('moment')

const Create = async (req, res) => {
    const { Employee_Id, Reason, Description, From_Date, To_Date, Status, Active, Last_Changed_By } = req.body

    try {
        const query = `INSERT INTO leave_requests ` +
                        `(Employee_Id, 
                          Reason, 
                          Description, 
                          From_Date, 
                          To_Date, 
                          Status, 
                          Active, 
                          Encoded_By, 
                          Encoded_Date) ` +
                      `VALUES ` +
                        `('${Employee_Id}', 
                          '${Reason}', 
                          '${Description}', 
                          '${From_Date}', 
                          '${To_Date}', 
                          '${Status}', 
                          ${Active}, 
                          '${Last_Changed_By}', 
                          '${moment().format('YYYY-MM-DD HH:mm:ss')}')`

        const result = await connection(query)

        if(result) {
            res.status(200).send(result)
        } else{
            res.status(500).send({
                status: result.status,
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
        const query = `SELECT * FROM leave_requests WHERE Id = ${id}`

        const result = await connection(query)

        if(result) {
            res.status(200).send(result)
        } else{
            res.status(500).send({
                status: result.status,
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
        const query = `SELECT ${fields} FROM leave_requests WHERE Active = true`

        const result = await connection(query)

        if(result) {
            res.status(200).send(result)
        } else{
            res.status(500).send({
                status: result.status,
                message: result.message
            })
        }        
    } catch (error) {
        return []
    }
}

const Update = async (req, res) => {
    const { Id, Employee_Id, Reason, Description, From_Date, To_Date, Status, Active, Last_Changed_By } = req.body

    try {
        const query = `UPDATE leave_requests ` +
                      `SET ` +
                        `Employee_Id = '${Employee_Id}', ` +
                        `Reason = '${Reason}', ` + 
                        `Description = '${Description}', ` +
                        `From_Date = '${From_Date}', ` + 
                        `To_Date = '${To_Date}', ` + 
                        `Status = '${Status}', ` + 
                        `Active = ${Active}, ` +
                        `Last_Changed_By = '${Last_Changed_By}', ` +
                        `Last_Changed_Date = '${moment().format('YYYY-MM-DD HH:mm:ss')}' ` +
                      `WHERE Id = ${Id}`

        const result = await connection(query)

        if(result) {
            res.status(200).send(result)
        } else{
            res.status(500).send({
                status: result.status,
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
        const query = `UPDATE leave_requests SET Active = false WHERE Id = ${id}`

        const result = await connection(query)

        if(result) {
            res.status(200).send(result)
        } else{
            res.status(500).send({
                status: result.status,
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




