const error400 = (error, req, res, next) => {
    console.log("🔥 Middleware de error 400 activado:", error.message);
    if (error.name === "ValidationError") {
        return res.status(400).json({
            message: "Error de validación",
            errors: err.errors
        });
    }

    next(error); // Si no es un error 400, pasa al siguiente middleware
};

export default error400;
