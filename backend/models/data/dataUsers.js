import "dotenv/config.js"
import "../../config/database.js"
import  user from "../User.js";

const users = [
  {
    name: "Juan Pérez",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {
    name: "María Gómez",
 
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Carlos Díaz",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Laura Fernández",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Pedro Martínez",
 
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ana Torres",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Javier López",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {
    name: "Carmen Ruiz",
  
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Andrés Ramírez",
    
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Lucía Herrera",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    name: "Miguel Castro",
   
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Sofía Morales",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Tomás Navarro",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Valentina Soto",

    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Gabriel Medina",
   
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

await user.insertMany(users);
console.log("Usuarios insertados con éxito.");
