// import React, { useEffect, useState } from "react";

// const pizzaToppings = [
//   {
//     id: 1,
//     topping: "Broccoli",  
//   },
//   {
//     id: 2,
//     topping: "Margherita", 
//   },
//   {
//     id: 3,
//     topping: "Jalapeno",  
//   },
//   {
//     id: 4,
//     topping: "Pepperoni", 
//   },
// ];


// export default function PizzaToppings() {
//   console.log("PizzaToppings is being created or Rendered");

//   const [toppings, setToppings] = useState(pizzaToppings);


//   function removeItem(item) {
//     setToppings(toppings.filter((i) => i !== item));
//   }

//   return (
//     <ul>
//       {toppings.map((item, index) => {
//         return (
//           <li key={item.id}>
//             <label htmlFor={`item-${item.id}`}>{item.topping}</label>
//             <input
//               type="text"
//               name={item.topping}
//               id={`item-${item.id}`}
//               defaultValue={item.topping}
//             />
//             <button onClick={() => removeItem(item)}>x</button>
//           </li>
//         );
//       })}
//     </ul>
//   );
// }




// ------------------------------------------------------------------







import React, { useEffect, useState } from "react";

const pizzaToppings = [
  {
    id: 1,
    topping: "Broccoli",  
  },
  {
    id: 2,
    topping: "Margherita", 
  },
  {
    id: 3,
    topping: "Jalapeno",  
  },
  {
    id: 4,
    topping: "Pepperoni", 
  },
];

function shuffle(originalArray) {
  const shuffledArray = [...originalArray];
  for (let index = 0; index < shuffledArray.length; index++) {
    const shuffledIndex = getRandomIndex(0, index + 1);
    [shuffledArray[index], shuffledArray[shuffledIndex]] = [shuffledArray[shuffledIndex], shuffledArray[index]];
  }
  return shuffledArray;
}

function getRandomIndex(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function PizzaToppings() {
  console.log("PizzaToppings is being created or rendered.");

  const [toppings, setToppings] = useState(pizzaToppings);

  useEffect(() => {
    const interval = setInterval(() => {
      setToppings(shuffle(toppings));
    }, 1000);

    // Cleanup function to clear interval when component unmounts
    return () => clearInterval(interval);
  }, [toppings]);  // Dependency array ensures effect re-runs when `toppings` changes

  return (
    <ul>
      {toppings.map((item) => (
        <li key={item.id}>
          <input type="text" name={item.topping} id={item.id} value={item.topping} readOnly />
        </li>
      ))}
    </ul>
  );
}
