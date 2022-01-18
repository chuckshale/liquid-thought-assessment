import { Express } from "express";
import { getAllProductsHandler } from "../../controllers/product.controller";
export default function (app: Express) {
    app.get("/api/products", getAllProductsHandler);
}
