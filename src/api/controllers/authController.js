import AuthService from '../../core/services/authService.js';

class AuthController {
    constructor() {
        this.authService = new AuthService();
    }

    async register(req, res) {
        try {
            const { username, password } = req.body;
            const user = await this.authService.register(username, password);
            res.status(201).json(user);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;
            const result = await this.authService.authenticate(username, password);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }

  
}

export default AuthController;
