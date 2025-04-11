import "dotenv/config.js"
import "../../config/database.js"
import  user from "../User.js";

const users = [
    {
      email: "usuario1@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      email: "usuario2@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      email: "usuario3@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      email: "usuario4@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
      email: "usuario5@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
      email: "usuario6@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/women/6.jpg"
    },
    {
      email: "usuario7@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/7.jpg"
    },
    {
      email: "usuario8@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/women/8.jpg"
    },
    {
      email: "usuario9@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/9.jpg"
    },
    {
      email: "usuario10@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/women/10.jpg"
    },
    {
      email: "usuario11@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/11.jpg"
    },
    {
      email: "usuario12@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/women/12.jpg"
    },
    {
      email: "usuario13@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/13.jpg"
    },
    {
      email: "usuario14@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/women/14.jpg"
    },
    {
      email: "usuario15@example.com",
      password: "123456",
      photo: "https://randomuser.me/api/portraits/men/15.jpg"
    }
  ];
  
  await user.insertMany(users);
console.log("Usuarios insertados con éxito.");