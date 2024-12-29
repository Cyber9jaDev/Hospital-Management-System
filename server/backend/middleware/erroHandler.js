const logError = (err) => {
    console.error(err);
};

const errorHandler = async (err, req, res, next) => {
    try {
        const statusCode = res.statusCode || 500;

        const errorResponse = {
            error: true,
            message: err.message || "Internal Server Error",
            stack: process.env.NODE_ENV === "production" ? null : err.stack,
        };

        res.status(statusCode).json(errorResponse);

        // Log the error
        logError(err);
    } catch (error) {
        // If an error occurs while handling the error, fallback to a simple response
        console.error("Error while handling error:", error);
        res.status(500).json({
            error: true,
            message: "Internal Server Error",
            stack: null,
        });
    }
};

module.exports = {
    errorHandler
};