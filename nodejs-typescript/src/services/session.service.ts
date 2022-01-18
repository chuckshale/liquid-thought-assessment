import Session, { SessionDocument } from "../models/session.model";
import { UserDocument } from "../models/user.model";
import config from "config";
import { decode, sign } from "../utils/jwt.utils";
import { get } from "lodash";
import { findUser } from "./user.service";

export async function createSession(
    userId: UserDocument["_id"],
    userAgent: string
) {
    const session = await Session.create({ user: userId, userAgent });

    return session.toJSON();
}

//@ts-ignore

export function createAccessToken({ user, session }) {
    const accessToken = sign(
        { ...user, session: session._id },
        { expiresIn: config.get("accessTokenTtl") }
    );

    return accessToken;
}
