const User = require('../models/task');

module.exports = {

    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req, res, next) => {
        const { userId } = req.params;
        // const user = await User.findById(userId);
        const user = await User.find({ numeroDocumento: userId}).exec();
        res.status(200).json(user);
    },

    getUsers: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },


}