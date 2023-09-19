import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";

import "./styles.css";
import { auth } from "../../config/firebase-config";
// import { collection, doc, onSnapshot, setDoc } from "firebase/firestore";

export const ExpenseTracker = () => {
  const { addTransaction } = useAddTransaction();
  const { transactions, transactionTotals } = useGetTransactions();
  const { name, profilePhoto } = useGetUserInfo();
  const navigate = useNavigate();

  const [description, setDescription] = useState("");
  const [transactionAmount, setTransactionAmount] = useState(0);
  const [transactionType, setTransactionType] = useState("expense");

  const { balance, income, expenses } = transactionTotals;

  const onSubmit = (e) => {
    e.preventDefault();
    addTransaction(
      {
        description,
        transactionAmount,
        transactionType,
      },
      console.log(
        description,
        "===",
        transactionAmount,
        "-----",
        transactionType
      )
    );

    setDescription("");
    setTransactionAmount("");
  };

  const signUserOut = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
      navigate("/");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <div className="expense-tracker">
        <div className="head">
          <h1>Welcome {name}</h1>
          {profilePhoto && (
            <div className="profile">
              {" "}
              <img className="profile-photo" src={profilePhoto} alt="ero" />
              <img
                className="sign-out-button"
                src="./arrow.png"
                alt=""
                width={30}
                onClick={signUserOut}
              />
            </div>
          )}
        </div>
        <div className="count">
          <div className="container ">
            <div className="balance">
              <h3 style={{ fontSize: 25, color: "cadetblue" }}>
                {" "}
                Your Balance
              </h3>
              {balance >= 0 ? (
                <h2 className="green" style={{ fontSize: 23 }}>
                  {" "}
                  ${balance}
                </h2>
              ) : (
                <h2 style={{ fontSize: 23 }} className="red">
                  {" "}
                  -${balance * -1}
                </h2>
              )}
            </div>
            <div className="summary">
              <div className="income">
                <h4 style={{ fontSize: 20, color: "#219ebc" }}> Income</h4>
                <p style={{ fontSize: 20 }} className="green">
                  ${income}
                </p>
              </div>
              <div className="expenses">
                <h4 style={{ fontSize: 20, color: "#3c6566" }}> Expenses</h4>
                <p style={{ fontSize: 20 }} className="red">
                  ${expenses}
                </p>
              </div>
            </div>
          </div>
          <form className="add-transaction" onSubmit={onSubmit}>
            <input
              className="input"
              type="text"
              placeholder="Description"
              value={description}
              required
              onChange={(e) => setDescription(e.target.value)}
            />
            <input
              className="input"
              type="number"
              placeholder="Amount"
              value={transactionAmount}
              required
              onChange={(e) => setTransactionAmount(e.target.value)}
            />
            <div className="flex">
              <div className="expenses">
                <input
                  type="radio"
                  id="expense"
                  value="expense"
                  checked={transactionType === "expense"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label
                  style={{ fontSize: 18, fontWeight: 600 }}
                  htmlFor="expense"
                >
                  {" "}
                  Expense
                </label>
              </div>
              <div className="income">
                <input
                  type="radio"
                  id="income"
                  value="income"
                  checked={transactionType === "income"}
                  onChange={(e) => setTransactionType(e.target.value)}
                />
                <label
                  style={{ fontSize: 18, fontWeight: 600 }}
                  htmlFor="income"
                >
                  {" "}
                  Income
                </label>
              </div>
            </div>
            <button type="submit"> Add Transaction</button>
          </form>
        </div>
      </div>
      <div className="transactions">
        <h3> Transactions</h3>
        <ul>
          {transactions.map((transaction) => {
            const { description, transactionAmount, transactionType } =
              transaction;
            return (
              <li>
                <h4 style={{ fontSize: 20, fontWeight: 700 }}>
                  {" "}
                  {description}{" "}
                </h4>
                <p style={{ fontSize: 18 }}>
                  ${transactionAmount} •{" "}
                  <label
                    style={{
                      color: transactionType === "expense" ? "red" : "green",
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    {" "}
                    {transactionType}{" "}
                  </label>
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};
