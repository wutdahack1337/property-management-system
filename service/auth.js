import database from "../database.js";

import { generateToken } from "../middleware/auth.js"

export function createAccessToken(username, password) {
    const result = database.prepare("SELECT id, residentId, username, password FROM account WHERE username = ?").get(username);

    // @ts-ignore
    if (!result || result.password != password) {
        return null;
    }

    // @ts-ignore
    return generateToken({id: result.id, residentId: result.residentId, username: result.username});
}