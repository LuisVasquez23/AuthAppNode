import UserRepository from '../repositories/userRepository.js';

class GetUserById {
    
    constructor() {
        this.userRepository = new UserRepository();
    }

    async execute(id) {
        return await this.userRepository.findById(id);
    }
}

export default GetUserById;
