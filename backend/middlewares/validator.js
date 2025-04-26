const validator = (schema) => [
    (req, res, next) => {
        console.log("entra al validador"); 

        const validation = schema.validate(req.body, { abortEarly: false });
      

        if (validation.error) {
            return res.status(400).json({
                success: false,
                message: validation.error.details.map(error => error.message),
            });
        }

        next();
    }
];

export default validator;
