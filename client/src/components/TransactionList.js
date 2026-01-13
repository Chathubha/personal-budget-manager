import React from "react";
import axiosClient from "../api/axiosClient";
import { formatCurrency } from "../utils/formatter";
import "./TransactionList.css";

const TransactionList = ({ transactions, fetchTransactions }) => {

  const handleDelete = async (id) => {
    await axiosClient.delete(`/transactions/${id}`);
    fetchTransactions();
  };

  const totalIncome = transactions.filter(t => t.type === "income")
    .reduce((a,b) => a + b.amount, 0);

  const totalExpense = transactions.filter(t => t.type === "expense")
    .reduce((a,b) => a + b.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <div>
      <div className="summary">
        <p><strong>Total Income:</strong> {formatCurrency(totalIncome)}</p>
        <p><strong>Total Expense:</strong> {formatCurrency(totalExpense)}</p>
        <p><strong>Balance:</strong> {formatCurrency(balance)}</p>
      </div>

      <ul className="list">
        {transactions.map((t) => (
          <li key={t._id} className="item">
            <span>{t.title} - {formatCurrency(t.amount)} ({t.type})</span>
            <button className="delete-btn" onClick={() => handleDelete(t._id)}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
