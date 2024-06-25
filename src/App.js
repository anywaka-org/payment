import React, { useEffect } from "react";
import PaystackPop from "@paystack/inline-js";


function App() {
  const paystack = new PaystackPop();
  const key =  process.env.REACT_APP_PSKEY ;

  console.log(key);
  const location = new URLSearchParams(window.location.search);
  const fundWallet = () => {
    console.log(location.get('amount') * 100);
      paystack.newTransaction({
        amount: location.get('amount') * 100,
        email: location.get('email'),
        key: key,
        onSuccess: () => alert("back to app")
      });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(()=>fundWallet(),[])
  return (
    <div className="fund auth">

    </div>
  );
}

export default App;
