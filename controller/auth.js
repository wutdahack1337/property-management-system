
import * as service from "../service/auth.js"

export async function createAccessToken(request, response, next) {
    try {
        const { username, password } = request.body;
        const accessToken = service.createAccessToken(username, password);

        if (!accessToken){
            response.status(401).json({ error: "invalid credentials"});
        } else {
            response.status(200).json({ accessToken: accessToken });
        }
    } catch (error) {
        next(error)
    }
}