import { useEffect, useState } from "react";

function AddExpense() {
    const [listMember, setListMember] = useState([]);
    const [amount, setAmount] = useState("");
    const [amountInput, setAmountInput] = useState(""); 
    const [description, setDescription] = useState("");
    const [descripInput, setDescripInput] = useState("");
    const [payer, setPayer] = useState("");
    const [payerInput, setPayerInput] = useState("");

    useEffect(() => {
        const getMembers = localStorage.getItem("Members");
        if (getMembers) {
            const members = JSON.parse(getMembers);
            setListMember(members);
        }

        const handleStorageChange = () => {
            const updatedMembers = JSON.parse(localStorage.getItem("Members") || "[]");
            setListMember(updatedMembers);
        };
        window.addEventListener("storage", handleStorageChange);

        return () => {
            window.removeEventListener("storage", handleStorageChange);
        };
    }, []);

    function handleExpensesBtn() {
        if (amountInput < 0 || isNaN(amountInput)) {
            alert("Please Give Valid Amount Number");
            return;
        }

        if (!descripInput || !amountInput || !payerInput) {
            alert("Please fill out all fields!");
            return;
        }

        setDescription(descripInput);
        setAmount(amountInput);
        setPayer(payerInput);

        const expensesInfo = {
            Description: descripInput,
            Amount: parseFloat(amountInput),
            Payer: payerInput,
        };

        localStorage.setItem("Expenses Details", JSON.stringify(expensesInfo));

        window.dispatchEvent(new Event("storage"));

        setDescripInput("");
        setAmountInput("");
        setPayerInput("");
    }

    return (
        <>
            <form action="" onSubmit={(e) => e.preventDefault()}>
                <div className="border min-h-[300px] p-2 rounded-3xl shadow-shadow">
                    <h1 className="font-bold text-lg pb-4">Add Expense</h1>
                    <div className="flex flex-col gap-6">
                        <select
                            className="p-2 border rounded-3xl cursor-pointer"
                            value={payerInput}
                            onChange={(e) => setPayerInput(e.target.value)}
                            name="payer"
                            id="payer"
                        >
                            <option value="" disabled selected>
                                --Select Payer--
                            </option>
                            {listMember.length > 0 ? (
                                listMember.map((member, index) => (
                                    <option key={index} value={member}>
                                        {member}
                                    </option>
                                ))
                            ) : (
                                <option value="" disabled>
                                    No members available
                                </option>
                            )}
                        </select>

                        <input
                            className="py-2 pl-4 border rounded-3xl"
                            placeholder="Amount"
                            value={amountInput}
                            onChange={(e) => setAmountInput(e.target.value)}
                            type="text"
                        />

                        <input
                            className="py-2 pl-4 border rounded-3xl"
                            placeholder="Expense Description"
                            value={descripInput}
                            onChange={(e) => setDescripInput(e.target.value)}
                            type="text"
                        />

                        <button
                            onClick={handleExpensesBtn}
                            className="p-2 text-white font-bold rounded-3xl bg-orange-500 hover:bg-orange-600"
                        >
                            Add Expense
                        </button>
                    </div>
                    <p className="text-sm text-center mt-5 font-bold">
                    Missing names in the dropdown? <br /> Refresh the page to reload members.
                </p>
                </div>
                
            </form>
        </>
    );
}

export default AddExpense;
