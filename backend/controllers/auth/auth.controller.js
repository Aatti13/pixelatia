import bcrypt from 'bcrypt';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';

import 

class AuthController {
  constructor() {
    this.satRounds = 12;
    this.JWT_SECRET = process.env.JWT_SECRET;
    this.JWT_EXPIRY = process.env.JWT_EXPIRY;
  }

  async register() {

  }
}

export default AuthController;