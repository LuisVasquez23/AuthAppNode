import RegisterUser from '../useCases/registerUser.js';
import AuthenticateUser from '../useCases/authenticateUser.js';
import GetUserById from '../useCases/getUserById.js';

class AuthService {
    constructor() {
        this.registerUser = new RegisterUser();
        this.authenticateUser = new AuthenticateUser();
        this.getUserById = new GetUserById();
    }

    async register(username, password) {
        return await this.registerUser.execute(username, password);
    }

    async authenticate(username, password) {
        return await this.authenticateUser.execute(username, password);
    }

    async getById(id) {
        return await this.getUserById.execute(id);
    }
}

export default AuthService;
