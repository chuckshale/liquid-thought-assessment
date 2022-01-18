import mongoose from "mongoose";
import { UserDocument } from "./user.model";
import autoIncrement from "mongoose-auto-increment";

export interface ProductDocument extends mongoose.Schema {
    user: UserDocument["_id"];
    isSale: boolean;
    id: number;
    unitPrice: number;
    sku: string;
    image: string;
    isAvailable: boolean;
    description: string;
    currency: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
}

const ProductSchema = new mongoose.Schema(
    {
        isSale: { type: Boolean, default: false },
        id: { type: Number, default: false },
        unitPrice: { type: Number, default: false },
        sku: { type: String, default: false },
        image: { type: String, default: false },
        isAvailable: { type: Boolean, default: false },
        description: { type: String, default: false },
        currency: { type: String, default: false },
        name: { type: String, default: false },
        user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    },
    { timestamps: true }
);

autoIncrement.initialize(mongoose.connection);
ProductSchema.plugin(autoIncrement.plugin, {
    model: "Product",
    field: "id",
    startAt: 1,
    incrementBy: 1,
});

const Post = mongoose.model<ProductDocument>("Product", ProductSchema);

export default Post;
