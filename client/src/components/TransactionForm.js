import React, { useState } from "react";
import axiosClient from "../api/axiosClient";
import "./TransactionForm.css";

const TransactionForm = ({ fetchTransactions }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("income");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !amount) return;

    await axiosClient.post("/transactions", { title, amount, type });
    setTitle("");
    setAmount("");
    setType("income");
    fetchTransactions();
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <input 
        className="input"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input 
        className="input"
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <select
        className="select"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <button className="btn" type="submit">Add</button>
    </form>
  );
};

export default TransactionForm;
