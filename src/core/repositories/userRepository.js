import db from '../../config/db.js';
import User from '../models/user.js';

class UserRepository {
    async create(user) {
        const { username, password } = user;
        const result = await db.run('INSERT INTO users (username, password) VALUES (?, ?)', [username, password]);
        return new User(result.lastID, username, password);
    }

    async findByUsername(username) {
        const row = await db.get('SELECT * FROM users WHERE username = ?', [username]);
        return row ? new User(row.id, row.username, row.password) : null;
    }

    async findById(id) {
        const row = await db.get('SELECT * FROM users WHERE id = ?', [id]);
        return row ? new User(row.id, row.username, row.password) : null;
    }
}

export default UserRepository;
