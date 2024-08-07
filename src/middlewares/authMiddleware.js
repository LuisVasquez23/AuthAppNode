import jwt from 'jsonwebtoken';

const authMiddleware = (req, res, next) => {
    console.log("Validando token");

    // Obtener el encabezado Authorization
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    // Extraer el token del encabezado Authorization
    const token = authHeader.startsWith('Bearer ') ? authHeader.slice(7) : authHeader;
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    // Verificar el token
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid token.' });
        }
        // Agregar el usuario decodificado al objeto request
        req.user = user;
        next();
    });
};

export default authMiddleware;
