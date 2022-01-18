import { FilterQuery } from "mongoose";
import Post, { ProductDocument } from "../models/product.model";

export async function getAllProducts() {
    const posts = await Post.find();
    return posts;
}

export async function getAllUserPosts(query: FilterQuery<ProductDocument>) {
    const posts = await Post.find(query);

    return posts;
}
