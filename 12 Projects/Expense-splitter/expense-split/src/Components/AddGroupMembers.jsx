import { useState, useEffect } from "react";

function AddGroupMembers() {
    const [members, setMembers] = useState([]);
    const [inputValue, setInputValue] = useState("");


    useEffect(() => {
        if (members.length > 0) {
            localStorage.setItem("Members", JSON.stringify(members));
            window.dispatchEvent(new Event("storage"));
        }
    }, [members]);

    
    useEffect(() => {
        const storedMembers = localStorage.getItem("Members");
        console.log("storing at LocalStorage", storedMembers);
        if (storedMembers) {
            setMembers(JSON.parse(storedMembers));
        } else {
            setMembers([]);
        }
        
    }, []);


    function handleAddmembersClick() {
        if (inputValue.trim()) {
            setMembers([...members, inputValue]);
            setInputValue("");
        }
    }

    function handleRemoveMember(index) {
        setMembers(members.filter((_, i) => i !== index));
    }

    return (
        <div className="border rounded-3xl p-2 min-h-[300px] shadow-shadow">
            <h1 className="font-bold text-lg mb-4">Add Group Members</h1>
            <div className="flex border rounded-3xl overflow-hidden">
                <input
                    className="p-2 w-full rounded-l-3xl pl-4"
                    placeholder="Enter name"
                    onChange={(e) => setInputValue(e.target.value)}
                    value={inputValue}
                    type="text"
                />
                <button
                    onClick={handleAddmembersClick}
                    className="bg-green-600 border-blue-600 px-4 text-white font-bold hover:bg-green-500 text-sm"
                >
                    Add Member
                </button>
            </div>
            <div className="pt-4 h-[250px] overflow-x-auto">
                {members.map((member, index) => (
                    <div
                        key={index}
                        className="relative flex justify-between items-center border rounded-3xl p-2 mb-1 hover:bg-blue-100"
                    >
                        <div className="flex gap-4">
                            <h1>{index + 1}</h1>
                            <h1 className="text-base">{member}</h1>
                        </div>
                        <button
                            onClick={() => handleRemoveMember(index)}
                            className="absolute text-red-600 hover:bg-red-600 hover:text-white h-full right-0 pr-4 pl-4 rounded-r-3xl"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default AddGroupMembers;
