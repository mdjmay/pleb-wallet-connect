import React, { useState } from "react";
import "./Buttons.css";
import PaymentsModal from "./PaymentsModal";


export const Buttons = () => {
  const [modalState, setModalState] = useState({
    type: "",
    open: false,
  });
  
  // Our state for the info we will send to either generate a new invoice or pay an invoice
 const [formData, setFormData] = useState({
  amount: 0,
  invoiceToPay: "",
});
// Our state for storing the invoice we created to be paid
const [invoice, setInvoice] = useState("");
// Our state for the invoice we paid
const [paymentInfo, setPaymentInfo] = useState({
  paymentHash: "",
  checkingId: "",
});

const handleSend = () => {};

const handleReceive = () => {};
 return (
   <div>
     <div className="buttons">
       <button
         className="button"
         onClick={() => setModalState({ type: "send", open: true})
         }
       >
         Send
       </button>
       <button
         className="button"
         onClick={() => setModalState( { type: "receive", open: true})
         }
       >
         Receive
       </button>
     </div>
     <PaymentsModal modalState={modalState} setModalState={setModalState} />
   </div>
 );
};

export default Buttons;