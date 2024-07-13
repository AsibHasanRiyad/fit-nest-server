import cookieParser from "cookie-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import router from "./routes";
import globalErrorHandler from "./middlewares/globalErrorHandler";
import notFound from "./middlewares/notFound";

const app = express();

// parser
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

//application route
app.use("/api/v1", router);
app.get("/", (req: Request, res: Response) => {
  res.send("Fit Nest Server is running!!");
});

// global error handler
app.use(globalErrorHandler);

// not found route
app.use(notFound);

export default app;
