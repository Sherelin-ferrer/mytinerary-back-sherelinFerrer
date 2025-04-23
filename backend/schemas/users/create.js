import joi from "joi-oid"

const schema = joi.object({

    name: joi.string().strict().required().alphanum().message({
     
        "string.alphanum":"no se perimeten caracteres en el name ",
        "any.required": "El nombre es obligatorio"

    }),
    lastname: joi.string().required().alphanum().message({
     
        "string.alphanum":"no se perimeten caracteres en el apellido",
        "any.required": "El nombre es obligatorio"

    }),

    photo: joi.string().required(),

    email: joi.string().strict().required().email().messages({
     
        "string.empty": "El email es obligatorio",
        "string.email": "Formato de email inválido",
        "any.required": "El email es obligatorio"
      }),
    password: joi.string().required().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$')).messages({
      "string.empty": "La contraseña es obligatoria",
      "string.min": "La contraseña debe tener al menos 8 caracteres",
      "string.pattern.base": "La contraseña debe incluir mayúsculas, minúsculas y al menos un número",
      "any.required": "La contraseña es obligatoria"
    })
})
  export default schema 