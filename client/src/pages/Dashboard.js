import React, { useEffect, useState } from "react";
import axiosClient from "../api/axiosClient";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import "./Dashboard.css";

const Dashboard = () => {
  const [transactions, setTransactions] = useState([]);

  const fetchTransactions = async () => {
    const res = await axiosClient.get("/transactions");
    setTransactions(res.data);
  };

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <div className="dashboard-container">
      <h2>Personal Budget Manager</h2>
      <TransactionForm fetchTransactions={fetchTransactions} />
      <TransactionList transactions={transactions} fetchTransactions={fetchTransactions} />
    </div>
  );
};

export default Dashboard;
