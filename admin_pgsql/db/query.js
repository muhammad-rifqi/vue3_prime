const md5 = require('md5');
const { executeQuery } = require('./config');
const fs = require('fs');

//::::::::::::::::::::::::::::::Start Of LOGIN LOGOUT :::::::::::::::::::::::::::::::::::::::::::::::::::::

const do_login = async (req, res) => {
    const email = req?.body?.email;
    const password = req?.body?.password;
    const sql = await executeQuery('SELECT * FROM public.user where email = $1 AND password = $2 ', [email, password])
    if (sql) {
        res.status(200).json({"message":"success", "data" : sql})
    } else {
        res.status(200).json({"message":"failed"})
    }

}

//::::::::::::::::::::::::::::::End Of Login :::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::::::::Start Of Dashboard :::::::::::::::::::::::::::::::::::::::::::::::::::::


const user = async (req, res) => {
    const results = await executeQuery('SELECT * FROM public.user ORDER BY id DESC');
    res.status(200).json(results)
}

const update_user = async (req, res) => {
    const id_users = req.params.id;
    const results = await executeQuery('UPDATE public.user SET roles = $1, bagian = $2 where id = $3', [req.body.roles,req.body.bagian,id_users]);
    if (!results) {
        res.status(200).json({"message" : "failed"})
    } 
    res.status(200).json({"message" : "success"})
}

const delete_user = async (req, res) => {
    const id_users = req.params.id;
    const sql = await executeQuery('DELETE FROM public.user where id = $1  ', [id_users]);
    if (!sql) {
        res.status(200).json({"message" : "failed"})
    } 
    res.status(200).json({"message" : "success"})
}

const transaction = async (req, res) => {
    const results = await executeQuery('SELECT * FROM public.transaction_deposite ORDER BY id DESC');
    res.status(200).json(results)
}

const transaction_delete = async (req, res) => {
    const id_transaction = req.params.id;
    const sql = await executeQuery('DELETE FROM public.transaction_deposite where id = $1  ', [id_transaction]);
    if (!sql) {
        res.status(200).json({"message" : "failed"})
    } 
    res.status(200).json({"message" : "success"})
}

const transaction_insert = async (req, res) => {
    const sql = await executeQuery('INSERT INTO public.transaction_deposite (placement_date, placement_amount, placement_rate) VALUES ($1, $2, $3)  ', [req.body.placement_date,req.body.placement_amount, req.body.placement_rate]);
    if (!sql) {
        res.status(200).json({"message" : "failed"})
    } 
    res.status(200).json({"message" : "success"})
}


const approve1 = async (req, res) => {
    const sql = await executeQuery('UPDATE  public.transaction_deposite set approve1 = 2 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}

const rejected1 = async (req, res) => {
    const sql = await executeQuery('UPDATE  public.transaction_deposite set approve1 = 1 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}

const approve2 = async (req, res) => {
    const sql = await executeQuery('UPDATE  public.transaction_deposite set approve2 = 2 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}

const rejected2 = async (req, res) => {
    const sql = await executeQuery('UPDATE public.transaction_deposite set approve2 = 1 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}

const approve3 = async (req, res) => {
    const sql = await executeQuery('UPDATE  public.transaction_deposite set approve3 = 2 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}

const rejected3 = async (req, res) => {
    const sql = await executeQuery('UPDATE public.transaction_deposite set approve3 = 1 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}


const approve4 = async (req, res) => {
    const sql = await executeQuery('UPDATE public.transaction_deposite set approve4 = 2 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}

const rejected4 = async (req, res) => {
    const sql = await executeQuery('UPDATE public.transaction_deposite set approve4 = 1 where id = $1 ', [req.body.id]);
    if (!sql) {
        res.status(200).json({ "success": false })
    } else {
        res.status(200).json({ "success": true })
    }
}

//::::::::::::::::::::::::::::::End Of Files/Library :::::::::::::::::::::::::::::::::::::::::::::::::::::

//::::::::::::::::::::::::::::::Start Of Modules:::::::::::::::::::::::::::::::::::::::::::::::::::::

module.exports = {
    do_login,
    transaction,
    transaction_delete,
    transaction_insert,
    user,
    update_user,
    delete_user,
    approve1,
    rejected1,
    approve2,
    rejected2,
    approve3,
    rejected3,
    approve4,
    rejected4,
}
//::::::::::::::::::::::::::::::End Of Module:::::::::::::::::::::::::::::::::::::::::::::::::::::