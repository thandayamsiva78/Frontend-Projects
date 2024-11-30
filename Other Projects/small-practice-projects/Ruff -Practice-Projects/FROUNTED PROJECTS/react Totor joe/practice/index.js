

// let persone1 = {
//     name : "Siva",
//     age : 21,
//     greeting : function( mention){
//         return `Hello iam ${this.name}  and my age is ${this.age} , ${mention}`
//     }
// }

// let persone2 = {
//     name : "Venkatesh",
//     age : 23
// }

// console.log(persone1.greeting.apply(persone1 , ["YES HE IS RIGHT"]));


function userLogged(){
    let isLogged = true;
    let logged = isLogged ? "Loggin Successfully" : "Please Login."
    return logged
}
console.log(userLogged())