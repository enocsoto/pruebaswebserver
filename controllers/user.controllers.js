const { response, request } = require('express');

const userGet = (req, res = response) => {
   
   
    res.json({
        msg: 'app Users - Controller'
    });
}

const addUser = (req, res) => {
    const {name, age} = req.body;
    res.json({
        msg: 'app addUsers - Controller',
        name,
        age
    });
}

const deleteUser = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'app deleteUsers - Controller',
        id
    });
}
const updateUser = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'app updateUsers - Controller',
        id
    });
}
const getUsers = (req = request, res) => {
   const {query, name = 'No name', apiKey='no key'} = req.query;
    res.json({
        msg: 'app getUsers - Controller',
        query,
        name, 
        apiKey
    });
}

module.exports = {
    userGet,
    addUser,
    deleteUser,
    updateUser,
    getUsers
}