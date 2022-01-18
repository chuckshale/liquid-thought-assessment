import express from "express";
import config from "config";
import cors from "cors";
import log from "./logger";
import connect from "./db/connect";
import indexRoutes from "./routes";
import userRoutes from "./routes/user";
import productRoutes from "./routes/product";

const port = config.get("port") as number;
const host = config.get("host") as string;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.listen(port, host, () => {
    log.info(`Server listening at http://${host}:${port}`);

    connect();

    indexRoutes(app);
    userRoutes(app);
    productRoutes(app);
});
