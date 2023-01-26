import "express-async-errors";

import express, { json } from "express";

import carsRouter from "./routes/carsRouter.js";
import dotenv from "dotenv";
import handleErrorsMiddleware from "./middlewares/errorHandlerMiddleware.js";

dotenv.config();

const app = express();
app.use(json());
app.use(carsRouter);
app.use(handleErrorsMiddleware);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is up and running on port: ${port}`);
})
