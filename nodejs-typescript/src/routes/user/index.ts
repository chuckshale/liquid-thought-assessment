import { Express, Request, Response } from "express";
import { createSessionHandler } from "../../controllers/session.controller";
import { createUserHandler } from "../../controllers/user.controller";
import { validateRequest } from "../../middleware";
import {
    createSessionSchema,
    createUserSchema,
} from "../../schema/user.schema";

export default function (app: Express) {
    app.get("/api/users", (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.post(
        "/api/users",
        validateRequest(createUserSchema),
        createUserHandler
    );

    app.post(
        "/api/sessions",
        validateRequest(createSessionSchema),
        createSessionHandler
    );
}
