import bcrypt from 'bcrypt';
import UserRepository from '../repositories/userRepository.js';
import User from '../models/user.js';

class RegisterUser {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(username, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User(null, username, hashedPassword);
        return await this.userRepository.create(user);
    }
}

export default RegisterUser;