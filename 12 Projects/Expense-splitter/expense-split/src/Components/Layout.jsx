import AddExpense from "./AddExpense"
import AddGroupMembers from "./AddGroupMembers"
import ExpenseSummary from "./ExpenseSummary"
import Header from "./Header"




function Layout (){

    return (

        <>
            <div className="Layout">
                <div className="Header font-bold text-white bg-blue-700"> <Header/> </div>
                <div className="LeftAside"> <AddGroupMembers/> </div>
                <div className="RightAside"> <AddExpense/> </div>
                <div className="Main"> <ExpenseSummary/> </div>
                <div className="Footer flex justify-center items-center gap-2 font-bold text-white bg-blue-700 text-sm">
                    <p>&#169;</p>
                    <p>Developed By Siva</p>
                </div>
            </div>
        </>
    )
}

export default Layout