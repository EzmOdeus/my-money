import { useState } from "react";
import { signOut } from "firebase/auth";
import { useAddTransaction } from "../../hooks/useAddTransaction";
import { useGetTransactions } from "../../hooks/useGetTransactions";
import { useGetUserInfo } from "../../hooks/useGetUserInfo";
import { useNavigate } from "react-router-dom";

import { auth } from "../../config/firebase-config";
import "./styless.css";
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
      <div className="expense-tracker p-3">
        <div className="heads flex justify-between items-center md:px-5 ">
          <h1 className="text-2xl font-semibold md:text-3xl">Welcome {name}</h1>
          {profilePhoto && (
            <div className="profile flex justify-center items-center">
              {" "}
              <img
                className="profile-photo p-2 rounded-full"
                src={profilePhoto}
                alt="ero"
                width={80}
              />
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
        <div className="count md:py-[50px] md:flex justify-around items-center">
          <div className="containers ">
            <div className="balance">
              <h3
                style={{ fontSize: 25, color: "cadetblue", fontWeight: "bold" }}
              >
                {" "}
                Your Balance
              </h3>
              {balance >= 0 ? (
                <h2
                  className="green text-green-500 font-semibold"
                  style={{ fontSize: 23 }}
                >
                  {" "}
                  ${balance}
                </h2>
              ) : (
                <h2
                  style={{ fontSize: 23 }}
                  className="red text-red-500 font-semibold"
                >
                  {" "}
                  -${balance * -1}
                </h2>
              )}
            </div>
            <div className="summary">
              <div className="income">
                <h4
                  style={{ fontSize: 20, color: "#219ebc", fontWeight: "bold" }}
                >
                  {" "}
                  Income
                </h4>
                <p
                  style={{ fontSize: 20 }}
                  className="green text-green-500 font-semibold"
                >
                  ${income}
                </p>
              </div>
              <div className="expenses">
                <h4
                  style={{ fontSize: 20, color: "#3c6566", fontWeight: "bold" }}
                >
                  {" "}
                  Expenses
                </h4>
                <p
                  style={{ fontSize: 20 }}
                  className="red text-red-500 font-semibold"
                >
                  ${expenses}
                </p>
              </div>
            </div>
          </div>
          <form
            className="add-transaction flex flex-col justify-center items-center"
            onSubmit={onSubmit}
          >
            <input
              className="input border-[#5f9ea0] rounded-xl border-[4px] shadow-[#66666666] shadow-xl "
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
            <div className="flex   justify-between w-[50%] md:w-[80%]">
              <div className="expenses text-red-500 flex items-center">
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
              <div className="income text-green-600 flex items-center">
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
            <button type="submit" className="bg-[#5f9ea0] py-2 rounded-xl">
              {" "}
              Add Transaction
            </button>
          </form>
        </div>
      </div>
      <div className="transactions bg-[rgba(240,248,255,.484)] border-[#5f9ea0] border-solid border-[3px] h-[500px] overflow-auto p-4 sm:mx-1 md:mx-[100px]">
        <h3 className="font-semibold text-4xl"> Transactions</h3>
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
