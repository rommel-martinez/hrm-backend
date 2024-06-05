const connection = require('../database/connection')
const moment = require('moment')

const Create = async (req, res) => {
    const { Department_Id, Name, Active, Encoded_By } = req.body

    try {
        const query = `INSERT INTO occupations (Department_Id, Name, Active, Encoded_By, Encoded_Date) ` +
                        `VALUES ('${Department_Id}', '${Name}', ${Active}, '${Encoded_By}', '${moment().format('YYYY-MM-DD HH:mm:ss')}')`
        
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
        const query = `SELECT * FROM occupations WHERE Id = ${id}`

        const result = await connection(query)

        if(result) {
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

const GetAllItem = async (req, res) => {
    const { fields } = req.query

    try {
        const query = `SELECT ${fields} FROM occupations WHERE Active = true`

        console.log(query)
        const result = await connection(query)
        console.log(result)
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
    const { Id, Department_Id, Name, Active, Last_Changed_By } = req.body

    try {
        const query = `UPDATE occupations ` +
                      `SET ` +
                        `Department_Id = '${Department_Id}', ` +
                        `Name = '${Name}', ` +
                        `Active = ${Active}, ` +
                        `Last_Changed_By = '${Last_Changed_By}', ` +
                        `Last_Changed_Date = '${moment().format('YYYY-MM-DD HH:mm:ss')}'` +
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
        const query = `UPDATE occupations SET Active = false WHERE Id = ${id}`

        const result = await connection(query)

        if(result){
            res.status(200).send(result)
        } else{
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
    GetAllItem,
    Update,
    Delete
}