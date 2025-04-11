
import "dotenv/config.js"
import "../../config/database.js"
import activity from "../activities.js";

const activities = [
    {
        name: "Tour en bicicleta",
        description: "Explora la ciudad en dos ruedas, descubriendo sus rincones más auténticos.",
        photo: "https://media.istockphoto.com/id/2159024988/photo/gravel-bike-racing-on-mixed-terrain-with-other-cyclists.jpg?s=1024x1024&w=is&k=20&c=0gf93Gfws_3jJBHxhi6RdwrQVMhfPFqI8HDEN0Y5QeI=" // bicicleta
    },
    {
        name: "Clase de cocina local",
        description: "Aprende a preparar platos típicos con chefs locales.",
        photo: "https://plus.unsplash.com/premium_photo-1723795228475-38dce3200c79?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // cocina
    },
    {
        name: "Visita a museos",
        description: "Recorre museos históricos y de arte con guías expertos.",
        photo: "https://images.unsplash.com/photo-1724697963528-053f4048c5b0?q=80&w=1483&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // museo
    },
    {
        name: "Senderismo en la naturaleza",
        description: "Disfruta caminatas en paisajes naturales espectaculares.",
        photo: "https://images.unsplash.com/photo-1626116641224-958635627c62?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // senderismo
    },
    {
        name: "Degustación de vinos",
        description: "Descubre viñedos locales y prueba vinos únicos de la región.",
        photo: "https://media.istockphoto.com/id/1297234084/photo/two-red-wineglasses-on-rustic-wooden-table.jpg?s=1024x1024&w=is&k=20&c=jp4rVESDT-0eE1xpknXXz_eAMjx7_8EDFpqgxtD-7zk=" 
    },
    {
        name: "Taller de cerámica",
        description: "Crea tus propias piezas de cerámica con técnicas tradicionales.",
        photo: "https://images.unsplash.com/photo-1607556671927-78a6605e290b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // cerámica
    },
    {
        name: "Tour nocturno",
        description: "Conoce la vida nocturna de la ciudad con un guía local.",
        photo: "https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // ciudad de noche
    },
    {
        name: "Paseo en barco",
        description: "Navega por ríos o costas disfrutando del paisaje y la brisa marina.",
        photo: "https://plus.unsplash.com/premium_photo-1664366737724-aaccbcb487ef?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // paseo en barco
    },
    {
        name: "Escalada urbana",
        description: "Desafía la altura en muros de escalada o estructuras urbanas.",
        photo: "https://images.unsplash.com/photo-1502126324834-38f8e02d7160?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // escalada
    },
    {
        name: "Tour gastronómico",
        description: "Prueba lo mejor de la comida callejera y restaurantes locales.",
        photo: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // comida
    }
];


await activity.insertMany(activities)