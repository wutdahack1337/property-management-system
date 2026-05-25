import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export function generateToken(payload){
    return jwt.sign(payload, JWT_SECRET, {expiresIn: JWT_EXPIRES_IN});
}

export function decodeToken(token){
    return jwt.verify(token, JWT_SECRET); // signature validation -> expiration check -> decode
}

// ask for acessToken to do some protected stuff
export function requireAuth(request, response, next) {
    try {
        const authHeader = request.headers["authorization"];
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return response.status(401).json({ error: "Missing or malformed Authrization header" });
        }

        const accessToken = authHeader.slice(7); // strip "Bearer "
        request.user = decodeToken(accessToken);
        next()
    } catch (error) {
        return response.status(401).json({ error: "Invalid token" });
    }
}