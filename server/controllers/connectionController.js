const { default: mongoose } = require('mongoose');
const ConnectionModel = require('../models/connectionModel');

// get all conn
const getAllConn = async (req, res) => {
    try {
        const connections = await ConnectionModel.find({});
        if (!connections) return res.status(404).json({ message: "Connections not found" });
        res.status(200).json({ message: "Connections fetched", result: connections });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}

// get conn sent by userId
const getSentConn = async (req, res) => {
    try {
        const { userId: _id } = await req.params;
        if (!mongoose.Types.ObjectId.isValid(_id) || !_id) {
            return res.status(422).json({ message: "Id invalid" });
        }
        const connections = await ConnectionModel.find({senderId:_id})
        .populate('senderId',['name','email'])
        .populate('receiverId',['name','email']);
        if (!connections) return res.status(404).json({ message: "Connections sent not found" });
        res.status(200).json({ message: "Fetched connections sent", result: connections });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}

// get conn received by userId
const getReceivedConn = async (req, res) => {
    try {
        const { userId: _id } = await req.params;
        if (!mongoose.Types.ObjectId.isValid(_id) || !_id) {
            return res.status(422).json({ message: "Id invalid" });
        }
        const connections = await ConnectionModel.find({ receiverId: _id })
        .populate('senderId',['name','email'])
        .populate('receiverId',['name','email']);
        if (!connections) return res.status(404).json({ message: "Connections received not found" });
        res.status(200).json({ message: "Fetched connections received", result: connections });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}

// send conn request
const sendConn = async (req, res) => {
    try {
        const { senderId, receiverId } = await req.body;
        if (!mongoose.Types.ObjectId.isValid(senderId) ||
            !mongoose.Types.ObjectId.isValid(senderId) ||
            !senderId ||
            !receiverId) {
            return res.status(422).json({ message: "Id invalid" });
        }
        const connection = await ConnectionModel.create(req.body);
        if (!connection) throw new Error("Failed to send connection");
        res.status(200).json({ message: "Connection request sent" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error?.message });
    }
}


module.exports = {
    getAllConn, getSentConn, getReceivedConn,
    sendConn
}