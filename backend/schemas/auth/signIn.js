import joi from "joi-oid"

const schemaSingIn = joi.object({

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
export default schemaSingIn