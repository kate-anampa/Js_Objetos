
// Crear un objeto persona con propiedades básicas.
const person = {
    nombre: "Kate",
    edad: 30,
    profesion: "Ingeniera"
    
};

// Acceder y mostrar propiedades del objeto
console.log(`Nombre: ${person.nombre}`);
console.log(`Edad: ${person.edad}`);
console.log(`Profesión: ${person.profesion}`);


// Añadir un objeto anidado dentro de persona
person.direccion = {
    calle: "Av. La Marina",
    numero: 123,
    ciudad: "Lima"
};
console.log(`Dirección: ${person.direccion.calle}, ${person.direccion.numero}, ${person.direccion.ciudad}`);


 // Agregar una nueva propiedad
 person.correo = "kate@gmail.com";
 console.log(`Correo: ${person.correo}`);


 // Eliminar una propiedad
 delete person.profesion;
 console.log(person);

 //destructuración para acceder a propiedades
 const {nombre, edad, direccion: {ciudad}} = person;
 console.log(`Nombre: ${nombre}, Edad: ${edad}, Ciudad: ${ciudad}`);


 // Congelar el objeto para evitar cambios
 Object.freeze(person);
 person.nombre = "Ruth"; // prueba


// Sellar el objeto para permitir modificaciones pero no agregar ni eliminar propiedades

  const personSellada = {
    nombre: "Ruth",
    edad: 25,
    profesion: "Diseñadora"
};
Object.seal(personSellada);
personSellada.edad = 26; // si
delete personSellada.profesion; // no 
personSellada.telefono = "123456789"; // no 
console.log(personSellada);



// Unir dos objetos usando Object.assign y el operador spread
const person2 = {
    nombre: "Angel",
    hobbies: ["leer", "nadar"]
};
const personCombinada1 = Object.assign({}, person2, { ciudad: "Madrid" });
console.log(personCombinada1);

const personCombinada2 = { ...person2, pais: "Peru" };
console.log(personCombinada2);


// Usar this dentro de un método del objeto
const personMetodo = {
    nombre: "Ceudy",
    edad: 28,
    saludar: function() {
        return `Hola, soy ${this.nombre} tengo ${this.edad} años.`;
    }
};
console.log(personMetodo.saludar());


// Recorrer el objeto usando Object.keys, Object.values y Object.entries

function recorrerObjeto(personMetodo) {

const keys = Object.keys(personMetodo);
console.log(keys);


const values = Object.values(personMetodo);
console.log(values);


const entries = Object.entries(personMetodo);
console.log(entries);

}

recorrerObjeto(personMetodo);