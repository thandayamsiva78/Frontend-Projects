import { useEffect, useState } from "react";

function ExpenseSummary() {
    const [groupMembers, setGroupMembers] = useState([]);
    const [expenseDetails, setExpenseDetails] = useState(null);
    const [balances, setBalances] = useState([]);

    const loadDataFromLocalStorage = () => {
        const getStoredExpenseDetails = localStorage.getItem("Expenses Details");
        const expense = JSON.parse(getStoredExpenseDetails || "{}");
        setExpenseDetails(expense);

        const getStoredGroupMembers = localStorage.getItem("Members");
        const members = JSON.parse(getStoredGroupMembers || "[]");
        setGroupMembers(members);
    };


    useEffect(() => {
        loadDataFromLocalStorage();
        const handleStorageChange = () => loadDataFromLocalStorage();
        window.addEventListener("storage", handleStorageChange);
        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);


    // Calculate balances
    useEffect(() => {
        if (expenseDetails?.Amount && groupMembers.length > 0) {
            const totalAmount = parseFloat(expenseDetails.Amount) || 0;
            const payer = expenseDetails.Payer;
            const amountEachPersonPays = totalAmount / groupMembers.length;

            const newBalances = groupMembers.map((member) => {
                return member === payer
                    ? { member, balance: totalAmount - amountEachPersonPays }
                    : { member, balance: -amountEachPersonPays };
            });

            setBalances(newBalances);
        } else {
            setBalances([]);
        }
    }, [expenseDetails, groupMembers]);






    const shareReport = () => {
        const reportContent = `
            Expense Summary:
            ----------------
            Total Amount: ₹${expenseDetails.Amount || 0}
            Payer: ${expenseDetails.Payer || "Not specified"}
            Group Members: ${groupMembers.join(", ")}
            Each member is expected to contribute: ₹${(expenseDetails.Amount / groupMembers.length).toFixed(2)}

            Balances:
            ---------
            ${balances
                .map(
                    ({ member, balance }) =>
                        `${member}: ₹${Math.abs(balance).toFixed(2)} ${balance > 0 ? "(Owed)" : "(Owes)"}`
                )
                .join("\n")}
        `;

        window.location.href = `mailto:?subject=Expense Summary&body=${encodeURIComponent(reportContent)}`;
    };


    const downloadReport = () => {
        const reportContent = `
            Expense Summary:
            ----------------
            Total Amount: ₹${expenseDetails.Amount || 0}
            Payer: ${expenseDetails.Payer || "Not specified"}
            Group Members: ${groupMembers.join(", ")}
            Each member is expected to contribute: ₹${(expenseDetails.Amount / groupMembers.length).toFixed(2)}

            Balances:
            ---------
            ${balances
                .map(
                    ({ member, balance }) =>
                        `${member}: ₹${Math.abs(balance).toFixed(2)} ${balance > 0 ? "(Owed)" : "(Owes)"}`
                )
                .join("\n")}
        `;

        const blob = new Blob([reportContent], { type: "text/plain" });
        const link = document.createElement("a");
        link.href = URL.createObjectURL(blob);
        link.download = "expense_report.txt"; 
        link.click();
    };





    return (
        <>
            <div className="border p-4 rounded-xl shadow-shadow">
                <div className="flex justify-between">
                    <h1 className="font-bold text-lg">Expense Summary</h1>
                    <div className="flex justify-center items-center gap-2">
                        <button
                            onClick={shareReport}
                            className="w-12 rounded-full p-2 hover:scale-95"
                        >
                            <img src="share .png" alt="shereLogo " />
                        </button>
                        <button 
                        className="hover:scale-95 hover:bg-blue-600 p-1 rounded-full"
                        onClick={downloadReport}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </button>
                    </div>

                </div>
                <div className="p-2 h-[300px] overflow-y-auto">
                    {balances.length > 0 ? (
                        balances.map(({ member, balance }, index) => (
                            <div className="flex justify-between border-b rounded-lg p-4" key={index}>
                                <div className="flex gap-4">
                                    <p>{index + 1}</p>
                                    <p>{member}</p>
                                </div>
                                <div>
                                    <p className="flex justify-between items-center gap-10 w-full">
                                        <span className="font-bold">
                                            ₹{Math.abs(balance).toFixed(2)}
                                        </span>
                                        <span
                                            className={`font-bold ${balance > 0 ? "text-green-600" : "text-red-600"
                                                }`}
                                        >
                                            {balance > 0 ? "Owed" : "Owes"}
                                        </span>
                                    </p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No expense data available.</p>
                    )}
                </div>
            </div>
            {expenseDetails && groupMembers.length > 0 && (
                <div className="mt-4 p-2 border-t pt-4">
                    <p>
                        <strong className="text-lg">Expense Details:</strong>
                    </p>
                    <p>
                        <strong>Total amount:</strong> ₹{expenseDetails.Amount || 0}
                    </p>
                    <p>
                        <strong>Payer:</strong> {expenseDetails.Payer || "Not specified"}
                    </p>
                    <p>
                        <strong>Group members:</strong> {groupMembers.join(", ")}.
                    </p>
                    <p>
                        <strong>Each member is expected to contribute:</strong> ₹
                        {expenseDetails.Amount
                            ? (expenseDetails.Amount / groupMembers.length).toFixed(2)
                            : "0.00"}
                    </p>
                    <p>
                        <strong>Balances:</strong> The amounts shown as "Owed" indicate the
                        member is owed money, and "Owes" indicates the member owes money based on
                        the expense distribution.
                    </p>
                </div>
            )}
        </>
    );
}

export default ExpenseSummary;
