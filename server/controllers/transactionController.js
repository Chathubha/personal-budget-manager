const transactionRepo = require("../repositories/transactionRepository");

const getTransactions = async (req, res) => {
    try {
        const transactions = await transactionRepo.getAll();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const addTransaction = async (req, res) => {
    try {
        const transaction = await transactionRepo.create(req.body);
        res.status(201).json(transaction);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const deleteTransaction = async (req, res) => {
    try {
        await transactionRepo.remove(req.params.id);
        res.json({ message: "Transaction deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = {
    getTransactions,
    addTransaction,
    deleteTransaction
};
