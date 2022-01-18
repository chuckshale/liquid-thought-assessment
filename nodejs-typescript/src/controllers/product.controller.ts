import { Request, Response } from "express";
import { get } from "lodash";
import log from "../logger";

import { getAllProducts, getAllUserPosts } from "../services/product.service";

export async function getAllProductsHandler(req: Request, res: Response) {
    const posts = await getAllProducts();

    return res.send(posts);
}
