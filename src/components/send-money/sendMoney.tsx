"use client";

import axios from "axios";

interface User {
  id: string;
  email: string;
  password: string;
}

interface SendMoneyProps {
  users: User[];
  balance: string;
}

const onSubmitHandle = async (e: any) => {
  e.preventDefault();
  const updatedBalance = await axios.put(`${process.env.APP_URL}/api/user-balance`,{"newBalance":"2500"})
  console.log(updatedBalance)
};

const SendMoney: React.FC<SendMoneyProps> = ({ users, balance }) => {
  
  return (
    <div>
      <form onSubmit={onSubmitHandle}>
        <label htmlFor="username-select">Select user:</label>
        <select id="username-select" name="username">
          {users.map((user) => (
            <option key={user.id}>{user.email}</option>
          ))}
        </select>
        <label htmlFor="sendingAmount"></label>
        <input type="text" id="sendingAmount" placeholder="amount" />

        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default SendMoney;
