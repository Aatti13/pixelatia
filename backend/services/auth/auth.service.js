import { v4 as uuid } from 'uuid';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

import User from '../../models/auth/user.model.js';

class AuthService {
  constructor() {
    this.saltRounds = 12;
    this.JWT_SECRET = process.env.JWT_SECRET;
    this.JWT_EXPIRY = process.env.JWT_EXPIRY;
  }

  async registerService(userData) {
    const {
      email,
      password,
      bio,
      gender
    } = userData;

    const hashedPassword = await bcrypt.hash(password, this.saltRounds);
    
  }
}