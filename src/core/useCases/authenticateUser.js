import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UserRepository from '../repositories/userRepository.js';

class AuthenticateUser {
    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(username, password) {
        const user = await this.userRepository.findByUsername(username);
        if (user && await bcrypt.compare(password, user.password)) {
            const token = jwt.sign({ id: user.id , username: username }, process.env.JWT_SECRET, { expiresIn: '1h' });
            return { user, token };
        }
        throw new Error('Invalid username or password');
    }
}

export default AuthenticateUser;
