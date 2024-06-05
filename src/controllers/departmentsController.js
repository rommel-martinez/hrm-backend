
const connection = require('../database/connection')
const moment = require('moment')

const Create = async (req, res) => {
    const { Code, Name, Active, Encoded_By } = req.body

    try {

        const isValid = await validateName(Name);

        if (!isValid) {
            const query = `INSERT INTO departments ` +
                            `(Code, ` +
                            `Name, ` +
                            `Active, ` +
                            `Encoded_By, ` +
                            `Encoded_Date) ` +
                          `VALUES ` +
                            `('${Code}', ` +
                            `'${Name}', ` +
                            `${Active}, ` +
                            `'${Encoded_By}', ` +
                            `'${moment().format("YYYY-MM-DD HH:mm:ss")}')`
                    
            const result = await connection(query)

            if(result){
                res.status(200).send(result)
            } else {
                res.status(500).send({
                    status: result,
                    message: result.message
                })
            }
        } else {
            res.status(500).send(`${Name} already exists`)
        }
    } catch (error) {
        return false
    }
}

const GetItem = async (req, res) => {
    const { id } = req.query

    try {
        const query = `SELECT * FROM departments WHERE Id = ${id}`

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
        const query = `SELECT ${fields} FROM departments WHERE Active = true`

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
    const { Id, Code, Name, Active, Last_Changed_By } = req.body

    try {
        const query = `UPDATE departments ` +
                        `SET ` +
                        `Code = '${Code}', ` +
                        `Name = '${Name}', ` +
                        `Active = ${Active}, ` +
                        `Last_Changed_By = '${Last_Changed_By}', ` +
                        `Last_Changed_Date = '${moment().format("YYYY-MM-DD HH:mm:ss")}' ` +
                      `WHERE Id = ${Id}`

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
        const query = `UPDATE departments SET Active = false WHERE Id = ${id}`

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

async function validateName(name){

    const query = `SELECT * FROM departments WHERE Name = '${name}'`

    const result = await connection(query)    

    return result.length == 0 ? false : true;
}

module.exports = {
    Create,
    GetItem,
    GetAll,
    Update,
    Delete
}