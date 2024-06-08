const connection = require('../database/connection')
const moment = require('moment')

const Create = async (req, res) => {
    const { Month, Date, Description, Active, Last_Changed_By } = req.body

    try {
        const query = `INSERT INTO holidays ` +
                        `(Month, Date, Description, Active, Encoded_By, Encoded_Date) ` +
                      `VALUES ` +
                        `('${Month}', '${Date}', '${Description}', ${Active}, '${Last_Changed_By}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`

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
        return false
    }
}

const GetItem = async (req, res) => {
    const { id } = req.query

    try {
        const query = `SELECT * FROM holidays WHERE Id = ${id}`

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

const GetAll = async (req, res) => {
    const { fields } = req.query

    try {
        const query = `SELECT ${fields} FROM holidays WHERE Active = true`

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

const Update = async (req, res) => {
    const { Id, Month, Date, Description, Active, Last_Changed_By } = req.body

    try {
        const query = `UPDATE holidays ` +
                      `SET ` +
                        `Month = '${Month}', ` + 
                        `Date = '${Date}', ` +
                        `Description = '${Description}', ` + 
                        `Active = ${Active}, ` + 
                        `Last_Changed_By = '${Last_Changed_By}', ` +
                        `Last_Changed_Date = '${moment().format('YYYY-MM-DD HH:mm:ss')}'` +
                      `WHERE Id = ${Id}`

        console.log(query)

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
        return false
    }
}

const Delete = async (req, res) => {
    const { id } = req.query

    try {
        const query = `UPDATE holidays SET Active = false WHERE Id = ${id}`

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