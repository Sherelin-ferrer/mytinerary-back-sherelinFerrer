import "dotenv/config.js"
import "../../config/database.js"
import user from "../User.js";

const users = [
  {
    name: "Juan",
    lastname: "Pérez",
    email: "juan.dragon@realidadinvertida.com",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/1.jpg"
  },
  {

    name: "María",
    lastname: "Gómez",
    email: "maria.laberinto@dimensionesperdidas.org",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/2.jpg"
  },
  {
    name: "Carlos",
    lastname: "Díaz",
    email: "carlos.sombra@ocasoeterno.net",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/3.jpg"
  },
  {
    name: "Laura",
    lastname: "Fernández",
    email: "laura.espiral@universosuperpuesto.io",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/4.jpg"
  },
  {
    name: "Pedro",
    lastname: "Martínez",
    email: "pedro.mirada@relojsinaguja.com",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/5.jpg"
  },
  {
    name: "Ana",
    lastname: "Torres",
    email: "ana.neblina@fragmentodeltiempo.net",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/6.jpg"
  },
  {
    name: "Javier",
    lastname: "López",
    email: "javier.luz@bosqueilusorio.org",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/7.jpg"
  },
  {

    name: "Carmen",
    lastname: "Ruiz",
    email: "carmen.palabra@maresinfinito.com",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/8.jpg"
  },
  {
    name: "Andrés",
    lastname: "Ramírez",
    email: "andres.cristal@ciudadflotante.org",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/9.jpg"
  },
  {
    name: "Lucía",
    lastname: "Herrera",
    email: "lucia.luna@ventanadeltiempo.io",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/10.jpg"
  },
  {
    name: "Miguel",
    lastname: "Castro",
    email: "miguel.humo@universoabstracto.com",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/11.jpg"
  },
  {
    name: "Sofía",
    lastname: "Morales",
    email: "sofia.onda@caminodeespejos.net",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/12.jpg"
  },
  {
    name: "Tomás",
    lastname: "Navarro",
    email: "tomas.silencio@dimensionesonora.org",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Valentina",
    lastname: "Soto",
    email: "valentina.sueño@realidadparalela.net",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Gabriel",
    lastname: "Medina",
    email: "gabriel.rayo@cielosincolor.io",
    password: "123456",
    photo: "https://randomuser.me/api/portraits/men/15.jpg"
  }
];

await user.insertMany(users);
console.log("Usuarios insertados con éxito.");
