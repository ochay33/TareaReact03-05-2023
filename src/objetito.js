const objetito = {
    age:2,
    gender: "male",
    nombre: "Pablo",
    novia: "Mirtha",
};

console.log(objetito.age);

// DESTRUCTURE

const {age, ...rest} = objetito;