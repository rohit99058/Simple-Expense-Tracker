import React, { useState } from "react";

const ExpenseTracker = () => {
  const [input, setInput] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  const addExpenses = () => {
    if (!input || !amount) return;

    const newExpense = {
      id: expenses.length + 1,
      title: input,
      amount: amount,
    };
    setExpenses([...expenses, newExpense]);
    setInput("");
    setAmount("");
  };

  const deleteExpense = id => {
    setExpenses(expenses.filter(expenses => expenses.id !== id));
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>💸 Expense Tracker</h2>
      <div style={styles.inputGroup}>
        <input
          type="text"
          placeholder="Expenses"
          onChange={e => setInput(e.target.value)}
          value={input}
          style={styles.input}
        />
        <input
          type="number"
          placeholder="Amount"
          onChange={e => setAmount(e.target.value)}
          value={amount}
          style={styles.input}
        />
        <button onClick={addExpenses} style={styles.button}>
          ➕ Add Expense
        </button>
      </div>
      <ul style={styles.list}>
        {expenses.map(expense => (
          <li key={expense.id} style={styles.listItem}>
            <span>{expense.title}</span>
            <span>💲 {expense.amount}</span>
            <button onClick={() => deleteExpense(expense.id)} style={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>

      {/* Internal Focus Style */}
      <style>
        {`
          input:focus {
            outline: none;
            border-color: #4caf50;
            box-shadow: 0 0 5px rgba(76, 175, 80, 0.5);
          }
          button:hover {
            opacity: 0.9;
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: "500px",
    margin: "30px auto",
    padding: "20px",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    fontFamily: "Segoe UI, sans-serif",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  },
  inputGroup: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    marginBottom: "20px",
  },
  input: {
    flex: "1",
    minWidth: "130px",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    fontSize: "14px",
  },
  button: {
    padding: "10px 16px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4caf50",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
  list: {
    listStyle: "none",
    padding: 0,
  },
  listItem: {
    backgroundColor: "#fff",
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #eee",
    marginBottom: "8px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    padding: "5px 10px",
    cursor: "pointer",
  },
};

export default ExpenseTracker;
