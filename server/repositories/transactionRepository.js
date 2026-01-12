const Transaction = require("../models/Transaction");

const getAll = () => Transaction.find().sort({ date: -1 });
const create = (data) => new Transaction(data).save();
const remove = (id) => Transaction.findByIdAndDelete(id);

module.exports = {
    getAll,
    create,
    remove
};
