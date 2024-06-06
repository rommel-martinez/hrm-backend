const connection = require('../database/connection')
const moment = require('moment')

const Create = async (req, res) => {
    const { Employee_Id, 
            Location, 
            Department, 
            Role, 
            Reports_to, 
            Start_Date, 
            Finish_Date, 
            SIN, 
            Work_Pattern, 
            Contracted_Hours, 
            Entitled_Holiday, 
            Entitled_Leave, 
            Entitled_Sick, 
            Salary, 
            Active, 
            Last_Changed_By 
        } = req.body

    try {
        const query = `INSERT INTO contracts ` +
                        `(Employee_Id, ` +
                        `Location, ` +
                        `Department, ` +
                        `Role, ` +
                        `Reports_to, ` +
                        `Start_Date, ` +
                        `Finish_Date, ` +
                        `SIN, ` +
                        `Work_Pattern, ` +
                        `Contracted_Hours, ` +
                        `Entitled_Holiday, ` +
                        `Entitled_Leave, ` +
                        `Entitled_Sick, ` +
                        `Salary, ` +
                        `Active, ` +
                        `Encoded_By, ` +
                        `Encoded_Date) ` +
                     `VALUES ` +
                        `('${Employee_Id}', ` +
                        `'${Location}', ` +
                        `'${Department}', ` +
                        `'${Role}', ` +
                        `'${Reports_to}', ` +
                        `'${Start_Date}', ` +
                        `'${Finish_Date}', ` +
                        `'${SIN}', ` +
                        `'${Work_Pattern}', ` +
                        `'${Contracted_Hours}', ` +
                        `'${Entitled_Holiday}', ` +
                        `'${Entitled_Leave}', ` +
                        `'${Entitled_Sick}', ` +
                        `'${Salary}', ` +
                        `${Active}, ` +
                        `'${Last_Changed_By}', ` +
                        `'${moment().format('YYYY-MM-DD HH:mm:ss')}')`

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

const GetItem = async (req, res) => {
    const { id } = req.query

    try {
        const query = `SELECT * FROM contracts WHERE Id = ${id}`

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
        const query = `SELECT ${fields} FROM contracts WHERE Active = true`

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
    const { Id,
            Employee_Id, 
            Location, 
            Department, 
            Role, 
            Reports_to, 
            Start_Date, 
            Finish_Date, 
            SIN, 
            Work_Pattern, 
            Contracted_Hours, 
            Entitled_Holiday, 
            Entitled_Leave, 
            Entitled_Sick, 
            Salary, 
            Active, 
            Last_Changed_By 
        } = req.body    

    try {
        const query = `UPDATE contracts ` +
                      `SET ` +
                        `Employee_Id = '${Employee_Id}', ` + 
                        `Location = '${Location}', ` + 
                        `Department = '${Department}', ` +  
                        `Role = '${Role}', ` + 
                        `Reports_to = '${Reports_to}', ` +  
                        `Start_Date = '${Start_Date}', ` +  
                        `Finish_Date = '${Finish_Date}', ` +  
                        `SIN = '${SIN}', ` + 
                        `Work_Pattern = '${Work_Pattern}', ` +  
                        `Contracted_Hours = '${Contracted_Hours}', ` +  
                        `Entitled_Holiday = '${Entitled_Holiday}', ` +  
                        `Entitled_Leave = '${Entitled_Leave}', ` +  
                        `Entitled_Sick = '${Entitled_Sick}', ` +  
                        `Salary = '${Salary}', ` +  
                        `Active = ${Active}, ` +  
                        `Last_Changed_By = '${Last_Changed_By}', ` + 
                        `Last_Changed_Date = '${moment().format('YYYY-MM-DD HH:mm:ss')}'` +  
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
        const query = `UPDATE contracts SET Active = false WHERE Id = ${id}`

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