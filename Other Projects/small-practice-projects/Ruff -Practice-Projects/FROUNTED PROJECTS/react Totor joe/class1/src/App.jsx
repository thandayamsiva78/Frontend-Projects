// import { Fragment } from "react";
// import { LearnComponents } from "./components/LearnComponents";

// import { useState } from "react";
// function App() {

//   const [count , setCount] = useState(0);
//   return (
//     <>
//       <div>Hello React!</div>
//       <p>your clicked {count} times</p>
//       <button onClick={()=> setCount(count + 1)}>
//         click me
//       </button>
//     </>
//   );
// }

// export default App;

// function Form(){
//   const [name , setName] = useState('');
//   const [age , setAge] = useState('');

//   return (
//     <div>
//       <input type="text"
//       value={name}
//       onChange={e => setName(e.target.value)}
//       placeholder="Name."/>
//       <br />

//       <input type="text"
//       value={age}
//       onChange={e => setAge(e.target.value)}
//       placeholder="Age."/>

//       <p>Name : {name} , Age : {age}</p>
//     </div>

//   )
// }

// export default Form;

//----------------------------------------------------------

// import React, { useState, useEffect } from 'react';

// function FetchData() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => response.json())
//       .then((data) => setData(data));
//   }, []); // Empty array means this effect runs once after initial render

//   return (
//     <ol>
//       {data.map(item => (
//         <li key={item.id}>{item.title}</li>
//       ))}
//     </ol>
//   );
// }

// export default FetchData;

import React from "react";

const users = [
  { id: 1, name: "Siva" },
  { id: 2, name: "raju" },
  { id: 3, name: "kiran" },
];

function UserList() {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}> {user.name}</li>
      ))}
    </ul>
  );
}

export default UserList;
