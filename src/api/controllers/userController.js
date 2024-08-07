import AuthService from "../../core/services/authService.js";

class UserController {
    
    constructor() {
        this.authService = new AuthService();
    }

    async getUserById(req, res){
        try {
            const userId = req.params.id;
            console.log(userId);
            
            const result = await this.authService.getById(userId);
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            
            res.status(400).json({ error: error.message });
        }
    }

}

export default UserController;