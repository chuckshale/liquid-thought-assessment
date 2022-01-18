import { Request, Response } from "express";
import { omit } from "lodash";
import { createUser } from "../services/user.service";
import log from "../logger";

export async function createUserHandler(req: Request, res: Response) {
    try {
        const user = await createUser(req.body);
        const response = {
            user,
            success: true,
        };
        return res.send(response);
    } catch (e: any) {
        log.error(e);
        return res.status(409).send(e.message);
    }
}
