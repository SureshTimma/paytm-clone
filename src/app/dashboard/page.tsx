import axios from "axios";
import SendMoney from "@/components/send-money/sendMoney";
import { useState } from "react";

const userDashboard = async () => {
  // const [balance, setBalance] = useState("")
  const userBalance = await axios.get(
    `${process.env.APP_URL}/api/user-balance`
  );
  const usersDetails = await axios.get(
    `${process.env.APP_URL}/api/users-details`
  );

  return (
    <div>
      <h1>Username: </h1>
      <p>Balance: {userBalance.data.balance}</p>
      <SendMoney users={usersDetails.data}  balance={userBalance.data.balance}/>
    </div>
  );
};

export default userDashboard;
