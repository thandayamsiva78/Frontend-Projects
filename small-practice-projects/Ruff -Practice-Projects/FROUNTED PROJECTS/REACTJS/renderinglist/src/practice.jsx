import React from "react";

const items = ['Apple', 'Banana', 'Cherry'];

export default function ItemList(){
    console.log("Hello React!!");
    return (
        <ul>
            {items.map((item , index)=>{
                return <li key={index}>{item}</li>
            })}
        </ul>
    );

}

