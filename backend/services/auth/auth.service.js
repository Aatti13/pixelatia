import { v4 as uuid } from 'uuid';
import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { generateUsername } from 'unique-username-generator';

import User from '../../models/auth/user.model.js';

import { 
  ValidationError,
  NotFoundError,
  ConflictingResponse,
  ServiceUnavailable 
} from '../../config/error/error.js';

class AuthService {
  constructor() {
    this.emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    this.saltRounds = 12;
    this.JWT_SECRET = process.env.JWT_SECRET;
    this.JWT_EXPIRY = process.env.JWT_EXPIRY;
  }

  async registerService(userData) {
    try {
      const {
        email,
        password,
        bio,
        gender
      } = userData;

      this._validateUserData(userData);

      const existingUser = await User.findOne({email});

      if(existingUser) {
        throw new ConflictingResponse('Email already in use. User already exists');
      }
      
      const hashedPassword = await bcrypt.hash(password, this.saltRounds);

      const username = this._generateUsername();

      const newUser = new User({
        email,
        username,
        password: hashedPassword,
        bio,
        gender
      });

      await newUser.save();
      return newUser;
    }catch(error){
      throw new ServiceUnavailable('DB Unavailable');
    }
  }

  _validateUserData(userData) {
    const {
      email,
      password,
      bio,
      gender
    } = userData;

    if(!email || !password || !gender) {
      throw new ValidationError('All fields are mandatory');
    }

    if(password.length < 6) {
      throw new ValidationError('Password must be atleast 6 characters long')
    }

    if(!this.emailRegex.test(email)){
      throw new ValidationError('Invalid Email Format');
    }
    
    if(bio.length > 255) {
      throw new ValidationError('Your bio can have a maximum of 255 characters');
    }
  }

  _generateUsername() {
    const customUsername = generateUsername("", 4, 10);
    return customUsername;
  }

  _generateJWTToken(userId) {
    return jwt.sign(
      {userId},
      this.JWT_SECRET,
      {
        expiresIn: this.JWT_EXPIRY,
        issuer: 'pixelatia',
        audience: 'user'
      }
    )
  }
}

export default AuthService;