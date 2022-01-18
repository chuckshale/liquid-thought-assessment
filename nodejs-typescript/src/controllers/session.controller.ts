import { Request, Response } from "express";
import config from "config";
import { createAccessToken, createSession } from "../services/session.service";
import { validatePassword } from "../services/user.service";
import { sign } from "../utils/jwt.utils";

export async function createSessionHandler(req: Request, res: Response) {
    const user = await validatePassword(req.body);

    if (!user) return res.status(401).send("Invalid username or password");

    const session = await createSession(user._id, req.get("user-agent") || "");

    //@ts-ignore
    const accessToken = createAccessToken({ user, session });

    const refreshToken = sign(session, {
        expiresIn: config.get("refreshTokenTtl"),
    });

    res.send({
        accessToken,
        refreshToken,
        success: true,
    }).status(200);
}
