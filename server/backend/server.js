const express = require("express");
require("dotenv").config();
require("colors");
const port = process.env.PORT || 5000;
const { errorHandler } = require("./middleware/ErrorMiddleware");
const connectDB = require("./config/db");

// Init app
const app = express();

// Connect to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

// Routes

app.use('/api/v1/auth', require('./routes/AuthRoutes'))
app.use('/api/v1/employee', require('./routes/employee-module/employeeRoutes'))
app.use('/api/v1/patient', require('./routes/patient-module'))
app.use('/api/v1/item', require('./routes/ItemRoutes'))
app.use('/api/v1/supplier', require('./routes/SupplierRoutes'))

app.use("/api/v1", require("./routes/WardRoutes"));


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`.blue.underline);
});
